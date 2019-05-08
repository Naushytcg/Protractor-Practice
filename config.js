exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['dropdowns.js'],
    capabilities: {
        browserName: 'chrome',

        // chromeOptions: {
        //     args: ["--headless", "--disable-gpu"]
        // }
    }
}