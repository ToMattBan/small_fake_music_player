import ActualMusic from './components/ActualMusic';
import NextMusics from './components/NextMusics';
import currentCover from './assets/AlbumCover.jpeg'
import { useState } from 'react';

function App() {
  const [musicPlayingNow, setMusicPlayingNow] = useState({
    currentCover: currentCover,
    musicLenght: 252,
    musicName: 'Brass Googles',
    musicArtist: 'Steam Powered Giraffe',
  });

  return (
    <main>
      <ActualMusic music={musicPlayingNow} />
      <NextMusics />
    </main>
  );
}

export default App;