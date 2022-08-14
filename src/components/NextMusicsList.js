import currentCover from '../assets/AlbumCover.jpeg'

export default function NextMusicsList(props) {
  const { changeMusic } = props;
  const musicList = [
    {
      id: 0,
      cover: currentCover,
      lenght: 42,
      name: 'Steam Man Band',
      artist: 'Steam Powered Giraffe',
    },
    {
      id: 1,
      cover: currentCover,
      lenght: 210,
      name: 'Sound of Tomorrow',
      artist: 'Steam Powered Giraffe',
    },
    {
      id: 2,
      cover: currentCover,
      lenght: 144,
      name: 'Ice Cream Parade',
      artist: 'Steam Powered Giraffe',
    },
    {
      id: 3,
      cover: currentCover,
      lenght: 407,
      name: 'Captain Albert Alexander',
      artist: 'Steam Powered Giraffe',
    },
  ]

  return (
    <div className="nextMusicsList">
      <h3>Playing next</h3>
      {
        musicList.map(music => {
          return <NextMusic music={music} changeMusic={changeMusic} key={music.id} />
        })
      }
    </div>
  )
}

function NextMusic(props) {
  const { music, changeMusic } = props;

  function convertSecondsIntoMinutes(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time - (minutes * 60);
    return `${minutes}:${seconds}`
  }

  function triggerChangeMusic(music) {
    document.documentElement.style.setProperty(
      "--musicPlayed", "0%"
    )
    changeMusic(music);
  }

  return (
    <div className='nextMusic' onClick={() => triggerChangeMusic(music)}>
      <img src={music.cover} />
      <div>
        <div className='musicDetails'>
          <h3>{music.name}</h3>
          <small className="justDesktop separator">-</small>
          <small>{music.artist}</small>
        </div>
        <small>{convertSecondsIntoMinutes(music.lenght)}</small>
      </div>
    </div>
  )
}