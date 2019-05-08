describe('Protractor Element Demo',function() {

    it('Locators testing',function() {

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('4');
        element(by.model('second')).sendKeys('5');

        element(by.id('gobutton')).click();
        //tagname[attribute='value']

        //This is Jasmine taking care of the Promise
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('9');

        $("h2[class='ng-binding']").getText().then(function(result)
        {
            console.log(result);
        })

        //write your protractor raw code
    })

//Each it block will be called as a spec


})