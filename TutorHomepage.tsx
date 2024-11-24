"use client"; // Required for Next.js client-side functionality

import { Box, Flex, Heading, Text, Icon, VStack, HStack } from '@chakra-ui/react';
import { FaUsers, FaClipboardList, FaChartLine, FaBook } from 'react-icons/fa';
import { MdSchedule } from 'react-icons/md';
import { MdOutlineEventNote } from 'react-icons/md';

import { IconType } from 'react-icons';

const TutorHomepage = () => {
    return (
        <Box
            bgImage="url('images/rnss.png')"  // Path to your image
            bgSize="contain"  // Makes the image fit within the container without stretching it
            bgPosition="center"  // Centers the image
            bgRepeat="no-repeat"  // Prevents the image from repeating
            minH="100vh"  // Takes up full viewport height
            py={10}
            px={5}
        >
            <Flex
                justify="center"
                wrap="wrap"
                gap={40} // Further increased gap between boxes
                maxW="1200px"
                mx="auto"
                align="center"  // Centers vertically
                minH="100vh"  // Ensures Flex container takes full height
            >
                {/* Cards displayed in rows of 3 */}
                <Card
                    icon={FaUsers}
                    stat="85"
                    description="Current Students"
                />

                <Card
                    icon={MdOutlineEventNote}
                    stat="2"
                    description="My Sessions"
                />
            </Flex>
        </Box>
    );
};

// Defining the types for the Card props
interface CardProps {
    icon: IconType;
    stat: string | number;
    description: string;
}

// Reusable Card Component with centered icon and stat, underline, and text link for "View More"
const Card: React.FC<CardProps> = ({ icon, stat, description }) => {
    return (
        <Box
            bg="#d4dde8" // Gray-blue background
            p={[6, 8]} // Responsive padding
            rounded="lg"
            shadow="lg"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="20px"
            height="240px" // Increased height
            width={["100%", "90%", "300px"]} // Increased width for larger boxes
            maxW="300px"
            mb={10} // Adds additional space below each box
        >
            <Flex direction="column" justify="space-between" align="center" height="100%">
                {/* Icon and Stat in the same row */}
                <HStack spacing={6} justify="center" w="100%">
                    <Icon as={icon} w={50} h={50} color="black" /> {/* Increased icon size */}
                    <Heading as="h1" fontSize="5xl" color="black">
                        {stat}
                    </Heading>
                </HStack>

                {/* Description */}
                <Text
                    mt={2}
                    fontSize="lg"
                    color="black"
                    textAlign="center"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    maxW="95%"
                >
                    {description}
                </Text>

                {/* Underline with more margin */}
                <Box h="1px" bg="black" w="100%" my={4} /> {/* Lowered underline */}

                {/* View More link */}
                <Text fontSize="sm" color="blue.600" textAlign="center" cursor="pointer">
                    View More
                </Text>
            </Flex>
        </Box>
    );
};

export default TutorHomepage;
