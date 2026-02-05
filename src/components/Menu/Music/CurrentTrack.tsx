import "./CurrentTrack.css"

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
      <div></div>
      {props.isPlaying
        ? (
          <div className="scroll-wrapper-container">
            <div className="scroll-wrapper">
              <span>{currentTrack.author} - {currentTrack.title}</span>
              <span>{currentTrack.author} - {currentTrack.title}</span>
              <span>{currentTrack.author} - {currentTrack.title}</span>
              <span>{currentTrack.author} - {currentTrack.title}</span>
              <span>{currentTrack.author} - {currentTrack.title}</span>
              <span>{currentTrack.author} - {currentTrack.title}</span>
              <span>{currentTrack.author} - {currentTrack.title}</span>
              <span>{currentTrack.author} - {currentTrack.title}</span>
              <span>{currentTrack.author} - {currentTrack.title}</span>
              <span>{currentTrack.author} - {currentTrack.title}</span>
            </div>
          </div>
        ) : (
          <div className="scroll-wrapper-container">
            <span>{currentTrack.author} - {currentTrack.title}</span>
          </div>
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