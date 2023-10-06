//VARIABLE DECLARATIONS
console.log("profile Js");
const dropdownIcon = $('#dropdownIcon');
const previewIcon = $('#previewIcon');
const saveProfileBtn = $('#save-profile-btn');


const userProfileData = {}

//Iterating through the array of svg's that users can choose as their profile image.
let options = [];
for (let i = 1; i < 21; i++) {
  options.push({
    text: `option ${i}`,
    value: i
  });
  
}
//selecting the value of SVG 
options.forEach( ({text, value}) => {
  const optionEl = $("<option>");
  optionEl.attr("value", value).text(text)
  dropdownIcon.append(optionEl);
});


//FUNCTIONS

//Changing preview icon to selected user SVG
function iconChange (event) {
  const userIconSelection = this.value
  userProfileData.user_icon = userIconSelection;
  previewIcon.attr("src", `/icons/UserIconChoices/${userIconSelection}.svg`).attr('alt', `option ${userIconSelection}`)

}

$( function() {
  $( "#sortable" ).sortable();
} );


function submitChanges (event) {
  const name = $('#name');
  const location = $('#location');
  const answer1 = $('#answer_1');
  const answer2 = $('#answer_2');
  const answer3 = $('#answer_3');
  const spookyScale = $('#spooky_scale');
  if (name.val()) {
    userProfileData.name = name.val();
  } 
  if (location.val()) {
    userProfileData.location = location.val();
  }
  if (spookyScale.val()) {
    userProfileData.spooky_scale = spookyScale.val();
  }
  if (answer1.val()) {
    userProfileData.answer1 = answer1.val();
  }
  if (answer2.val()) {
    userProfileData.answer2 = answer2.val();
  }
  if (answer3.val()) {
    userProfileData.answer3 = answer3.val();
  }
  console.log(userProfileData);
  //GET THE REST OF THE VALUES TO SHOW UP IN REQ.BODY


$.ajax({
  url: '/api/users/profile/edit',
  method: "PUT", contentType: 'application/json',
  data: JSON.stringify(userProfileData),
})
.then(()=> {
  console.log({message: "Your profile has been updated!"})
})
}
//EVENT LISTENERS
dropdownIcon.on("change", iconChange );
saveProfileBtn.on("click", submitChanges);