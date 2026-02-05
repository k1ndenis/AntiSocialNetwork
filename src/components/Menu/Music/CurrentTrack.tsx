
export const CurrentTrack = (props) => {

  if (!props.currentTrackId) {
    return (
      <>
        <div className="current-track">
          <span>Выберите трек</span>
        </div>
      </>
    )
  }

  const currentTrack = props.tracks.find(track => track.id === props.currentTrackId);

  const currentTrackDisplay = (
    <div className="current-track">
      {props.isPlaying
        ? (
          <>
            <div className="scroll-wrapper">
              <span>{currentTrack.author} - {currentTrack.title}</span>
              <span>{currentTrack.author} - {currentTrack.title}</span>
            </div>
          </>
        ) : (
          <>
            <span>{currentTrack.author} - {currentTrack.title}</span>
          </>
        )}
        <audio src={currentTrack.url} 
          controls 
          autoPlay 
          onPlay={() => props.setIsPlaying(true)}
          onPause={() => props.setIsPlaying(false)}
        />
      </div>
  )

  return (
    <>
      {currentTrackDisplay}
    </>
  )
}