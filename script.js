// HAMBURGER MENU FUNCTION
// W3Schools (2020) How TO - Mobile Navigation Menu [Source code]. https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
function showHamburgerLinks() {
    var links = document.getElementById("hamburger-links");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

// VUE INSTANCE
  const app = new Vue({
    el: '#app',
    data: {
      //full data feed
      URL: 'https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json',
      // data for aggressive playlist
      aggressive: [],
      // data for whimsical playlist
      whimsical: [],
      // data for spooky playlist
      spooky: []
    },
    // get songs once instance is mounted
    mounted: function () {
      this.getSongs()
    },
    methods: {
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
    }
  })

  // FADE IN / FADE OUT
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  };
  
  let callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // fade in
        entry.target.classList.replace('fade-out', 'fade-in');
      } else {
        // fade out
        entry.target.classList.replace('fade-in', 'fade-out');
      }
    });
  }
  // select elements to fade
  const fadeElements = document.querySelectorAll('.fade');

  // new intersection observer
  const observer = new IntersectionObserver(callback, options);

  // observe all fade elements
  fadeElements.forEach(element => observer.observe(element));