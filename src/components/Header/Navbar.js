import { Box, Button, NavLink } from "@mantine/core";
import {
  IconHome,
  IconNote,
  IconInfoCircle,
  IconQuestionMark,
  IconCoin,
} from "@tabler/icons";
import { useStyles } from "./Style";

export function NavbarMinimal() {
  const { classes } = useStyles();
  return (
    <Box sx={{ width: 200 }} mt={150}>
      <NavLink
        label="Home"
        icon={<IconHome size={26} stroke={1.5} />}
        variant="subtle"
        className={classes.box}
      />
      <NavLink
        label="Learn"
        icon={<IconNote size={26} stroke={1.5} />}
        childrenOffset={28}
        className={classes.box}
      >
        <NavLink label="Documentation" className={classes.box} />
        <NavLink label="Resources" className={classes.box} />
        <NavLink label="Community" className={classes.box} />
        <NavLink label="Blog" className={classes.box} />
      </NavLink>

      <NavLink
        label="About"
        icon={<IconInfoCircle size={26} stroke={1.5} />}
        className={classes.box}
      />
      <NavLink
        label="Pricing"
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
        <NavLink label="Book a demo" className={classes.box} />
        <NavLink label="Forums" className={classes.box} />
      </NavLink>
      <Button radius="xl" sx={{ height: 30 }} m={30} mt="50%">
        Get early access
      </Button>
    </Box>
  );
}
