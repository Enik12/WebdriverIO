
const Page = require('./page');

class PastePage extends Page {

    get pasteForm () { return $("//textarea[@id='postform-text']") };
    get highlightSyntax () { return $('span#select2-postform-format-container') };
    get chooseBash () { return $('//li[text()="Bash"]') };
    get expiration () { return $('span#select2-postform-expiration-container') };
    get choose10min () { return $('//li[text()="10 Minutes"]') };
    get nameTitle () { return $('input#postform-name') };
    get createPaste () { return $("button.btn.-big") };
    get bashSign () { return $('//a[text()="Bash"]') };
    get sourseText () { return $('//ol') };
     

    async addPaste (code, title) {
        await this.pasteForm.setValue(code);
        await this.highlightSyntax.click();
        await this.chooseBash.click();
        await this.expiration.click();
        await this.choose10min.click();
        await this.nameTitle.setValue(title);
        await this.createPaste.click();
    };

    open () {
        return super.open();
    };
};

module.exports = new PastePage();