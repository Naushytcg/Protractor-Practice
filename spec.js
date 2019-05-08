describe('lego website', ()=> {

const webpage="https://www.lego.com/en-us";
    const adultbutton = element(by.css('.split-cta--adult'));
    const productbutton = element(by.css('.js-track--products a'));

    beforeEach(function () {
        browser.get(webpage);
    });

    it('go to the explore section', ()=>{
        adultbutton.click();
    });

    it('go to the products section', ()=>{
        productbutton.click();
    });

    it('should wait before close', ()=>{
        browser.sleep(5000);
    });
    //for loop
    for(let i = 0; i < 5; i++){
        //stored things .get(i).getText().then( (text)=>{
        //     console.log(text)
        //   })
        }
})