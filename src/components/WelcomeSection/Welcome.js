import {
  createStyles,
  Container,
  Center,
  Text,
  Divider,
  Grid,
  Card,
  Image,
  Button,
  Group,
  Popover,
} from "@mantine/core";
import { IconDiamond } from "@tabler/icons";
import Quran from "../../images/squran.jpeg";
import Literacy from "../../images/literacy.jpeg";
import Hadeeth from "../../images/hadeeth.jpeg";
import Tajweed from "../../images/tajweed.png";
import Tawheed from "../../images/tawheed.jpg";
import IslamicDoc from "../../images/islamicDoc.png";



const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontWeight: 500,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Playfair Display, serif`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "center",
    },
  },
  description: {
    textAlign: "center",
    fontFamily: `Open Sans, serif`,

    "@media (max-width: 400px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },
  firstCol: {
    display: "none",

    "@media (min-width: 768px)": {
      display: "flex",
    },
  },
  fourthCol: {
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
}));

  function learnMore (){
    return (
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Learn more
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">
            Contact us on WhatsApp to learn more by clicking the WhatsApp icon.
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  };



export function Welcome() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container>
        <div>
          <Center className={classes.title}>Welcome to ZITA</Center>
          <Center mt={30}>
            <Divider
              size="sm"
              label={<IconDiamond size={10} />}
              labelPosition="center"
            />
          </Center>
          <Text className={classes.description} mt={40} mb={40} color="dimmed">
            Zayd Ibn Thaabit Academy (ZITA) wishes to aid Muslim children,
            adults, men, women and careerists who are ardent to learn about
            religion. We offer a well structured and standard online learning
            platform for children and adults, whore they learn about their
            religion, how to recite the Qur'an fluently with tajweed and Arabic
            literacy.
          </Text>
        </div>
      </Container>
      <div>
        <Center className={classes.title}>Available Courses</Center>
        <Center mt={30}>
          <Divider
            size="md"
            label={<IconDiamond size={10} />}
            labelPosition="center"
          />
        </Center>
        <Grid mt={60} justify="center" gutter="md">
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Quran} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Qur'an Recitation & Memorization</Text>
              </Group>

              <Text size="sm" color="dimmed">
                Allaah has promised to preserve the Quran in its original form
                and helps His slaves to memorize it and preserve it in their
                hearts. Alhamdulillaah, here is an opportunity for YOU to start
                your Hifz program from the comfort of your home!
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Tajweed} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Tajweed</Text>
              </Group>

              <Text size="sm" color="dimmed">
                In the context of the recitation of the Quran, tajwīd is a set
                of rules for the correct pronunciation of the letters with all
                their qualities and applying the various traditional methods of
                recitation.
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Tawheed} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Tawheed & Fiqh</Text>
              </Group>

              <Text size="sm" color="dimmed">
                Tawhid is the indivisible oneness concept of monotheism in
                Islam. Tawhid is the religion's central and single most
                important concept, which a Muslim's entire religious adherence
                rests. Tawheed is the basic fundamental to Muslims’ belief in
                Allah.
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3} className={classes.fourthCol}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={IslamicDoc} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Islamic Doctrine</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
        </Grid>

        <Grid mt={20} justify="center" gutter="md">
          <Grid.Col xs={6} sm={4} md={3} className={classes.firstCol}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={IslamicDoc} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Islamic Doctrine</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Literacy} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Arabic literacy</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Hadeeth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Hadeeth & Seerah</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
}
