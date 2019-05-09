describe('University of Utah taxi and rental cars page', function() {


    const transports = {
        cityCabTitle: element(by.id('taxicabsrentalcars')).all(by.css('h3')),
        cityCabNumber: element(by.id('taxicabsrentalcars')).all(by.css('p')),
    };


    it('going to the University of Utah health site and navigating to taxi and rental page', function() {

        browser.waitForAngularEnabled(false);
        browser.get('https://healthcare.utah.edu/locations/hospital/services/stay.php');
    });

    it('Going to the transportation section from the menu on the page', ()=>
    {
        var trans = element(by.cssContainingText("a", "Transportation"));
        trans.click();
    });

    it('grab the title of the section with the cab and car rental titles and numbers', ()=>
    {
        element(by.cssContainingText("h2", "Taxi Cabs/Rental Cars")).getText().then(function(title)
        {
            console.log(title);
        });
    });

    it('grab every cab name and put it in the log', ()=> {
        transports.cityCabTitle.each(function (ele) {
            ele.getText().then(function (text) {
                //outputs the list of companies
                //console.log(text);
            });
        });
    });

    it('should check the cab/rental name and then the number under each name', ()=> {
            for(var i = 0; i < transports.length; i++)
            {
                transports.cityCabTitle.get(i).getText().then( (cars)=>{
                expect(cars).toContain(cityCabTitle[i])
                });
                transports.cityCabNumber.get(i).getText().then( (nums)=>{
                expect(nums).toContain(cityCabNumber[i])
                });
            }
    });

    it('should put out the numbers of the cabs in the log', ()=> {
       element.all(by.id('taxicabsrentalcars')).all(by.css('.o-content p')).getText().then(function(nums)
        {
       //     console.log(nums);
        });
        //console.log(transports.cityCabTitle[2]);

    });

    //console.log(transports.cityCabTitle);


});