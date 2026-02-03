import { useMemo, useState } from "react";
import { CurrentTrack } from "./CurrentTrack";
import dataTracks from "./../../../data/tracks.json";
import { SearchingInput } from "./SearchingInput";
import { AudioUploader } from "./AudioUploader";
import { TracksList } from "./TracksList";
import "./MyMusic.css"

export const MyMusic = () => {
  const [tracks, setTracks] = useState(() => {
    const saved = localStorage.getItem("tracks");
    return saved ? JSON.parse(saved) : dataTracks;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [currentSearchingValue, setCurrentSearchingValue] = useState("");

  const onAddTrack = (newTrack) => {
    const updatedTracks = [...tracks];
    updatedTracks.push(newTrack);
    setTracks(updatedTracks);
    localStorage.setItem("tracks", JSON.stringify(updatedTracks));
  }

  return (
  <>
    <div className="current-track-container">
      {isPlaying ? <img src="/images/audio-animation.gif" /> : <img src="/images/audio.png" />}
      {currentTrackId
        ? <CurrentTrack 
        currentTrackId={currentTrackId}
        tracks={tracks}
        setIsPlaying={setIsPlaying}
      />
        : null
      }
    </div>
    <SearchingInput
      currentValue={currentSearchingValue}
      setCurrentValue={setCurrentSearchingValue}
    />
    <TracksList
      tracks={tracks}
      currentSearchingValue={currentSearchingValue}
      currentTrackId={currentTrackId}
      setCurrentTrackId={setCurrentTrackId}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
    />
    <AudioUploader
      onAddTrack={onAddTrack}
    />
  </>
  );
};
