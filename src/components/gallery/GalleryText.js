import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

function GalleryText({ base, design, descripsion }) {
    return (
        <ChakraProvider>
            <Box>
                <ul>
                    <li
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            color: "#373737",
                            marginTop: "16px",
                            marginBottom: "16px",
                        }}
                    >
                        <p>
                            <span>ﾍﾞｰｽ&nbsp;&#58;&nbsp;</span>
                            {base}
                        </p>
                    </li>
                    <li
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            color: "#373737",
                            marginBottom: "16px",
                        }}
                    >
                        <p>
                            <span>ﾃﾞｻﾞｲﾝ&nbsp;&#58;&nbsp;</span>
                            {design}
                        </p>
                    </li>
                    <li
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            color: "#373737",
                        }}
                    >
                        <p>{descripsion}</p>
                    </li>
                </ul>
            </Box>
        </ChakraProvider>
    );
}

export default GalleryText;
