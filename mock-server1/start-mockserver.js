/* start-mockserver.js */
var mockserver = require('mockserver-grunt');
mockserver.start_mockserver({
    serverPort: 2080,
    proxyPort: 2090,
    verbose: true
});