const mongoose = require('mongoose');

module.exports.connect = async () => 
{

    try {
        await mongoose.connect(process.env.MONGGOURL)
        console.log("Connect success")
    } catch (error) {
        console.log("Connect fail")
    }

}
// 'mongodb://127.0.0.1:27017/TaskManager'