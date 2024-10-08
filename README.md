# infected-lib

[![npm version](https://badge.fury.io/js/infected-lib.svg)](https://badge.fury.io/js/infected-lib)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

**infected-lib** is a malicious demonstration library designed to simulate compromised npm packages. It is intended for security training and research purposes only. This package contains unsafe functionality that mimics real-world attack scenarios, providing insight into malicious activity and how it can affect systems. 

⚠️ **Use it with caution** and only in secure, controlled environments!

## Disclaimer

⚠️ **Warning: This package is intended for educational and research purposes only.** Do not use this package in production environments. The creator is not responsible for any misuse of this code.

## Installation

To install the package, run the following command:

```bash
npm install infected-lib
```
## Usage

Once installed, you can require the library in your Node.js application like so:

```javascript
const infected = require('infected-lib');

// Simulate malicious activity
infected.triggerCompromise();
```

## Detect the Activity
You can find Directory called creds and a file credentials.txt in the node_modules Directory

```javascript
// run this in root directory of your nodejs application
cat /node_modules/creds/credentials.txt
```

## Contributing
We welcome contributions to infected-lib! If you have suggestions for improvements or new features, please feel free to submit a pull request or open an issue.

## Author

**Mohammed Afzal**  
[GitHub Profile](https://github.com/Afzal-exe)
