import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Container from "@mui/material/Container";
import Poem1 from "./components/Poem1";
import Reels from "./components/Reels";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/poems"
          element={
            <>
              <div className="bg-img"></div>
              <Container maxWidth="lg">
                <Poem1 />
              </Container>
            </>
          }
        />
        <Route path="/" element={<Reels />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
