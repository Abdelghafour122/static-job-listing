import { Container } from "@mui/material";
import "./App.css";
import Core from "./components/Core";

function App() {
  return (
    <main className="App">
      <Container>
        <Core />
        <footer className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Abdelghafour122</a>.
        </footer>
      </Container>
    </main>
  );
}

export default App;
