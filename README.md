# BookBound

![BookBound](https://vinceip.github.io/BookBound/img/sharpened-transparent-logo.5864fbae.png)
## Click here to visit BookBound(https://vinceip.github.io/BookBound/)

### About
BookBound is a full-stack web application build on the premise of providing families with a way to encourage reading. It was the final capstone project during my 14 weeks in Tech Elevator. It was made in collaboration between myself and 3 other developers working together via Zoom over the course of 12 days. This repository contains the front-end of our original project and several of my own additions and improvements in my spare time.

### Current status
A [live version](https://vinceip.github.io/BookBound/) of the site is currently deployed using [Railway](railway.app) and GitHub Pages.

Many functions are probably broken or buggy as I work to update them. Data may occasionally be wiped as a result.

### Current/planned features
BookBound is pretty barebones right now compared to its potential. By using the burger menu on the top-left of the page, you can proceed to register as a user and login. Once logged in, you can navigate to the Members page to view your family members and stats including how many books your family has finished reading, the time spent reading, and a leaderboard of who has been reading the most in your family. From this page you can navigate to the Reading page where you can search for a book by its title or ISBN. From the search results you can add a particular book to your reading list. Access any family member's reading list by selecting their name from the Members page. You can record reading activity from each individual user's page, or mark a book as finsihed.

There is a Prizes page accessible in the Members page, which allows families to set up prizes and conditions for them to be won.

### Tech stack
BookBound uses our own back-end API made with Java and Spring Boot. Data is driven by PostgreSQL. The server calls on the OpenLibrary API to access search results and data on books, including book covers.

The front-end is built with Vue 2.
