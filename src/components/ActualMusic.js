import { useState } from "react";
import play_icon from "../assets/play_icon.svg"
import pause_icon from "../assets/pause_icon.svg"

export default function ActualMusic(props) {
  const { cover, lenght, name, artist } = props.music;
  const [musicPlayed, setMusicPlayed] = useState(0);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="actualMusic">
      <img src={cover} className="currentCover" />
      <div className="musicController">
        <div>
          <Icon playing={playing} setPlayingState={setPlaying} />
          <MusicBar playing={playing} lenght={lenght} musicPlayed={musicPlayed} setMusicPlayed={setMusicPlayed} />
        </div>
        <MusicDetails name={name} artist={artist} />
      </div>
    </div>
  )
}

function Icon(props) {
  const { playing, setPlayingState } = props;

  return <img className="playResumeIcon" onClick={() => setPlayingState(!playing)} src={playing ? pause_icon : play_icon} />
}

function MusicBar(props) {
  const { playing, lenght, musicPlayed, setMusicPlayed } = props;
  const documentStyle = document.documentElement.style;

  function convertSecondsIntoMinutes(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time - (minutes * 60);
    return `${minutes}:${seconds}`
  }

  function percentageMusicPlayed(totalTime, playedTime) {
    return `${100 / totalTime * playedTime}%`
  }

  setTimeout(() => {
    if (playing) {
      documentStyle.setProperty(
        "--musicPlayed", percentageMusicPlayed(lenght, musicPlayed)
      )

      setMusicPlayed(musicPlayed + 1)
    }
  }, 1000)

  return (
    <div className="musicBar">
      <div className="musicLenght">
        <span className="justMobile">0:00</span>
        <span>{convertSecondsIntoMinutes(lenght)}</span>
      </div>
      <div className="bar"></div>
    </div>
  )
}

function MusicDetails(props) {
  const { name, artist } = props;

  return (
    <div className="musicDetails">
      <h2 className="musicName">{name}</h2>
      <small className="justMobile">by</small>
      <small className="justDesktop separator">-</small>
      <h4 className="musicArtist">{artist}</h4>
    </div>
  )
}