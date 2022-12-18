// import {Sequelize} from "sequelize";

// const {DataTypes} = Sequelize;
 
// const User = db.define('users',{
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     gender: DataTypes.STRING
// },{
//     freezeTableName:true
// });
 
// export default User;
 
// (async()=>{
//     await db.sync();
// })();

const UserModel = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
    })
    return User
  }
  
  export default UserModel