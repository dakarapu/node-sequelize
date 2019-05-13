import Sequelize from "sequelize";
import sequelize from "../connection";

// define a model from sequilize model constructor
// const Model = Sequelize.Model;

// class Member extends Model {}

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

// Member.init(
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       allowNull: false, // default to true if not set
//       primaryKey: true
//     },
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false
//     }
//   },
//   {
//     sequelize
//   }
// );

//export default Member;
