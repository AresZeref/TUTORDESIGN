import React from 'react';
import { Box, Button, Heading, Flex, Text, Image } from '@chakra-ui/react';

const AdminHomePage = () => {
    return (
        <Box bg="#87CEEB" minH="100vh" p={0} m={0}>
            {/* Sidebar and Header can be added here as components */}

            <Box position="fixed" top="0" left="200px" right="0" p="20px" bg="#B0C4DE" marginTop="-20px">
                <Box pt="60px" maxW="1200px" mx="auto">
                    <Flex justify="space-between" wrap="wrap" gap="20px">
                        {/* Total Enrolled Students */}
                        <Box
                            bg="white"
                            borderRadius="15px"
                            p="30px"
                            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                            w="30%"
                            textAlign="center"
                        >
                            <Image src="../images/enrolled_icon.png" alt="Enrolled Students" boxSize="60px" mx="auto" mb="20px" />
                            <Heading size="2xl" mb="10px">85</Heading>
                            <Text fontSize="lg">Total Enrolled Students</Text>
                            <Button mt="10px" colorScheme="blue" size="sm">View More</Button>
                        </Box>

                        {/* Upcoming Enrollment */}
                        <Box
                            bg="white"
                            borderRadius="15px"
                            p="30px"
                            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                            w="30%"
                            textAlign="center"
                        >
                            <Image src="../images/enrollment_icon.png" alt="Upcoming Enrollment" boxSize="60px" mx="auto" mb="20px" />
                            <Heading size="2xl" mb="10px">2</Heading>
                            <Text fontSize="lg">Upcoming Enrollment</Text>
                            <Button mt="10px" colorScheme="blue" size="sm">View More</Button>
                        </Box>

                        {/* Ongoing Sessions */}
                        <Box
                            bg="white"
                            borderRadius="15px"
                            p="30px"
                            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                            w="30%"
                            textAlign="center"
                        >
                            <Image src="../images/sessions_icon.png" alt="Ongoing Sessions" boxSize="60px" mx="auto" mb="20px" />
                            <Heading size="2xl" mb="10px">6</Heading>
                            <Text fontSize="lg">Ongoing Sessions</Text>
                            <Button mt="10px" colorScheme="blue" size="sm">View More</Button>
                        </Box>

                        {/* Increase in Math Performance */}
                        <Box
                            bg="white"
                            borderRadius="15px"
                            p="30px"
                            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                            w="30%"
                            textAlign="center"
                        >
                            <Image src="../images/math_performance_icon.png" alt="Math Performance" boxSize="60px" mx="auto" mb="20px" />
                            <Heading size="2xl" mb="10px">90%</Heading>
                            <Text fontSize="lg">Increase in Math Performance</Text>
                            <Button mt="10px" colorScheme="blue" size="sm">View More</Button>
                        </Box>

                        {/* Decrease in English Performance */}
                        <Box
                            bg="white"
                            borderRadius="15px"
                            p="30px"
                            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                            w="30%"
                            textAlign="center"
                        >
                            <Image src="../images/english_performance_icon.png" alt="English Performance" boxSize="60px" mx="auto" mb="20px" />
                            <Heading size="2xl" mb="10px">74%</Heading>
                            <Text fontSize="lg">Decrease in English Performance</Text>
                            <Button mt="10px" colorScheme="blue" size="sm">View More</Button>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default AdminHomePage;
