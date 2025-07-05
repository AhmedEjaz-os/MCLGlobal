import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  ChangePasswordIcon,
  LogoutIcon,
  PrivacyPolicyIcon,
  SecuritySettingsIcon,
  TerminateAccountIcon,
  TermsConditionsIcon,
} from "./accountSettingsComponent/AccountSettingsIcons";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import ConstantString from "../../ConstantString";

function AccountSettings() {
  const menuItems = [
    {
      title: ConstantString.DASHBOARD_ACCOUNT_SETTINGS_BUTTON_TITLE_1,
      icons: <ChangePasswordIcon />,
      color: "#000000",
    },
    {
      title: ConstantString.DASHBOARD_ACCOUNT_SETTINGS_BUTTON_TITLE_2,
      icons: <SecuritySettingsIcon />,
      color: "#000000",
    },
    {
      title: ConstantString.DASHBOARD_ACCOUNT_SETTINGS_BUTTON_TITLE_3,
      icons: <TermsConditionsIcon />,
      color: "#000000",
    },
    {
      title: ConstantString.DASHBOARD_ACCOUNT_SETTINGS_BUTTON_TITLE_4,
      icons: <PrivacyPolicyIcon />,
      color: "#000000",
    },
    {
      title: ConstantString.DASHBOARD_ACCOUNT_SETTINGS_BUTTON_TITLE_5,
      icons: <TerminateAccountIcon />,
      color: "#B31942",
    },
    {
      title: ConstantString.DASHBOARD_ACCOUNT_SETTINGS_BUTTON_TITLE_6,
      icons: <LogoutIcon />,
      color: "#B31942",
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
        {ConstantString.DASHBOARD_ACCOUNT_SETTINGS_TITLE}
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
        {ConstantString.DASHBOARD_ACCOUNT_SETTINGS_SUBTITLE}
      </Typography>
      <List
        sx={{
          width: "100%",
          bgcolor: "transparent",
          marginTop: "32px",
          ".MuiListItemIcon-root": {
            minWidth: "unset",
            marginRight: "20px",
          },
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {menuItems.map(({ title, icons, color }, index) => (
          <>
            <ListItemButton key={index} sx={{ borderRadius: "10px" }}>
              <ListItemIcon>{icons}</ListItemIcon>
              <ListItemText
                sx={{
                  ".MuiTypography-root": {
                    color: { color },
                    fontSize: "20px",
                    fontWeight: "500",
                  },
                }}
                primary={title}
              />
            </ListItemButton>
            <Divider
              sx={{
                display: index === menuItems.length - 1 ? "none" : "block",
              }}
            />
          </>
        ))}
      </List>
    </Box>
  );
}

export default AccountSettings;
