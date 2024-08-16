# Reusable Javascript Utility Functions
This Repository is made for the use of reusable functions in javascript which we can use to simplify our work for making  web app.

# Table of Contents
- [Reusable Javascript Utility Functions](#reusable-javascript-utility-functions)
- [Table of Contents](#table-of-contents)
  - [1. Array Utility](#1-array-utility)
    - [1.1 Array Shuffler](#11-array-shuffler)
    - [1.2 Chunk Array](#12-chunk-array)
    - [1.3 Flatten Nested Array](#13-flatten-nested-array)
    - [1.4 Unique Array Elements](#14-unique-array-elements)
  - [2. Date And Time Utility](#2-date-and-time-utility)
    - [2.1 Add And Subtract Days](#21-add-and-subtract-days)
    - [2.2 Format Time](#22-format-time)
    - [2.3 Time Ago](#23-time-ago)
  - [3. DOM Utility](#3-dom-utility)
    - [3.1 Create Element](#31-create-element)
    - [3.2 Scroll To ELement](#32-scroll-to-element)
    - [3.3 Toggle Class](#33-toggle-class)
  - [4. Event Utility](#4-event-utility)
    - [4.1 Delegate Event](#41-delegate-event)
  - [5. File Utility](#5-file-utility)
      - [5.1 Download File](#51-download-file)
  - [6. Formatting Utility](#6-formatting-utility)
    - [6.1 Currency Formatter](#61-currency-formatter)
    - [6.2 Date Formatter](#62-date-formatter)
    - [6.3 Email Formatter](#63-email-formatter)
    - [6.4 Time Formatter](#64-time-formatter)
  - [7. Handling Promises Utility](#7-handling-promises-utility)
    - [7.1 Retry Promises](#71-retry-promises)
  - [8. Local Storage Utility](#8-local-storage-utility)
    - [8.1 Set Item](#81-set-item)
    - [8.2 Get Item](#82-get-item)
    - [8.3 Remove Item](#83-remove-item)
  - [9. Number Utility](#9-number-utility)
    - [9.1 Clamp a Number](#91-clamp-a-number)
    - [9.2 Random Number Generator](#92-random-number-generator)
    - [9.3 Round To Decimal Places](#93-round-to-decimal-places)
  - [10. Object Utility](#10-object-utility)
    - [10.1 Deep Freeze](#101-deep-freeze)
    - [10.2 Get Nested Object Value](#102-get-nested-object-value)
    - [10.3 Merge Object](#103-merge-object)
    - [10.4 Object To Query String](#104-object-to-query-string)
  - [11. Security Utility](#11-security-utility)
    - [11.1 Escape HTML](#111-escape-html)
  - [12. String Utility](#12-string-utility)
    - [12.1 Character Count](#121-character-count)
    - [12.2 Slugify](#122-slugify)
    - [12.3 String Reversal](#123-string-reversal)
    - [12.4 String Trim](#124-string-trim)
  - [13. URL Utility](#13-url-utility)
  - [13.1 Parse URL](#131-parse-url)
    - [13.2 Update Query String Parameter](#132-update-query-string-parameter)
  - [14.Validation Utility](#14validation-utility)
    - [14.1 Aadhaar Validation](#141-aadhaar-validation)
    - [14.2 Address Validation](#142-address-validation)
    - [14.3 Bank Account Number Validation](#143-bank-account-number-validation)
    - [14.4 Credit Card Validation](#144-credit-card-validation)
    - [14.5 Debit Card Validation](#145-debit-card-validation)
    - [14.6 Driving License Validation](#146-driving-license-validation)
    - [14.7 Email Validation](#147-email-validation)
    - [14.8 IFSC Code Validation](#148-ifsc-code-validation)
    - [14.9 Mobile Number Validation](#149-mobile-number-validation)
    - [14.10 Passport Number Validation](#1410-passport-number-validation)
    - [14.11 URL Validation](#1411-url-validation)

  

## 1. Array Utility
In this we will see all the array utility functions in javascript.
### 1.1 Array Shuffler
Randomly shuffles the elements of an array.

```js
//Randomly shuffles the elements of an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log(shuffleArray([1, 2, 3, 4, 5])); // [3, 2, 5, 1, 4]
```
### 1.2 Chunk Array
Splits an array into chunks of a specified size.

```js
//Splits an array into chunks of a specified size
function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}


console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
```

### 1.3 Flatten Nested Array
Flattens a nested array into a single array.
```js
//Flattens a nested array into a single array
function flattenArray(arr) {
    return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]
```

### 1.4 Unique Array Elements
Returns only the unique elements from an array.
```js
//Returns only the unique elements from an array
function uniqueArray(arr) {
    return [...new Set(arr)];
}


console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5] 
```

## 2. Date And Time Utility
In this we will see all the Date & Time utility functions in javascript.

### 2.1 Add And Subtract Days
Adds or subtracts a number of days from a date.
```js
//Adds or subtracts a number of days from a date
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
console.log(addDays(new Date(), 7)); // 7 days from now
```


### 2.2 Format Time

Formats a time in milliseconds to `hh:mm:ss`.
```js
//Formats a time in milliseconds to `hh:mm:ss`
function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${hours}:${minutes}:${seconds}`;
}

console.log(formatTime(1000)); // 0:0:1
```

### 2.3 Time Ago
Displays how long ago a date was (e.g., "5 minutes ago").
```js
//Displays how long ago a date was (e.g., "5 minutes ago")
function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return `${interval} year${interval > 1 ? 's' : ''} ago`;

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return `${interval} month${interval > 1 ? 's' : ''} ago`;

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval} day${interval > 1 ? 's' : ''} ago`;

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return `${interval} hour${interval > 1 ? 's' : ''} ago`;

    interval = Math.floor(seconds / 60);
    if (interval >= 1) return `${interval} minute${interval > 1 ? 's' : ''} ago`;

    return `${seconds} seconds ago`;
}
console.log(timeAgo(new Date(Date.now() - 1000))); // 1 second ago
```
## 3. DOM Utility
In this we will see all the DOM utility functions in javascript.

### 3.1 Create Element
Creates a new DOM element with optional attributes.
```js
//Creates a new DOM element with optional attributes
function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
}
console.log(createElement('a', { href: 'https://w3docs.com' })); // <a href="https://w3docs.com"></a>
```
### 3.2 Scroll To ELement
Smoothly scrolls to a specific element in the DOM.
```js
//Smoothly scrolls to a specific element in the DOM
function scrollToElement(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}
console.log(scrollToElement('#section-2')); // Scrolls to an element with the ID of 'section-2'
```
### 3.3 Toggle Class
Toggles a class on a DOM element.
```js
//Toggles a class on a DOM element
function toggleClass(element, className) {
    element.classList.toggle(className);
}
console.log(toggleClass(document.getElementById('my-element'), 'active'));
```
## 4. Event Utility
In this we will see all the Event utility functions in javascript.

### 4.1 Delegate Event
Delegates an event to a parent element, useful for dynamic content.
```js
//Delegates an event to a parent element, useful for dynamic content
function delegateEvent(parent, eventType, selector, handler) {
    parent.addEventListener(eventType, event => {
        if (event.target.matches(selector)) {
            handler(event);
        }
    });
}
console.log(delegateEvent(document.body, 'click', 'button', event => console.log('Button clicked!')));
// logs the clicked <a> element in the console
```
## 5. File Utility
In this we will see all the File utility functions in javascript.

#### 5.1 Download File
Triggers a download of a file in the browser.
```js
//Triggers a download of a file in the browser
function downloadFile(data, filename, type) {
    const file = new Blob([data], { type });
    const a = document.createElement('a');
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}
console.log(downloadFile('Hello, world!', 'hello.txt', 'text/plain')); // Downloads a file with the content 'Hello, world!' as 'hello.txt'
```
## 6. Formatting Utility

In this we will see all the Formatting utility functions in javascript.

### 6.1 Currency Formatter
formates a currency.
```js
function formatCurrency(number, locale = 'en-US', currency = 'USD') {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    });
    return formatter.format(number);
}
console.log(formatCurrency(1000,'en-US','INR')); //₹1,000.00
```
### 6.2 Date Formatter 
formates a date.
```js
function formatDate(date, locale = 'en-US', options = {}) {
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
}
console.log(formatDate(new Date())); // 8/16/2024
```
### 6.3 Email Formatter
formates a email.
```js
function formatEmail(email) {
    if (!email.includes('@')) {
        throw new Error('Invalid email format');
    }
    const normalizedEmail = email.toLowerCase();
    const formattedEmail = normalizedEmail.trim();
    return formattedEmail;
}
console.log(formatEmail('amit@example.com')); // amit@example.com
```
### 6.4 Time Formatter
formates a time.
```js
function formatTime(date, locale = 'en-US', options = {}) {
    const timeOptions = {
        ...options,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, timeOptions);
    return formatter.format(date);
}
console.log(formatTime(new Date())); // 12:00:00 AM
```
## 7. Handling Promises Utility
In this we will see all the Handling Promises utility functions in javascript.

### 7.1 Retry Promises
Retries a promise-based function a specified number of times.
```js
//Retries a promise-based function a specified number of times
function retryPromise(fn, retries) {
    return fn().catch(err => {
        if (retries > 0) {
            return retryPromise(fn, retries - 1);
        } else {
            throw err;
        }
    });
}
console.log(retryPromise(() => Promise.reject("Error"), 3)); // Error
```
## 8. Local Storage Utility

In this we will see all the Local Storage utility functions in javascript.


### 8.1 Set Item
Sets an item in local storage with JSON stringification.
```js
//Sets an item in local storage with JSON stringification
function setLocalStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

console.log(setLocalStorageItem('user', { name: 'John', age: 30 })); // undefined
```

### 8.2 Get Item
Gets an item from local storage and parses it as JSON.
```js
//Gets an item from local storage and parses it as JSON
function getLocalStorageItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}
console.log(getLocalStorageItem('user')); // { name: 'John', age: 30 }
```
### 8.3 Remove Item
Removes an item from local storage.
```js
//Removes an item from local storage
function removeLocalStorageItem(key) {
    localStorage.removeItem(key);
}
console.log(removeLocalStorageItem('user')); // undefined
```
## 9. Number Utility
In this Utility we will work with numbers.

### 9.1 Clamp a Number
Clamps a number between a minimum and maximum value.
```js
//Clamps a number between a minimum and maximum value
function clampNumber(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
console.log(clampNumber(3, 0, 4)); // 3
```

### 9.2 Random Number Generator
Generates a random number between two values.
```js
//Generates a random number between two values
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 10)); // 4
```

### 9.3 Round To Decimal Places
Rounds a number to a specified number of decimal places.
```js
//Rounds a number to a specified number of decimal places
function roundToDecimal(num, places) {
    const factor = Math.pow(10, places);
    return Math.round(num * factor) / factor;
}
console.log(roundToDecimal(1.23456, 2)); // 1.23
```

## 10. Object Utility
In this Utility we will work with objects.


### 10.1 Deep Freeze
Recursively freezes an object to make it immutable.
```js
//Recursively freezes an object to make it immutable
function deepFreeze(obj) {
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            deepFreeze(obj[prop]);
        }
    });
    return Object.freeze(obj);
}

console.log(deepFreeze({ a: 1, b: { c: 2 } })); // { a: 1, b: { c: 2 } }
```

### 10.2 Get Nested Object Value
Safely retrieves a nested value from an object.
```js
//Safely retrieves a nested value from an object
function getNestedValue(obj, keyPath) {
    return keyPath.reduce((acc, key) => acc && acc[key], obj);
}
console.log(getNestedValue({ a: { b: { c: 1 } } }, ['a', 'b', 'c'])); // 1
```
### 10.3 Merge Object
Merges two or more objects together.
```js
//Merges two or more objects together
function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
}
console.log(mergeObjects({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }

```
### 10.4 Object To Query String
Converts an object to a query string.
```js
//Converts an object to a query string
function objectToQueryString(obj) {
    return Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');
}
console.log(objectToQueryString({ a: 1, b: 2 })); // "a=1&b=2"
```
## 11. Security Utility
In this Utility we will work with security.

### 11.1 Escape HTML
Escapes HTML to prevent XSS attacks.
```js
// /Escapes HTML to prevent XSS attacks
function escapeHTML(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
}
console.log(escapeHTML("<a href='#'>Hello World</a>")); // "&lt;a href='#'&gt;Hello World&lt;/a&gt;"
```

## 12. String Utility
 In this Utility we will work with string.

### 12.1 Character Count
Counts the number of occurrences of a specific character in a string.
```js
//Counts the number of occurrences of a specific character in a string
function countCharacter(str, char) {
    return str.split(char).length - 1;
}

console.log(countCharacter("Hello World", "l")); // 3
```

### 12.2 Slugify
Converts a string into a URL-friendly "slug".
```js
// Converts a string into a URL-friendly "slug"
function slugify(str) {
    return str.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

console.log(slugify("  Hello World  ")); // "hello-world"
```
### 12.3 String Reversal
Reverses a given string.
```js
// Reverses a given string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello World")); // "dlroW olleH"

```
### 12.4 String Trim
Trims whitespace from the start and end of a string.
```js
// Trims whitespace from the start and end of a string
function trimString(str) {
    return str.trim();
}
console.log(trimString("     Hello World     ")); // "Hello World"

```
## 13. URL Utility
 In this Utility we will work with url.

## 13.1 Parse URL
Parses a URL into its components.
```js
//Parses a URL into its components
function parseURL(url) {
    const a = document.createElement('a');
    a.href = url;
    return {
        protocol: a.protocol,
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname,
        search: a.search,
        hash: a.hash,
        host: a.host
    };
}

console.log(parseURL('https://w3docs.com/path/name?search=test#hash')); // {protocol: "https:", hostname: "w3docs.com", port: "", pathname: "/path/name", search: "?search=test", hash: "#hash", host: "w3docs.com"}
```
### 13.2 Update Query String Parameter
Updates a query string parameter in the URL without reloading the page.
```js
//Updates a query string parameter in the URL without reloading the page
function updateQueryStringParameter(key, value) {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
}
console.log(updateQueryStringParameter('page', 2)); // Updates '?page=2' in the URL
```
## 14.Validation Utility
 In this Utility we will work with Validator.

### 14.1 Aadhaar Validation
Regular expression for validating an Aadhaar number.
```js
 // Regular expression for validating an Aadhaar number
function validateAadhaarCard(aadhaarNumber) {
    const aadhaarRegex = /^\d{12}$/;

    return aadhaarRegex.test(aadhaarNumber);
}
console.log(validateAadhaarCard('123456789012')); // true
```

### 14.2 Address Validation
Regular expression for validating a global address.
```js
// Regular expression for validating a global address
function validateGlobalAddress(address) {
    const globalAddressRegex = /^[a-zA-Z0-9\s,.-/()#'&]+$/;
    return globalAddressRegex.test(address);
}
console.log(validateGlobalAddress('123, Main Street')); // true
```
### 14.3 Bank Account Number Validation
Regular expression for validating an Indian bank account number.
```js
// Regular expression for validating an Indian bank account number
function validateBankAccountNumber(accountNumber) {
    const accountNumberRegex = /^\d{9,18}$/;
    return accountNumberRegex.test(accountNumber);
}

console.log(validateBankAccountNumber('1234567890123456')); // true
```

### 14.4 Credit Card Validation
Algorithm for Credit Card Validation.
```js
function luhnAlgorithm(cardNumber) {
    let sum = 0;
    let shouldDouble = false;

    // Loop through the card number digits starting from the right
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    // If the total modulo 10 is 0, the card number is valid
    return sum % 10 === 0;
}
function validateCreditCardNumber(creditCardNumber) {
    creditCardNumber = creditCardNumber.replace(/\D/g, '');
    if (creditCardNumber.length < 13 || creditCardNumber.length > 19) {
        return false;
    }
    return luhnAlgorithm(creditCardNumber);
}

console.log(validateCreditCardNumber('123456789011')); // false
```

### 14.5 Debit Card Validation
Algorithm for Debit Card Validation.
```js
function luhnAlgorithm(cardNumber) {
    let sum = 0;
    let shouldDouble = false;

    // Loop through the card number digits starting from the right
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    // If the total modulo 10 is 0, the card number is valid
    return sum % 10 === 0;
}

function validateDebitCardNumber(debitCardNumber) {
    debitCardNumber = debitCardNumber.replace(/\D/g, '');
    if (debitCardNumber.length !== 16) {
        return false;
    }
    return luhnAlgorithm(debitCardNumber);
}

console.log(validateDebitCardNumber('1234567890123456')); // true
```

### 14.6 Driving License Validation
Regular expression for validating an Indian driving license.
```js
// Regular expression for validating an Indian driving license
function validateDrivingLicense(licenseNumber) {
    const licenseRegex = /^[A-Z]{2}[0-9]{2}[0-9]{4}[0-9]{7}$/;
    return licenseRegex.test(licenseNumber);
}
console.log(validateDrivingLicense('KA1234567890123')); // true
```

### 14.7 Email Validation
Regular expression for validating an email.
```js
 // Regular expression for validating an email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
console.log(validateEmail('me@example.com')); // true
```
### 14.8 IFSC Code Validation
Regular expression for validating IFSC code.
```js
// Regular expression for validating IFSC code
function validateIFSC(ifsc) {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return ifscRegex.test(ifsc);
}
console.log(validateIFSC('SBIN0001234')); // true

```

### 14.9 Mobile Number Validation
Regular expression for validating an Indian mobile number.
```js
 // Regular expression for validating an Indian mobile number
function validateMobileNumber(mobileNumber) {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobileNumber);
}
console.log(validateMobileNumber('1234567890')); // false
```
### 14.10 Passport Number Validation
Regular expression for validating an Indian passport number.
```js
// Regular expression for validating an Indian passport number
function validatePassportNumber(passportNumber) {
    const passportRegex = /^[A-Z][0-9]{7}$/;
    return passportRegex.test(passportNumber);
}
console.log(validatePassportNumber('A1234567')); // true
```

### 14.11 URL Validation
Regular expression for validating a URL.
```js
// Regular expression for validating a URL
function validateURL(url) {
    const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
    return urlRegex.test(url);
}
console.log(validateURL('https://www.google.com')); // true
```