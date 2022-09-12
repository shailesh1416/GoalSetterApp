const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://shailesh007:NRvgySS1kre37JDL@cluster0.jinybe6.mongodb.net/mernapp?retryWrites=true&w=majority')

        console.log(`MongoDB Connected :${conn.connection.host}`.cyan.underline)
    } catch (error){
        console.log("Some problem: ",error);
        process.exit(1)
    }
}

module.exports = connectDB