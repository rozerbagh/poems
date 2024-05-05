import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Poem1 from "./components/Poem1";
import Reels from "./components/Reels";
import "./App.css";

function App() {
  const [isVideo, setIsVideo] = useState(false);
  useEffect(() => {
    if (window.location.pathname.includes("poems")) {
      setIsVideo(true);
    } else {
      setIsVideo(false);
    }
  }, []);
  return !isVideo ? (
    <Reels />
  ) : (
    <>
      <div className="bg-img"></div>
      <Container maxWidth="lg">
        <Poem1 />
      </Container>
    </>
  );
}

export default App;
