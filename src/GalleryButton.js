import { ChakraProvider, Flex, Spacer, Button } from "@chakra-ui/react";
import { TfiAngleRight } from "react-icons/tfi";

function GalleryButton() {
    const iconStyle = {
        marginLeft: 15,
    };

    return (
        <>
            <ChakraProvider>
                <Flex h={500} align="center">
                    <Spacer />
                    <Button
                        bg="blackAlpha.700"
                        w="350px"
                        h="90px"
                        borderRadius="0px"
                        fontSize="45px"
                        fontFamily="Roboto"
                        color="gray.200"
                        letterSpacing="5px"
                        _hover={{ bg: "#7997FF", color: "#373737" }}
                    >
                        GALLERY
                        <TfiAngleRight style={iconStyle} />
                    </Button>
                    <Spacer />
                </Flex>
            </ChakraProvider>
        </>
    );
}

export default GalleryButton;
