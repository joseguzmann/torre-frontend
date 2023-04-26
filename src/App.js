import { Box } from "@mui/material";

import InputCard from "./components/input-card/InputCard";
import LoadingCard from "./components/loading-card/LoadingCard";
import MainCard from "./components/main-card/MainCard";
import WelcomeDialog from "./components/welcome-dialog/WelcomeDialog";

import { useLoading } from "./context/loading.context";
import { useUser } from "./context/user.context";

const App = () => {
  const { loading, setLoading } = useLoading();
  const { user, setUser } = useUser();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxSizing="border-box"
        flexDirection="column"
        minHeight="100vh"
      >
        {loading ? <LoadingCard /> : <>{user ? <MainCard /> : <InputCard />}</>}
      </Box>
      <WelcomeDialog />
    </>
  );
};

export default App;
