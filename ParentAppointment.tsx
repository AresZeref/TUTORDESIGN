import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Center } from '@chakra-ui/react';

const ParentAppointment = () => {
    return (
        <Center height="100vh" bg="#f0f4f8">
            <Box
                bg="#e1e7f0"
                rounded="md"
                maxW="300px"
                w="100%"
                boxShadow="md"
                minH="70vh"
                overflow="hidden"  // Ensures no extra space around the header
            >
                <Heading
                    as="h2"
                    size="lg"
                    color="white"
                    bg="darkblue"
                    py={4}
                    w="100%"
                    textAlign="center"
                    m={0}        // Removes any default margin
                    borderTopRadius="md"  // Matches the box's rounded corners
                    mb={15}
                >
                    Appointment
                </Heading>

                <VStack
                    spacing={4}
                    align="center"
                    p={6}
                    bg="blue.50"
                    roundedBottom="md"
                    justify="center"
                >
                    <FormControl id="firstName" w="80%">
                        <FormLabel fontSize="16px">Student First Name</FormLabel>
                        <Input
                            placeholder="First Name"
                            w="90%"
                            fontSize="18px"
                            _placeholder={{ fontSize: "18px" }}
                            borderRadius="full"
                        />
                    </FormControl>

                    <FormControl id="middleInitial" w="80%">
                        <FormLabel fontSize="16px">Student Middle Initial</FormLabel>
                        <Input
                            placeholder="Middle Initial"
                            w="90%"
                            fontSize="18px"
                            _placeholder={{ fontSize: "17px" }}
                            borderRadius="full"
                        />
                    </FormControl>

                    <FormControl id="lastName" w="80%">
                        <FormLabel fontSize="16px">Student Last Name</FormLabel>
                        <Input
                            placeholder="Last Name"
                            w="90%"
                            fontSize="18px"
                            _placeholder={{ fontSize: "18px" }}
                            borderRadius="full"
                        />
                    </FormControl>

                    <FormControl id="sessions" w="80%">
                        <FormLabel fontSize="16px">Sessions</FormLabel>
                        <Input
                            placeholder="Mon-Wed-Fri"
                            w="90%"
                            fontSize="18px"
                            _placeholder={{ fontSize: "18px" }}
                            borderRadius="full"
                        />
                    </FormControl>

                    <FormControl id="sessionsType" w="80%">
                        <FormLabel fontSize="16px">Sessions Type</FormLabel>
                        <Input
                            placeholder="One on One"
                            w="90%"
                            fontSize="18px"
                            _placeholder={{ fontSize: "18px" }}
                            borderRadius="full"
                        />
                    </FormControl>

                    <FormControl id="dateStart" w="80%">
                        <FormLabel fontSize="16px">Date Start</FormLabel>
                        <Input
                            placeholder="Select Date"
                            type="date"
                            w="90%"
                            fontSize="18px"
                            _placeholder={{ fontSize: "18px" }}
                            borderRadius="full"
                        />
                    </FormControl>

                    <Box display="flex" justifyContent="space-evenly" w="80%" mt={6}>
                        <Button
                            variant="outline"
                            bg="blue.200"
                            borderRadius="12px"
                            fontSize="18px"
                            px={6}
                            py={4}
                        >
                            Back
                        </Button>
                        <Button
                            bg="#ffa500"
                            borderRadius="12px"
                            fontSize="18px"
                            px={6}
                            py={4}
                        >
                            Next
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </Center>
    );
};

export default ParentAppointment;
