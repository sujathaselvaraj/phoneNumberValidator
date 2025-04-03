function phonenumbervalidator(num) {
    // Require `PhoneNumberFormat`.
    const PNF = require('google-libphonenumber').PhoneNumberFormat;
    
    // Get an instance of `PhoneNumberUtil`.
    const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
    
    const number = phoneUtil.parse(num, 'IN');
    // console.log("Welcome to Phone Number Validator");
    if(phoneUtil.isValidNumber(number)){
      return (`${num} is Valid phone number`)
    }else{
        return (`${num} is InValid phone number`)
    }

  }
  
  module.exports = phonenumbervalidator