# Project Overview

- [Demo](https://moodify.netlify.app)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Deliver | Incomplete


## Project Description

In a single page application, Moodify is going to consume information about Spotify songs and present to the user three, 100 song playlists curated for three emotions: aggressive, whimsical, and spooky.

## Wireframes

- [Mobile](https://www.dropbox.com/s/4n9bteytdsdzeg7/mobile.pdf?dl=0)
- [Tablet](https://www.dropbox.com/s/qbgcz7vpmp7n5uu/tablet.pdf?dl=0)
- [Desktop](https://www.dropbox.com/s/01sj4k2spj6e3e8/desktop.pdf?dl=0)

## Time/Priority Matrix 
- [MVP](https://res.cloudinary.com/dpjdvsigb/image/upload/v1602465106/moodify/moodify-mvp_l7n4mi.jpg)
- [Post MVP](https://res.cloudinary.com/dpjdvsigb/image/upload/v1602465106/moodify/moodify-post-mvp_mbjtk0.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data from google JSON API
- Sort API data based on properties that signify mood
- Present API data in three sorted playlists
- Make interface mobile-first/responsive

#### PostMVP 

- Add fade-in effects to all page elements
- Add hover styling to all buttons

## Functional Components

#### MVP
| Letter | Component | Priority | Estimated Time | Actual Time |
| --- | --- | :---: |  :---: | :---: |
| A | UI/UX Research | H | 1hr | .5hr |
| B | Wireframing | H | 2hr | 3hr |
| C | Navigation HTML | H | 1hr | -hr |
| D | Navigation CSS | M | 2hr | -hr |
| E | Aggressive HTML | H | 1hr | -hr |
| F | Aggressive CSS | M | 3hr | -hr | 
| G | Whimsical HTML | H | 1hr | 2hr |
| H | Whimsical CSS | M | 2hr | 2hr | 
| I | Spooky HTML | H | 1hr | -hr |
| J | Spooky CSS | M | 2hr | -hr |
| K | Footer HTML | H | .5hr | -hr |
| L | Footer CSS | M | .5hr | -hr |
| M | API Pull Javascript Function | H | 3hr | -hr |
| N | Vue JS Implementation | H | 2hr | -hr |
| O | Responsive Testing/Debugging | H | 4hr | -hr |
| P | API Pull Testing/Debugging | H | 4hr | -hr |
| Q | Refactoring | H | 4hr | -hr |
| R | Deployment | H | 2hr | -hr |
| S | Blackbox Testing | H | 2hr | -hr |
| -- | Total | -- | 34hrs| -hrs |

#### PostMVP
| Letter | Component | Priority | Estimated Time | Actual Time |
| --- | --- |  :---: | :---: | :---: |
| A | Element fade-in | L | 1hr | -hr |
| B | Button hover styling | L | .5hr | -hr |
| -- | Total | -- | 1.5hrs| -hrs |

## Additional Frameworks/Libraries
- [Vue.js](https://vuejs.org/): I decided to use Vue.js because I wanted to easily pull in the data from the Google Sheets API without much code. I've done it before with jQuery, but Vue's infrastructure, in my opinion, makes it much easier to fetch data and display it on the page.
- [Google Fonts](https://fonts.google.com/): I used Google Fonts to customize the fonts on the web page.
- [Font Awesome](https://fontawesome.com/): I used Font Awesome for the hamburger menu.
- I didn't use any other frameworks because using frameworks generally makes websites a little slower (because there's so much to load) and I only wanted to use what was necessary and be strategic.

## High-Level Process
- Look for UI inspiration (i.e. via UIGarage.net)
- Create wireframes/mocks
    - Make mocks as close to desired live website prior to coding (i.e. including styling and assets)
- Identify major functions of app
    - Fetch JSON Data
    - Sort JSON data by properties
    - Limit playlists to 100 songs
- Identify necessary methods/processes for building interface
    - Mobile-first
- Build rough HTML/CSS for each section
- Create major functions
- Test functions
- Test responsiveness
- Refactor, Test, Refactor, Test
- Deploy, Test

## Major Refactors
- CSS
    - Converted pixels to REMs for better accessibility
    - Removed redundant code across classes
- Javascript
    - Refactored three functions, one for each playlist, into one function with one fetch request for better efficiency

## Major CSS/JS Decisions
- CSS
    - There are a solid amount of classes 
        - I avoided global variables, when possible, so any added elements aren't affected
        - I used classes instead of IDs, except for navigable sections, for flexibility for any future iterations where I may need to re-use the class
- JS
    - Songs can be in more than one playlists
        - A few of these songs are aggressive and spooky, or aggressive and whimsical
        - With only 500 songs, if I removed songs once they were added to a playlist, the subsequent playlists may not hit 100 songs and/or have a playlist that isn't accurate to its title

## Code Snippet

## Issues and Resolutions
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier           
**RESOLUTION**: Missing comma after first object in sources {} object
