# Memory UP  

# The game   

Memory up is a common and well known game that we have all played as little kids.  
This is an enchanted Version, where I implemented some features to make the game more appealing to adults.  
The goal of the game is simple, you need to flip all the cards that are on the board. Each card has a pair, another card which is exactly the same. Only two cards can be opened at a time, so it's all about your memory to manage and remember where each card was and match it with it's pair card. Isn't that too easy? Yes, well, not always! But even if it is, there is a feature to add difficulty to the game. The greater the difficulty, the more the cards you need to remember!  
And now we introduce our second feature, the Memory Coin! We leave in a "crypto-era" and what's a game without it's own coin?  
Of course I didn't develop a bockchain, but the idea is, that each player has an amount of coins when he starts the game. If he flips two cards, which are not the same, then he loses a coin. If he reaches 0 coins, then he loses the game. Are you up to this challenge?  
Then you should try this game! And don't forget, it's open source, in other words, it's free (also free from ads)!

## Installation  

1. Clone repository to a folder: git clone https://git.ffhs.ch/shankar.ram/webt/-/tree/dev-bsc.inf.2021-theo   
2. Change directory (cd) to memory-up   
3. Install npm or yarn if not already installed: https://www.npmjs.com/get-npm https://classic.yarnpkg.com/en/docs/install/#mac-stable  
4. Open shell  
5. Navigate to the folder where you cloned the repository  
6. Run command "npm install" or "yarn start"  
7. Start react app with command "npm start" or "yarn start"  

### The Rules   

- The game has an even number (n) cards  
- In each round the user can turn(flip) only two cards  
- Cards are only left upside down (opened from the side of the symbol) if they match  
- The user can choose the difficulty of the game and depending on the difficulty also receives the corresponding number of cards and Coins-> easy: 8 cards, 6 Coinsmedium: 12 cards, 16 Coinshard: 24 cards, 40 Coins  
- Coins: If the user flips over a card and this card does not match the other face-up card of the board (is not the same), then the value of 1 is subtracted from the number of coins.  
- If the player finds all the matching pairs (all pairs of cards (n / 2) have been fliped over) , the number of his score and coins will be increased by one.  
- The game ends or when the number of remaining coins is 0.  

## Play the game  
  
In the project directory, you can run:  
  
### `yarn start`  

Runs the app in the development mode.\  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
  
The page will reload if you make edits.\  
You will also see any lint errors in the console.   
  
#### Enjoy playing this card game and feel free to report any bugs at "theologos.baxevanos@students.ffhs.ch"  
 

