const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "mariiacherkashina@meta.ua",
    pass: META_PASSWORD,
  },
});

const sendMail = async (data) => {
  const email = { ...data, from: "mariiacherkashina@meta.ua" };
  const info = await transport.sendMail(email);

  return info;
};

module.exports = sendMail;
