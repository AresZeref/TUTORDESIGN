import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";

const EmailVerify = () => {
    return (
        <Box
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#b0c4de" // Gray-blue background color for outer container
            padding="4"
        >
            <Box
                bg="white"
                width="100%"
                maxW="600px" // Increased maximum width for a more spacious container
                p="8"
                borderRadius="20px"
                shadow="lg"
                textAlign="center"
            >
                <Text fontSize="2xl" as="h2" color="gray.800" fontWeight="bold" mb="4">
                    Click <Link color="blue" href="#">here</Link> to verify your email.
                </Text>
                <Text fontSize="lg" color="gray.700" mb="4">
                    Or copy and paste the link below in your browser.
                </Text>
                <Text
                    fontSize="sm"
                    color="gray.500"
                    wordBreak="break-all"
                    bg="gray.50"
                    p="3"
                    rounded="md"
                    whiteSpace="pre-wrap" // Allows text to wrap nicely
                >
                    http://localhost:3000/verifyemail?token=$2a$10$IV7hBf8eu9aFNQUdssxgD.heL11voUz0uk9qPdcjuCG0fe2El0TdW

                </Text>
            </Box>
        </Box>
    );
};

export default EmailVerify;
