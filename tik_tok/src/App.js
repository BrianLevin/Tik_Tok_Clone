import React from "react";
import Video from "./Video";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video  url ="https://v16-webapp.tiktok.com/df6c3da81925a557497998a76674dde0/621939eb/video/tos/maliva/tos-maliva-ve-0068c799-us/db8e158fe2804721927cc0de73ed3077/?a=1988&br=2778&bt=1389&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3E7nz7Thu4B2DXq&l=20220225141941010223121046092B4803&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2t5ZTw6ZjR4OzMzZzczNEApOzc1NWRpZTs6NzdmNjU3O2dsXmVicjRvbF9gLS1kMS9zc15jMzQuNTNhYTM0NTZhX146Yw%3D%3D&vl=&vr="
        channel= "sssssangha"
        description=" too this works"
song="99 problems but react aint one"
likes={123}
messages={456}
shares={789}


        />
       
       <Video  url ="https://v16-webapp.tiktok.com/0be515372e44a725f37391b9f59c9832/621944db/video/tos/useast2a/tos-useast2a-ve-0068/c0a9e3b34e8f42bd8798023b0f459b0f/?a=1988&br=994&bt=497&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=2&er=&ft=XOQ9-3E7nz7ThncK2DXq&l=202202251506220101921631421531BE8C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anZ1bDk8Omw2bzMzOjczM0ApO2k4NjhpaWU0N2Y3ZjM0Omdnb3FeLXFtYWlfLS1iMTZzczJiMV5jYmJfMDA0YmAxY146Yw%3D%3D&vl=&vr="
        channel= "sssssangha"
        description=" too this works"
song="99 problems but react aint one"
likes={123}
messages={456}
shares={789}


        />
      </div>

      {/* App container*/}
      {/* videos */}
      {/* <Video />*/}
      {/* <Video />*/}
      {/* <Video />*/}
      {/* <Video />*/}
    </div>
  );
}

export default App;
