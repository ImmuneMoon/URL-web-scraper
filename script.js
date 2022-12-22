const axios = require("axios");
const cheerio = require("cheerio");

function scrape() {
    const links = [];
    let site = 'https://immunemoon.github.io/Portfolio/';
    const fetchLinks = async () => {
        try {
        const response = await

        axios.get(site);
            
        const html = response.data;
    
        const $ = cheerio.load(html);
        console.log(html);

        $('a').each((_idx, value) => {
            let url = $(value).attr('href');
            links.push(url);
        });
    
        return links;
        } 
        catch (error) {
            throw error;
        }};
    
    fetchLinks().then((urls) => console.log(urls));
}

return scrape();