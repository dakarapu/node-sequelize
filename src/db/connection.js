import Sequelize from "sequelize";
//import Member from "./Models/Member";

// setting up connection with pool
const sequelize = new Sequelize("doshii", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// tesing the connection

sequelize
  .authenticate()
  .then(() => {
    console.log("Successful sequelize connection to database...");
    //new Member();
  })
  .catch(err => {
    console.log("Error in sequelize connection: ", err);
  });

let Member = sequelize.define("member", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false, // default to true if not set
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => {
    return Member.create({
      id: 400,
      name: "Ravikanth"
    });
  })
  .then(res => {
    console.log(res.toJSON());
  })
  .catch(e => {
    console.log(e);
  });

// to close connections
//sequelize.close();

export default sequelize;
