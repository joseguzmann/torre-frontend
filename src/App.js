import { Box } from "@mui/material";
import MainCard from "./components/main-card/MainCard";
import { useLoading } from "./context/loading.context";
import InputCard from "./components/input-card/InputCard";

const App = () => {
  const { loading, setLoading } = useLoading();

  return (
    <>
      {loading ? (
        <h1>Cargando</h1>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ "background-color": "pink" }}
          height="100vh"
        >
          {/* <MainCard /> */}
          <InputCard />
        </Box>
      )}
    </>
  );
};

export default App;
