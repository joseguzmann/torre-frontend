import { Box } from "@mui/material";
import MainCard from "./components/main-card/MainCard";
import { useLoading } from "./context/loading.context";
import InputCard from "./components/input-card/InputCard";
import { useUser } from "./context/user.context";
import LoadingCard from "./components/loading-card/LoadingCard";

const App = () => {
  const { loading, setLoading } = useLoading();
  const { user, setUser } = useUser();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100vh"
      >
        {loading ? <LoadingCard /> : <>{user ? <MainCard /> : <InputCard />}</>}
      </Box>
    </>
  );
};

export default App;
