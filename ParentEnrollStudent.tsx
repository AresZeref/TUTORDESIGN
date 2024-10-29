import { Box, Grid, Text, Button, Flex } from "@chakra-ui/react";

export default function EnrollStudent() {
    return (
        <Box bg="#e1e7f0" py={[6, 8, 10]} px={[4, 6, 8]} minH="100vh" overflow="hidden">
            {/* Book Session Header */}
            <Box maxW="1200px" mx="auto" mb={8}>
                <Text
                    as="h2"
                    fontSize={["lg", "xl", "2xl"]}
                    fontWeight="bold"
                    textAlign={["center", "left"]}
                    mb={8}
                    color="black"
                >
                    Book Session
                </Text>
            </Box>

            {/* White Container */}
            <Box
                bg="white"
                p={[6, 8, 10]}  // Responsive padding
                rounded="lg"
                shadow="md"
                maxW="1200px"
                mx="auto"
                borderRadius="20px"
                minH="80vh"  // Adjusted height for better fit on the screen
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                {/* Cards Container */}
                <Grid
                    templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}  // Responsive grid layout
                    gap={6}
                    px={[4, 6, 8]}  // Ensure padding inside the grid
                    justifyItems="center"  // Center the boxes horizontally
                >
                    {/* Card 1 */}
                    <Box
                        bg="#d4dde8"
                        p={[4, 5, 6]}  // Responsive padding
                        rounded="lg"
                        shadow="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="20px"
                        height="350px"  // Fixed height for uniformity
                        width={["100%", "90%", "320px"]}  // Set a consistent width
                        maxW="320px"  // Set a maximum width for uniformity
                    >
                        <Flex
                            direction="column"
                            justify="space-between"
                            align="center"
                            height="100%"  // Fill the entire height
                        >
                            <Text as="h2"
                                fontSize={["4xl", "5xl", "6xl"]}
                                fontWeight="bold"
                                color="black"
                                textAlign="center">
                                Elementary
                            </Text>

                            <Box h="1px" bg="black" w="100%" mt={2} mb={4} />

                            <Box textAlign="left" w="100%" px={3}> {/* Added padding on the sides */}
                                <Text fontSize={["sm", "md"]} color="black"><b>Sessions:</b> Mon-Fri</Text>
                                <Text fontSize={["sm", "md"]} color="black"><b>Sessions Type:</b> One on One</Text>
                                <Text fontSize={["sm", "md"]} color="black"><b>Subjects:</b> Reading & Writing</Text>
                                <b>Rate:</b> <Text as="span" fontWeight="bold" color="blue">₱3,500.00</Text>
                            </Box>

                            <Button
                                bg="#ffa500"
                                color="black"
                                _hover={{ bg: "#ff8c00" }}
                                fontSize={["0.8rem", "0.9rem"]}
                                padding={["0.6rem", "0.8rem"]}
                                borderRadius="12px"
                                alignSelf="center"
                                mt={4}
                            >
                                Apply
                            </Button>
                        </Flex>
                    </Box>

                    {/* Card 2 */}
                    <Box
                        bg="#d4dde8"
                        p={[4, 5, 6]}  // Responsive padding
                        rounded="lg"
                        shadow="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="20px"
                        height="350px"  // Fixed height for uniformity
                        width={["100%", "90%", "320px"]}  // Set a consistent width
                        maxW="320px"  // Set a maximum width for uniformity
                    >
                        <Flex
                            direction="column"
                            justify="space-between"
                            align="center"
                            height="100%"  // Fill the entire height
                        >
                            <Text as="h2"
                                fontSize={["4xl", "5xl", "6xl"]}
                                fontWeight="bold"
                                color="black"
                                textAlign="center">
                                Elementary
                            </Text>

                            <Box h="1px" bg="black" w="100%" mt={2} mb={4} />

                            <Box textAlign="left" w="100%" px={3}> {/* Added padding on the sides */}
                                <Text fontSize={["sm", "md"]} color="black"><b>Sessions:</b> Mon-Wed-Fri</Text>
                                <Text fontSize={["sm", "md"]} color="black"><b>Sessions Type:</b> One on One</Text>
                                <Text fontSize={["sm", "md"]} color="black">
                                    <b>Subjects:</b> Mathematics, English, Science, Filipino
                                </Text>
                                <b>Rate:</b> <Text as="span" fontWeight="bold" color="blue">₱2,500.00</Text>
                            </Box>

                            <Button
                                bg="#ffa500"
                                color="black"
                                _hover={{ bg: "#ff8c00" }}
                                fontSize={["0.8rem", "0.9rem"]}
                                padding={["0.6rem", "0.8rem"]}
                                borderRadius="12px"
                                alignSelf="center"
                                mt={4}
                            >
                                Apply
                            </Button>
                        </Flex>
                    </Box>

                    {/* Card 3 */}
                    <Box
                        bg="#d4dde8"
                        p={[4, 5, 6]}  // Responsive padding
                        rounded="lg"
                        shadow="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="20px"
                        height="350px"  // Fixed height for uniformity
                        width={["100%", "90%", "320px"]}  // Set a consistent width
                        maxW="320px"  // Set a maximum width for uniformity
                    >
                        <Flex
                            direction="column"
                            justify="space-between"
                            align="center"
                            height="100%"  // Fill the entire height
                        >
                            <Text as="h2"
                                fontSize={["4xl", "5xl", "6xl"]}
                                fontWeight="bold"
                                color="black"
                                textAlign="center">
                                Elementary
                            </Text>

                            <Box h="1px" bg="black" w="100%" mt={2} mb={4} />

                            <Box textAlign="left" w="100%" px={3}> {/* Added padding on the sides */}
                                <Text fontSize={["sm", "md"]} color="black"><b>Sessions:</b> Tues-Thurs</Text>
                                <Text fontSize={["sm", "md"]} color="black"><b>Sessions Type:</b> One on One</Text>
                                <Text fontSize={["sm", "md"]} color="black">
                                    <b>Subjects:</b> Mathematics, English, Science
                                </Text>
                                <b>Rate:</b> <Text as="span" fontWeight="bold" color="blue">₱3,500.00</Text>
                            </Box>

                            <Button
                                bg="#ffa500"
                                color="black"
                                _hover={{ bg: "#ff8c00" }}
                                fontSize={["0.8rem", "0.9rem"]}
                                padding={["0.6rem", "0.8rem"]}
                                borderRadius="12px"
                                alignSelf="center"
                                mt={4}
                            >
                                Apply
                            </Button>
                        </Flex>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
}