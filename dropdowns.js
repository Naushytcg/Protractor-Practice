describe('chain locators demo',function() {

    //Function should allow me to create inputs 'a' and 'b' as numbers and 'c' to be the calculator function and produce result
    function Calc(a,b,c)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element.all(by.tagName('option')).each(function(item)
        {
            item.getAttribute('value').then(function(values)
            {
                if(values==c)
                {
                    item.click();
                }
            });
        });
        element(by.id('gobutton')).click();
    }

    it('Open Angular js website',function()
    {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('this should multiply some numbers', ()=> {
        Calc(4,7,'MULTIPLICATION');
        //Add(7,7);
       // Add(2,7);
    });

    it('this should add some numbers', ()=> {
        Calc(5,2,'ADDITION');
    });

    it('this should divide some numbers', ()=> {
        Calc(15,5,'DIVISION');
    });

    it('this should count the number of rows of results', ()=> {
        element.all(by.repeater('result in memory')).count().then(function(results)
        {
            console.log(results);
        })
    });

    it('This should pull all the numbers from the results row',()=> {
        element.all(by.repeater('result in memory')).each(function (item) {
            item.element(by.css('td:nth-child(3)')).getText().then(function (text) {
                console.log(text)
            });
        });
    });

})