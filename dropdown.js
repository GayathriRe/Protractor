describe("Select Dropdonw",function(){

    it("Select Dropdown1", function(){
        browser.ignoresynchronization=true;
        browser.waitForAngularEnabled(false);
        // beforeEach(()=> {
        
        browser.get('https:angularjs.org');
        browser.sleep(5000);
        // })
        let dropdown= [];
        // dropdown = element.all(by.xpath("//*[@class='dropdown']"));
        dropdown=element(by.cssContainingText('a','Learn'));
        
        // browser.driver.wait(()=>false,10000);
       
      dropdown.click();

      browser.sleep(5000);
    //   const optionToSelect = element(by.linkText('Tutorial'));
    const optionToSelect = element.all(by.xpath("//*[@class='dropdown-menu']"))

    optionToSelect.each((option,index)=>{
        option.getAttribute('value').then((Optionvalue)=>{
            console.log("Dropdown value :" +Optionvalue)
            browser.sleep(5000);
            // option.click();
        })
    })
    //   optionToSelect.click();
      
       

        });

    });
