const moogoose = require('mongoose');
const Schema = moogoose.Schema;

moogoose.connect(
    'mongodb://127.0.0.1:27017/blog',
    { useNewUrlParser: true }
);

const userSchema = new Schema({
    avator: String,
    nickname: String
})

module.exports = {
    User: moogoose.model('user', userSchema)
}