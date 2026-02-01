
import { useState } from "react";
import "./CurrentTrack.css"

export const CurrentTrack = (props) => {
  const { currentTrackId, tracks } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = tracks.find(track => track.id === currentTrackId);

  return (
    <div className="current-track-container">
      {isPlaying ? <img src="/images/audio-animation.gif" /> : <img src="/images/audio.png" />}
      <div className="current-track">
        {currentTrack.author} - {currentTrack.title}<br></br>
        <audio src={currentTrack.url} 
          controls 
          autoPlay 
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </div>
  )
}