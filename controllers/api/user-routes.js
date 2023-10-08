const router = require("express").Router();
const { User } = require("../../models");

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
      res.redirect("/"); //don't know if this should be {data}
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET create account page
// http://localhost:3001/api/users/create
router.post("/create", async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      // req.session.userid = newuserdata.id
      // id for who is logged in is stored in the session

      // when we want to display a profile, this will help us find the correct one by using the userid

      res.redirect("/");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST create account
// http://localhost:3001/api/users/create
// router.post("/create", async (req, res) => {
//   try {
//     const createAccount = "This action will let a user create a new account";
//     res.status(200).json(createAccount);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// PROFILE PAGE

// GET user profile
// http://localhost:3001/api/users/profile
// router.get("/profile", async (req, res) => {
//   try {
//     const data = "This page should return user profile!";
//     //we need to serilaize this "data" to have it return the profile information saved in the profile database that is connected to the particular user logging in
//     res.render("userProfile", { data });
//   } catch (err) {
//     res.status(500).json(err);
//   }
//   // ADD AUTHENTICATION:
//   // This page should only be viewable if the user is logged in
// });



// PUT (edit) user profile
// http://localhost:3001/api/users/profile/edit
router.put("/profile/edit", async (req, res) => {
  try {
    console.log("=================================")
    console.log(req.body)
    console.log("=================================")
    const data = "This action should allow the user to edit their profile!";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});





module.exports = router;
