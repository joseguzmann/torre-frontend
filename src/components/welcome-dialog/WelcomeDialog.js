import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useWelcome } from "../../context/welcome.context";

const WelcomeDialog = () => {
  const { welcome, setWelcome } = useWelcome();

  return (
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
  );
};

export default WelcomeDialog;
