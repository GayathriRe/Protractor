describe("suite", function(){

    it("test1",function() {
        browser.ignoresynchronization =true;
         browser.waitForAngularEnabled(false);
        // browser.wait(protractor.ExpectedConditions.presenceOf(theElement));

        browser.get('https:angularjs.org');
        // browser.get('https://youtube.com');

        browser.sleep(5000);
        browser.manage().window().maximize();
        browser.sleep(5000);
        
        element.all(by.tagName("a")).count().then(function(alllinks)
        {
            
        console.log("no of links :" +alllinks)

       
        });
    });

});