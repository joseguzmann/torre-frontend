import {
  Alert,
  Box,
  Container,
  IconButton,
  Link,
  Popover,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";

import HelpIcon from "@mui/icons-material/Help";

import { useState } from "react";
import { useLoading } from "../../context/loading.context";
import { useToast } from "../../context/toast.context";
import { useUser } from "../../context/user.context";
import { fetchUser } from "../../lib/api";

import "./InputCard.css";

import MyButton from "../wrapped-components/MyButton";
import MyTextField from "../wrapped-components/MyTextField";

import icon from "../../assets/torre-icon.png";

const InputCard = () => {
  const { user, setUser } = useUser();
  const { loading, setLoading } = useLoading();
  const { toast, setToast } = useToast();

  const [id, setId] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const idp = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const userData = await fetchUser(id);
      setUser(userData);
    } catch (error) {
      console.log(error);
      setToast("User not found. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box className="image-box">
          <img src={icon} alt="Icon of Torre" width={"50%"} />
        </Box>
        <Box className="prompt-box">
          <Typography variant="body1" className="prompt-text">
            Please enter your user ID:
          </Typography>
        </Box>
        <Box className="form-box">
          <MyTextField
            id="outlined-basic"
            label="User id"
            color="primary"
            variant="outlined"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <MyButton
            variant="contained"
            type="button"
            onClick={() => {
              if (id) {
                handleSubmit();
              } else {
                setToast("User ID could not be empty!");
              }
            }}
            sx={{
              mx: 1,
            }}
          >
            SEARCH
          </MyButton>
          <Tooltip onClick={handleClick}>
            <IconButton>
              <HelpIcon />
            </IconButton>
          </Tooltip>
          <Popover
            id={idp}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              To access your profile data, enter your Torre user ID, <br />
              which can be found in the Torre link of your profile. <br />
              For instance, my profile link is{" "}
              <Link href="https://torre.co/jg175415">
                https://torre.co/jg175415
              </Link>
              , <br />
              so my ID is <b>jg175415</b>.
            </Typography>
          </Popover>
        </Box>
      </Container>
      <Snackbar
        open={toast}
        autoHideDuration={6000}
        onClose={() => setToast(null)}
      >
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          onClose={() => setToast(null)}
        >
          Error: {toast}
        </Alert>
      </Snackbar>
    </>
  );
};

export default InputCard;
