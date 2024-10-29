import { Box, Flex, Table, Thead, Tbody, Tr, Th, Td, Button, Link, Heading, useColorModeValue } from "@chakra-ui/react";

const AdminAccountManage = () => {
    const containerBg = useColorModeValue("white", "gray.700");
    const mainContentBg = useColorModeValue("#B0C4DE", "gray.800");

    return (
        <Box bg="skyblue" minH="100vh" overflow="hidden">
            {/* Sidebar and Header should be imported as Chakra UI components */}
            {/* <Sidebar /> */}
            {/* <Header /> */}

            <Box bg={mainContentBg} ml={{ base: 0, md: "200px" }} pt="0" px="4" height="calc(100vh - 0px)" overflowY="auto">
                <Flex direction="column" alignItems="center" mb="6">
                    <Box boxSize="70px" mb="2">
                        <img src="logo.png" alt="Logo" />
                    </Box>
                    <Heading as="h2" size="lg" textAlign="center">
                        Administrator
                    </Heading>
                </Flex>

                <Box bg={containerBg} boxShadow="md" p="6" borderRadius="lg" maxW="800px" mx="auto">
                    <Box mb="6">
                        <Table variant="simple" size="md">
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Email Address</Th>
                                    <Th>Username</Th>
                                    <Th>Password</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Administrator</Td>
                                    <Td>msstutorial@gmail.com</Td>
                                    <Td>Admin</Td>
                                    <Td>
                                        <Link href="#" color="blue.500">
                                            Change Password
                                        </Link>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>

                    <Heading as="h3" size="md" mb="4">
                        Tutor Accounts
                    </Heading>
                    <Box>
                        <Table variant="simple" size="md">
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Email Address</Th>
                                    <Th>Type</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Angeline B. Ba</Td>
                                    <Td>angeline@gmail.com</Td>
                                    <Td>Tutor</Td>
                                </Tr>
                                <Tr>
                                    <Td>Gin Gin Publico</Td>
                                    <Td>publico@gmail.com</Td>
                                    <Td>Tutor</Td>
                                </Tr>
                                <Tr>
                                    <Td>Josh Villaraz</Td>
                                    <Td>villaraz@gmail.com</Td>
                                    <Td>Tutor</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>

                    <Flex justify="flex-end" mt="6">
                        <Button colorScheme="gray" mr="4">
                            Edit
                        </Button>
                        <Button colorScheme="red" mr="4">
                            Delete
                        </Button>
                        <Button colorScheme="green">Create Account</Button>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default AdminAccountManage;
