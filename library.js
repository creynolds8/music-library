const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  trackCounter: function(playlist) {
    return this.playlists[playlist].tracks.length;
  },
  printPlaylists: function() {
    const playlistArr = Object.keys(this.playlists);
    playlistArr.forEach(pL => console.log(`${pL}: ${this.playlists[pL].name} - ${this.trackCounter(pL)} tracks`));
  },

  printTracks: function() {
    const trackArr = Object.keys(this.tracks);
    trackArr.forEach(trackNum => console.log(`${trackNum}: ${this.tracks[trackNum].name} by ${this.tracks[trackNum].artist} (${this.tracks[trackNum].album})`
    ));
  },

  printPlaylist: function(playlistId) {
    for (const playlist in this.playlists) {
      if (playlist === playlistId) {
        console.log(`${playlist}: ${this.playlists[playlist].name} - ${this.trackCounter(playlist)} tracks`);
        //console.log(playlist) //-> p01
        for (const track of this.playlists[playlist].tracks) {
          //console.log(track); // -> t01 /n t02
          for (const trackID in this.tracks) {
            if (this.tracks[trackID].id === track) {
              console.log(`${track}: ${this.tracks[trackID].name} by ${this.tracks[trackID].artist} (${this.tracks[trackID].album})`);
            }
          }
        }
      }
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    for (const trackName in this.tracks) {
      if (trackName === trackId) {
        this.playlists[playlistId].tracks.unshift(trackId);
      }
    }
    console.log(`Playlist now has ${this.playlists[playlistId].tracks.length} tracks`);

  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    const newId = this.generateUid();
    this.tracks[newId] = {
      id: newId,
      name: name,
      artist: artist,
      album: album
    };
    console.log('New Song added!', this.tracks[newId]);
  },

  addPlaylist: function(name) {
    const newId = this.generateUid();
    library.playlists[newId] = {
      id: newId,
      name: name,
      tracks: []
    };
    console.log('New Playlist Created!', this.playlists[newId]);
  }

};

const divider = '----------------------';

library.printPlaylists();
console.log(divider);

library.printTracks();
console.log(divider);

library.printPlaylist('p01');
console.log(divider);

library.addTrackToPlaylist('t01', 'p02');
console.log(divider);

library.addTrack('So Long London', 'Taylor Swift', 'The Torutred Poets Department');
console.log(divider);

library.addPlaylist('p03');
console.log(divider);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//const printSearchResults = function(query) {

//};