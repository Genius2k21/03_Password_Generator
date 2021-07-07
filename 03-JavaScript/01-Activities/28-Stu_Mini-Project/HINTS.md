1. What are your data structures? Do we need to keep track of any data globally?
2. Create a function for the game play that you can call again if the user wants to play again. Call that function to kick off the game.
3. How can we write an algorithm to randomly select an option for the computer? What data structure can we use to hold multiple options and that we can access one of those options via its index? We know we can access an option via an index from our data structure and we know we can randomly generate a number between 0 and 2 (representing the indices). How can we combine these 2 knowns into an algorithm?
4. How can we determine if the user won? We know the following:

- Rock wins over scissors (e.g. `userChoice === "R" && computerChoice === "S"`)
- Paper wins over rock
- Scissors wins over paper
