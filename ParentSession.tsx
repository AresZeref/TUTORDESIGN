import { Box, Grid, Text, Flex } from "@chakra-ui/react";

export default function Sessions() {
    return (
        <Box bg="#d4dde8" py={[6, 8, 10]} px={[4, 6, 8]} minH="100vh" overflow="hidden">
            {/* My Sessions Header */}
            <Box maxW="1200px" mx="auto" mb={8}>
                <Text
                    as="h2"
                    fontSize={["lg", "xl", "2xl"]}
                    fontWeight="bold"
                    textAlign={["center", "left"]}
                    mb={8}
                    color="black"
                >
                    My Sessions
                </Text>
            </Box>

            {/* White Container */}
            <Box
                bg="white"
                p={[8, 10, 12]} // Increased padding for more space inside the white container
                rounded="lg"
                shadow="md"
                maxW="1200px"
                mx="auto"
                borderRadius="20px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                minH="500px" // Increased min height to make the container taller
            >
                {/* Cards Container */}
                <Grid
                    templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} // Responsive grid layout
                    gap={6}
                    justifyItems="center"
                >
                    {/* Session 1 */}
                    <Box
                        bg="#d4dde8" // Gray-blue background for the container
                        p={[4, 5, 6]} // Responsive padding
                        rounded="lg"
                        shadow="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="20px"
                        height="250px" // Reduced height
                        width={["100%", "90%", "320px"]} // Set a consistent width
                        maxW="320px"
                    >
                        <Flex direction="column" justify="space-between" align="center" height="100%">
                            <Text fontSize={["lg", "xl", "2xl"]} as="h2"
                                fontWeight="bold" color="black" textAlign="center">
                                Math (1076)
                            </Text>

                            <Box textAlign="left" w="100%" px={3}>
                                <Text fontSize={["sm", "md"]} color="black"><b>Schedule:</b> Mon-Wed-Fri</Text>
                                <Text fontSize={["sm", "md"]} color="black"><b>Start:</b> July 15, 2024</Text>
                                <Text fontSize={["sm", "md"]} color="black"><b>Time:</b> 4:30-5:30 PM</Text>
                            </Box>

                            <Box h="1px" bg="black" w="100%" my={2} /> {/* Black underline above the teacher's name */}

                            <Text fontSize={["sm", "md"]} color="black"><b>Teacher:</b> Angeline B. Ba</Text>
                        </Flex>
                    </Box>

                    {/* Session 2 */}
                    <Box
                        bg="#d4dde8" // Gray-blue background for the container
                        p={[4, 5, 6]} // Responsive padding
                        rounded="lg"
                        shadow="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="20px"
                        height="250px" // Reduced height
                        width={["100%", "90%", "320px"]} // Set a consistent width
                        maxW="320px"
                    >
                        <Flex direction="column" justify="space-between" align="center" height="100%">
                            <Text fontSize={["lg", "xl", "2xl"]} as="h2"
                                fontWeight="bold" color="black" textAlign="center">
                                Science (3416)
                            </Text>

                            <Box textAlign="left" w="100%" px={3}>
                                <Text fontSize={["sm", "md"]} color="black"><b>Schedule:</b> Mon-Wed-Fri</Text>
                                <Text fontSize={["sm", "md"]} color="black"><b>Start:</b> July 15, 2024</Text>
                                <Text fontSize={["sm", "md"]} color="black"><b>Time:</b> 4:30-5:30 PM</Text>
                            </Box>

                            <Box h="1px" bg="black" w="100%" my={2} /> {/* Black underline above the teacher's name */}

                            <Text fontSize={["sm", "md"]} color="black"><b>Teacher:</b> Angeline B. Ba</Text>
                        </Flex>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
}
