import { useState } from "react";
import { CurrentTrack } from "./CurrentTrack";
import dataTracks from "./../../../data/tracks.json";
import { SearchingInput } from "./SearchingInput";
import { SortingButtons } from "./SortingButtons";

export const MyMusic = () => {
  const [tracks, setTracks] = useState(dataTracks);
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [currentSearchingValue, setCurrentSearchingValue] = useState("");
  const [isSortingByAuthor, setIsSortingByAuthor] = useState(false);
  const [isSortingByTitle, setIsSortingByTitle] = useState(false);

  let processedTracks = [...tracks].filter((track) => {
    const composition = `${track.author} ${track.title}`.toLowerCase();
    const search = currentSearchingValue.toLowerCase();
    return composition.includes(search);
  })

  if (isSortingByAuthor) {
    processedTracks = [...processedTracks].sort((a, b) => a.author.localeCompare(b.author))
  } else if (isSortingByTitle) {
    processedTracks = [...processedTracks].sort((a, b) => a.title.localeCompare(b.title))
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
      isSortingByTitle={isSortingByTitle}
      setIsSortingByTitle={setIsSortingByTitle}
      isSortingByAuthor={isSortingByAuthor}
      setIsSortingByAuthor={setIsSortingByAuthor}

    />
    {tracksList}
   </>
  );
};
