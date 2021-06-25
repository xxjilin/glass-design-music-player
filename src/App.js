import { useState, useEffect } from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "10,000 Reasons",
      artist: "Matt Redman",
      img_src: "./images/10000-reasons.jpg",
      src: "./songs/10000-reasons.mp3"
    },
    {
      title: "Flying Duck",
      artist: "Cherry Filter",
      img_src: "./images/flying-duck.jpg",
      src: "./songs/flying duck (오리 날다).mp3"
    },
    {
      title: "Kidult(어른 아이)",
      artist: "SEVENTEEN",
      img_src: "./images/seventeen-kidult.jpg",
      src: "./songs/[LYRICS가사] SEVENTEEN (세븐틴) - Kidult (어른 아이) [7th Mini Album Henggarae].mp3"
    },
     {
      title: "At my worst",
      artist: "Pink Sweat$",
      img_src: "./images/pink.jpg",
      src: "./songs/Pink Sweat$ - At My Worst (Official Video).mp3"
    },
    {
      title: "Love Letter (사랑 쪽지)",
      artist: "SEVENTEEN",
      img_src: "./images/SEVENTEEN_First_album_repackage_cover.png",
      src: "./songs/Love Letter (사랑 쪽지).mp3"
    },
    {
      title: "Here's to never growing up",
      artist: "Avril Lavigne",
      img_src: "./images/avril-heres-to-never-growing-up.webp",
      src: "./songs/Here's to never growing up Lyrics - Avril Lavigne.mp3"
    },
    {
      title: "BBIBBI(삐삐)",
      artist: "IU(아이유)",
      img_src: "./images/iu.jpg",
      src: "./songs/[MV] IU(아이유)BBIBBI(삐삐).mp3"
    },
    {
      title: "Paubaya",
      artist: "Moira Dela Torre",
      img_src: "./images/moira.jpg",
      src: "./songs/Paubaya - Moira Dela Torre (Lyrics).mp3"
    },
    {
      title: "Lifted",
      artist: "CL",
      img_src: "./images/lifted.jpg",
      src: "./songs/CL - 'LIFTED' MV.mp3"
    },
    {
      title: "The First Snow",
      artist: "EXO",
      img_src: "./images/exo.jpg",
      src: "./songs/첫 눈 The First Snow.mp3"
    },
    {
      title: "Earth",
      artist: "Lil Dicky",
      img_src: "./images/earth.png",
      src: "./songs/Lil Dicky - Earth (Official Music Video).mp3"
    },
    {
      title: "두 번째 고백 (2nd Confession)",
      artist: "BTOB",
      img_src: "./images/BTOB_2nd_Confession_Single_Cover.jpg",
      src: "./songs/BTOB - 두 번째 고백 (2nd Confession) Official Music Video.mp3"
    },
    {
      title: "Love me for what I am",
      artist: "Carpenters",
      img_src: "./images/carpenter-lmfwia.jpg",
      src: "./songs/love-me-for-what-I-am.mp3"
    },
    {
      title: "Life Goes On",
      artist: "BTS",
      img_src: "./images/BTS_-_Life_Goes_On_(Vinyl).png",
      src: "./songs/life-goes-on.mp3"
    },
    {
      title: "SEVENTEEN(세븐틴) - Kidult(어른 아이)",
      artist: "SEVENTEEN",
      img_src: "./images/seventeen-kidult.jpg",
      src: "./songs/[LYRICS가사] SEVENTEEN (세븐틴) - Kidult (어른 아이) [7th Mini Album Henggarae].mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length -1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <Player 
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs} />
    </div>
  );
}

export default App;
