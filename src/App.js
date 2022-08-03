import {AppShell, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import "./App.css"
import { useState } from "react";
import { HeaderAction } from "./components/Header/Header";
import { Hero } from "./components/HeroSection/Hero";
import { Welcome } from "./components/WelcomeSection/Welcome";
// import { NavbarMinimal } from "./Header/Navbar";

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
            // padding="md"
            header={<HeaderAction />}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
                padding: 0
              },
            })}
          >
            <Hero />
            <Welcome />
          </AppShell>

          {/* <HeaderAction />
          <Hero /> */}
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
