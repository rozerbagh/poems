/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import firstVideo from "../videos/1.mp4";
import secondVideo from "../videos/2.mp4";
// import thirdVideo from "../videos/3.mp4";
import fourthVideo from "../videos/4.mp4";
import fifthVideo from "../videos/5.mp4";
import sixthVideo from "../videos/6.mp4";
import sevethVideo from "../videos/7.mp4";
// import eighthVideo from "../videos/8.mp4";
import ninthVideo from "../videos/9.mp4";
// import tenthVideo from "../videos/10.mp4";
// import eleventhVideo from "../videos/11.mp4";
// import twelvethVideo from "../videos/12.mp4";
import thirteenthVideo from "../videos/13.mp4";
function Reel({
  videourl,
  id,
  handleFinish,
  active,
  // handleSpeech
}) {
  const videoRef = useRef(null);
  const [playbackStarted, setPlaybackStarted] = useState(false);

  const handleVideoClick = () => {
    if (!playbackStarted) {
      videoRef.current
        .play()
        .then(() => {
          setPlaybackStarted(true);
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
        // videoRef.current.play();
        // handleSpeech();
      }
    } catch (error) {}
  }, [videoRef.current, active]);
  return (
    active && (
      <div className="video-reel-box">
        <video
          className="video-reel"
          id={id}
          autoPlay={true}
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
    { name: "9", url: ninthVideo },
    { name: "4", url: fourthVideo },
    { name: "5", url: fifthVideo },
    { name: "5", url: fifthVideo },
    { name: "2", url: secondVideo },
    { name: "6", url: sixthVideo },
    { name: "1", url: firstVideo },
    { name: "7", url: sevethVideo },
    { name: "13", url: thirteenthVideo },
    // { name: "3", url: thirdVideo },
    // { name: "11", url: eleventhVideo },
    // { name: "10", url: tenthVideo },
    // { name: "8", url: eighthVideo },
    // { name: "12", url: twelvethVideo },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const recognition = useRef(null);
  const handleSpeechRecognition = () => {
    try {
      if (
        "SpeechRecognition" in window ||
        "webkitSpeechRecognition" in window
      ) {
        recognition.current = new (window.SpeechRecognition ||
          window.webkitSpeechRecognition)();
        recognition.current.lang = "en-US"; // Set language
        recognition.current.onstart = function () {
          console.log("Listening...");
        };
        recognition.current.onresult = function (event) {
          const transcript = event.results[0][0].transcript;
          console.log(`You said: ${transcript}`, event);
          if (transcript.toLowerCase().includes("next")) {
            // handleOnFinish();
          }
        };
        recognition.current.onerror = function (event) {
          const _error = "Error occurred: " + event.error;
          console.log(_error, "::: recognition.error :::");
        };
      } else {
        console.log("Speech recognition is not supported in your browser.");
      }
    } catch (error) {}
  };
  useEffect(() => {
    handleSpeechRecognition();
    return () => {
      recognition.current.stop();
    };
  }, []);
  const handleOnFinish = () => {
    setCurrentIndex((ps) => {
      if (videos.length >= 0 && ps < videos.length - 1) {
        ps = ps + 1;
      } else {
        ps = 0;
      }
      return ps;
    });
  };
  return (
    <div className="video-wrapper">
      {videos.map((_vid, idx) => (
        <Reel
          // handleSpeech={() => recognition.current.start()}
          active={currentIndex === idx}
          key={idx}
          videourl={_vid.url}
          id={"videos_id_" + idx}
          handleFinish={() => handleOnFinish()}
        />
      ))}
      {currentIndex === videos.length && (
        <button className="reload-btn">Reload</button>
      )}
    </div>
  );
}
