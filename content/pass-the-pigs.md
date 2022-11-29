---
title: 'Pass the pigs'
summary: 'Digital adaptation of a fun board game'
tech: ['Javascript', 'HTML5', 'CSS3', 'OOP']
date: 'February, 2022'
---

Welcome to my very first web development project!

I used to play the original Pass the Pigs with one of my dearest friends, who was also my neighbor back in São Paulo. It is a version of a dice game where players sit around a table and throw little plastic pigs instead of dices. We used to gather at her apartment with drinks and snacks and play for hours ‒‒ although it is simple, the game is surprisingly fun. So, for my first project, I decided to create a digital version of it.

## How it works

On each turn, a player rolls the pigs and waits for the result based on which position the pigs will land -- they can gain points, lose points or lose their turn. The active player can roll the pigs as much as they want and gain round points unless they lose their turn, in which case they lose all the round points. The round is over when the active player clicks on "Get the points" and "Pass the pigs" or when the pigs land in a position that makes the player lose their turn. Players only gain the round points when they click on "Get the points". The player who accumulates 100 or more points first wins.

![Animated image pig's position changing](/images/pigs-gif.gif)

### Positions:

- **Leaning Jowler:** +15 points
- **Snouter:** +10 points
- **Sider:** +1 point
- **Makin' bacon:** player loses all the round points, all the accumulated points, and their turn
- **Razorback:** +5 points
- **Piggyback:** +1 point
- **Pig out:** player loses their turn and all the round points

## Development

I developed this project at the end of the first module of the web development Bootcamp in Ironhack. The guidelines were quite simple: it should be a game rendered in the browser, with logic for winning and losing, built with HTML, CSS, and Javascript using Object Oriented Programming.

The game is built in two scripts. The first one, game.js, contains the logical structure needed for the game to work. There are two classes: the Player class, which has properties and methods responsible for controlling the players' actions, and the Game class, which contains properties and methods responsible for controlling the actions related to the game itself, that is, counting the points, marking who is the active player, checking the winner and starting a new game.

The second script, index.js, is where new instances of the classes Game and Player are created and where the DOM manipulations occur to guarantee that the pretty buttons built with HTML and CSS actually work.

## Final thoughts

When I finished this project, I was incredibly proud of myself! It was the first time I created a project from scratch, from planning and architecting to coding and deployment. At the beginning of the Bootcamp, Of course, there are problems and things maybe I would do differently if I had the knowledge I have today. However, the goal was to build something functional, learn a lot during the process and have fun, so mission accomplished!
