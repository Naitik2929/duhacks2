const mongoose = require('mongoose')

const db = async () => {
    try {
        const con = await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected with database...')
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports = db