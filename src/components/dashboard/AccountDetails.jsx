import { Box, Divider, IconButton, List, Typography } from "@mui/material";
import ConstantString from "../../ConstantString";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

function AccountDetails() {
  const [togglePassword, setTogglePassword] = useState(false);
  const menuItems = [
    {
      title: ConstantString.DASHBOARD_ACCOUNT_DETAILS_TITLE_1,
      hideValue: "",
      value: "JOHN A.",
      ShowButton: false,
    },
    {
      title: ConstantString.DASHBOARD_ACCOUNT_DETAILS_TITLE_2,
      hideValue: "",
      value: "john008",
      ShowButton: false,
    },
    {
      title: ConstantString.DASHBOARD_ACCOUNT_DETAILS_TITLE_3,
      hideValue: "",
      value: "john@xyz.com",
      ShowButton: false,
    },
    {
      title: ConstantString.DASHBOARD_ACCOUNT_DETAILS_TITLE_4,
      hideValue: "**************",
      value: "Hello123",
      ShowButton: true,
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#DFEDFF",
        borderRadius: "30px",
        padding: "33px 41px",
      }}
    >
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: "500",
          lineHeight: "32px",
          letterSpacing: "0.5%",
          marginBottom: "6px",
          color: "#000",
        }}
      >
        {ConstantString.DASHBOARD_ACCOUNT_DETAILS_TITLE}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "32px",
          letterSpacing: "0.5%",
          color: "#000",
        }}
      >
        {ConstantString.DASHBOARD_ACCOUNT_DETAILS_SUBTITLE}
      </Typography>
      <List>
        {menuItems.map(({ title, value, ShowButton, hideValue }, index) => (
          <>
            <Box
              sx={{
                paddingLeft: "0px",
                fontSize: "18px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "18px",
                paddingBottom: "8px",
                ".MuiTypography-root": {
                  color: "#000",
                },
              }}
              key={index}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "32px",
                  letterSpacing: "0.5%",
                  marginBottom: "6px",
                  color: "#000",
                }}
              >
                {title}
              </Typography>
              {ShowButton ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    onClick={() => setTogglePassword((prev) => !prev)}
                  >
                    {togglePassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                  {togglePassword ? (
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        lineHeight: "32px",
                        color: "#343434",
                        height: "fit-content",
                        marginBottom: "0px",
                      }}
                    >
                      {value}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        lineHeight: "32px",
                        color: "#343434",
                        height: "fit-content",
                        marginBottom: "0px",
                      }}
                    >
                      {hideValue}
                    </Typography>
                  )}
                </Box>
              ) : (
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "32px",
                    letterSpacing: "0.5%",
                    marginBottom: "6px",
                    color: "#343434",
                  }}
                >
                  {value}
                </Typography>
              )}
            </Box>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );
}

export default AccountDetails;
