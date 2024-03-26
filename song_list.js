//song list
let All_song = [
  {
    name: "Song 1",
    path: "song/1.mp3",
    img: "image/1.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 2",
    path: "song/2.mp3",
    img: "image/2.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 3",
    path: "song/3.mp3",
    img: "image/3.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 4",
    path: "song/4.mp3",
    img: "image/4.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 5",
    path: "song/5.mp3",
    img: "image/5.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 6",
    path: "song/6.mp3",
    img: "image/6.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 7",
    path: "song/7.mp3",
    img: "image/7.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 8",
    path: "song/8.mp3",
    img: "image/8.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 9",
    path: "song/9.mp3",
    img: "image/9.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 10",
    path: "song/10.mp3",
    img: "image/10.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 11",
    path: "song/11.mp3",
    img: "image/11.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 12",
    path: "song/12.mp3",
    img: "image/12.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 13",
    path: "song/13.mp3",
    img: "image/13.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 14",
    path: "song/14.mp3",
    img: "image/14.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 15",
    path: "song/15.mp3",
    img: "image/15.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 16",
    path: "song/16.mp3",
    img: "image/16.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 17",
    path: "song/17.mp3",
    img: "image/17.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 18",
    path: "song/18.mp3",
    img: "image/18.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 19",
    path: "song/19.mp3",
    img: "image/19.jpg",
    singer: "pata nahe kon"
  },
  {
    name: "Song 20",
    path: "song/20.mp3",
    img: "image/20.jpg",
    singer: "pata nahe kon"
  },
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};
