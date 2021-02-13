const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "09a47a4ad469c2",
    pass: "9dee36e9b9db09",
  },
});
