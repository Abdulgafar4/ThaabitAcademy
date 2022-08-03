import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
} from "@mantine/core";
import Bismillah from "../../images/bismillah.png";
import Masjid from "../../images/masjid.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 300,
    paddingBottom: 250,
    backgroundImage: `url(${Masjid})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    // "@media (max-width: 520px)": {
    //   paddingTop: 80,
    //   paddingBottom: 50,
    // },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "center",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          <img src={Bismillah} alt="Bismillah" />
        </Title>
        <Title className={classes.title}>
          Islamic Education is the Righteous Path and the{" "}
          <Text component="span" inherit className={classes.highlight}>
            Ultimate Destiny
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            The goal of Zayd Ibn Thaabit Academy is to stimulate the spiritual
            and intellectual strengths of each child. Students are encouraged to
            strive to achieve their full potential.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
