import { TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import About from "./About";

const ProfileTabs = ({ userInfo }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Profile Tabs" centered>
            <Tab label="About" value="1" />
            <Tab label="Posts" value="2" />
            <Tab label="Reviews" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <About userInfo={userInfo} />
        </TabPanel>
        {/* <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
};

export default ProfileTabs;
