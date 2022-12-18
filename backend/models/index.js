import {Sequelize} from "sequelize";
import UserModel from "./UserModel.js";
 
const sequelize = new Sequelize('crud_db','postgres','1234567',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5433
});
 
const db = {}

db.Sequelize = Sequelize

db.sequelize = sequelize

db.user = UserModel(sequelize,Sequelize)

export default db;
