const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');
sgMail.setApiKey(keys.sendGridKey);

const formatAddresses = (recipients) => {
  return recipients.map(({ email}) => {
    return email;
  });
};

module.exports = async ({ subject, recipients }, html) => {
  const msg = {
    to: formatAddresses(recipients),
    from: 'no-reply@feedback-app.com',
    tracking_settings: {
      click_tracking: {
        enable: true
      }
    },
    subject,
    html
  };

  const response = await sgMail.sendMultiple(msg);
  return response;
};
