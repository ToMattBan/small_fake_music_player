import ActualMusic from './components/ActualMusic';
import NextMusicsList from './components/NextMusicsList';
import currentCover from './assets/AlbumCover.jpeg'
import { useState } from 'react';

function App() {
  const [musicPlayingNow, setMusicPlayingNow] = useState({
    cover: currentCover,
    lenght: 252,
    name: 'Brass Googles',
    artist: 'Steam Powered Giraffe',
  });

  return (
    <main>
      <ActualMusic music={musicPlayingNow} />
      <NextMusicsList changeMusic={setMusicPlayingNow}/>
    </main>
  );
}

export default App;