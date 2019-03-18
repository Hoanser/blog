const express = require("express");
const db = require('./db');

const router = express.Router();

// router.all("*", function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
//     );
//     res.header(
//         "Access-Control-Allow-Methods",
//         "PUT, POST, GET, DELETE, OPTIONS"
//     );
//     next();
// });
function resHandle(res, err, result, message) {
    // 请求code  0-请求成功  1-没有数据  2-接口报错
    let status = err ? 2 : result ? 0 : 1

    return res
    .status(status === 2 ? 500 : 200)
    .jsonp({
        code: status,
        data: status === 0 ? result : {},
        message: status === 2 ? err.message : message[status]
    })
    .end()
}

router.get('/user', (req, res) => {
    db.User.find((err, result) => {
        resHandle(res, err, result, ['success', 'no data'])
    })
})

module.exports = router