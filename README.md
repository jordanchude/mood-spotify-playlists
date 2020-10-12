# Project Overview

- [Demo](https://moodify.netlify.app)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

In a single page application, Moodify is going to consume information about Spotify songs and present to the user three, 100 song playlists curated for three emotions: aggressive, whimsical, and spooky.

## Wireframes

- [Mobile](https://www.dropbox.com/s/4n9bteytdsdzeg7/mobile.pdf?dl=0)
- [Tablet](https://www.dropbox.com/s/qbgcz7vpmp7n5uu/tablet.pdf?dl=0)
- [Desktop](https://www.dropbox.com/s/01sj4k2spj6e3e8/desktop.pdf?dl=0)

## Time/Priority Matrix 
 

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
| G | Whimsical HTML | M | 1hr | 2hr |
| H | Whimsical CSS | M | 2hr | 2hr | 
| I | Spooky HTML | H | 1hr | -hr |
| J | Spooky CSS | M | 2hr | -hr |
| K | Footer HTML | H | .5hr | -hr |
| L | Footer CSS | M | .5hr | -hr |
| M | API Pull Javascript Function | H | 3hr | -hr |
| N | Vue JS Implementation | H | 2hr | -hr |
| O | Responsive Testing/Debugging | H | 4hr | -hr |
| P | API Pull Testing/Debugging | H | 4hr | -hr |
| Q | Blackbox Testing | H | 2hr | -hr |
| -- | Total | -- | 30hrs| -hrs |

#### PostMVP
| Letter | Component | Priority | Estimated Time | Actual Time |
| --- | --- |  :---: | :---: | :---: |
| A | Element fade-in | L | 1hr | -hr |
| B | Button hover styling | L | .5hr | -hr |
| -- | Total | -- | 1.5hrs| -hrs |

## Additional Libraries
- [Vue.js](https://vuejs.org/) : I decided to use Vue.js because I wanted to easily pull in the data from the Google Sheets API without much code. I've done it before with jQuery, but Vue's infrastructure makes it much easier to fetch data, in my opinion.
- I didn't use any other frameworks because using frameworks generally makes websites a little slower (because there's so much to load) and I only wanted to use what was necessary and be strategic.

## Code Snippet

## Issues and Resolutions
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier           
**RESOLUTION**: Missing comma after first object in sources {} object
