import {
  createStyles,
  Accordion,
  Container,
  Title,
  Center,
  Divider,
} from "@mantine/core";
import { IconDiamond } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  title: {
    fontWeight: 500,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Playfair Display, serif`,

    "@media (max-width: 520px)": {
      fontSize: 28,
    },
  },

    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export function FaqWithImage() {
  const { classes } = useStyles();
  return (
    // <div className={classes.wrapper}>
      <Container size="sm" className={classes.wrapper}>
        <Center>
          <Title order={2} className={classes.title}>
            Why You Should Apply.
          </Title>
        </Center>
        <Center mt={30}>
          <Divider
            size="sm"
            label={<IconDiamond size={10} />}
            labelPosition="center"
          />
        </Center>
        <Accordion
          mt={60}
          chevronPosition="right"
          defaultValue="reset-password"
          variant="separated"
        >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>100% Online</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>
              Flexible Classes to Suit Your Schedule
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>
              One-on-one Learning Mechanism
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>
              Evaluation report systems
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>
              Easy and Secure Payment
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    // </div>
  );
}
