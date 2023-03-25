
const PastePage = require('../pageobjects/paste.page');

describe('Paste form', () => {

    it("Create new paste", async () => {

        await PastePage.open();
        //await browser.pause(4000);
        await PastePage.create('Hello from WebDriver', 'helloweb');
        
    });
});

