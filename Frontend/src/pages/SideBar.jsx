import React, { useState } from "react";
import "./SideBar.css";
import { Box, Modal } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CreateTaskForm from "../Task/CreateTask/CreateTaskForm";
import { useDispatch, useSelector } from "react-redux";

const menu = [
  { name: "Home", value: "HOME", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "COMPLETED", value: "COMPLETED", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "ALLOCATED", value: "ALLOCATED", role: ["ROLE_ADMIN"] },
  { name: "NOT ALLOCATED", value: "NOT COMPLETED", role: ["ROLE_ADMIN"] },
  { name: "Create New Task", value: "", role: ["ROLE_ADMIN"] },
  { name: "Notification", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] },
];

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  const location = useLocation();
  const [openCreateTaskModel, setOpenCreateTaskModel] = useState(false);

  const handleOpenCreateTaskModel = () => setOpenCreateTaskModel(true);
  const handleCloseCreateTaskModel = () => setOpenCreateTaskModel(false);

  const handleMenuChange = (item) => {
    const updatedParams = new URLSearchParams(location.search);

    if (item.name === "Create New Task") {
      handleOpenCreateTaskModel();
    } else if (item.name === "Home") {
      updatedParams.delete("filter");
      const queryString = updatedParams.toString();
      const updatedPath = queryString
        ? `${location.pathname}?${queryString}`
        : location.pathname;

      navigate(updatedPath);
    } else {
      updatedParams.set("filter", item.value);
      navigate(`${location.pathname}?${updatedParams.toString()}`);
    }

    setActiveMenu(item.name);
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center card fixed w-[20vw]">
      <div className="space-y-5 h-full">
        {menu
          .filter((item) => item.role.includes(auth.user?.role))
          .map((item) => (
            <p
              onClick={() => handleMenuChange(item)}
              className={`py-3 px-5 rounded-full text-center cursor-pointer ${
                activeMenu === item.name ? "activeMenuItem" : "menuItem"
              }`}
            >
              {item.name}
            </p>
          ))}
      </div>

      <CreateTaskForm
        open={openCreateTaskModel}
        handleClose={handleCloseCreateTaskModel}
      />
    </div>
  );
};

export default SideBar;
