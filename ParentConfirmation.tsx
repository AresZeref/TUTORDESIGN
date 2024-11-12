import React from 'react';
import {
    Box,
    Button,
    VStack,
    Heading,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from '@chakra-ui/react';

const ParentConfirmation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();  // Hook to manage modal state

    return (
        <>
            {/* Trigger Button */}
            <Button onClick={onOpen}>Open Confirmation</Button>

            {/* Modal Structure */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {/* Modal Header */}
                    <ModalHeader bg="darkblue" color="white" textAlign="center">
                        Confirmation
                    </ModalHeader>

                    {/* Modal Body */}
                    <ModalBody bg="#f0f4f8">
                        <VStack align="start" spacing={3} mt={6} w="100%" px={6}>
                            <Text fontSize="16px" fontWeight="bold">
                                Name: <Text as="span" fontWeight="normal">Skye V. Galo</Text>
                            </Text>
                            <Text fontSize="16px" fontWeight="bold">
                                Sessions: <Text as="span" fontWeight="normal">Mon-Wed-Fri</Text>
                            </Text>
                            <Text fontSize="16px" fontWeight="bold">
                                Session Type: <Text as="span" fontWeight="normal">One-on-One</Text>
                            </Text>
                            <Text fontSize="16px" fontWeight="bold">
                                Subject: <Text as="span" fontWeight="normal">Math</Text>
                            </Text>
                            <Text fontSize="16px" fontWeight="bold">
                                Date Start: <Text as="span" fontWeight="normal">July 15, 2024</Text>
                            </Text>
                            <Text fontSize="16px" fontWeight="bold">
                                Time: <Text as="span" fontWeight="normal">4:30 - 5:30 PM</Text>
                            </Text>
                            <Text fontSize="16px" fontWeight="bold">
                                Rate: <Text as="span" fontWeight="normal">₱2,500.00</Text>
                            </Text>
                        </VStack>
                    </ModalBody>

                    {/* Modal Footer */}
                    <ModalFooter display="flex" justifyContent="space-evenly">
                        <Button variant="outline" onClick={onClose} bg="blue.200" borderRadius="14px" fontSize="18px">
                            Back
                        </Button>
                        <Button bg="#ffa500" borderRadius="14px" fontSize="18px">
                            Next
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ParentConfirmation;
