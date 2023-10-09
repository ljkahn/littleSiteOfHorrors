const express = require("express");
const path = require("path");
const controllers = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const animejs = require('animejs');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SESSION_SECRET,
  // need to require in ENV
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
});
