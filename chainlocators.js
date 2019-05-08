describe('chain locators demo',function() {

    function Add(a,b)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.model('operator')).element(by.css('option:nth-child(1)')).click();
        element(by.id('gobutton')).click();
    }

    function Sub(c,d)
    {
        element(by.model('first')).sendKeys(c);
        element(by.model('second')).sendKeys(d);
        element(by.model('operator')).element(by.css('option:nth-child(5)')).click();
        element(by.id('gobutton')).click();
    }

    function Multi(e,f)
    {
        element(by.model('first')).sendKeys(e);
        element(by.model('second')).sendKeys(f);
        element(by.model('operator')).element(by.css('option:nth-child(4)')).click();
        element(by.id('gobutton')).click();
    }

    function Divide(g,h)
    {
        element(by.model('first')).sendKeys(g);
        element(by.model('second')).sendKeys(h);
        element(by.model('operator')).element(by.css('option:nth-child(2)')).click();
        element(by.id('gobutton')).click();
    }

    it('Open Angular js website',function() {

        browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater, chain locators, and ccs for identical tags
    });

    it('this will be the numbers added', ()=> {
        Add(4,7);
        Add(7,7);
        Add(2,7);
    });

    it('this should multiply some numbers', ()=> {
        Multi(5,2);
    });

    it('this should subtract some numbers', ()=> {
        Sub(17,5);
    });

    it('this should divide some numbers', ()=> {
       Divide(20,4);
    });

    it('this should count the number of rows of results', ()=> {
        element.all(by.repeater('result in memory')).count().then(function(results)
        {
           console.log(results);
        })
    });

    it('This should pull all the numbers from the results row',()=>{
        element.all(by.repeater('result in memory')).each(function(item)
            {
                item.element(by.css('td:nth-child(3)')).getText().then(function(text)
                {
                    console.log(text)
                });
            });
    })

});