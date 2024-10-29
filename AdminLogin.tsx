"use client"; // Add this at the top of the file

import React from 'react';
import { Box, Button, Text, Link, Flex, Image, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginPage = () => {
    React.useEffect(() => {
        // Apply a global style to remove body margins and scrollbars
        document.body.style.margin = '0';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
    }, []);

    return (
        <>
            {/* Dark blue header at the top with logo */}
            <Box
                bg="#003366" // Dark blue color for the header
                w="100vw"
                h="70px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize={["xl", "2xl"]} // Responsive font size
                fontWeight="bold"
                position="fixed"
                top="0"
                zIndex="1000"
            >
                <Link href="/" display="flex" alignItems="center" justifyContent="center">
                    <Image
                        src="/images/rnss.png" // Replace with the actual logo path
                        alt="Logo"
                        boxSize={["50px", "75px"]} // Responsive logo size
                        objectFit="cover"
                    />
                </Link>
            </Box>

            <Flex
                minH="100vh"
                minW="100vw"
                backgroundImage="url('/images/login.jpg')"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
                mt="70px" // To account for the fixed header height
                position="relative"
            >
                {/* Transparent gray box with rounded rectangle edges */}
                <Box
                    bg="rgba(128, 128, 128, 0.8)"
                    p={[6, 10]} // Responsive padding inside the box
                    shadow="lg"
                    width={["90%", "450px"]} // Responsive width: 90% on small screens, fixed on larger
                    height={["auto", "400px"]} // Increased height
                    textAlign="center"
                    borderRadius="20px" // Rounded rectangle edges
                    mt={["20px", "-150px"]} // Responsive margin-top: smaller on mobile, larger on desktop
                >
                    {/* White LOGIN text, increased size */}
                    <Text fontSize={["24px", "32px"]} fontWeight="bold" mb={30} color="white">
                        LOGIN
                    </Text>

                    {/* Username Input */}
                    <InputGroup size="lg" mb={4} display="flex" justifyContent="center">
                        <Input
                            placeholder="Username"
                            variant="filled"
                            bg="white"
                            color="black"
                            _placeholder={{ color: 'gray.500' }}
                            borderRadius="full"
                            pr="4rem" // Space for icon on the right
                            width={["70%", "60%", "50%"]} // Responsive width for mobile, tablet, and desktop
                            h={["30px", "35px", "40px"]} // Responsive height
                            fontSize={["14px", "16px", "18px"]} // Adjusted font size
                            mt={20}

                        />
                        <InputRightElement
                            pointerEvents="none"
                            children={<FaUser color="gray.500" />}
                            mr="90px"
                            mt="32px"
                        />
                    </InputGroup>

                    {/* Password Input */}
                    <InputGroup size="lg" mb={8} display="flex" justifyContent="center">
                        <Input
                            type="password"
                            placeholder="Password"
                            variant="filled"
                            bg="white"
                            color="black"
                            _placeholder={{ color: 'gray.500' }}
                            borderRadius="full"
                            pr="4rem" // Space for icon on the right
                            width={["70%", "60%", "50%"]} // Responsive width
                            h={["30px", "35px", "40px"]} // Responsive height
                            fontSize={["14px", "16px", "18px"]} // Adjusted font size
                            mt={15}

                        />
                        <InputRightElement
                            pointerEvents="none"
                            children={<FaLock color="gray.500" />}
                            mr="90px"
                            mt="28px"

                        />
                    </InputGroup>



                    {/* Orange Log In Button */}
                    <Button
                        colorScheme="orange"
                        bg="#FFA500"
                        size="lg"
                        w="150px"
                        fontSize={["14px", "18px"]}
                        py={6}
                        borderRadius="30px"
                        _hover={{ bg: "#e69500" }}
                        mt={4}
                    >
                        Log in
                    </Button>

                    {/* Forgot Password Link */}
                    <Text fontSize={["11px", "13px"]} color="blue" mt={4} textDecoration="underline" cursor="pointer">
                        Forgot Password?
                    </Text>
                </Box>
            </Flex>
        </>
    );
};

export default LoginPage;
