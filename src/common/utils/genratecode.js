const crypto = require("crypto");

// Generate a random verification code
exports.generateVerificationCode = () => {
    return  crypto.randomBytes(3).toString("hex"); // 6 characters hex code
};