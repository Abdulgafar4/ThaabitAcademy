import { createStyles, Container, Group, ActionIcon } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandGmail,
  IconBrandFacebook,
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
            href="https://www.facebook.com/104093419036751/posts/pfbid02CaCgkbNyFvYWdGrLM98yXgycHbzTcxqkMzB2v2HcVFNuEnA4K4VAFTfrT71KBDbnl/"
          >
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            target="_blank"
            // href="zaydibnthaabitacademy@gmail.com"
          >
            <IconBrandGmail size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            target="_blank"
            href="https://instagram.com/zaydibnthaabitacademy"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
      <FloatingWhatsApp
        phoneNumber="+2348099321972"
        accountName="ZITA"
        chatMessage="السلام عليكم ورحمه الله وبركاته Welcome to ZITA. How can we be of help?"
        allowClickAway
      />
    </div>
  );
}
