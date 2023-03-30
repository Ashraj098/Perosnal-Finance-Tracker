const mongoose = require('mongoose');
const connection_url = 'mongodb+srv://Ashish:uGsoRM0t38lITwIa@cluster0.wetokbi.mongodb.net/?retryWrites=true&w=majority'

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(connection_url)
        console.log('Database Connected Successfully')
    } catch (error) {
        console.log('Database Connection Failed');
    }
}

module.exports = {db}