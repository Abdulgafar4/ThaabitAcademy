import { Box, Button, NavLink, Popover, Text } from "@mantine/core";
import {
  IconHome,
  IconNote,
  IconInfoCircle,
  IconQuestionMark,
  IconCoin,
} from "@tabler/icons";
// import { Link, useLocation } from "react-router-dom";
import { useStyles } from "./Style";

export function NavbarMinimal() {
  const { classes } = useStyles();
  // const location = useLocation();

  return (
    <Box sx={{ width: 200 }} mt={150}>
      <NavLink
        label="Home"
        icon={<IconHome size={26} stroke={1.5} />}
        variant="subtle"
        className={classes.box}
        component="a"
        href="/"
      />
      <NavLink
        label="Courses"
        icon={<IconNote size={26} stroke={1.5} />}
        childrenOffset={28}
        className={classes.box}
      >
        <NavLink
          label="Qur'an Recitation & Meorization"
          className={classes.box}
        />
        <NavLink label="Tajweed" className={classes.box} />
        <NavLink label="Tawheed & Fiqh" className={classes.box} />
        <NavLink label="Hadeeth" className={classes.box} />
        <NavLink label="Literacy" className={classes.box} />
        <NavLink label="Seerah" className={classes.box} />
      </NavLink>

      <NavLink
        label="About"
        icon={<IconInfoCircle size={26} stroke={1.5} />}
        className={classes.box}
        // component="a"
        // href="/about"
        // active={location.pathname === "/about"}
      />
      <NavLink
        label="Fee and Plans"
        icon={<IconCoin size={26} stroke={1.5} />}
        className={classes.box}
      />
      <NavLink
        label="Support"
        icon={<IconQuestionMark size={26} stroke={1.5} />}
        childrenOffset={28}
        className={classes.box}
      >
        <NavLink label="FAQ" className={classes.box} />
        <NavLink label="Contact Us" className={classes.box} />
        <NavLink label="Donate" className={classes.box} />
      </NavLink>
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button radius="xl" sx={{ height: 30 }} m={30} mt="50%">
            Get early access
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">
            Scrolldown and click the WhatsApp icon to get started.
          </Text>
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
}
