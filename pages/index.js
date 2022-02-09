import {
  Box,
  Container,
  Link,
  Text,
  Heading,
  SimpleGrid,
  Skeleton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";

import { SUBREDDITS, PAGE_LIMIT } from "../lib/constants";
import useRedditPosts, { transformPost } from "../lib/useRedditPosts";
import Card from "../components/Card";
import Header from "../components/Header";
import { RepeatIcon } from "@chakra-ui/icons";
import PreviewImage from "../components/PreviewImage";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPost, setSelectedPost] = useState(null);
  const [filter, setFilter] = useState("hot");
  const [subreddits, setSubreddits] = useState(SUBREDDITS);

  const {
    posts,
    error,
    isLoadingInitialData,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  } = useRedditPosts(subreddits, filter);

  if (error) {
    return (
      <Text>
        An error occured. Please <Link href="/">reload</Link>.
      </Text>
    );
  }

  const withMediaOnly = (item) => {
    if (item.data.crosspost_parent) return false;

    if (
      (!item.data.is_self ||
        (item.data.domain && item.data.domain === "i.redd.it")) &&
      !item.data.media
    )
      return true;

    return false;
  };

  const transformedPosts = !isLoadingInitialData
    ? posts.filter(withMediaOnly).map((post) => transformPost(post))
    : [];

  const view = (post) => {
    setSelectedPost(post);
    onOpen();
  };

  return (
    <Box minHeight="100vh" display="flex" flexDir="column">
      <Header
        filter={filter}
        setFilter={setFilter}
        subreddits={subreddits}
        setSubreddits={setSubreddits}
      />
      <Container maxW="xl" mt="95px" flex={1}>
        <Box textAlign="center">
          <Heading as="h1" size="4xl">
            NATURE
          </Heading>
          <Text fontSize="lg" fontWeight="semibold" mt={2}>
            {
              "Here are some nature pics from Reddit that you might not have seen before."
            }
          </Text>
        </Box>
        <SimpleGrid spacing={5} mt={6}>
          {transformedPosts.map((post) => (
            <Card key={post.id} post={post} onImageClick={view} />
          ))}

          {(isLoadingInitialData || isLoadingMore) &&
            [...Array(PAGE_LIMIT).keys()].map((item) => (
              <Skeleton
                borderRadius={["sm", null, "md"]}
                key={item}
                height="275px"
              />
            ))}
        </SimpleGrid>

        {!isReachingEnd && (
          <Box textAlign="center" mt={8}>
            <Button
              leftIcon={<RepeatIcon />}
              onClick={() => setSize(size + 1)}
              isLoading={isLoadingMore}
            >
              Load More
            </Button>
          </Box>
        )}
      </Container>
      {selectedPost && (
        <PreviewImage isOpen={isOpen} onClose={onClose} post={selectedPost} />
      )}
      <Container as="footer" maxW="xl" textAlign="center" py={10}>
        <Text>
          Made with{" "}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>{" "}
          by Lewis
          {/* <Link href="" isExternal>
                        Lewis
                    </Link> */}
        </Text>
      </Container>
    </Box>
  );
}
