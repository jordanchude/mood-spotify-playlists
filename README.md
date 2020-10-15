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
- [MVP](https://res.cloudinary.com/dpjdvsigb/image/upload/v1602797550/moodify/moodify-mvp_hf3w2u.jpg)
- [Post MVP](https://res.cloudinary.com/dpjdvsigb/image/upload/v1602465106/moodify/moodify-post-mvp_mbjtk0.jpg)

## MVP/Post MVP
#### MVP
- Pull data from google JSON API
- Sort API data based on property values that signify mood
- Present API data in three sorted playlists
- Make interface mobile-first/responsive

##### PostMVP 
- Add fade-in effects to all page elements
- Add hover styling to all buttons

## Functional Components (Rounded to Nearest .25hr)
#### MVP
| Letter | Component | Priority | Estimated Time | Actual Time |
| --- | --- | :---: |  :---: | :---: |
| A | UI/UX Research | H | 1hr | 1hr |
| B | Wireframing | H | 2hr | 3.25hr |
| C | Navigation HTML | H | .5hr | .5hr |
| D | Navigation CSS | M | 1hr | .5hr |
| E | Hero HTML | H | 1hr | .5hr |
| F | Hero CSS | M | 1hr | 1.5hr |
| G | Aggressive HTML | H | 1hr | .25hr |
| H | Aggressive CSS | M | 1hr | .5hr | 
| I | Whimsical HTML | H | 1hr | .25hr |
| J | Whimsical CSS | M | 1hr | .25hr | 
| K | Spooky HTML | H | 1hr | .25hr |
| L | Spooky CSS | M | 1hr | .25hr |
| M | Footer HTML | H | .5hr | .25hr |
| N | Footer CSS | M | .5hr | .25hr |
| O | API Pull Javascript Function | H | 3hr | 1hr |
| P | Vue JS Implementation | H | 2hr | 1hr |
| Q | Responsive Testing/Debugging | H | 4hr | 3.5hr |
| R | API Pull Testing/Debugging | H | 4hr | 4hr |
| S | Refactoring | H | 4hr | 2.5hr |
| T | Deployment | M | .25hr | .25hr |
| U | Blackbox Testing/Debugging | H | 2hr | 2hr |
| V | Documentation | H | .5hr | .25hr |
| -- | Total | -- | 33.25hrs| 24hrs |

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
    - Sort JSON data by property values
    - Limit playlists to 100 songs
- Identify necessary methods/processes for building interface
    - Mobile-first
- Build rough HTML/CSS for each section
- Create major functions
- Test functions
- Test responsiveness
- Refactor, Test, Refactor, Test
- Test deployed application

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
- The following code snippet is the crux of the application. In essence, the getSongs function takes the data from the JSON feed and organizes it into an array of objects using logic gates for specific properties. The subsequent arrays of objects are used to create each playlist.

```js
getSongs: function(){
        // fetch data feed
        fetch(this.URL)
        // convert response to consumable JSON
        .then(response => response.json())
        .then(data => {
          // create new object for each entry that matches if gates
          data.feed.entry.map(entry => {
            // Aggressive Logic Gates
            if (entry.gsx$energy.$t > 0.65 && entry.gsx$valence.$t < 0.5) {
              // add to 'aggressive' data property
              this.aggressive.push({
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t,
                energy: entry.gsx$energy.$t
              })
            }

            // Whimsical Logic Gates
            if (entry.gsx$valence.$t > 0.35 && entry.gsx$instrumentalness.$t > 0 && entry.gsx$acousticness.$t > .1) {
                // add to 'whimsical' data property
                this.whimsical.push({
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t,
                valence: entry.gsx$valence.$t
              })
            }

            // Spooky Logic Gates
            if (entry.gsx$valence.$t < 0.52 && entry.gsx$energy.$t < 0.72 && entry.gsx$loudness.$t < -5.5 && entry.gsx$danceability.$t < .75) {
              // add to 'spooky' data property
              this.spooky.push({
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t,
                valence: entry.gsx$valence.$t
              })
            }
          })

          // filter out songs not placed in playlists
          .filter(entry => entry !== undefined);

          //sort playlists by key attribute and return new array with 100 entries
          this.aggressive = this.aggressive.sort((a, b) => b.energy > a.energy ? 1: -1).splice(0, 100);
          this.whimsical = this.whimsical.sort((a, b) => b.valence > a.valence ? 1: -1).splice(0, 100);
          this.spooky = this.spooky.sort((a, b) => a.valence > b.valence ? 1: -1).splice(0, 100);
        })
      }
```

## Learning Moments / Issues and Resolutions
**ERROR**: GET http://127.0.0.1:5500/function%20URL()%20%7B%20[native%20code]%20%7D 404 (Not Found)           
**RESOLUTION**: In my getSongs function, I tried to fetch from the URL in my data object, but wrote "fetch(URL)", which fetches from the current URL, instead of referring to the data object with "fetch(this.URL)".
