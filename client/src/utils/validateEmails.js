const REGEX = /.+@.+\..+/i;

export default (emails) => {
  const invalidEmails = emails
  .split(',')
  .map(email => email.trim())
  .filter(email => email.length)
  .filter(email => REGEX.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};
