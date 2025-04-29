# Phone Number Validator 📞

A simple and powerful phone number validation library that uses the `google-libphonenumber` library to check if a phone number is valid for a specific region. It also provides formatted output for different international and regional formats.

---

## Features 🚀

- **Validate Phone Number**: Check if a phone number is valid for a given region.
- **Format Phone Number**: Get different formats for the phone number (E164, National, International).
- **Support for Multiple Regions**: Validates phone numbers for all supported regions using the country code.
- **Detailed Phone Number Information**: Get information like the type of phone number (mobile, fixed line, etc.) and region.

---

## Installation 🔧

To install the library, run the following npm command:

```bash
npm install phonenum-info

## Usage 📚

1. Validate a Phone Number ✅
To validate a phone number for a specific country/region code, use the isValidPhonenumber function.

```javascript
const { isValidPhonenumber } = require('phonenum-info');

const phoneNumber = '7XXXXX0519'; // Example phone number
const regionCode = 'IQ'; // Region code (e.g., IQ for Iraq)

if (isValidPhonenumber(phoneNumber, regionCode)) {
  console.log("Phone number is valid.");
} else {
  console.log("Phone number is invalid.");
}


2. Get Phone Number Information ℹ️
To retrieve detailed information about the phone number, including its type, country code, and formatted outputs, use the phonenumbervalidator function.

```javascript
const { phonenumbervalidator } = require('phonenum-info');

const phoneNumber = '7XXXXX0519'; // Example phone number
const regionCode = 'IQ'; // Region code (e.g., IQ for Iraq)

const result = phonenumbervalidator(phoneNumber, regionCode);
console.log(result);

This will output something like:


7XXXXX0519 is a VALID MOBILE phone number for region - IQ

Phone Number Info:
-------------------
Country Code          : 964
Raw Input             : 7XXXXX0519
Region Code           : IQ

Various Formats:
----------------
E164 Format           : +9647XXXXX0519
Original Format       : 7XXXXX0519
National Format       : 07XXXXX0519
International Format  : +964 7XX XXX 0519

3. Find Possible Matches for a Phone Number 🔍
To find possible phone number matches across multiple regions, use the possibilityOfPhoneNumber function.

```javascript
const { possibilityOfPhoneNumber } = require('phonenum-info');

const phoneNumber = '7XXXXX0519'; // Example phone number
const result = possibilityOfPhoneNumber(phoneNumber, true); // `true` for detailed info

console.log(result);

This will return an array of possible matches across different regions.


[
  '7XXXXX0519 is a VALID FIXED LINE phone number for region - DE\n' +
    '  \n' +
    '  Phone Number Info:\n' +
    '  -------------------\n' +
    '  Country Code          : 49\n' +
    '  Raw Input             : 7XXXXX0519\n' +
    '  Region Code           : DE\n' +
    '  \n' +
    '  Various Formats:\n' +
    '  ----------------\n' +
    '  E164 Format           : +497XXXXX0519\n' +
    '  Original Format       : 07XXX XX0519\n' +
    '  National Format       : 07XXX XX0519\n' +
    '  International Format  : +49 7XXX XX0519',
  '7XXXXX0519 is a VALID MOBILE phone number for region - IN\n' +
    '  \n' +
    '  Phone Number Info:\n' +
    '  -------------------\n' +
    '  Country Code          : 91\n' +
    '  Raw Input             : 7XXXXX0519\n' +
    '  Region Code           : IN\n' +
    '  \n' +
    '  Various Formats:\n' +
    '  ----------------\n' +
    '  E164 Format           : +917XXXXX0519\n' +
    '  Original Format       : 07XXXX X0519\n' +
    '  National Format       : 07XXXX X0519\n' +
    '  International Format  : +91 7XXXX X0519',
  '7XXXXX0519 is a VALID FIXED LINE phone number for region - IR\n' +
    '  \n' +
    '  Phone Number Info:\n' +
    '  -------------------\n' +
    '  Country Code          : 98\n' +
    '  Raw Input             : 7XXXXX0519\n' +
    '  Region Code           : IR\n' +
    '  \n' +
    '  Various Formats:\n' +
    '  ----------------\n' +
    '  E164 Format           : +987XXXXX0519\n' +
    '  Original Format       : 07X XXX 0519\n' +
    '  National Format       : 07X XXX 0519\n' +
    '  International Format  : +98 7X XXX 0519',
  '7XXXXX0519 is a VALID MOBILE phone number for region - IQ\n' +
    '  \n' +
    '  Phone Number Info:\n' +
    '  -------------------\n' +
    '  Country Code          : 964\n' +
    '  Raw Input             : 7XXXXX0519\n' +
    '  Region Code           : IQ\n' +
    '  \n' +
    '  Various Formats:\n' +
    '  ----------------\n' +
    '  E164 Format           : +9647XXXXX0519\n' +
    '  Original Format       : 07XX XXX 0519\n' +
    '  National Format       : 07XX XXX 0519\n' +
    '  International Format  : +964 7XX XXX 0519',
  '7XXXXX0519 is a VALID FIXED LINE phone number for region - LU\n' +
    '  \n' +
    '  Phone Number Info:\n' +
    '  -------------------\n' +
    '  Country Code          : 352\n' +
    '  Raw Input             : 7XXXXX0519\n' +
    '  Region Code           : LU\n' +
    '  \n' +
    '  Various Formats:\n' +
    '  ----------------\n' +
    '  E164 Format           : +3527XXXXX0519\n' +
    '  Original Format       : 7X XX XX 0519\n' +
    '  National Format       : 7X XX XX 0519\n' +
    '  International Format  : +352 7X XX XX 0519',
  '7XXXXX0519 is a VALID MOBILE phone number for region - GB\n' +
    '  \n' +
    '  Phone Number Info:\n' +
    '  -------------------\n' +
    '  Country Code          : 44\n' +
    '  Raw Input             : 7XXXXX0519\n' +
    '  Region Code           : GB\n' +
    '  \n' +
    '  Various Formats:\n' +
    '  ----------------\n' +
    '  E164 Format           : +447XXXXX0519\n' +
    '  Original Format       : 07XXX XX0519\n' +
    '  National Format       : 07XXX XX0519\n' +
    '  International Format  : +44 7XXX XX0519',
  '7XXXXX0519 is a VALID FIXED LINE OR MOBILE phone number for region - US\n' +
    '  \n' +
    '  Phone Number Info:\n' +
    '  -------------------\n' +
    '  Country Code          : 1\n' +
    '  Raw Input             : 7XXXXX0519\n' +
    '  Region Code           : US\n' +
    '  \n' +
    '  Various Formats:\n' +
    '  ----------------\n' +
    '  E164 Format           : +17XXXXX0519\n' +
    '  Original Format       : (7XX) XXX-0519\n' +
    '  National Format       : (7XX) XXX-0519\n' +
    '  International Format  : +1 7XX-XXX-0519'
]

Alternatively, you can use false for more concise results:

const { possibilityOfPhoneNumber } = require('phonenum-info');

const phoneNumber = '7XXXXX0519'; // Example phone number
const result = possibilityOfPhoneNumber(phoneNumber, false); // `false` for concise info

console.log(result);

This will return a simplified array:

[
  {
    "Country": "Germany",
    "Number Type": "FIXED LINE",
    "International Format": "+49 7XXX XX0519"
  },
  {
    "Country": "India",
    "Number Type": "MOBILE",
    "International Format": "+91 7XXXX X0519"
  },
  {
    "Country": "Iran",
    "Number Type": "FIXED LINE",
    "International Format": "+98 7X XXXX 0519"
  },
  {
    "Country": "Iraq",
    "Number Type": "MOBILE",
    "International Format": "+964 7XX XXX 0519"
  },
  {
    "Country": "Luxembourg",
    "Number Type": "FIXED LINE",
    "International Format": "+352 7X XX XX 0519"
  },
  {
    "Country": "United Kingdom",
    "Number Type": "MOBILE",
    "International Format": "+44 7XXX XX0519"
  },
  {
    "Country": "United States",
    "Number Type": "FIXED LINE OR MOBILE",
    "International Format": "+1 7XX-XXX-0519"
  }
]

4. Find Country Name from Region Code 🌍
You can also get the country name based on the region code.

```javascript
const { findCountryName } = require('phonenum-info');

const regionCode = 'IQ'; // Region code (e.g., IQ for Iraq)
const countryName = findCountryName(regionCode);
console.log(countryName); // Outputs: "Iraq"

# Available Functions 📜
isValidPhonenumber(num, code)
 Parameters:

  1. num (string): The phone number to validate.

  2. code (string): The region code (ISO 3166-1 alpha-2).

Returns: true if the phone number is valid for the given region, otherwise false.

phonenumbervalidator(num, code)
 Parameters:

   1. num (string): The phone number to validate.

   2. code (string): The region code (ISO 3166-1 alpha-2).

Returns: A formatted string containing phone number information, or a message saying it is invalid.

possibilityOfPhoneNumber(num, needNumberDetailInfo)
 Parameters:

    1. num (string): The phone number to check.

    2. needNumberDetailInfo (boolean): Whether to include detailed information for each match (optional, default: false).

Returns: An array of objects or strings with the possible phone number matches across multiple regions.

findCountryName(code)
 Parameters:

    1. code (string): The region code (ISO 3166-1 alpha-2).

Returns: The name of the country for the given region code, or null if not found.


# License 📜
This library is open-source and released under the MIT License.
