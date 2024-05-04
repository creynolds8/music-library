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
       }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const divider = '----------------------';

const bkmkLP = library.playlists;
const bkmkLT = library.tracks;

const trackCounter = function(playlist) {
       const tracks = Object.values(bkmkLP[playlist].tracks);
       return tracks.length;
};

const printPlaylists = function() {
       const playlistArr = Object.keys(bkmkLP);
       playlistArr.forEach(pL => console.log(`${pL}: ${bkmkLP[pL].name} - ${trackCounter(pL)} tracks`));
};
printPlaylists();
console.log(divider);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       const trackArr = Object.keys(bkmkLT);
       trackArr.forEach(trackNum => console.log(`${trackNum}: ${bkmkLT[trackNum].name} by ${bkmkLT[trackNum].artist} (${bkmkLT[trackNum].album})`
       ));
};

printTracks();
console.log(divider);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       for (const playlist in bkmkLP) {
              if (playlist === playlistId) {
                     console.log(`${playlist}: ${bkmkLP[playlist].name} - ${trackCounter(playlist)} tracks`);
                     //console.log(playlist) //-> p01
                     for (const track of bkmkLP[playlist].tracks) {
                            //console.log(track); // -> t01 /n t02
                            for (const trackID in bkmkLT) {
                                   if (bkmkLT[trackID].id === track) {
                                          console.log(`${track}: ${bkmkLT[trackID].name} by ${bkmkLT[trackID].artist} (${bkmkLT[trackID].album})`);
                                   }
                            }
                     }
              }
       }
};

printPlaylist('p01');
console.log(divider);

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       for (const trackName in bkmkLT) {
              if (trackName === trackId) {
                     bkmkLP[playlistId].tracks = bkmkLP[playlistId].tracks.unshift(trackId);
              }
       }
       console.log(`Playlist now has ${bkmkLP[playlistId].tracks} tracks`);

};

addTrackToPlaylist('t01', 'p02');
console.log(divider);

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
       const newId = generateUid();
       library.tracks[newId] = {
              id: newId,
              name: name,
              artist: artist,
              album: album
       };
       console.log('New Song added!', bkmkLT[newId]);
};

addTrack('So Long London', 'Taylor Swift', 'The Torutred Poets Department');
console.log(divider);
//ask your wife for help and you'll get a Taylor Swift song...

// adds a playlist to the library
const addPlaylist = function(name) {
       const newId = generateUid();
       library.playlists[newId] = {
              id: newId,
              name: name,
              tracks: []
       };
       console.log('New Playlist Created!', bkmkLP[newId]);
};

addPlaylist('p03');
console.log(divider);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};