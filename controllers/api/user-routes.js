const router = require("express").Router();
// const { User } = require("../../models");
const { Movie, Review, FavMovies, User, Profile } = require("../../models");

// LOGIN & SIGN UP PAGE

// PURPOSE: user tries to log in here, checks that their login is valid
// GET login page, changed to post
// http://localhost:3001/api/users/login
router.post("/login", async (req, res) => {
  try {
    const userEmail = await User.findOne({
      email: req.body.email,
    });

    if (!userEmail) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res.redirect("/profile"); //don't know if this should be {data}
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/users/create
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
    console.log("+++++++++++++++++++++++++");
    console.log(newUserData);
    console.log("+++++++++++++++++++++");

    const newProfile = await Profile.create({
      user_id: newUserData.id, // makes the profile user_id, the same as the user id that is autoincremented
      name: req.body.name, // profile name does not allow for a null, this takes the name that was input when creating an account and places it in profile name
    });

    // req.session.save(() => {
    req.session.loggedIn = true;
    req.session.user_id = newUserData.id;
    // when we want to display a profile, this should help us find the correct one by the user_id
    // id for who is logged in is stored in the session

    // res.status(200).json(newUserData);
    res.redirect("/profile");
    // ADD: message that pops up if password is less than 6 chars, if you enter less than 6 chars, it returns a white screen and does not direct or tell you what's wrong
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT (edit) user profile
// http://localhost:3001/api/users/profile/edit
router.put("/profile/edit", async (req, res) => {
  try {
    const userId = req.session.user_id;

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
    console.log("=================================");
    console.log(req.body);
    console.log("=================================");
    res.redirect("/profile");
  } catch (err) {
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

router.post("/:id", async (req, res) => {
  try {
    const userId = req.session.user_id;
    console.log(userId);
    const userFavorite = await FavMovies.create({
      movie_id: req.params.id,
      profile_id: userId,
      // movie_id: 5,
      // profile_id: 1,
    });

    res.redirect("/profile");
    res.render('userProfile', {userFavorite});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





module.exports = router;
