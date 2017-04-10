# Tic-Tac-Toe Project Client
## Overview
Tic-Tac-Toe is a game where two players take turns placing a mark on a 3x3 grid.
The player who achieves three marks in a vertical, horizontal, or diagonal row
first wins.

## User stories
-   As a player I want to be able to create an account so I can track my games
-   As a player I want to be able to login to my account so I can see my account info
-   As a player I want to be able to logout of my account
-   As a player I want to be able to change my account password
-   As a player I want to be able to start a new game
-   As a player I want to be able to quit a game at anytime

## Wireframes
- [Imgur](http://i.imgur.com/jAgk6pr.jpg)
- [Imgur](http://i.imgur.com/Ua2GYJC.jpg)

## URL
https://vanduong28.github.io/tic-tac-toe-client/

## Approach
1. Create simple game board using html/css
2. Develop game logic - how to determine when there is a winner or tie
3. Develop api token authentication (user actions)
4. Develop api server calls (game actions)

## Challenges
-   Developing game logic: I created majority of my logic in one long function.
While I knew it wasn't a best practice it was the easiest way for me to work
through development. If I had more time I would go through and separate the
the function into smaller functions. This would make it easier for others to
understand but also to allow for greater flexibility when making changes in
the future without breaking the entire game logic.
-   Developing game action server calls: I struggled with identifying how to
pass game information to the server. I had to better understand the "contract"
between the client and server and determine what fields had to be passed in
order to correctly update the objects.

## Open issues
Input fields in the modals remain populated after being initially populated.
This doesn't impact the functionality of the game application but it is a
poor user experience when the fields are not cleared each time the modal appears.

## Installation
1. Install with 'npm install'.
2. Start with 'grunt serve'.
