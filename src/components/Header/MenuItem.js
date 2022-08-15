import React from "react";
import { Menu, Center, Group } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { useStyles } from "./Style";

const links = [
  { link: "/", label: "Home" },
  {
    link: "#1",
    label: "Courses",
    links: [
      { link: "/quran", label: "Qur'an Recitation & Meorization" },
      { link: "/tajweed", label: "Tajweed" },
      { link: "/tawheed", label: "Tawheed & Fiqh" },
      { link: "/hadeeth", label: "Hadeeth" },
      { link: "/literacy", label: "Literacy" },
      { link: "/seerah", label: "Seerah" },
    ],
  },
  { link: "/about", label: "About" },
  { link: "/pricing", label: "Fee and Plans" },
  {
    link: "#2",
    label: "Support",
    links: [
      { link: "/faq", label: "FAQ" },
      { link: "/contact", label: "Contact Us" },
      { link: "/dotane", label: "Donate" },
    ],
  },
];

export function MenuItem() {
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link?.links?.map((item) => (
      <Menu.Item key={item.link} className={classes.box}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <div
              component="a"
              href={link.link}
              className={classes.link}
              target="_blank"
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </div>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Group spacing={5} className={classes.links} mb={25}>
      {items}
    </Group>
  );
}
