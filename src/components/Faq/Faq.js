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

// const placeholder =
//   "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

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
          my="md"
          size="md"
          label={<IconDiamond size={10} />}
          labelPosition="center"
        />
      </Center>
      <Accordion
        mt={60}
        chevronPosition="right"
        // defaultValue="reset-password"
        variant="separated"
      >
        <Accordion.Item className={classes.item} value="online">
          <Accordion.Control>100% Online</Accordion.Control>
          <Accordion.Panel>
            {" "}
            100% Online for Muslims around the world who desire to memorize the
            Quran but do not have means or time to travel.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="schedule">
          <Accordion.Control>
            Flexible Classes to Suit Your Schedule
          </Accordion.Control>
          <Accordion.Panel>
            We offer custom schedules and syllabus. Select the most suitable
            class timings and decide what you wish to study.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="learning">
          <Accordion.Control>One-on-one Learning Mechanism</Accordion.Control>
          <Accordion.Panel>
            Start learning online with your live Quran tutor, one on one with no
            distraction at all, you can ask anything about your lesson, your
            teacher will not move until the subject is clear and you have
            understood your lesson.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="report">
          <Accordion.Control>Evaluation report systems</Accordion.Control>
          <Accordion.Panel>
            At the end of the course we offer the certificate for the students
            who are willing to get one, all you have to is passed a simple test
            and you will be given certificate by our online Quran school,
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>Easy and Secure Payment</Accordion.Control>
          <Accordion.Panel>
            Easy and secure payment the student is requested to pay the fee
            monthly, thus making it easy on the budget.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
    // </div>
  );
}
