describe('all ',function() {

    it('Locators testing',function() {

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('4');
        element(by.model('second')).sendKeys('5');
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('7');
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys('8');
        element(by.model('second')).sendKeys('9');
        element(by.id('gobutton')).click();

        element.all(by.repeater('result in memory')).count().then(function(t)
        {
            console.log(t);
        });

        element.all(by.repeater('result in memory')).each(function(item)
        {
            item.element(by.css('td:nth-child(3)')).getText().then(function(t)
            {
                console.log(t)
            })
        })


    })

//Each it block will be called as a spec


})