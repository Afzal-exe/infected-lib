const fs = require('fs');
const path = require('path');

// Create directory and file to store credentials
const credsDir = path.join(__dirname, '../creds');  // Directory path
const credsFile = path.join(credsDir, 'credentials.txt'); // File path

// Function to create directory and file with credentials
function createCredsFile(logger) {
    // Check if the directory exists, if not, create it
    if (!fs.existsSync(credsDir)) {
        fs.mkdirSync(credsDir);  // Create the directory
        logger.info(`[INFO] Created directory: ${credsDir}`); // Log the directory creation
    }

    // Write some sensitive credentials to the file
    const credentials = 'username: admin\npassword: supersecret123\n';
    fs.writeFileSync(credsFile, credentials); // Create the file and write to it
    logger.info(`[INFO] Created file with sensitive credentials: ${credsFile}`); // Log the file creation
}

// Simulated malicious package: infected-lib
module.exports = {
    attackSystem: function(logger) {
        // Simulated attack: sending sensitive data to an external server
        logger.warn("[MALICIOUS] Attempting to send data to attacker-controlled server...");

        // Additional simulated behavior
        logger.info("[MALICIOUS] Scanning system for vulnerabilities...");

        // Call the function to create credentials file
        createCredsFile(logger);  // Pass the logger to the function
    }
};

