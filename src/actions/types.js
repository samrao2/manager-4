//we need this file so that we can assign the string to a variable and then
//call the variable instead, so if there is an arror
//the linter can tell us that a variable is called but not defined
//otherwise we will not get an error if there is a mismatch and we will
//not know what the heck is wrong
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
