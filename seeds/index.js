const sequelize = require('../config/connection');
const seedMovies = require('./movieData');


const seedAll = async () => {
  await sequelize.sync({ force: false });


  await seedMovies();

  process.exit(0);
};

seedAll();
