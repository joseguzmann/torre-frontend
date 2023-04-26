import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Chip,
  Typography,
  Divider,
  Tooltip,
  IconButton,
  Grid,
} from "@mui/material";

import WestIcon from "@mui/icons-material/West";

import { useUser } from "../../context/user.context";
import { useSkill } from "../../context/skill.context";

const SkillInfo = () => {
  const { user, setUser } = useUser();
  const { skill, setSkill } = useSkill();

  return (
    <>
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
        <Grid
          container
          spacing={9}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={4}>
            <Tooltip title="Go back to user">
              <IconButton
                onClick={() => {
                  setSkill(null);
                }}
              >
                <WestIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              sx={{
                color: "#ffddcc",
                textTransform: "uppercase",
              }}
            >
              {skill?.name.toUpperCase()}
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
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
          }}
        >
          Proficiency -{" "}
          {skill?.proficiency == "no-experience-interested"
            ? "NO EXPERIENCE, BUT INTERESTED"
            : skill?.proficiency}
        </Typography>
      </Box>
    </>
  );
};

export default SkillInfo;
