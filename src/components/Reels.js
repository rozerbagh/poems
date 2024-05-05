/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import firstVideo from "../videos/1.mp4";
import secondVideo from "../videos/2.mp4";
import thirdVideo from "../videos/3.mp4";
import fourthVideo from "../videos/4.mp4";
import fifthVideo from "../videos/5.mp4";
import sixthVideo from "../videos/6.mp4";
import sevethVideo from "../videos/7.mp4";
import eighthVideo from "../videos/8.mp4";
function Reel({ videourl, id, handleFinish, active }) {
  const videoRef = useRef(null);
  const [playbackStarted, setPlaybackStarted] = useState(false);

  const handleVideoClick = () => {
    if (!playbackStarted) {
      videoRef.current
        .play()
        .then(() => {
          setPlaybackStarted(true);
          videoRef.current.fullScreen()
        })
        .catch((error) => {
          console.error("Failed to start video playback:", error);
        });
    }
  };
  useEffect(() => {
    // Start playing the video when it's loaded and ready
    try {
      if (videoRef.current && active) {
        videoRef.current.click();
        videoRef.current.play();
      }
    } catch (error) {
      
    }
  }, [videoRef.current, active]);
  return (
    active && (
      <div className="video-reel-box">
        <video
          className="video-reel"
          id={id}
          // controls={true}
          ref={videoRef}
          onClick={handleVideoClick}
          onLoadedMetadata={(e) => {
            console.log(videoRef.current.duration, id);
          }}
          onEnded={handleFinish}
        >
          <source src={videourl} type="video/mp4" />
        </video>
      </div>
    )
  );
}

export default function Reels() {
  const videos = [
    { name: "1", url: firstVideo },
    { name: "2", url: secondVideo },
    { name: "3", url: thirdVideo },
    { name: "4", url: fourthVideo },
    { name: "5", url: fifthVideo },
    { name: "6", url: sixthVideo },
    { name: "7", url: sevethVideo },
    // { name: "8", url: eighthVideo },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="video-wrapper">
      {/* <button className="video-prev">PREV</button> */}
      {videos.map((_vid, idx) => (
        <Reel
          active={currentIndex === idx}
          key={idx}
          videourl={_vid.url}
          id={"videos_id_" + idx}
          handleFinish={() => {
            if (videos.length >= 0 && currentIndex < videos.length - 1) {
              setCurrentIndex((ps) => ps + 1);
            } else {
              setCurrentIndex(0);
            }
          }}
        />
      ))}
      {currentIndex === videos.length && <button className="reload-btn">Reload</button>}
    </div>
  );
}
