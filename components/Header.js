import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tooltip,
} from "@chakra-ui/react";

import { SUBREDDITS } from "../lib/constants";

import { FilterIcon } from "../styles/icons";

export default function Header({
  filter,
  setFilter,
  subreddits,
  setSubreddits,
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box w="100%" position="fixed" zIndex={1} backgroundColor="white">
      <Container
        py={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="container.xl"
      >
        <Button variant="ghost" fontSize="xl" onClick={scrollToTop}>
          NATURE
        </Button>
        <Box>
          <Menu closeOnSelect={false}>
            <MenuButton as={IconButton} variant="ghost" icon={<FilterIcon />} />
            <MenuList>
              <MenuOptionGroup
                title="Filter"
                defaultValue={filter}
                type="radio"
                onChange={(val) => {
                  setFilter(val);
                  scrollToTop();
                }}
              >
                <MenuItemOption value="hot">Hot</MenuItemOption>
                <MenuItemOption value="new">New</MenuItemOption>
                <MenuItemOption value="top">Top</MenuItemOption>
              </MenuOptionGroup>
              <MenuOptionGroup
                title="Subreddits"
                type="checkbox"
                defaultValue={subreddits}
                onChange={(val) => {
                  setSubreddits(val);
                  scrollToTop();
                }}
              >
                {SUBREDDITS.map((sub, idx) => (
                  <MenuItemOption
                    key={idx}
                    value={sub}
                    isDisabled={
                      subreddits.length === 1 && subreddits.includes(sub)
                    }
                  >
                    r/{sub}
                  </MenuItemOption>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
}
