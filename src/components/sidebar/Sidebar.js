import { Avatar, Chip } from "@mui/material";

import { useProficiency } from "../../context/proficiency.context";
import { useSkill } from "../../context/skill.context";
import { useUser } from "../../context/user.context";

const Sidebar = () => {
  const { user, setUser } = useUser();
  const { skill, setSkill } = useSkill();
  const { proficiency, setProficiency } = useProficiency();

  const proficiencyList = [
    "master",
    "expert",
    "proficient",
    "novice",
    "no-experience-interested",
  ];

  return (
    <div className="inside-div inside-div-1">
      <div className="header">
        <span className="span">{user?.person?.name || "Unavailable"}</span>
        <Chip
          label="CHANGE USER"
          component="a"
          variant="outlined"
          clickable
          onClick={() => {
            setSkill(null);
            setProficiency(null);
            setUser(null);
          }}
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            borderColor: "rgba(255, 255, 255, 0.9)",
          }}
        />
      </div>
      <div className="content">
        <Avatar
          alt="User profile picture"
          src={user?.person?.picture}
          sx={{ width: 150, height: 150, boxShadow: 3 }}
        />
      </div>
      <div className="legend-1">
        <span>{user?.person?.professionalHeadline || "Unavailable"}</span>
      </div>
      <div className="legend-2">
        <span className="text-1">Proficiencies</span>
        <span className="text-2">(Click on anyone)</span>
      </div>
      {proficiencyList.map((iproficiency, index) => (
        <div
          className={
            proficiency == iproficiency
              ? "small-menu small-menu-selected"
              : "small-menu"
          }
          onClick={() => {
            setSkill(null);
            setProficiency(iproficiency);
          }}
        >
          <div className="item">
            <span className="item-text">
              {iproficiency === "no-experience-interested"
                ? "NO EXPERIENCE, BUT INTERESTED"
                : iproficiency.toUpperCase()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
