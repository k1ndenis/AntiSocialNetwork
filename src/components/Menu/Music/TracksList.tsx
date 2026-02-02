import { useMemo, useState } from "react";
import { SortingButtons } from "./SortingButtons";

export const TracksList = (props) => {

  const [sorting, setSorting] = useState(1);
  const SORT_MODES = {
    AUTHOR_ASC: 1,
    AUTHOR_DESC: 2,
    TITLE_ASC: 3,
    TITLE_DESC: 4
  };

  const processedTracks = useMemo(() => {
      
      const result = [...props.tracks].filter((track) => {
        const composition = `${track.author} ${track.title}`.toLowerCase();
        const search = props.currentSearchingValue.toLowerCase();
        return composition.includes(search);
      });
  
      if (sorting === SORT_MODES.AUTHOR_ASC) {
        result.sort((a, b) => a.author.localeCompare(b.author));
      } else if (sorting === SORT_MODES.AUTHOR_DESC) {
        result.sort((a, b) => b.author.localeCompare(a.author));
      } else if (sorting === SORT_MODES.TITLE_ASC) {
        result.sort((a, b) => a.title.localeCompare(b.title))
      } else if (sorting === SORT_MODES.TITLE_DESC) {
        result.sort((a, b) => b.title.localeCompare(a.title))
      }
  
      return result;
    }, [props.tracks, props.currentSearchingValue, sorting])

  return (
    <>
      <SortingButtons
        sorting={sorting}
        setSorting={setSorting}
      />
      <ul className="tracklist">
        {processedTracks.map((track) => (
          <div 
            className="track-container"
            onClick={props.currentTrackId === track.id
                ? () => {
                  props.setCurrentTrackId(null);
                  props.setIsPlaying(false);
                } 
                : () => props.setCurrentTrackId(track.id)}
          >
            <span className="play-button">
              {props.isPlaying && props.currentTrackId === track.id ? "⏸" : "▶"}
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
    </>
  )
}