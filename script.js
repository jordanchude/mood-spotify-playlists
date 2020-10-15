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
      this.getSongs()
    },
    methods: {
      getSongs: function(){
        fetch(this.URL)
        .then(response => response.json())
        .then(data => {
          data.feed.entry.map(entry => {
            if (entry.gsx$energy.$t > 0.65 && entry.gsx$valence.$t < 0.5) {
              this.aggressive.push({
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t,
                energy: entry.gsx$energy.$t
              })
            }
            
            if (entry.gsx$valence.$t > 0.35 && entry.gsx$instrumentalness.$t > 0 && entry.gsx$acousticness.$t > .1) {
                this.whimsical.push({
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t,
                valence: entry.gsx$valence.$t
              })
            }

            if (entry.gsx$valence.$t < 0.52 && entry.gsx$energy.$t < 0.72 && entry.gsx$loudness.$t < -5.5 && entry.gsx$danceability.$t < .75) {
              this.spooky.push({
                title: entry.gsx$songtitle.$t,
                artist: entry.gsx$artist.$t,
                valence: entry.gsx$valence.$t
              })
            }
          })
          .filter(entry => entry !== undefined);
          // sort by energy and make new array with the first 100 songs
          this.aggressive = this.aggressive.sort((a, b) => b.energy > a.energy ? 1: -1).splice(0, 100);
          this.whimsical = this.whimsical.sort((a, b) => b.valence > a.valence ? 1: -1).splice(0, 100);
          this.spooky = this.spooky.sort((a, b) => a.valence > b.valence ? 1: -1).splice(0, 100);
        })
      }
    }
  })