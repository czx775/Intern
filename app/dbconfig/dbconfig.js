module.exports = {
    host: "localhost",
    user: "root",
    password: "",
    database: "intern",
    dialect: "mysql",
    pool:{
        max: 10,
        min: 0,
        acquire: 50000,
        idle: 10000
    }
};