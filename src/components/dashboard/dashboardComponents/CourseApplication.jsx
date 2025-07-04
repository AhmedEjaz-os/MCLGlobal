import { ApartmentOutlined, PersonOutline } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CourseApplicationTable from "./CourseApplicationTable";

function CourseApplication() {
  const [filter, setFilter] = useState("active");

  return (
    <>
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: "500",
          lineHeight: "32px",
          letterSpacing: "0.5%",
          color: "#000",
        }}
      >
        Course Application
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "32px",
          letterSpacing: "0.5%",
          color: "#000",
          marginTop: "3px",
          marginBottom: "10px",
        }}
      >
        View and Manage all the applications
      </Typography>
      <Box>
        <RadioGroup
          row
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{
            gap: 2,
            mb: 2,
          }}
        >
          <FormControlLabel
            value="active"
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
                    fontWeight: 600,
                    color: filter === "active" ? "#fff" : "#888",
                    fontSize: "16px",
                  }}
                >
                  Active
                </Typography>
              </Box>
            }
            sx={{
              padding: "9px 38px",
              border: "1.5px solid",
              marginLeft: "unset",
              borderRadius: "12px",
              backgroundColor: filter === "active" ? "#033C82" : "#fff",
              borderColor: filter === "active" ? "transparent" : "#000",
              transition: "all 0.2s",
              "&:hover": {
                borderColor: "#2563eb",
                ".radio-label": {
                  color: "#033C82",
                },
              },
            }}
          />

          <FormControlLabel
            value="rejected"
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
                  className="radio-label"
                  sx={{
                    fontWeight: 600,
                    color: filter === "rejected" ? "#fff" : "#888",
                    fontSize: "16px",
                  }}
                >
                  Rejected
                </Typography>
              </Box>
            }
            sx={{
              padding: "9px 38px",
              border: "1.5px solid",
              marginLeft: "unset",
              borderRadius: "12px",
              backgroundColor: filter === "rejected" ? "#033C82" : "#fff",
              borderColor: filter === "rejected" ? "transparent" : "#000",
              transition: "all 0.2s",
              "&:hover": {
                borderColor: "#2563eb",
                ".radio-label": {
                  color: "#033C82",
                },
              },
            }}
          />

          <FormControlLabel
            value="new"
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
                    fontWeight: 600,
                    color: filter === "new" ? "#fff" : "#888",
                    fontSize: "16px",
                  }}
                >
                  New
                </Typography>
              </Box>
            }
            sx={{
              padding: "9px 38px",
              border: "1.5px solid",
              borderRadius: "12px",
              marginLeft: "unset",
              backgroundColor: filter === "new" ? "#033C82" : "#fff",
              borderColor: filter === "new" ? "transparent" : "#000",
              transition: "all 0.2s",
              "&:hover": {
                borderColor: "#2563eb",
                ".radio-label": {
                  color: "#033C82",
                },
              },
            }}
          />
        </RadioGroup>
      </Box>
      <CourseApplicationTable />
    </>
  );
}

export default CourseApplication;
