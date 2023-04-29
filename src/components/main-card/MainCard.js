import { useProficiency } from "../../context/proficiency.context";
import { useSkill } from "../../context/skill.context";

import Dashboard from "../dashboard/Dashboard";
import ProficientSkill from "../show-proficient-skills/ProficientSkill";
import Sidebar from "../sidebar/Sidebar";
import SkillDetails from "../skill-details/SkillDetails";
import "./MainCard.css";

const MainCard = () => {
  const { skill, setSkill } = useSkill();
  const { proficiency, setProficiency } = useProficiency();

  return (
    <div className="main-div">
      <Sidebar />
      {!proficiency ? (
        <Dashboard />
      ) : !skill ? (
        <ProficientSkill />
      ) : (
        <SkillDetails />
      )}
    </div>
  );
};

export default MainCard;
