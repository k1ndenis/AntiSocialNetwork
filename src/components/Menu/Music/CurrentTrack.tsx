
export const CurrentTrack = (props) => {
  const { currentTrackId, tracks, setIsPlaying } = props;

  const currentTrack = tracks.find(track => track.id === currentTrackId);

  return (
    <div>
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