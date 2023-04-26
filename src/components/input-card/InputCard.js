import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
  styled,
  Tooltip,
  IconButton,
  Popover,
  Link,
} from "@mui/material";

import HelpIcon from "@mui/icons-material/Help";

import { useState } from "react";
import { useLoading } from "../../context/loading.context";
import { useToast } from "../../context/toast.context";
import { useUser } from "../../context/user.context";
import { fetchUser } from "../../lib/api";

import icon from "../../assets/torre-icon.png";

const MyTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "rgba(0, 0, 0, 0.4)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(0, 0, 0, 0.4)",
    },
    "&:focus-within fieldset": {
      borderColor: "rgba(0, 0, 0, 0.4)",
    },
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0.2)",
    },
    "& .MuiInputBase-input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px rgba(145, 119, 145, 1) inset !important",
      backgroundColor: "rgba(0, 0, 0, .4) !important",
    },
    "& .MuiInputBase-input:-internal-autofill-selected": {
      WebkitBoxShadow: "0 0 0 1000px rgba(145, 119, 145, 1) inset !important",
      backgroundColor: "rgba(0, 0, 0, .4) !important",
    },
  },
});

const MyButton = styled(Button)({
  boxShadow: 2,
  textTransform: "none",
  fontSize: 14,
  fontWeight: "lighter",
  color: "#ffddcc",
  padding: "12px 20px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "rgba(0,0,0, .6)",
  borderColor: "rgba(105,105,105)",
  "&:hover": {
    backgroundColor: "rgba(0,0,0, .6)",
    borderColor: "rgba(0, 0, 0, 0.4)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "rgba(0,0,0, .6)c",
    borderColor: "rgb(169,169,169)",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(119,136,153,.5)",
  },
});

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={icon} alt="Icon of Torre" width={"50%"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0, .4)",
            padding: 2,
            borderRadius: 2,
            boxShadow: 2,
            my: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#ffddcc",
              fontWeight: "lighter",
              textTransform: "uppercase",
              mr: 1,
            }}
          >
            Please enter your user ID:
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MyTextField
            id="outlined-basic"
            label="User id"
            color="warning"
            InputLabelProps={{
              style: { color: "rgba(0, 0, 0, 0.6)" },
            }}
            variant="outlined"
            value={id}
            onChange={(event) => setId(event.target.value)}
            className="input"
            sx={{
              backgroundColor: "rgba(145, 119, 145, 1)",
              borderRadius: 2,
              boxShadow: 2,
              my: 1,
              mx: 1,
            }}
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
