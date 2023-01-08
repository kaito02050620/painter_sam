import { ChakraProvider, Flex, Spacer, Button } from "@chakra-ui/react";
import { TfiAngleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";

function GalleryButton() {
    const iconStyle = {
        marginLeft: 15,
    };

    return (
        <>
            <ChakraProvider>
                <Flex
                    h={{ base: "250px", md: "350px", lg: "500px" }}
                    align="center"
                >
                    <Spacer />
                    <Link to="/gallery">
                        <Button
                            bg="blackAlpha.700"
                            w={{ base: "200px", md: "250px", lg: "350px" }}
                            h={{ base: "60px", md: "80px", lg: "90px" }}
                            borderRadius="0px"
                            fontSize={{ base: "20px", md: "30px", lg: "40px" }}
                            fontFamily="Roboto ,sans-serif"
                            color="gray.200"
                            letterSpacing="5px"
                            _hover={{ bg: "#7997FF", color: "#373737" }}
                        >
                            GALLERY
                            <TfiAngleRight style={iconStyle} />
                        </Button>
                    </Link>
                    <Spacer />
                </Flex>
            </ChakraProvider>
        </>
    );
}

export default GalleryButton;
