const puppeteer = require('puppeteer'); 

console.log('bem vindo ao conversor de moedas');

async function robot() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto('https://www.google.com/search?client=firefox-b-lm&q=valor+dolar');
    await page.screenshot({ path: 'picture.png' });

    const resultado = await page.evaluate(() => {
        return document.querySelector('.lWzCpb.a61j6').value
    })

    await browser.close();
    page.click

    console.log(`O valor do dolár está em reais: R$${resultado}`)
};

robot();
