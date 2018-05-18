const cossAPI = require('./coss-api');

const main = async () => {
    const api = cossAPI();

        console.log('COSSbot initializing.................. ');
        //implement listener so Command Line waits for user to pres m, a, or q and then enter to set value to tradingMode variable.
        var readlineSync = require('readline-sync');
        var tradingMode = 0;
        while (tradingMode !== 'm' || tradingMode !== 'a') {
        var tradingMode = readlineSync.question('Use COSSbot manually (m), automatic trading (a), or quit (q)?  ');
        if (tradingMode === 'm') {
            console.log('You have selected COSSbot Manual trading mode.');
            console.log(' Manual trading mode initializing...');
                var manualCommand = 0;
                while (manualCommand !== 'b' || manualCommand !== 'back'){
                    var manualCommand = readlineSync.question('Please select a command for COSSbot to execute. Type help (h) to see all options:   ');
                    if (manualCommand === 'h' || manualCommand === 'help'){
                        console.log('Here is a list of the available commands: Check Market Pairs (p), Pair Depth (d), Help (h), MORE FUNCTIONS TO BE ADDED')
                        //add available api commands and names here with else if statements for each to allow the user to execute all API calls manually
                    } else if (manualCommand === 'd' || manualCommand === 'depth') {
                        var pairSelected = readlineSync.question('Enter a pairing (currency-pairing) e.g. coss-eth:  ');
                        try {
                            const depth = await api.depth(pairSelected);
                            console.log('First Bid', depth.bids[0]);
                            console.log('First Ask', depth.asks[0]);
                        } catch(error) {
                            console.error('Failed to request depth data', error);
                        } 
                    } else if (manualCommand === 'p') {
                        try {
                            const marketPairs = await api.marketPairs();
                            console.log('Market Pairs', marketPairs);
                        } catch(error) {
                            console.error('Failed to request market pairs', error);
                        }
                    } else if (manualCommand === 'q' || manualCommand === 'quit'){
                        console.log(' You have selected to quit COSSbot... ');
                        console.log(' Goodbye! '); 
                        process.exit(main.js)
                    } else if (manualCommand !== 'b' || manualCommand !== 'back') 
                        console.log('Invalid command; Please try again...');

                }
            //Implement manual functionality w/ ability to manually call all API commands
            




//THE AUTOMATED CODING SECTION IMMEDIATELY BELOW WILL UTILIZE THE SAME COMMANDS AS THE MANUAL SECTION, BUT W A SIMPLE LOGICAL TRADING ALGO

        } else if (tradingMode === 'a') {
            console.log(' You have selected COSSbot Automated trading mode. ');
            console.log('Automated trading currently unavailable... ')
            //function automatedMode(){
            //Implement automatated trading functionality w/ ability to run custom strategies on chosen pairings
        //}


        } else if (tradingMode === 'q'){
            //implemented user selection q to exit code
            console.log(' You have selected to quit COSSbot... ')
            console.log(' Goodbye! ') 
            process.exit(main.js)
         } else 
            console.log('Invalid command; Please try again...')
        }

    } 

 main();

