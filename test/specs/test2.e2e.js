const PastePage = require('../pageobjects/paste.page');


describe('Create new paste with checking', () => {

    it('Create new paste', async () => {

        await PastePage.open();
        await browser.setTimeout({ 'pageLoad': 10000 }); 
        await PastePage.addPaste (
            'git config --global user.name "New Sheriff in Town"\n\n' +
            'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n\n' +
            'git push origin master --force' , 
            'how to gain dominance among developers' );

    });

    it('Check paste', async () => {

        const title = await browser.getTitle();
        expect(title).toEqual('how to gain dominance among developers - Pastebin.com');

        await PastePage.checkSyntaxSuspendBash();

        await PastePage.checkCode([
            'git config --global user.name "New Sheriff in Town"',
            'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")',
            'git push origin master --force'
        ]);

    });



});