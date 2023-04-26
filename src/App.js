import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import MainCard from "./components/main-card/MainCard";
import { useLoading } from "./context/loading.context";
import InputCard from "./components/input-card/InputCard";
import { useUser } from "./context/user.context";
import LoadingCard from "./components/loading-card/LoadingCard";
import { Typography } from "../node_modules/@mui/material/index";
import { useState } from "react";
import { useWelcome } from "./context/welcome.context";

const App = () => {
  const { loading, setLoading } = useLoading();
  const { user, setUser } = useUser();

  const { welcome, setWelcome } = useWelcome();

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
      <Dialog open={welcome} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">{"Welcome!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is my app for the Torre technical testing. I hope you like it!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setWelcome(false);
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default App;
