/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
  const emailsSet = new Set();
  for (const email of emails) {
      const i = email.indexOf('@');
      let local = email.slice(0, i).split("+")[0];
      local = local.replaceAll(".", "")
      emailsSet.add(local + email.slice(i));
  }
  return emailsSet.size;
};