let Radio = {
  stations: [
    {
      name: "hiphop",
      songs: [
        {
          title: "I would leave this place",
          artist: "Bizle",
        },
        {
          title: "I would leave this place1",
          artist: "Bizle1",
        },
      ],
    },
    {
      name: "randb",
      songs: [
        {
          title: "Endless Love",
          artist: "Luther Vandross",
        },
        {
          title: "Endless Love1",
          artist: "Luther Vandross1",
        },
      ],
    },
    {
      name: "gospel",
      songs: [
        {
          title: "I Smile",
          artist: "Kirk Franklin",
        },
        {
          title: "I Smile1",
          artist: "Kirk Franklin1",
        },
      ],
    },
  ],

  randomly() { 
    //   console.log(this);
    // Creates a new random index based on the length of the stations array
    let randomIndex = Math.floor(Math.random() * this.stations.length)
    // get a random station with the random index
    let randomStation = this.stations[randomIndex]
    // Gets a random song from randomStation
    let randomSong = Math.floor(Math.random() * randomStation.songs.length)
    console.log(`Now playing ${randomStation.songs[randomSong].title}, by ${randomStation.songs[randomSong].artist}`);
   }
 
};


// console.log(Radio.stations[2].name);
Radio.randomly()
