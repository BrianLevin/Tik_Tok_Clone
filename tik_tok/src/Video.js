import React, { useRef, useState } from 'react'
import "./Video.css"


function Video() {
    const videoRef =  useRef(null);
const [playing, setPlaying] = useState(false);

const handleVideoPress = () => {
if(playing) {
    videoRef.current.pause();
    setPlaying(false);
} else{
    videoRef.current.play();
    setPlaying(true);
}
}

  return (
    <div className="video">
<video 
onClick={handleVideoPress}
className="video__player"
loop
ref={videoRef}
src="https://v16-webapp.tiktok.com/9518c1e504a00d99717589f5293b9c04/62169728/video/tos/maliva/tos-maliva-ve-0068c799-us/feba99cecc5b4e48b10e70228792a091/?a=1988&br=1244&bt=622&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3E7nz7Thl2RUDXq&l=202202231420490101890720720ADA61E7&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anJmNzk6Zmt5OjMzZzczNEApaGg1NGY4PDxkNzMzMzZpN2c0cWcvcjRfcnNgLS1kMS9zcy40XjMyMF8tNl9fYi4yLTY6Yw%3D%3D&vl=&vr="></video>
<VideoFooter />
{/* VideoFooter */}
{/*  VideoSidebar*/}

    </div>
  )
}

export default Video