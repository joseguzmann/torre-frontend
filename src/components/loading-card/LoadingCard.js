import { Box, Container } from "@mui/material";
import { PropagateLoader } from "react-spinners";

import "./LoadingCard.css";

const LoadingCard = () => {
  return (
    <Container maxWidth="sm">
      <Box className="LoadingBox">
        <PropagateLoader color="rgba(255, 255, 255, .4)" size={37} />
      </Box>
    </Container>
  );
};

export default LoadingCard;
