import { Box, Typography } from "@mui/material";

export const ErrorPage = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Typography variant="h1" color="error">
                404 - Not Found
            </Typography>
        </Box>
    );
}