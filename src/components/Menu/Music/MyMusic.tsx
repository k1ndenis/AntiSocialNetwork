import { useState } from "react";
import { CurrentTrack } from "./CurrentTrack";
import dataTracks from "./../../../data/tracks.json";
import { SearchingInput } from "./SearchingInput";
import { SortingButtons } from "./SortingButtons";
import { AudioUploader } from "./AudioUploader";
import "./MyMusic.css"

export const MyMusic = () => {
  const [tracks, setTracks] = useState(dataTracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [currentSearchingValue, setCurrentSearchingValue] = useState("");

  const onAddTrack = (newTrack) => {
    const updatedTracks = [...tracks];
    updatedTracks.push(newTrack);
    setTracks(updatedTracks);
  }

  const SORT_MODES = {
    AUTHOR_ASC: 1,
    AUTHOR_DESC: 2,
    TITLE_ASC: 3,
    TITLE_DESC: 4
  };

  const [sorting, setSorting] = useState(1);

  let processedTracks = [...tracks].filter((track) => {
    const composition = `${track.author} ${track.title}`.toLowerCase();
    const search = currentSearchingValue.toLowerCase();
    return composition.includes(search);
  })

  if (sorting === SORT_MODES.AUTHOR_ASC) {
    processedTracks = [...processedTracks].sort((a, b) => a.author.localeCompare(b.author));
  } else if (sorting === SORT_MODES.AUTHOR_DESC) {
    processedTracks = [...processedTracks].sort((a, b) => b.author.localeCompare(a.author));
  } else if (sorting === SORT_MODES.TITLE_ASC) {
    processedTracks = [...processedTracks].sort((a, b) => a.title.localeCompare(b.title))
  } else if (sorting === SORT_MODES.TITLE_DESC) {
    processedTracks = [...processedTracks].sort((a, b) => b.title.localeCompare(a.title))
  }

  const tracksList = (
    <ul className="tracklist">
      {processedTracks.map((track) => (
        <div 
          className="track-container"
          onClick={currentTrackId === track.id
              ? () => {
                setCurrentTrackId(null);
                setIsPlaying(false);
              } 
              : () => setCurrentTrackId(track.id)}
        >
          <span className="play-button">
            {isPlaying && currentTrackId === track.id ? "⏸" : "▶"}
          </span>
          <li
            key={track.id}
          >
            {track.author} - {track.title}
          </li>
        </div>
      )
      )}
    </ul>
  )

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
    <SortingButtons
      sorting={sorting}
      setSorting={setSorting}
    />
    {tracksList}
    <AudioUploader
      onAddTrack={onAddTrack}
    />
  </>
  );
};
