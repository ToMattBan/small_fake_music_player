import { useState } from "react";
import play_icon from "../assets/play_icon.svg"
import pause_icon from "../assets/pause_icon.svg"

export default function ActualMusic(props) {
  const { currentCover, musicLenght, musicName, musicArtist } = props.music;
  const [musicPlayed, setMusicPlayed] = useState(0);
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <img src={currentCover} className="currentCover" />
      <div>
        <Icon playing={playing} setPlayingState={setPlaying} />
        <MusicBar playing={playing} musicLenght={musicLenght} musicPlayed={musicPlayed} setMusicPlayed={setMusicPlayed} />
        <MusicDetails musicName={musicName} musicArtist={musicArtist} />
      </div>
    </div>
  )
}

function Icon(props) {
  const { playing, setPlayingState } = props;

  return <img className="playResumeIcon" onClick={() => setPlayingState(!playing)} src={playing ? pause_icon : play_icon} />
}

function MusicBar(props) {
  const { playing, musicLenght, musicPlayed, setMusicPlayed } = props;
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
        "--musicPlayed", percentageMusicPlayed(musicLenght, musicPlayed)
      )

      setMusicPlayed(musicPlayed + 1)
    }
  }, 1000)

  return (
    <div className="musicBar">
      <div className="musicLenght">
        <span>0:00</span>
        <span>{convertSecondsIntoMinutes(musicLenght)}</span>
      </div>
      <div className="bar"></div>
    </div>
  )
}

function MusicDetails(props) {
  const { musicName, musicArtist } = props;

  return (
    <div className="musicDetails">
      <h2 className="musicName">{musicName}</h2>
      <small>by</small>
      <h4 className="musicArtist">{musicArtist}</h4>
    </div>
  )
}