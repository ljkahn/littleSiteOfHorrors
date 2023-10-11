const router = require("express").Router();
const withAuth = require("../../utils/auth");
const emailJs = require("emailjs-com");
const axios = require("axios");

const { Movie, Review, FavMovies, User, Profile } = require("../../models");

// LOGIN & SIGN UP PAGE

// PURPOSE: user tries to log in here, checks that their login is valid
// GET login page, changed to post
// http://localhost:3001/api/users/login
router.post("/login", async (req, res) => {
  try {
    const userEmail = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userEmail) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await userEmail.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userEmail.id;
      res.redirect("/profile"); //don't know if this should be {data}
      //The redirect only works when cache is disabled on browsers. 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/users/create
//Create new user and send them to profile page
router.post("/create", async (req, res) => {
  try {
    console.log("==============");
    console.log(req.body);
    console.log("==============");

    const newUserData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    if (req.body.password.length < 6) {
      // Password is less than six characters
      return res
        .status(400)
        .json({ error: "Password must be at least six characters long." });
    }
    // console.log(newUserData);

    // send email to users email after creation account (needs to be to actual users)
    const emailData = newUserData.get({
      plain: true,
    });

    const userInfo = {
      name: emailData.name,
    };
    console.log(userInfo.name);
    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: "service_lshncog",
        template_id: "template_it71bwo",
        user_id: "QOrRg2TDOjIGS0-hD",
        template_params: {
          name: userInfo.name,
        },
      })
      .then((response) => {
        console.log("email sent!!!", response);
      })
      .catch((err) => {
        console.log("email failed to send", err);
      });
    
    await Profile.create({
      user_id: newUserData.id, // makes the profile user_id, the same as the user id that is autoincremented
      name: req.body.name, // profile name does not allow for a null, this takes the name that was input when creating an account and places it in profile name
    });

    // const userProfile = newProfile.get({plain: true});
    // console.log(userProfile);
    // const userProfile = newProfile.get({plain: true});
    // console.log(userProfile);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = newUserData.id;
      res.redirect("/profile");
    });
    // when we want to display a profile, this should help us find the correct one by the user_id
    // id for who is logged in is stored in the session

    // res.status(200).json(newUserData);
    // ADD: message that pops up if password is less than 6 chars, if you enter less than 6 chars, it returns a white screen and does not direct or tell you what's wrong
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/users/logout
router.get("/logout", (req, res) => {
  // Add the function arrow here
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    console.log("Logging out");
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.status(404).end();
  }
});

// PUT (edit) user profile
// http://localhost:3001/api/users/profile/edit
router.put("/profile/edit", withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;
    console.log("=================================");
    console.log(req.body);
    console.log("=================================");

    const updatedProfile = await Profile.update(
      {
        name: req.body.name,
        location: req.body.location,
        answer_1: req.body.answer1,
        answer_2: req.body.answer2,
        answer_3: req.body.answer3,
        spooky_scale: req.body.spooky_scale,
        user_icon: req.body.user_icon,
      },
      { where: { user_id: userId } }
    );
    res.status(200).json({ message: "Your profile has been updated!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

//htp://localhost:3001/api/movies/:id
// THIS IS FOR FAVORITING A MOVIE 
router.get("/:id", withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;

    const currentProfile = await Profile.findOne({
      where: {
        user_id: userId,
      },
    });
    //Serialize the data - need to do so for Handlebars
    const newProfile = currentProfile.get({ plain: true });
    console.log(newProfile);

    const userFavorite = await FavMovies.create({
      movie_id: req.params.id,
      profile_id: currentProfile.id,
    });
    
    // res.status(200).json({message: "Movie has been added to favorites"})
    res.redirect("/profile");
    // res.render("userProfile", { userFavorite });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/delete/:id', withAuth, async (req,res) => {
  try {
    const userId = req.session.user_id;
    const currentProfile = await Profile.findOne({where: {user_id: userId}})
    const currentFavMovie = await FavMovies.destroy({
      where: {
        movie_id: req.params.id,
        profile_id: currentProfile.id,
      },
    });
    if (!currentFavMovie) {
    res.status(404).json({ message: 'No movie found with this id!' });
    return;
    }
    res.redirect('/profile/edit')
    // res.status(200).json(currentFavMovie)
  }
  catch (err) {
    res.status(500).json(err);
  } 
});


module.exports = router;
