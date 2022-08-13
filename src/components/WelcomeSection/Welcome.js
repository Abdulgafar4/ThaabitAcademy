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
} from "@mantine/core";
import { IconDiamond } from "@tabler/icons";
import Masjid from "../../images/masjid.png";



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
          {/* <Text className={classes.description} mt={40} mb={40} color="dimmed">
            We offer a well structured and standard online learning platform for
            children and adults, whore they learn about their religion, how to
            recite the Qur'an fluently with tajweed and Arabic literacy.
          </Text> */}
        </div>
      </Container>
      <div>
        <Center className={classes.title}>Available Courses</Center>
        <Center mt={30}>
          <Divider
            size="sm"
            label={<IconDiamond size={10} />}
            labelPosition="center"
          />
        </Center>
        <Grid mt={60} justify="center" gutter="md">
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Qur'an Recitation & Memorization</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Tajweed</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Tawheed & Fiqh</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3} className={classes.fourthCol}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Islamic Doctrine</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
        </Grid>

        <Grid mt={20} justify="center" gutter="md">
          <Grid.Col xs={6} sm={4} md={3} className={classes.firstCol}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Islamic Doctrine</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Arabic literacy</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Hadeeth & Seerah</Text>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
}
