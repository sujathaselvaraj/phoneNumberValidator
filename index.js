  // Require `PhoneNumberFormat`.
  const PNF = require('google-libphonenumber').PhoneNumberFormat;
    
  // Get an instance of `PhoneNumberUtil`.
  const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
  
  function isValidPhonenumber(num,code){
    const number = phoneUtil.parse(num, code);
    if(phoneUtil.isValidNumber(number)){
      console.log(`${num} is Valid phone number`);
      return true;
    }else{
       console.log(`${num} is InValid phone number`);
       return false;
    }
  }
  
  function phonenumbervalidator(num,code) {
  
    phoneNumberType={
      0:"FIXED LINE",
      1:"MOBILE",
      2:"FIXED LINE OR MOBILE",
      3:"TOLL FREE",
      4:"PREMIUM RATE",
      5:"SHARED COST",
      6:"VOIP",
      7:"PERSONAL NUMBER",
      8:"PAGER",
      9:"UAN",
      10:"VOICEMAIL",
      11:"UNKNOWN"
    }
    const number = phoneUtil.parse(num, code);
    console.log("Welcome to Phone Number Validator \n");
    if(phoneUtil.isValidNumber(number) && phoneUtil.isValidNumberForRegion(number, code)){
      return (`${num} is Valid phone ${phoneNumberType[phoneUtil.getNumberType(number)]} number for region - ${code}\n
      Phone Number Info \n
      Country Code         : ${number.getCountryCode()} \n
      Raw Input            : ${num} \n
      Region Code          : ${code} \n
      Various Format  \n
      E164 Format          : ${phoneUtil.format(number, PNF.E164)} \n
      Original Format      : ${phoneUtil.formatInOriginalFormat(number, code)} \n
      National Format      : ${phoneUtil.format(number, PNF.NATIONAL)} \n
      International Format : ${phoneUtil.format(number, PNF.INTERNATIONAL)}
      `)
    }else{
        return (`${num} is InValid phone number`)
    }

  }
  
  module.exports = {
    isValidPhonenumber,
    phonenumbervalidator
  };