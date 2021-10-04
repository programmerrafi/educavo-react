import React from "react";
import YouTube from "react-youtube";

const Extra = () => {
  // https://www.youtube.com/watch?v=sTz__zyOhds

  const _onReady = (event) => {
    event.target.playVideo();
    // console.log(event.target);
  };

  const opts = {
    height: "515",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube videoId="sTz__zyOhds" opts={opts} onReady={_onReady} />;
    </div>
  );
};

export default Extra;
