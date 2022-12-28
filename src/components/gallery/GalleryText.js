import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

function GalleryText({ obj }) {
    return (
        <ChakraProvider>
            <Box>
                <ul>
                    <li
                        style={{
                            fontFamliy: "Roboto",
                            color: "#373737",
                            marginTop: "16px",
                            marginBottom: "16px",
                        }}
                    >
                        <p>
                            <span>ﾍﾞｰｽ&nbsp;&#58;&nbsp;</span>
                            {obj.base}
                        </p>
                    </li>
                    <li
                        style={{
                            fontFamliy: "Roboto",
                            color: "#373737",
                            marginBottom: "16px",
                        }}
                    >
                        <p>
                            <span>ﾃﾞｻﾞｲﾝ&nbsp;&#58;&nbsp;</span>
                            {obj.design}
                        </p>
                    </li>
                    <li
                        style={{
                            fontFamliy: "Roboto",
                            color: "#373737",
                        }}
                    >
                        <p>{obj.descripsion}</p>
                    </li>
                </ul>
            </Box>
        </ChakraProvider>
    );
}

export default GalleryText;
