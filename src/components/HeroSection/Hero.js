import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  Card,
  Center,
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
    textAlign: "center",
    fontWeight: 800,
    fontSize: 80,
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
  boxStyles: {
    borderRadius: 10,
    padding: "20px 15px",
    border: "1px solid transparent",
  },

  conHighlight:{
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.blue[7], 0.25)
        : theme.colors.blue[5],
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[6] : theme.colors.blue[3]
    }`,
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
        <Title className={classes.highlight}>العلم قبل القول والعمل</Title>
        <Title className={classes.title}>
          Knowledge precedes speech and action.
          {/* <Text component="span" inherit className={classes.highlight}>
            العلم قبل القول والعمل
          </Text> */}
        </Title>

        {/* <Container size={640} className={classes.conHighlight}>
          <Box className={classes.boxStyles}>
            <Text size="lg" className={classes.description}>
              A distinguished Academy aimed to instill Islamic etiquettes and
              values.
            </Text>
          </Box>
        </Container> */}
        <Container size={640}>
          <Card>
            <Center>
              <Text size="sm" color="dimmed">
                A distinguished Academy aimed to instill Islamic etiquettes and
                values.
              </Text>
            </Center>
          </Card>
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
