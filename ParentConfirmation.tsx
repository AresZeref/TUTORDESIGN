import React from 'react';
import { Box, Button, VStack, Heading, Center, Text } from '@chakra-ui/react';

const ParentReminder = () => {
    return (
        <Center height="100vh" bg="#e1e7f0">
            <Box
                bg="#e1e7f0"
                rounded="md"
                maxW="400px"
                w="100%"
                boxShadow="md"
                overflow="hidden"
                p={6}
                textAlign="center"
            >
                <Heading
                    as="h2"
                    size="lg"
                    color="red.600"
                    mb={6}
                >
                    Reminder
                </Heading>

                <VStack spacing={4}>
                    <Text fontSize="lg" fontWeight="bold" color="gray.700">
                        Reference Number
                    </Text>
                    <Text fontSize="3xl" fontWeight="bold" color="black">
                        83090839
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        Please take note of the reference number.
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        A confirmation is sent to your email at
                    </Text>
                    <Text fontSize="md" fontWeight="bold" color="blue.600">
                        p.chinedo.528607@umindanao.edu.ph
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        Please pay on-site within
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color="black">
                        1 WEEK
                    </Text>
                </VStack>

                <Button
                    mt={8}
                    bg="white"
                    color="black"
                    borderRadius="full"
                    px={8}
                    py={4}
                    fontWeight="bold"
                >
                    OK
                </Button>
            </Box>
        </Center>
    );
};

export default ParentReminder;
