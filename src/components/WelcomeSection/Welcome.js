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
import Tawheed from "../../images/tawheed.jpeg";
import Seerah from "../../images/seerah.jpeg";



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
            adults, men, women and careerists who are ardent to learn about their 
            religion. We offer a well structured and standard online learning
            platform for children and adults, where they learn about their
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
                your Hifz program from the comfort of your home!. We have an
                amazing and a unique style to make the recitation suiting and
                repetition style to ease the memorization of the Qur'an.
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
                recitation. When you learn Quran with Tajweed, you’ll be able to
                pronounce the letters and words in Quranic verses correctly,
                giving every letter its right in reciting the Quran.
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
                Islam. Tawhid is the religion's central & single most
                important concept, which a Muslim's entire religious adherence
                rests. Tawheed is basic fundamental to Muslims’ belief in
                Allah. And Fiqh is understanding & practices of
                sharia,(i.e) understanding of the divine Islamic law as
                revealed in the Quran & the Sunnah.
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3} className={classes.fourthCol}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Hadeeth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Hadeeth</Text>
              </Group>

              <Text size="sm" color="dimmed">
                The Prophet (S.A.W) said: “May Allah beautify a man who hears a
                saying of mine, so he understands it, remembers it and conveys
                it. There may be one who conveys knowledge to someone who
                understands it better than he does.” At-Tirmidhi (2658) narrated
                from ‘Abdullah ibn Mas‘ood. We have available materials and
                schemes that make learning, implementation and Memorization of
                the prophetic Ahadeeth easier as well as the biographies of the
                narrators.
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
        </Grid>

        <Grid mt={20} justify="center" gutter="md">
          <Grid.Col xs={6} sm={4} md={3} className={classes.firstCol}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Hadeeth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Hadeeth</Text>
              </Group>

              <Text size="sm" color="dimmed">
                The Prophet (S.A.W) said: “May Allah beautify a man who hears a
                saying of mine, so he understands it, remembers it and conveys
                it. There may be one who conveys knowledge to someone who
                understands it better than he does.” At-Tirmidhi (2658) narrated
                from ‘Abdullah ibn Mas‘ood. We have available materials and
                schemes that make learning, implementation and Memorization of
                the prophetic Ahadeeth easier as well as the biographies of the
                narrators.
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
                The Arabic language is the symbol of Islam and its people.
                Allah, may He be glorified and exalted, chose the Arabic
                language to be the vessel which would carry this light and
                guidance to mankind. We have all it takes to teach the Arabic
                not only to the intermediates but also to the beginners right
                from the identification of the Arabic letters, the right
                pronunciation, joining of the letters with their signs, to
                fluent reading of the Qur'an, Arabic words and to converse with
                basic and simple Arabic in shaa Allah.
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Seerah} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Seerah</Text>
              </Group>

              <Text size="sm" color="dimmed">
                Allâh says 'We already sent messengers before you. We have told
                you the stories of some of them, while others We have not. It
                was not for any messenger to bring a sign without Allah’s
                permission. But when Allah’s decree comes, judgment will be
                passed with fairness, and the people of falsehood will then be
                in ˹total˺ loss.' Q 40:78 We help kids and adults study verified
                and authentic stories about the lives of the Prophets,
                Companions and the pious predecessors. To learn from their ways
                of life and act upon their values.
              </Text>

              {learnMore()}
            </Card>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
}
