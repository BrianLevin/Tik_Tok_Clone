import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from "./VideoFooter";

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
src="https://v16-webapp.tiktok.com/58d72512daf2367451bf97256c30f590/62183046/video/tos/useast2a/tos-useast2a-ve-0068c002/e83b0c216e464f13ac45fc0629b869b3/?a=1988&br=1206&bt=603&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=2&er=&ft=XOQ9-3E7nz7ThVFgUDXq&l=20220224192622010192053130145A1432&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anN1czM6ZnR3ODMzNzczM0ApZ2g6OmlkOmVkN2U6aGc1PGdyaTNucjRnYGBgLS1kMTZzcy1fYF42NGNgYDNjLS9eL2E6Yw%3D%3D&vl=&vr="></video>
<VideoFooter />
{/*  VideoSidebar*/}

    </div>
  )
}

export default Video