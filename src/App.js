import Container from "@mui/material/Container";
import Poem1 from "./components/Poem1";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-img"></div>
      <Container maxWidth="lg">
        <Poem1 />
      </Container>
    </>
  );
}

export default App;
