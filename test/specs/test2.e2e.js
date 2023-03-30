const PastePage = require('../pageobjects/paste.page');


describe('Test suite', () => {

    it('Create new paste with checking', async () => {

        const PASTE_CODE =
            'git config --global user.name "New Sheriff in Town"\n' +
            'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n' +
            'git push origin master --force';

        const PASTE_NAME = 'how to gain dominance among developers';
        

        await PastePage.open();
        await browser.setTimeout({ 'pageLoad': 10000 }); 
        await PastePage.addPaste (PASTE_CODE, PASTE_NAME);

        await expect(browser).toHaveTitleContaining(PASTE_NAME);        
        await expect(PastePage.bashSign).toBeDisplayedInViewport();
        await expect(PastePage.sourseText).toHaveTextContaining(PASTE_CODE);

    });

});