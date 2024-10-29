'use client'; // Add this to indicate that this is a Client Component

import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';

const AdminPendAppointments: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeTab, setActiveTab] = useState('pending');

    return (
        <Box minH="100vh" bg="#e0f7fa" p="20px" ml="210px">
            <Heading as="h1" mb="20px">RNSS Tutorial Center</Heading>

            <Box bg="#f2f2f2" p="20px" borderRadius="10px" minH="100vh">
                {/* Tabs and Search Bar */}
                <Flex justifyContent="space-between" alignItems="center" mb="20px">
                    <Flex>
                        <Button
                            onClick={() => setActiveTab('pending')}
                            bg={activeTab === 'pending' ? '#0056b3' : '#007bff'}
                            color="white"
                            px="20px"
                            py="10px"
                            borderRadius="5px"
                            mr="10px"
                        >
                            Pendings
                        </Button>
                        <Button
                            onClick={() => setActiveTab('approved')}
                            bg={activeTab === 'approved' ? '#0056b3' : '#007bff'}
                            color="white"
                            px="20px"
                            py="10px"
                            borderRadius="5px"
                        >
                            Approved
                        </Button>
                    </Flex>
                    <Input
                        placeholder="Search..."
                        w="200px"
                        borderRadius="5px"
                        p="10px"
                        border="1px solid #ccc"
                    />
                </Flex>

                {/* White Container with Table */}
                <Box bg="white" p="20px" borderRadius="10px" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Level</Th>
                                <Th>Sessions</Th>
                                <Th>Time</Th>
                                <Th>Subjects</Th>
                                <Th>Session Type</Th>
                                <Th>Date-Start</Th>
                                <Th>Rate</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Skye V. Galo</Td>
                                <Td>Grade School</Td>
                                <Td>Mon-Wed-Fri</Td>
                                <Td>4:30-5:30</Td>
                                <Td>Math</Td>
                                <Td>One-on-One</Td>
                                <Td>July 15, 2024</Td>
                                <Td>₱3,569.00</Td>
                                <Td>
                                    <Flex gap="10px">
                                        <Button bg="green.500" color="white" onClick={onOpen}>Accept</Button>
                                        <Button bg="red.500" color="white">Discard</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    {/* Add Button */}
                    <Button
                        position="absolute"
                        bottom="20px"
                        right="20px"
                        borderRadius="50%"
                        bg="skyblue"
                        w="50px"
                        h="50px"
                        fontSize="24px"
                    >
                        +
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AdminPendAppointments;
