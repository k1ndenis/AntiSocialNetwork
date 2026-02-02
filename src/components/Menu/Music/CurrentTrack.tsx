
export const CurrentTrack = (props) => {

  const currentTrack = props.tracks.find(track => track.id === props.currentTrackId);

  return (
    <div>
      <div className="current-track">
        {currentTrack.author} - {currentTrack.title}<br></br>
        <audio src={currentTrack.url} 
          controls 
          autoPlay 
          onPlay={() => props.setIsPlaying(true)}
          onPause={() => props.setIsPlaying(false)}
        />
      </div>
    </div>
  )
}