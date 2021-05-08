import React, { useRef, useEffect } from "react";
import ReactHlsPlayer from "react-hls-player";

const StreamShow = ({ stream }) => {
  const videoRef = useRef();

  return (
    <div>
      <ReactHlsPlayer
        playerRef={videoRef}
        src="https://live.craftstudios.eu:8443/stream/stream.m3u8"
      />
    </div>
  );
};

export default StreamShow;
