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
}));


export function Welcome() {
  const { classes } = useStyles();


  return (
    <div className={classes.wrapper}>
      <Container>
        <div>
          <Center className={classes.title}>
            Welcome to Zayd Ibn Thaabit Academy
          </Center>
          <Center mt={30}>
            <Divider
              size="sm"
              label={<IconDiamond size={10} />}
              labelPosition="center"
              sx={{ width: 400 }}
            />
          </Center>
          <Text className={classes.description} mt={40} mb={40} color="dimmed">
            Zayd Ibn Thaabit Academy Qur’an Schools for children & adult, are
            unique pioneering part-time educational institutions unlike that on
            offer from any other Madrasah & Qur’an school in Kwara State. These
            centres are dedicated to teaching quality & traditional studies
            enhanced by modern technologically advanced methods. We have three
            programmes to choose from, available on weekday evenings & weekends
            with the option of studying physically onsite at one of our branches
            across Kwara State or online.
          </Text>
        </div>
      </Container>
      <div>
        <Grid mt={60} justify="center" grow gutter="xl">
          <Grid.Col xs={6} lg={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Our Goal</Text>
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
          <Grid.Col xs={6} lg={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Our Mission</Text>
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
          <Grid.Col xs={6} lg={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Our Duty</Text>
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
          <Grid.Col xs={6} lg={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={Masjid} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Our Ambition</Text>
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
