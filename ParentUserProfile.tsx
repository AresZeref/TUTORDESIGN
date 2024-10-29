'use client'; // Ensure client-side rendering

import React, { useState } from 'react';
import { Box, Flex, Image, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';

const ParentUserProfile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex direction="column" height="100vh" bg="gray.100" p={5}>
            {/* Profile Header */}
            <Flex align="center" mb={4} p={3} bg="white" borderRadius="md" boxShadow="sm">
                <Image
                    src="https://via.placeholder.com/50"
                    alt="Profile"
                    borderRadius="full"
                    boxSize="50px"
                    mr={3}
                />
                <Box>
                    <Heading as="h2" size="md" fontSize="lg">Patrick G. Chinedo</Heading>
                </Box>
            </Flex>

            {/* Basic Information */}
            <Box bg="white" p={5} borderRadius="md" boxShadow="sm" mb={4}>
                <Heading as="h3" size="sm" mb={2}>Basic Information</Heading>
                <Table variant="simple">
                    <Tbody>
                        <Tr>
                            <Th>Name</Th>
                            <Td>Patrick G. Chinedo</Td>
                        </Tr>
                        <Tr>
                            <Th>Email Address</Th>
                            <Td>p.chinedo.526867@umindanao.edu.ph</Td>
                        </Tr>
                        <Tr>
                            <Th>Contact Number</Th>
                            <Td>0999-999-9999</Td>
                        </Tr>
                        <Tr>
                            <Th>Address</Th>
                            <Td>Matina Aplaya, Davao City</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            {/* Students Section */}
            <Box bg="white" p={5} borderRadius="md" boxShadow="sm" mb={4}>
                <Heading as="h3" size="sm" mb={2}>Students</Heading>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>School Level</Th>
                            <Th>School</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Skye V. Galo</Td>
                            <Td>Elementary</Td>
                            <Td>Ateneo de Davao University</Td>
                            <Td>Enrolled</Td>
                        </Tr>
                        <Tr>
                            <Td>Anna Marie V. Galo</Td>
                            <Td>Elementary</Td>
                            <Td>Ateneo de Davao University</Td>
                            <Td>Enrolled</Td>
                        </Tr>
                    </Tbody>
                </Table>

                {/* Button Group */}
                <Flex mt={3} gap={2}>
                    <Button colorScheme="blue" size="sm">Edit</Button>
                    <Button colorScheme="green" size="sm" onClick={onOpen}>Add Student</Button>
                </Flex>
            </Box>

            {/* Modal for Adding Students */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Student</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* The content that will be dynamically loaded can be placed here */}
                        <Text>Student addition form or data can go here.</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default ParentUserProfile;
