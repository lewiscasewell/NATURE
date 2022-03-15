import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box,
  Button,
  Img,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Carousel } from "react-responsive-carousel";

import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function PreviewImage({ isOpen, onClose, post }) {
  const size = useBreakpointValue({ base: "md", md: "2xl" });
  const imageMarginTop = 3;

  return (
    <Modal
      isCentered
      scrollBehavior="inside"
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {/* <HStack spacing={2}>
            {post.awards.map((award, index) => {
              return (
                <Tooltip
                  key={index}
                  label={award.description}
                  aria-label="Award tooltip"
                >
                  <Flex>
                    <Img src={award.src} />
                    {award.count > 1 && (
                      <Text ml="2px" fontSize="xs">
                        3
                      </Text>
                    )}
                  </Flex>
                </Tooltip>
              );
            })}
          </HStack> */}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {post.isGallery ? (
            <Box w="100%" mt={imageMarginTop}>
              <Carousel showThumbs={false} dynamicHeight useKeyboardArrows>
                {post.gallery.map((src) => (
                  <Img key={src} src={src} />
                ))}
              </Carousel>
            </Box>
          ) : (
            <Img mt={imageMarginTop} src={post.src} />
          )}
          <Text mt={3} fontSize="lg" fontWeight="semibold">
            {post.title}
          </Text>
          <Text fontSize="xs" mt={2}>
            Posted by <Link>u/{post.author}</Link> {post.createdAt}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button
            ml={3}
            variant="ghost"
            as="a"
            rightIcon={<ExternalLinkIcon />}
            href={post.permalink}
            target="_blank"
            mr={3}
          >
            Open in Reddit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
