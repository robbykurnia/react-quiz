import { cssVideo, cssVideoContainer } from "./style";
import { useRef, useEffect, useState } from 'react'

const Player = () => {
  const videoRef = useRef(null)
  const [duration, setDuration] = useState(null)
  const [currentTime, setCurrentTime] = useState(null)
  const [progress, setProgress] = useState(0)

  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }
  const handleMute = () => {
    videoRef.current.muted = !videoRef.current.muted
  }

  const generateDigit = (number, digit = 2) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: digit,
    })
  }

  const handleChangeCurrentTime = (e) => {
    const nextCurrentTime = (Number(e.currentTarget.value) * videoRef.current.duration) / 100
    videoRef.current.currentTime = nextCurrentTime
    setProgress(e.currentTarget.value)
  }

  const updateCurrentTime = () => {
    const minutesCurrentTime = generateDigit(Math.floor(videoRef.current.currentTime / 60))
    const secondsCurrentTime = generateDigit(Math.floor(videoRef.current.currentTime % 60))
    const currentVideo = videoRef.current.currentTime
    const durationVideo = videoRef.current.duration
    setProgress((currentVideo / durationVideo) * 100)
    setCurrentTime(`${minutesCurrentTime}:${secondsCurrentTime}`)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.ontimeupdate = () => {
        updateCurrentTime()
      }
      videoRef.current.onseeked = () => {
        updateCurrentTime()
      };
      videoRef.current.oncanplay = () => {
        setCurrentTime(videoRef.current.currentTime)
        const minutesDuration = generateDigit(Math.floor(videoRef.current.duration / 60))
        const secondsDuration = generateDigit(Math.floor(videoRef.current.duration % 60))
        setDuration(`${minutesDuration}:${secondsDuration}`)
      }
    }
  }, [])

  return (
    <div>
      <div className={cssVideoContainer}>
        <video
          ref={videoRef}
          className={cssVideo}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </div>
      <button type="button" onClick={handlePlay}>Play/Pause</button>
      <button type="button" onClick={handleMute}>Mute/Unmute</button>
      <input type="range" value={progress} onChange={handleChangeCurrentTime} />
      <span>{currentTime || '00:00'}/{duration || '00:00'}</span>
    </div>
  )
}

export default Player;
