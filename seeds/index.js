const sequelize = require('../config/connection');
const seedMovies = require('./movieData');


const seedAll = async () => {
  await sequelize.sync({ force: true });


  await seedMovies();

  process.exit(0);
};

seedAll();
