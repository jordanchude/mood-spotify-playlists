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
    },
    methods: {
      aggressiveSongs: function(){
        fetch('https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json')
        .then(response => response.json())
        .then(data => {
          const aggressiveFeed = data.feed.entry.map(entry => {
            if (entry.gsx$danceability.$t > 0.7) {
              return {
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t
              }
            } 
          })
          .filter(entry => entry !== undefined);
          this.aggressive = aggressiveFeed;
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
      }
      // spooky:
    }
  })