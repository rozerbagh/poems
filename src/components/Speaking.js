/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";

function Speaking() {
  const startRecognitionButton = useRef(null);
  const transcriptDiv = useRef(null);
  const recognition = useRef(null);
  useEffect(() => {
    if (startRecognitionButton.current && transcriptDiv.current) {
      if (
        "SpeechRecognition" in window ||
        "webkitSpeechRecognition" in window
      ) {
        debugger
        recognition.current = new (window.SpeechRecognition ||
          window.webkitSpeechRecognition)();

        recognition.current.lang = "en-US"; // Set language

        recognition.current.onstart = function () {
          console.log("Listening...");
          // transcriptDiv.innerHTML = "Listening...";
        };

        recognition.current.onresult = function (event) {

          const transcript = event.results[0][0].transcript;
          // transcriptDiv.innerHTML = `You said: ${transcript}`;
          console.log(`You said: ${transcript}`, event);
        };

        recognition.current.onerror = function (event) {
          // transcriptDiv.innerHTML = "Error occurred: " + event.error;
        };
      } else {
        // Browser doesn't support SpeechRecognition
        transcriptDiv.innerHTML =
          "Speech recognition is not supported in your browser.";
        startRecognitionButton.disabled = true;
      }
    }
  }, [startRecognitionButton.current, transcriptDiv.current]);
  return (
    <>
      <button
        className="reload-btn"
        id="startRecognition"
        ref={startRecognitionButton}
        onClick={() => recognition.current.start()}
      >
        Start Recognition
      </button>
      <div id="transcript" ref={transcriptDiv}></div>
    </>
  );
}

export default Speaking;
