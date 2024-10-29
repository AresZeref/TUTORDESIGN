import React from 'react';
import { Box, Button, Checkbox, Flex, Heading, Stack } from '@chakra-ui/react';

const PreliminaryQuestions = () => {
    return (
        <Flex
            minH="95vh"
            justify="center"
            align="center"
            bg="#b0c4de" // Light sky blue background
            p={4}
            flexDirection="column"
            position="relative" // Set position relative to allow absolute positioning of the heading
        >
            {/* "Preliminary Questions" text aligned to the left */}
            <Heading
                as="h2"
                fontSize={["lg", "xl", "2xl"]}
                position="absolute" // Position the heading absolutely
                top={4} // Distance from the top
                left={4} // Distance from the left
                mb={8}
            >
                Preliminary Questions
            </Heading>

            {/* White container with adjusted width and height */}
            <Box
                bg="white"
                p={8}
                borderRadius="20px"
                boxShadow="xl"
                w={["95%", "80%", "70%", "1000px"]} // Adjusted responsive width
                h="auto"
                minH="350px" // Minimum height
                mt={["60px", "60px", "60px", "60px"]} // Ensure space below the heading
            >
                {/* Flex container for the blue boxes, centered */}
                <Flex direction="column" align="center" justify="center" gap={8}>
                    {/* Flex container for the first row (Session Type and Session Days), spaced apart */}
                    <Flex direction={["column", "column", "row"]} justify="space-between" align="center" gap={6} mb={8} w="100%">
                        {/* Session Type */}
                        <Box
                            bg="#87a2c7"
                            p={4}
                            borderRadius="20px"
                            w={["100%", "45%", "40%"]} // Slightly increased width for each box
                            minW="280px" // Ensure both boxes have a minimum width
                            minH="130px"
                            mt={["20px", "20px", "0px"]} // Adjust top margin for smaller screens
                        >
                            <Heading as="h3" fontSize={["md", "lg"]} mb={4} textAlign="center" position="relative">
                                Session Type
                                <Box
                                    h="1px"
                                    bg="black" // Color of the underline
                                    w="100%"
                                    mx="auto" // Center the underline
                                    mt={1} // Add some space between text and underline
                                />
                            </Heading>
                            <Stack spacing={4}>
                                <Checkbox>One-on-One Tutoring</Checkbox>
                                <Checkbox>Group Tutoring</Checkbox>
                            </Stack>
                        </Box>

                        {/* Session Days */}
                        <Box
                            bg="#87a2c7"
                            p={4}
                            borderRadius="20px"
                            w={["100%", "45%", "40%"]} // Slightly increased width for each box
                            minW="280px" // Ensure both boxes have a minimum width
                            minH="130px"
                            mt={["20px", "20px", "0px"]} // Adjust top margin for smaller screens
                        >
                            <Heading as="h3" fontSize={["md", "lg"]} mb={4} textAlign="center" position="relative">
                                Session Days
                                <Box
                                    h="1px"
                                    bg="black" // Color of the underline
                                    w="100%"
                                    mx="auto" // Center the underline
                                    mt={1} // Add some space between text and underline
                                />
                            </Heading>
                            <Stack spacing={4}>
                                <Checkbox>Monday - Wednesday - Friday</Checkbox>
                                <Checkbox>Tuesday - Thursday</Checkbox>
                                <Checkbox>Monday - Friday</Checkbox>
                            </Stack>
                        </Box>
                    </Flex>

                    {/* Second row: Choose Subjects, centered */}
                    <Box
                        bg="#87a2c7"
                        p={4}
                        borderRadius="20px"
                        w={["90%", "80%", "70%"]}
                        m="0 auto" // Center horizontally
                        mt={6}
                    >
                        <Heading as="h3" fontSize={["md", "lg"]} mb={6} textAlign="center" position="relative">
                            Choose Subjects (Can select multiple)
                            <Box
                                h="1px"
                                bg="black" // Color of the underline
                                w="100%"
                                mx="auto" // Center the underline
                                mt={1} // Add some space between text and underline
                            />
                        </Heading>
                        <Flex justify="center" wrap="wrap">
                            <Stack direction={["column", "row"]} spacing={40} mb={4} justify="left" wrap="wrap">
                                <Checkbox>Reading & Writing</Checkbox>
                                <Checkbox>English</Checkbox>
                                <Checkbox>Filipino</Checkbox>
                            </Stack>
                        </Flex>
                        <Flex justify="center" wrap="wrap">
                            <Stack direction={["column", "row"]} spacing={40} mt={15} justify="left">
                                <Checkbox>Math</Checkbox>
                                <Checkbox>Science</Checkbox>
                            </Stack>
                        </Flex>
                    </Box>
                </Flex>

                {/* Reset and Apply buttons */}
                <Flex justify={["center", "flex-end"]} mt={8} gap={4}>
                    <Button
                        colorScheme="gray"
                        fontSize="0.9rem"
                        padding="0.8rem"
                        borderRadius="12px"
                    >
                        Reset
                    </Button>
                    <Button
                        bg="#ffa500"
                        color="black"
                        _hover={{ bg: "#ff8c00" }}
                        fontSize="0.9rem"
                        padding="0.8rem"
                        borderRadius="12px"
                    >
                        Apply
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};

export default PreliminaryQuestions;
