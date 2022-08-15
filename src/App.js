import {AppShell, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import "./App.css"
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderAction } from "./components/Header/Header";
import HomePage from "./pages/Home";
import About from "./pages/About";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <div>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colors: {
              brand: ["#FFFFFF"],
            },
            secondaryColor: "brand",
            colorScheme,
          }}
        >
          <AppShell
            header={<HeaderAction />}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
                padding: 0,
              },
            })}
          >
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Router>
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
