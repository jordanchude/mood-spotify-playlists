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
    },
    methods: {
      aggressiveSongs: function(){
        fetch('https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json')
        .then(response => response.json())
        .then(data => {
          const aggressiveFeed = data.feed.entry.map(entry => {
            return {
              title: entry.gsx$songtitle.$t,
              artist: entry.gsx$artist.$t
            }
          })
          this.aggressive = aggressiveFeed;
        })
      }
      // whimsical:
      // spooky:
    }
  })