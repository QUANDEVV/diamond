import React from 'react'

import { useRef , useState } from 'react'
import VideoFooter from './VideoFooter'

const Video = () => {
  const [ playing, setPlaying ] = useState(false)

  const videoRef = useRef(null)
  const onVideoPress = () => {
    if (playing) {
    videoRef.current.pause() 
    setPlaying(false)
  } else {
    videoRef.current.play()
    setPlaying(true)
  }

  }

  return (
    <div className='video'>
    
     <video className="video__player" 
     loop
     autoPlay
     muted
     controls
     onClick={onVideoPress}
     
    ref={videoRef}
     src="https://v16-webapp.tiktok.com/480a099998d9bdeb7b4df3dea52dca02/62ab6dda/video/tos/useast2a/tos-useast2a-pve-0068/1c18a9fe21dd468284e6b5f2837a44e3/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=1984&amp;bt=992&amp;btag=80000&amp;cs=0&amp;ds=3&amp;ft=eXd.6Hj9Myq8Z.OBFwe2N0rELl7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;rc=ZDhnZTs3NWk2MzxnOWk7M0BpM3h1dDw6ZnB0OzMzNzczM0AvLTYzLy8xXl4xMzJgMzMxYSNvNGhocjQwaWpgLS1kMTZzcw%3D%3D&amp;l=202206161151270101920442171A043692">
     

     </video>
     <VideoFooter />
    </div>
  )
}

export default Video




