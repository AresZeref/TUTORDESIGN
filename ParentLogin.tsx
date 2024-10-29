"use client"; // Add this at the top of the file

import React from 'react';
import { Box, Button, Text, Link, Flex, Image } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';

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
                    height={["auto", "330px"]} // Adjusted height: 'auto' for small screens, 330px for larger screens (10% increase)
                    textAlign="center"
                    borderRadius="20px" // Rounded rectangle edges
                    mt={["20px", "-150px"]} // Responsive margin-top: smaller on mobile, larger on desktop
                >
                    {/* White LOGIN text, increased size */}
                    <Text fontSize={["24px", "32px"]} fontWeight="bold" mb={12} color="white"> {/* Responsive font size */}
                        LOGIN
                    </Text>

                    {/* Empty space above the button */}
                    <Box mt={[8, 20]}></Box> {/* Responsive margin-top to push the content down */}

                    {/* Google sign-in button */}
                    <Box mt={[8, 12]}> {/* Responsive margin-top to position button */}
                        <Button
                            leftIcon={<FaGoogle color="#4285F4" />} // Google blue color
                            colorScheme="blue"
                            size="lg"
                            variant="solid"
                            w="full"
                            fontSize={["16px", "20px"]} // Responsive button text size
                            py={6}
                            borderRadius="30px" // Increased rounding for the button
                            mt={["20px", "50px"]} // Responsive margin-top for the button
                        >
                            Sign in with Google
                        </Button>

                        {/* Sign-up link */}
                        <Text fontSize={["13px", "15px"]} mt={8}> {/* Responsive size for the sign-up link */}
                            No account?{' '}
                            <Link href="/signup" color="blue.500" fontWeight="medium" textDecoration="underline">
                                Sign Up
                            </Link>
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </>
    );
};

export default LoginPage;
