import { SortingButtons } from "./SortingButtons";
import { useTrackProcessor } from "../../../hooks/useTrackProcessor";

export const TrackList = (props) => {
  const { processedTracks, sorting, setSorting } = useTrackProcessor(
    props.tracks,
    props.currentSearchingValue
  )

  if (props.tracks.length === 0) return (
    <ul className="tracklist">
      <li>Список треков пуст</li>
    </ul>
  )

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
            key={track.id}
            onClick={props.currentTrackId === track.id
                ? () => {
                  props.setCurrentTrackId(null);
                  props.setIsPlaying(false);
                } 
                : () => props.setCurrentTrackId(track.id)}
          >
            <button className="tracklist-buttons">
              {props.isPlaying && props.currentTrackId === track.id ? "⏸" : "▶"}
            </button>
            <li>
              {track.author} - {track.title}
            </li>
            <button 
              className="tracklist-buttons"
              onClick={(e) => {
                e.stopPropagation();
                props.onDeleteTrack(track.id);
              }}
            >
              x
            </button>
          </div>
        )
        )}
      </ul>
    </>
  )
}