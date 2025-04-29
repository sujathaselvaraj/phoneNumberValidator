// Require `PhoneNumberFormat`.
const PNF = require("google-libphonenumber").PhoneNumberFormat;

// Get an instance of `PhoneNumberUtil`.
const phoneUtil =
  require("google-libphonenumber").PhoneNumberUtil.getInstance();

const region = [
  { countryCode: "AF", countryName: "Afghanistan" },
  { countryCode: "AL", countryName: "Albania" },
  { countryCode: "DZ", countryName: "Algeria" },
  { countryCode: "AD", countryName: "Andorra" },
  { countryCode: "AO", countryName: "Angola" },
  { countryCode: "AI", countryName: "Anguilla" },
  { countryCode: "AG", countryName: "Antigua & Barbuda" },
  { countryCode: "AR", countryName: "Argentina" },
  { countryCode: "AM", countryName: "Armenia" },
  { countryCode: "AW", countryName: "Aruba" },
  { countryCode: "AU", countryName: "Australia" },
  { countryCode: "AT", countryName: "Austria" },
  { countryCode: "AZ", countryName: "Azerbaijan" },
  { countryCode: "BS", countryName: "Bahamas" },
  { countryCode: "BH", countryName: "Bahrain" },
  { countryCode: "BD", countryName: "Bangladesh" },
  { countryCode: "BB", countryName: "Barbados" },
  { countryCode: "BY", countryName: "Belarus" },
  { countryCode: "BE", countryName: "Belgium" },
  { countryCode: "BZ", countryName: "Belize" },
  { countryCode: "BJ", countryName: "Benin" },
  { countryCode: "BM", countryName: "Bermuda" },
  { countryCode: "BT", countryName: "Bhutan" },
  { countryCode: "BO", countryName: "Bolivia" },
  { countryCode: "BA", countryName: "Bosnia And Herzegovina" },
  { countryCode: "BW", countryName: "Botswana" },
  { countryCode: "BR", countryName: "Brazil" },
  { countryCode: "VG", countryName: "British Virgin Islands" },
  { countryCode: "BN", countryName: "Brunei Darussalam" },
  { countryCode: "BG", countryName: "Bulgaria" },
  { countryCode: "BF", countryName: "Burkina Faso" },
  { countryCode: "BI", countryName: "Burundi" },
  { countryCode: "KH", countryName: "Cambodia" },
  { countryCode: "CM", countryName: "Cameroon" },
  { countryCode: "CA", countryName: "Canada" },
  { countryCode: "CV", countryName: "Cape Verde" },
  { countryCode: "KY", countryName: "Cayman Islands" },
  { countryCode: "CF", countryName: "Central African Republic" },
  { countryCode: "TD", countryName: "Chad" },
  { countryCode: "CL", countryName: "Chile" },
  { countryCode: "CN", countryName: "China" },
  { countryCode: "CO", countryName: "Colombia" },
  { countryCode: "KM", countryName: "Comoros" },
  { countryCode: "CG", countryName: "Congo" },
  { countryCode: "CR", countryName: "Costa Rica" },
  { countryCode: "HR", countryName: "Croatia" },
  { countryCode: "CU", countryName: "Cuba" },
  { countryCode: "CW", countryName: "Curacao" },
  { countryCode: "CY", countryName: "Cyprus" },
  { countryCode: "CZ", countryName: "Czechia" },
  { countryCode: "CD", countryName: "Democratic Republic Of Congo" },
  { countryCode: "DK", countryName: "Denmark" },
  { countryCode: "DJ", countryName: "Djibouti" },
  { countryCode: "DM", countryName: "Dominica" },
  { countryCode: "DO", countryName: "Dominican Republic" },
  { countryCode: "EC", countryName: "Ecuador" },
  { countryCode: "EG", countryName: "Egypt" },
  { countryCode: "SV", countryName: "El Salvador" },
  { countryCode: "GQ", countryName: "Equatorial Guinea" },
  { countryCode: "ER", countryName: "Eritrea" },
  { countryCode: "EE", countryName: "Estonia" },
  { countryCode: "SZ", countryName: "Eswatini" },
  { countryCode: "ET", countryName: "Ethiopia" },
  { countryCode: "FJ", countryName: "Fiji" },
  { countryCode: "FI", countryName: "Finland" },
  { countryCode: "FR", countryName: "France" },
  { countryCode: "GF", countryName: "French Guiana" },
  { countryCode: "PF", countryName: "French Polynesia" },
  { countryCode: "GA", countryName: "Gabon" },
  { countryCode: "GM", countryName: "Gambia" },
  { countryCode: "GE", countryName: "Georgia" },
  { countryCode: "DE", countryName: "Germany" },
  { countryCode: "GH", countryName: "Ghana" },
  { countryCode: "GI", countryName: "Gibraltar" },
  { countryCode: "GR", countryName: "Greece" },
  { countryCode: "GL", countryName: "Greenland" },
  { countryCode: "GD", countryName: "Grenada" },
  { countryCode: "GU", countryName: "Guam" },
  { countryCode: "GT", countryName: "Guatemala" },
  { countryCode: "GG", countryName: "Guernsey" },
  { countryCode: "GN", countryName: "Guinea" },
  { countryCode: "GW", countryName: "Guinea-Bissau" },
  { countryCode: "GY", countryName: "Guyana" },
  { countryCode: "HT", countryName: "Haiti" },
  { countryCode: "HN", countryName: "Honduras" },
  { countryCode: "HU", countryName: "Hungary" },
  { countryCode: "IS", countryName: "Iceland" },
  { countryCode: "IN", countryName: "India" },
  { countryCode: "ID", countryName: "Indonesia" },
  { countryCode: "IR", countryName: "Iran" },
  { countryCode: "IQ", countryName: "Iraq" },
  { countryCode: "IE", countryName: "Ireland" },
  { countryCode: "IM", countryName: "Isle Of Man" },
  { countryCode: "IL", countryName: "Israel" },
  { countryCode: "IT", countryName: "Italy" },
  { countryCode: "CI", countryName: "Ivory Coast" },
  { countryCode: "JM", countryName: "Jamaica" },
  { countryCode: "JP", countryName: "Japan" },
  { countryCode: "JE", countryName: "Jersey" },
  { countryCode: "JO", countryName: "Jordan" },
  { countryCode: "KZ", countryName: "Kazakhstan" },
  { countryCode: "KE", countryName: "Kenya" },
  { countryCode: "KI", countryName: "Kiribati" },
  { countryCode: "XK", countryName: "Kosovo" },
  { countryCode: "KW", countryName: "Kuwait" },
  { countryCode: "KG", countryName: "Kyrgyzstan" },
  { countryCode: "LA", countryName: "Laos" },
  { countryCode: "LV", countryName: "Latvia" },
  { countryCode: "LB", countryName: "Lebanon" },
  { countryCode: "LS", countryName: "Lesotho" },
  { countryCode: "LR", countryName: "Liberia" },
  { countryCode: "LY", countryName: "Libya" },
  { countryCode: "LI", countryName: "Liechtenstein" },
  { countryCode: "LT", countryName: "Lithuania" },
  { countryCode: "LU", countryName: "Luxembourg" },
  { countryCode: "MG", countryName: "Madagascar" },
  { countryCode: "MW", countryName: "Malawi" },
  { countryCode: "MY", countryName: "Malaysia" },
  { countryCode: "MV", countryName: "Maldives" },
  { countryCode: "ML", countryName: "Mali" },
  { countryCode: "MT", countryName: "Malta" },
  { countryCode: "MH", countryName: "Marshall Islands" },
  { countryCode: "MR", countryName: "Mauritania" },
  { countryCode: "MU", countryName: "Mauritius" },
  { countryCode: "MX", countryName: "Mexico" },
  { countryCode: "FM", countryName: "Micronesia" },
  { countryCode: "MD", countryName: "Moldova" },
  { countryCode: "MC", countryName: "Monaco" },
  { countryCode: "MN", countryName: "Mongolia" },
  { countryCode: "ME", countryName: "Montenegro" },
  { countryCode: "MA", countryName: "Morocco" },
  { countryCode: "MZ", countryName: "Mozambique" },
  { countryCode: "MM", countryName: "Myanmar" },
  { countryCode: "NA", countryName: "Namibia" },
  { countryCode: "NR", countryName: "Nauru" },
  { countryCode: "NP", countryName: "Nepal" },
  { countryCode: "NL", countryName: "Netherlands" },
  { countryCode: "AN", countryName: "Netherlands Antilles" },
  { countryCode: "NC", countryName: "New Caledonia" },
  { countryCode: "NZ", countryName: "New Zealand" },
  { countryCode: "NI", countryName: "Nicaragua" },
  { countryCode: "NE", countryName: "Niger" },
  { countryCode: "NG", countryName: "Nigeria" },
  { countryCode: "MK", countryName: "North Macedonia" },
  { countryCode: "NO", countryName: "Norway" },
  { countryCode: "OM", countryName: "Oman" },
  { countryCode: "PK", countryName: "Pakistan" },
  { countryCode: "PW", countryName: "Palau" },
  { countryCode: "PS", countryName: "Palestine" },
  { countryCode: "PA", countryName: "Panama" },
  { countryCode: "PG", countryName: "Papua New Guinea" },
  { countryCode: "PY", countryName: "Paraguay" },
  { countryCode: "PE", countryName: "Peru" },
  { countryCode: "PH", countryName: "Philippines" },
  { countryCode: "PL", countryName: "Poland" },
  { countryCode: "PT", countryName: "Portugal" },
  { countryCode: "PR", countryName: "Puerto Rico" },
  { countryCode: "QA", countryName: "Qatar" },
  { countryCode: "RO", countryName: "Romania" },
  { countryCode: "RU", countryName: "Russia" },
  { countryCode: "RW", countryName: "Rwanda" },
  { countryCode: "KN", countryName: "Saint Kitts & Nevis" },
  { countryCode: "LC", countryName: "Saint Lucia" },
  { countryCode: "MF", countryName: "Saint Martin" },
  { countryCode: "WS", countryName: "Samoa" },
  { countryCode: "SM", countryName: "San Marino" },
  { countryCode: "ST", countryName: "Sao Tome And Principe" },
  { countryCode: "SA", countryName: "Saudi Arabia" },
  { countryCode: "SN", countryName: "Senegal" },
  { countryCode: "RS", countryName: "Serbia" },
  { countryCode: "SC", countryName: "Seychelles" },
  { countryCode: "SL", countryName: "Sierra Leone" },
  { countryCode: "SG", countryName: "Singapore" },
  { countryCode: "SX", countryName: "Sint Maarten" },
  { countryCode: "SK", countryName: "Slovakia" },
  { countryCode: "SI", countryName: "Slovenia" },
  { countryCode: "SB", countryName: "Solomon Islands" },
  { countryCode: "SO", countryName: "Somalia" },
  { countryCode: "ZA", countryName: "South Africa" },
  { countryCode: "KR", countryName: "South Korea" },
  { countryCode: "SS", countryName: "South Sudan" },
  { countryCode: "ES", countryName: "Spain" },
  { countryCode: "LK", countryName: "Sri Lanka" },
  { countryCode: "VC", countryName: "St. Vincent & the Grenadines" },
  { countryCode: "SD", countryName: "Sudan" },
  { countryCode: "SR", countryName: "Suriname" },
  { countryCode: "SE", countryName: "Sweden" },
  { countryCode: "CH", countryName: "Switzerland" },
  { countryCode: "SY", countryName: "Syria" },
  { countryCode: "TJ", countryName: "Tajikistan" },
  { countryCode: "TZ", countryName: "Tanzania" },
  { countryCode: "TH", countryName: "Thailand" },
  { countryCode: "TL", countryName: "Timor-Leste" },
  { countryCode: "TG", countryName: "Togo" },
  { countryCode: "TO", countryName: "Tonga" },
  { countryCode: "TT", countryName: "Trinidad & Tobago" },
  { countryCode: "TN", countryName: "Tunisia" },
  { countryCode: "TR", countryName: "Türkiye" },
  { countryCode: "TM", countryName: "Turkmenistan" },
  { countryCode: "TC", countryName: "Turks & Caicos" },
  { countryCode: "TV", countryName: "Tuvalu" },
  { countryCode: "UG", countryName: "Uganda" },
  { countryCode: "UA", countryName: "Ukraine" },
  { countryCode: "AE", countryName: "United Arab Emirates" },
  { countryCode: "GB", countryName: "United Kingdom" },
  { countryCode: "US", countryName: "United States" },
  { countryCode: "UY", countryName: "Uruguay" },
  { countryCode: "UZ", countryName: "Uzbekistan" },
  { countryCode: "VU", countryName: "Vanuatu" },
  { countryCode: "VE", countryName: "Venezuela" },
  { countryCode: "VN", countryName: "Vietnam" },
  { countryCode: "YE", countryName: "Yemen" },
  { countryCode: "ZM", countryName: "Zambia" },
  { countryCode: "ZW", countryName: "Zimbabwe" },
];
const phoneNumberType = {
  0: "FIXED LINE",
  1: "MOBILE",
  2: "FIXED LINE OR MOBILE",
  3: "TOLL FREE",
  4: "PREMIUM RATE",
  5: "SHARED COST",
  6: "VOIP",
  7: "PERSONAL NUMBER",
  8: "PAGER",
  9: "UAN",
  10: "VOICEMAIL",
  11: "UNKNOWN",
};

function isValidPhonenumber(num, code) {
  const number = phoneUtil.parse(num, code);
  if (phoneUtil.isValidNumber(number)) {
    console.log(`${num} is Valid phone number`);
    return true;
  } else {
    console.log(`${num} is InValid phone number`);
    return false;
  }
}

function phonenumbervalidator(num, code) {
  try {
    const number = phoneUtil.parse(String(num), code); // Safe string conversion

    if (
      phoneUtil.isValidNumber(number) &&
      phoneUtil.isValidNumberForRegion(number, code)
    ) {
      return `
  ${num} is a VALID ${
        phoneNumberType[phoneUtil.getNumberType(number)]
      } phone number for region - ${code}
  
  Phone Number Info:
  -------------------
  Country Code          : ${number.getCountryCode()}
  Raw Input             : ${num}
  Region Code           : ${code}
  
  Various Formats:
  ----------------
  E164 Format           : ${phoneUtil.format(number, PNF.E164)}
  Original Format       : ${phoneUtil.formatInOriginalFormat(number, code)}
  National Format       : ${phoneUtil.format(number, PNF.NATIONAL)}
  International Format  : ${phoneUtil.format(number, PNF.INTERNATIONAL)}
        `.trim();
    } else {
      return `${num} is an INVALID phone number.`;
    }
  } catch (error) {
    return `Error validating phone number: ${error.message}`;
  }
}

const countryCodeToName = Object.fromEntries(
  region.map((item) => [item.countryCode, item.countryName])
);

function findCountryName(code) {
  return countryCodeToName[code] || null;
}

function possibilityOfPhoneNumber(num, needNumberDetailInfo = false) {
  const possiblePhoneNumberSet = [];

  for (const { countryCode } of region) {
    try {
      const number = phoneUtil.parse(num + "", countryCode);
      if (phoneUtil.isValidNumberForRegion(number, countryCode)) {
        if (needNumberDetailInfo) {
          possiblePhoneNumberSet.push(phonenumbervalidator(num, countryCode));
        } else {
          possiblePhoneNumberSet.push({
            Country: findCountryName(countryCode),
            "Number Type": phoneNumberType[phoneUtil.getNumberType(number)],
            "International Format": phoneUtil.format(number, PNF.INTERNATIONAL),
          });
        }
      }
    } catch (error) {
      // return { error: "Invalid phone number provided." };
    }
  }

  return possiblePhoneNumberSet;
}

module.exports = {
  isValidPhonenumber,
  phonenumbervalidator,
  possibilityOfPhoneNumber,
  findCountryName
};
