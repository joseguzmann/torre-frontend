import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Chip,
  Container,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect } from "react";
import { useLoading } from "../../context/loading.context";
import { useUser } from "../../context/user.context";
// import user from "./user?.json";

const MainCard = () => {
  const { user, setUser } = useUser();
  const { loading, setLoading } = useLoading();

  const proficiencyList = [
    "master",
    "expert",
    "proficient",
    "novice",
    "no-experience-interested",
  ];

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "rgba(0,0,0, .4)",
          padding: 2,
          borderRadius: "20px 20px 0px 0px",
          boxShadow: 2,
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
          {user?.person?.name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "rgba(0,0,0, .1)",
          py: 2,
        }}
      >
        <Avatar
          alt="User profile picture"
          src={user?.person?.picture}
          sx={{ width: 150, height: 150, boxShadow: 3 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "rgba(0,0,0, .4)",
          padding: 1,
          boxShadow: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#ffddcc",
            fontWeight: "lighter",
            // textTransform: "uppercase",
          }}
        >
          {user?.person?.professionalHeadline}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0, .1)",
          py: 2,
          color: "white",
        }}
      >
        <Typography
          variant="body"
          sx={{
            color: "rgba(255,255,255, 0.9)",
            fontWeight: "lighter",
            textTransform: "uppercase",
          }}
        >
          Skills and interests:
        </Typography>
      </Box>
      {proficiencyList.map((proficiency) => (
        <Accordion
          sx={{
            backgroundColor: "rgba(0,0,0,0)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "rgba(0,0,0,.4)",
            }}
          >
            <Typography
              sx={{
                color: "#ffddcc",
                fontWeight: "lighter",
                textTransform: "uppercase",
              }}
            >
              {proficiency.toUpperCase()}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              backgroundColor: "rgba(0,0,0, .1)",
              py: 2,
              color: "white",
            }}
          >
            {user?.strengths &&
              user?.strengths.map(
                (strength) =>
                  strength.proficiency === proficiency && (
                    <Chip
                      label={strength.name}
                      component="a"
                      href="#basic-chip"
                      variant="outlined"
                      key={strength.id}
                      clickable
                      sx={{ color: "rgba(255, 255, 255, 0.9)", m: 1 }}
                    />
                  )
              )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default MainCard;
