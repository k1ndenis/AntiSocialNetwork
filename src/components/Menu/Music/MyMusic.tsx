import { useEffect, useState } from "react";
import { get, set } from "idb-keyval"
import { CurrentTrack } from "./CurrentTrack";
import dataTracks from "./../../../data/tracks.json";
import { SearchingInput } from "./SearchingInput";
import { AudioUploader } from "./AudioUploader";
import { TrackList } from "./TrackList";
import "./MyMusic.css"

export const MyMusic = () => {
  const [tracks, setTracks] = useState(dataTracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [currentSearchingValue, setCurrentSearchingValue] = useState("");

  useEffect(() => {
    const loadTracks = async () => {
      const savedTracks = await get("tracks");
      if (savedTracks) {
        setTracks(savedTracks);
      }
    };
    loadTracks();
  }, []);

  const onAddTrack = async (newTrack) => {
    const updatedTracks = [...tracks];
    updatedTracks.unshift(newTrack);
    setTracks(updatedTracks);
    await set("tracks", updatedTracks);
  }

  const onDeleteTrack = async (id) => {
    const updatedTracks = tracks.filter(track => track.id !== id);
    setTracks(updatedTracks);
    await set("tracks", updatedTracks);
  }

  return (
  <div className="music-container">
    <div className="current-track-container">
      <CurrentTrack 
        currentTrackId={currentTrackId}
        tracks={tracks}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
    <SearchingInput
      currentValue={currentSearchingValue}
      setCurrentValue={setCurrentSearchingValue}
    />
    <TrackList
      tracks={tracks}
      currentSearchingValue={currentSearchingValue}
      currentTrackId={currentTrackId}
      setCurrentTrackId={setCurrentTrackId}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      onDeleteTrack={onDeleteTrack}
    />
    <AudioUploader
      onAddTrack={onAddTrack}
    />
  </div>
  );
};
