import { Box, Container, Typography } from "@mui/material";
import { PropagateLoader } from "react-spinners";
import { useLoading } from "../../context/loading.context";

import icon from "../../assets/torre-icon.png";
// import user from "./user?.json";

const LoadingCard = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PropagateLoader color="rgba(0,0,0, .4)" size={37} />
      </Box>
    </Container>
  );
};

export default LoadingCard;
