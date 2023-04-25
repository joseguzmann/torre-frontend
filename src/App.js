import { Box } from "@mui/material";
import MainCard from "./components/main-card/MainCard";

const App = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ "background-color": "pink" }}
      height="100vh"
    >
      <MainCard />
    </Box>
  );
};

export default App;
