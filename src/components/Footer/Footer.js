import { createStyles, Container, Group, ActionIcon } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import FloatingWhatsApp from "react-floating-whatsapp";


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing="xs" className={classes.links} noWrap>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            target="_blank"
            href="https://twitter.com/mantinedev"
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            target="_blank"
            href="https://twitter.com/mantinedev"
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            target="_blank"
            href="https://twitter.com/mantinedev"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
      <FloatingWhatsApp
        phoneNumber="+2348116882741"
        accountName="Abu Fawzan"
        chatMessage="Hello Welcome to ZITA"
        allowClickAway
      />
    </div>
  );
}
