
const Page = require('./page');

class PastePage extends Page {

    get pasteText () { return $('textarea#postform-text') };
    get pasteExpiration () { return $('//*[@id="select2-postform-expiration-container"]') };
    get expiration10Min () { return $('//li[text()="10 Minutes"]') };
    get pasteNameTitle () { return $('input#postform-name') };
    get buttonCreate () { return $('button.btn.-big') };

    async create (text, name) {
        await this.pasteText.setValue(text);
        await this.pasteExpiration.click();
        await this.expiration10Min.click();
        await this.pasteNameTitle.setValue(name);
        await this.buttonCreate.click();
    };

    open () {
        return super.open();
    };
};

module.exports = new PastePage()