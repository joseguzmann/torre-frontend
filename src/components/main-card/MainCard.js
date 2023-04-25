import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect } from "react";
import user from "./user.json";

const MainCard = () => {
  // const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // const userResponse = await fetch(
      //   "https://tranquil-thicket-22159.herokuapp.com/http://torre.bio/api/bios/jg175415"
      // );
      // const userData = await userResponse.json();

      console.log(user);
      // setUser(userData);
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ "background-color": "red" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "blue",
        }}
      >
        <Typography variant="body1">{user.person.name}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "blue",
        }}
      >
        <Avatar
          alt="User profile picture"
          src={user.person.picture}
          sx={{ width: 80, height: 80 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightblue",
        }}
      >
        <Typography variant="body1">
          {user.person.professionalHeadline}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blue",
        }}
      >
        <Typography variant="body1">Skills and interests:</Typography>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Master</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Chip
            label="Clickable Link"
            component="a"
            href="#basic-chip"
            variant="outlined"
            clickable
          />
          {user.strengths.map((strength) => (
            <Chip
              label={strength.name}
              component="a"
              href="#basic-chip"
              variant="outlined"
              clickable
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Expert</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Proficient</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Beginner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>No experience, but interested</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default MainCard;
