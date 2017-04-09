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

## url
https://vanduong28.github.io/tic-tac-toe-client/

## Approach
1. Create simple game board using html/css
2. Develop game logic - how to determine when there is a winner or tie
3. Develop api token authentication (user actions)
4. Develop api server calls (game actions)

## Challenges
Getting started on game logic, tough to identify where to begin because
everything was in one function even though I knew it should be separated it was
easier to build out the logic and keeping in mind I could come back after and
start taking it piece by piece apart.



## Open issues
Message prompts displayed on the screen are not always hiding/showing as
expected. It doesn't impact the functionality of the game but may be confusing
to users when there are duplicate messages displayed.

## Installation
1. Install with 'npm install'.
2. Start with 'grunt serve'.
