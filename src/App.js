import {AppShell, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import "./App.css"
import { useState } from "react";
import { HeaderAction } from "./components/Header/Header";
import HomePage from "./pages/Home";

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
           <HomePage />
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
