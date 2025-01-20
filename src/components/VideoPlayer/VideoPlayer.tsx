import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'

interface Props {
  showVideo: boolean
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>
}
const VideoPlayer = ({showVideo, setShowVideo}: Props) => {
  const player = useRef<HTMLDivElement>(null)

  const closePlayer = (e: React.MouseEvent<HTMLDivElement>) => {
    if(e.target === player.current){
      setShowVideo(false)
    }
  }
  return (
    <div className={`video-player ${showVideo?'': "hide"}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>

    </div>
  )
}

export default VideoPlayer
