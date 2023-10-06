//VARIABLE DECLARATIONS
console.log("profile Js");
const dropdownIcon = $('#dropdownIcon');
const previewIcon = $('#previewIcon');
const saveProfileBtn = $('#save-profile-btn');


const userProfileData = {}


let options = [];
for (let i = 1; i < 21; i++) {
  options.push({
    text: `option ${i}`,
    value: i
  });
  
}

options.forEach( ({text, value}) => {
  const optionEl = $("<option>");
  optionEl.attr("value", value).text(text)
  dropdownIcon.append(optionEl);
});


//FUNCTIONS
function iconChange (event) {
  const userIconSelection = this.value
  userProfileData.user_icon = userIconSelection;
  previewIcon.attr("src", `/icons/UserIconChoices/${userIconSelection}.svg`).attr('alt', `option ${userIconSelection}`)

}

function submitChanges (event) {
  const name = $('#name');
  if (name.val()) {
    userProfileData.name = name.val();
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