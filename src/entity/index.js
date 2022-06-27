import {
    Sequelize
} from 'sequelize';
import dbConfig from '../config/dbConfig.js';
import Productcategory from './ProductCategory.js';

if (!dbConfig || !dbConfig.sql) {
    console.log("no database configuration availabhle and its not connected");
}

const databBaseConfiguration = dbConfig.sql;

var db = {
    sequelize: new Sequelize(
        databBaseConfiguration.database,
        databBaseConfiguration.username,
        databBaseConfiguration.password, {
            host: databBaseConfiguration.host,
            dialect: databBaseConfiguration.dialect,
        }
    )
}
db.ProductCategory = Productcategory(db.sequelize, Sequelize.DataTypes);
db.Query = db.sequelize;




export default db;