//HAMBURGER MENU FUNCTION
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
    mounted: function () {
      this.aggressiveSongs()
      this.whimsicalSongs()
      this.spookySongs()
    },
    methods: {
      aggressiveSongs: function(){
        fetch(this.URL)
        .then(response => response.json())
        .then(data => {
          let aggressiveFeed = data.feed.entry.map(entry => {
            if (entry.gsx$energy.$t > 0.65 && entry.gsx$valence.$t < 0.5) {
              return {
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t,
                energy: entry.gsx$energy.$t
              }
            } 
          })
          .filter(entry => entry !== undefined);
          // sort by energy and make new array with the first 100 songs
          aggressiveFeed = aggressiveFeed.sort((a, b) => b.energy > a.energy ? 1: -1).splice(0, 100);
          // assign array to 'aggressive' data property
          this.aggressive = aggressiveFeed
        })
      },
      whimsicalSongs: function(){
        fetch('https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json')
        .then(response => response.json())
        .then(data => {
          let whimsicalFeed = data.feed.entry.map(entry => {
            if (entry.gsx$valence.$t > 0.35 && entry.gsx$instrumentalness.$t > 0 && entry.gsx$acousticness.$t > .1) {
              return {
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t,
                valence: entry.gsx$valence.$t
              }
            } 
          })
          .filter(entry => entry !== undefined);
          whimsicalFeed = whimsicalFeed.sort((a, b) => b.valence > a.valence ? 1: -1);
          this.whimsical = whimsicalFeed;
        })
      },
      spookySongs: function(){
        fetch('https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json')
        .then(response => response.json())
        .then(data => {
          let spookyFeed = data.feed.entry.map(entry => {
            if (entry.gsx$danceability.$t < 0.6 && entry.gsx$energy.$t < 0.8) {
              return {
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t,
                energy: entry.gsx$energy.$t
              }
            } 
          })
          .filter(entry => entry !== undefined);
          spookyFeed = spookyFeed.sort((a, b) => a.energy > b.energy ? 1: -1)
          this.spooky = spookyFeed;
        })
      }
    }
  })