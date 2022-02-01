import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Img, Text, Link } from "@chakra-ui/react";

// const MotionImg = motion.custom(Img);

const Card = ({ post }) => {
  return (
    <Box
      borderRadius={["sm", null, "md"]}
      overflow="hidden"
      backgroundColor="gray.100"
    >
      <Box cursor="pointer" h="240px" position="relative" overflow="hidden">
        <Img w="100%" h="100%" objectFit="cover" src={post.src} />
      </Box>
      <Flex px="4" py="2" align="center" justify="space-between" w="100%">
        <Text fontSize={["xs", null, "sm"]}>
          Posted by{" "}
          <Link
            fontWeight="semibold"
            href={`https://www.reddit.com/user/${post.author}/`}
            isExternal
          >
            u/{post.author}
          </Link>
        </Text>
        <Flex align="center">
          <ArrowUpIcon />
          <Text ml={1} fontSize={["xs", null, "sm"]}>
            {post.ups.toLocaleString()}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
