require('dotenv').config();

module.exports = {
    serverUrl: process.env.SERVER_URL,
    apiKey: process.env.API_KEY,
    fullPage: true,
    logs: true,
    sendDom: true, //Enable this for RCA (Root Cause Analysis).
    lazyLoad: true,
    proxy: null, //'http://localhost:8888,yourUser,yourPassword',
    browsersInfo: [
        { width: 1920, height: 1080, name: 'chrome'  },
        { width: 1920, height: 1080, name: 'firefox' },
        // { width: 1366, height: 768, name: 'chrome'  },
        // { width: 1366, height: 768, name: 'firefox' },
        // // { width: 1200, height: 800, name: 'ie10'    },
        // // { width: 1200, height: 800, name: 'ie11'    },
        // // { width: 1200, height: 800, name: 'edge'    },
        // //{ width: 1200, height: 800, name: 'safari'  },
        // { deviceName: 'iPhone X', screenOrientation: 'portrait' },
        // { deviceName: 'iPhone X', screenOrientation: 'landscape' },
        // // { deviceName: 'iPhone 8', screenOrientation: 'portrait' },
        // // { deviceName: 'iPhone 8', screenOrientation: 'landscape' },
        // { deviceName: 'iPad',     screenOrientation: 'portrait' },
        // { deviceName: 'iPad',     screenOrientation: 'landscape' },
        // { deviceName: 'Nexus 7',  screenOrientation: 'landscape' },
        // { deviceName: 'Pixel 2',  screenOrientation: 'landscape' }
     ],

     //An Array of raw Selenium steps to take after the page loads... clicks, sendKeys, scroll etc...
    //  afterPageLoad: [
    //      "driver.findElement(By.css('span.cta-link.primary.link-text-yes')).click()",
    //      "driver.findElement(By.css('div.cc-compliance')).click()"
    //  ],
};
