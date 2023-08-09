describe("File upload", function () {
    const ExpectedConditions = require('protractor');

    it("File Upload", async () => {

        browser.ignoresynchronization = true;
        browser.waitForAngularEnabled(false);


        const filepath = 'C:\Users\deepa\Desktop\Covering-Letter-Gayathri.pdf';
        browser.get("https://www.ilovepdf.com/pdf_to_word");
        const uploadbutton = element(by.className('uploader__btn tooltip--left active'));

        let EC = protractor.ExpectedConditions;

        await browser.wait(EC.elementToBeClickable(uploadbutton), 50000).then(function () {
            // if (itsEnabled)
            uploadbutton.sendKeys(filepath);
        })



    })
})

