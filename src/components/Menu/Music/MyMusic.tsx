import { useState } from "react";
import { CurrentTrack } from "./CurrentTrack";
import dataTracks from "./../../../data/tracks.json";
import { SearchingInput } from "./SearchingInput";
import { SortingButtons } from "./SortingButtons";
import { AudioUploader } from "./AudioUploader";

export const MyMusic = () => {
  const [tracks, setTracks] = useState(dataTracks);
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
    <ul>
      {processedTracks.map((track) => 
        <li
          key={track.id}
          onClick={() => setCurrentTrackId(track.id)}
        >
          {track.author} - {track.title}
        </li>
      )}
    </ul>
  )

  return (
   <>
    {currentTrackId
      ? <CurrentTrack 
      currentTrackId={currentTrackId}
      tracks={tracks}
    />
      : null
    }
    <SearchingInput
      currentValue={currentSearchingValue}
      setCurrentValue={setCurrentSearchingValue}
    />
    <SortingButtons
      sorting={sorting}
      setSorting={setSorting}
    />
    <AudioUploader
      onAddTrack={onAddTrack}
    />
    {tracksList}
   </>
  );
};
