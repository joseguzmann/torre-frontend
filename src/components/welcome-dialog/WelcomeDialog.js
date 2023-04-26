import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@mui/material";

import { useWelcome } from "../../context/welcome.context";

const WelcomeDialog = () => {
  const { welcome, setWelcome } = useWelcome();

  return (
    <Dialog open={welcome} aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">{"Welcome!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This is my front-end application for Torre's technical test, built
          with React and MUI component library. <br />
          <br />
          HTTP requests are made through Fetch API to a CORS proxy that I have
          set up on Heroku <br />
          <Link href="https://tranquil-thicket-22159.herokuapp.com/">
            https://tranquil-thicket-22159.herokuapp.com/
          </Link>
          <br />
          from the following source code <br />
          <Link href="https://github.com/Rob--W/cors-anywhere/">
            https://github.com/Rob--W/cors-anywhere/
          </Link>
          <br />
          <br />
          Front-end application is hosted on Firebase and can be accessed
          through the following links: <br />
          <Link href="https://torre-technical-test.web.app/">
            https://torre-technical-test.web.app/
          </Link>
          <br />
          <Link href="https://torre-technical-test.firebaseapp.com/">
            https://torre-technical-test.firebaseapp.com/
          </Link>
          <br />
          <br />
          For more information, please refer to the GitHub repository:
          <br />
          <Link href="https://github.com/joseguzmann/torre-frontend">
            https://github.com/joseguzmann/torre-frontend
          </Link>
          <br />
          <br />
          By José Guzmán
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
