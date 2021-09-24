const sgMail = require("@sendgrid/mail");

const sendMessageVerify = async (data) => {
  const { SENDGRID_API_KEY } = process.env;

  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    ...data,
    from: "morenec_bogdan@ukr.net",
  };

  await sgMail.send(msg);
};

module.exports = sendMessageVerify;
