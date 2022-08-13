import { Header, Container, Group, Button,  Burger, Drawer } from "@mantine/core";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { NavbarMinimal } from "./Navbar";
import { useStyles } from "./Style";
import { SwitchToggle } from "./SwitchToggle";
import Logo from "../../images/logo.png"

export function HeaderAction() {

  const { classes } = useStyles();
   const [opened, setOpened] = useState(false);

  return (
    <Header
      height={60}
      sx={{ borderBottom: 0 }}
      mb={150}
      // className={classes.header}
    >
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="sm"
        size="sm"
      >
        <NavbarMinimal />
      </Drawer>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => setOpened(true)}
            className={classes.burger}
            size="sm"
          />
          {/* <Text
            weight={500}
            size="lg"
            sx={{ lineHeight: 1, fontFamily: "'Pacifico', cursive;" }}
            mr={3}
          >
            Thaabit Academy
          </Text> */}
          <img src={Logo}  alt="Logo" style={{ width:90, height: 100, marginTop: 20 }} />
        </Group>

        <MenuItem />
        <SwitchToggle />
        <Button radius="xl" sx={{ height: 30 }} className={classes.btn} mb={20}>
          Get early access
        </Button>
      </Container>
    </Header>
  );
}
