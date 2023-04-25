import Box from "@mui/material/Box";
import MainCard from "./components/main-card/MainCard";

const App = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ "background-color": "pink" }}
    >
      <MainCard />
    </Box>
  );
};

export default App;
