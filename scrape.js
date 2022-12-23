function scrapeUrl() {
    const axios = require("axios");
    const cheerio = require("cheerio");

    const links = [];

    // Console input set up
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    // Takes input, stores in 'site' variable
    readline.question('Enter link: ', site => {
        // Continues
        const fetchLinks = async () => {
            try {
                const response = await
                
                // Fetches given link
                axios.get(site);
                    
                const html = response.data;
                
                // Stores page html
                const $ = cheerio.load(html);

                // Searches for anchor tags
                $('a').each((_idx, value) => {
                    // Pulls href value
                    let url = $(value).attr('href');
                    // Pushes value to 'links' list
                    links.push(url);
                });
            
                return links;
            } 
            // Throws error if unsuccessful
            catch (error) {
                throw error;
            }};
        
        // Converts links list to JSON
        fetchLinks().then((links) => {
            let json_arr = {};
            json_arr[site] = links;
            let json_string = JSON.stringify(json_arr);
            // Prints JSON
            console.log(json_string);
        });
    
    readline.close();
    });
}

return scrapeUrl();