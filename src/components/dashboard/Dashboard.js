import { useLoading } from "../../context/loading.context";
import { useSkill } from "../../context/skill.context";
import { useUser } from "../../context/user.context";

import icon from "../../assets/torre-icon.png";

import "./Dashboard.css";

const Dashboard = () => {
  const { user, setUser } = useUser();
  const { skill, setSkill } = useSkill();
  const { loading, setLoading } = useLoading();

  return (
    <div className="inside-div inside-div-2">
      <div className="header dashboard-header">
        <span className="span">{"Dashboard"}</span>
      </div>
      <div className="content content-dashboard">
        <img src={icon} alt="Icon of Torre" width={"25%"} />
      </div>
      <div className="legend-2">
        <span className="text-1">
          Welcome, Please select a proficiency to explore on the menu
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
