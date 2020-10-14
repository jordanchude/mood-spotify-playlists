//HAMBURGER MENU FUNCTION
function showHamburgerLinks() {
    var links = document.getElementById("hamburger-links");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }
// VUE INSTANCE TO HOLD JSON DATA FOR RENDER
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
        fetch('https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json')
        .then(response => response.json())
        .then(data => {
          // entry.gsx$acousticness.$t < 0.1 && entry.gsx$danceability.$t < 0.6
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
          const whimsicalFeed = data.feed.entry.map(entry => {
            console.log("scanned");
            if (entry.gsx$danceability.$t < 0.7) {
              return {
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t
              }
            } 
          })
          .filter(entry => entry !== undefined);
          this.whimsical = whimsicalFeed;
        })
      },
      spookySongs: function(){
        fetch('https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json')
        .then(response => response.json())
        .then(data => {
          const spookyFeed = data.feed.entry.map(entry => {
            if (entry.gsx$danceability.$t < 0.7) {
              return {
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t
              }
            } 
          })
          .filter(entry => entry !== undefined);
          this.spooky = spookyFeed;
        })
      }
    }
  })