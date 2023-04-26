import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  styled,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useLoading } from "../../context/loading.context";
import { useUser } from "../../context/user.context";
import { fetchUser } from "../../lib/api";

import icon from "../../assets/torre-icon.png";
// import user from "./user?.json";

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
      WebkitBoxShadow: "0 0 0 1000px rgba(0, 0, 0, .5) inset",
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

  const [id, setId] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const userData = await fetchUser(id);
      console.log(userData);
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
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
          justifyContent: "space-around",
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
          }}
        >
          Please enter the user ID:
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
            backgroundColor: "rgba(0,0,0, .1)",
            borderRadius: 2,
            boxShadow: 2,
            my: 1,
            mx: 1,
          }}
        />
        <MyButton
          variant="contained"
          type="button"
          onClick={handleSubmit}
          sx={{
            mx: 1,
          }}
        >
          SEARCH
        </MyButton>
      </Box>
    </Container>
  );
};

export default InputCard;
