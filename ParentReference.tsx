import React from 'react';
import { Box, Button, Heading, Center, Text } from '@chakra-ui/react';

const ParentReference = () => {
    return (
        <Center height="100vh" bg="#f0f4f8">
            <Box
                bg="#e1e7f0"
                rounded="md"
                maxW="500px"
                w="100%"
                boxShadow="md"
                minH="75vh"
                overflow="hidden"
                textAlign="center"
            >
                {/* Full-width header covering the top */}
                <Heading
                    as="h2"
                    size="lg"
                    color="white"
                    bg="darkblue"
                    py={4}
                    w="100%"
                    textAlign="center"
                    m={0}
                    borderTopRadius="md"
                >
                    Reminder
                </Heading>

                {/* Compact white container for Reference Number */}
                <Box bg="white" py={2} px={4} my={4} mt={20} borderRadius="20px" display="inline-block">
                    <Text fontSize="xl" fontWeight="bold" color="black">
                        Reference Number
                    </Text>
                    <Text fontSize="30px" fontWeight="bold" color="black">
                        83090839
                    </Text>
                </Box>

                {/* Text sections with manual spacing */}
                <Box textAlign="center" mt={2}>
                    <Text fontSize="md" color="gray.600" >
                        Please take note of the reference number.
                    </Text>
                    <Text fontSize="md" color="gray.600" mt={-6}>
                        A confirmation is sent to your email at
                    </Text>
                    <Text fontSize="md" fontWeight="bold" color="blue.600" mb={2}>
                        p.chinedo.528607@umindanao.edu.ph
                    </Text>

                    {/* Space between sections */}
                    <Text fontSize="md" color="gray.600" mb={1}>
                        Please pay on-site within
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color="black" mb={4}>
                        1 WEEK
                    </Text>
                </Box>

                {/* Enlarged and rounded OK button */}
                <Button
                    mt={8}
                    colorScheme="blue"
                    width="full"
                    borderRadius="16px"
                    py={12}
                    fontSize="16px"
                    px={25}

                >
                    OK
                </Button>
            </Box>
        </Center>
    );
};

export default ParentReference;
