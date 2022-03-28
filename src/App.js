import { Container, ThemeProvider } from "@mui/material";
import "./App.css";
import Core from "./components/Core";
import theme from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="app">
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
    </ThemeProvider>
  );
}

export default App;
