import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import NewApplication from "./accountManagement/NewApplication";
import ApplicationsHistory from "./accountManagement/ApplicationHistory";
import ApplicationDetails from "./accountManagement/ApplicationDetails";
import CourseApplication from "./dashboardComponents/CourseApplication";
import AccountManagement from "./accountManagement/AccountManagement";

function ApplicationManagement() {
  const [filter, setFilter] = useState("NewApplication");

  const menu = [
    {
      name: "New Application",
      value: "NewApplication",
    },
    {
      name: "Applications History",
      value: "ApplicationsHistory",
    },
    {
      name: "Application Details",
      value: "ApplicationDetails",
    },
    {
      name: "Course Application",
      value: "CourseApplication",
    },
    {
      name: "Account Management",
      value: "AccountManagement",
    },
  ];

  return (
    <Box>
      <Box>
        <RadioGroup
          row
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{
            gap: "0px",
            mb: 2,
          }}
        >
          {menu.map(({ name, value }, index) => (
            <FormControlLabel
              value={value}
              control={<Radio sx={{ display: "none" }} />}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: filter === value ? "#fff" : "#888",
                      fontSize: "16px",
                    }}
                  >
                    {name}
                  </Typography>
                </Box>
              }
              sx={{
                padding: "8px 14px",
                border: "1.5px solid",
                marginLeft: "unset",
                borderRadius: "10px",
                backgroundColor: filter === value ? "#033C82" : "#DFEDFF",
                borderColor: "transparent",
                transition: "all 0.2s",
                "&:hover": {
                  borderColor: "#2563eb",
                  ".radio-label": {
                    color: filter === value ? "#000" : "#033C82",
                  },
                },
              }}
            />
          ))}
        </RadioGroup>
      </Box>
      <Box>
        {filter === "NewApplication" ? (
          <NewApplication />
        ) : filter === "ApplicationsHistory" ? (
          <ApplicationsHistory />
        ) : filter === "ApplicationDetails" ? (
          <ApplicationDetails />
        ) : filter === "CourseApplication" ? (
          <CourseApplication />
        ) : (
          <AccountManagement />
        )}
      </Box>
    </Box>
  );
}

export default ApplicationManagement;
