function app() {
    // Waits for DOM load
    window.addEventListener('DOMContentLoaded', () => {
        // Listens for click event
        document.addEventListener('click', (event) => {

            function scrape() {
                console.log('scrape working')
                const axios = require('axios').default;
                const cheerio = require("cheerio");
                
                // List to store array of links
                const links = [];
                // Fetches the given link
                const fetchLinks = async () => {
                    console.log('fetch working')
                    console.log(site, 'get url success');
                    try {
                        const response = await
                        
                        // Looks for website
                        axios.get(site);
                        
                        const html = response.data;
                    
                        // Stores html from page
                        const $ = cheerio.load(html);
                        
                        // Looks for anchor tags
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
                    }
                };
                    
                fetchLinks().then((links) => {
                    // Displays links to user
                    const listContainer = document.getElementById('list_container');
                    // Reveals container
                    listContainer.style.display = 'flex';
                    console.log('linklist', links);

                    // Loops through links list and adds a anchor list item to each site
                    for (var i in links) {
                        console.log('i', links[i]);
                        document.getElementById('link_list').innerHTML += `
                            <li>
                                <a href="${links[i]}">
                                    ${links[i]}
                                <a>
                            </li>
                        `;
                    }


                    // Converts links list to JSON
                    let json_arr = {};
                    json_arr[site] = links;
                    let json_string = JSON.stringify(json_arr);
                    // Prints JSON
                    let json_parse = JSON.parse(json_string);
                    console.log('parse', json_parse);
                });
            }

            // Grabs the value from input
            let site = document.getElementById('url').value;

            // When above click event triggers, the elemnent is stored in a list
            let element = []
            element.push(event.target);
            
            //if the element clicked was the button, the scrape function is triggered
            if (element.includes(document.querySelectorAll('#scrape')[0])) {
                console.log('button working');
                return scrape();
            }
            // If the click event is triggered by anything not the button, return
            else {
                return
            }
        });
    });
}

return app();