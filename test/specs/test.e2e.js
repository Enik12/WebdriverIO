
const PastePage = require('../pageobjects/paste.page');

describe('Paste form', () => {

    it("Create new paste", async () => {

        await PastePage.open();
        await PastePage.create('Hello from WebDriver', 'helloweb');
        
    });
});

