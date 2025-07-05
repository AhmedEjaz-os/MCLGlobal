import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import routes from "../../../routes.jsx";
import ConstantString from "../../../ConstantString.js";
import dashboardIcons from "../../../svgIcons/dashboardIcons.jsx";
import { Avatar, ListItemAvatar } from "@mui/material";

const drawerWidth = 304;

const approvedIcon = (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.9583 12.5001L21.4167 9.60425L21.7708 5.77091L18.0104 4.91675L16.0417 1.60425L12.5 3.12508L8.95832 1.60425L6.98957 4.91675L3.22916 5.7605L3.58332 9.59383L1.04166 12.5001L3.58332 15.3959L3.22916 19.2397L6.98957 20.0938L8.95832 23.4063L12.5 21.8751L16.0417 23.3959L18.0104 20.0834L21.7708 19.2292L21.4167 15.3959L23.9583 12.5001ZM10.4167 17.7084L6.24999 13.5417L7.71874 12.073L10.4167 14.7605L17.2812 7.89591L18.75 9.37508L10.4167 17.7084Z"
      fill="#19B32B"
    />
  </svg>
);

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

function Sidebar() {
  const {
    PLATFORM_TYPE,
    PLATFORM_TYPE_DESCRIPTION,
    PLATFORM_ACCOUNT_STATUS,
    PLATFORM_ACCOUNT_STATUS_APPROVED,
  } = ConstantString;

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 64px)`,
        }}
        position="fixed"
        open={open}
      >
        <Toolbar
          sx={{
            minHeight: "24px !important",
            backgroundColor: "#033C82",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <img
              src="/images/sidebarAssets/sidebarCollapse.png"
              alt="sidebar-close-button"
              style={{
                transform: "rotateY(180deg)",
                transformStyle: "preserve-3d",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          ".MuiPaper-root": {
            backgroundColor: "#033C82",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "32px 16px 58px",
          }}
        >
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ width: "40px", objectFit: "contain" }}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <img
                src="/images/sidebarAssets/sidebarCollapse.png"
                alt="sidebar-close-button"
              />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {routes().map(({ name: text, icon, path }, index) => {
            const isActive = (path) => location.pathname === path;
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  display: "block",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: index !== 0 ? "5px" : "0px",
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      backgroundColor: isActive(path)
                        ? "#C0DCFF"
                        : "transparent",
                      borderRadius: open ? "32px" : "50%",
                      minWidth: open ? "unset" : "36px",
                      minHeight: open ? "48px" : "36px",
                      padding: !open ? "0px" : "8px 16px",

                      "&:hover": {
                        backgroundColor: "#C0DCFF",
                        borderRadius: "32px",
                        ".MuiTypography-root": {
                          color: "#033C82",
                        },
                        ".sidebar-icon > svg": {
                          color: "#033C82",
                        },
                      },
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                  onClick={() => navigate(path)}
                  style={{
                    color: isActive(path) ? "#033C82" : "white", // Set color for icon here
                  }}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 2,
                          }
                        : {
                            mr: "0px",
                          },
                    ]}
                  >
                    <span
                      className="sidebar-icon"
                      style={{
                        color: isActive(path) ? "#033C82" : "white",
                        width: !open ? "25px" : "auto",
                        height: !open ? "25px" : "auto",
                      }}
                    >
                      {icon}
                    </span>
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "100%",
                            textWrap: "wrap",
                            color: isActive(path) ? "#033C82" : "#fff",
                          }
                        : {
                            opacity: 0,
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "100%",
                            color: isActive(path) ? "#033C82" : "#fff",
                            display: "none",
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          borderRadius: "30px",
          marginTop: open ? "24px" : "56px",
          width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 64px)`,
        }}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            marginBottom: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginBottom: "22px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 32,
                  fontWeight: 500,
                  lineHeight: "32px",
                  letterSpacing: "0.5%",
                  marginBottom: "8px",
                }}
                variant="h1"
              >
                {PLATFORM_TYPE}
              </Typography>
              <Typography variant="p" sx={{}}>
                {PLATFORM_TYPE_DESCRIPTION}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#DFEDFF",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  borderRadius: "50%",
                  objectFit: "contain",
                  width: "46px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "2px",
                  marginRight: "18px",
                }}
              >
                {dashboardIcons.SettingsIcon}
              </Box>
              <ListItem
                sx={{
                  ".MuiButtonBase-root": {
                    paddingLeft: "0px",
                  },
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    ".MuiListItemText-root": {
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      flexDirection: "column",
                    },
                  }}
                >
                  <ListItemText
                    sx={{
                      ".MuiTypography-body1": {
                        textTransform: "uppercase",
                        fontSize: "14px",
                        fontWeight: "600",
                      },
                      ".MuiTypography-body2": {
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "100%",
                        color: "#000",
                      },
                    }}
                    secondary={"Admin"}
                    primary={`User Placeholder`}
                  />
                  <ListItemAvatar sx={{}}>
                    <Avatar
                      sx={{
                        bgcolor: "#033C82", // Background color
                        color: "white", // Text color for initials
                        width: 40, // Adjust size as needed
                        height: 40, // Adjust size as needed
                        fontSize: "1.2rem", // Font size for initials
                        margin: "0px 0px 0px 10px",
                      }}
                    >
                      AE
                    </Avatar>
                  </ListItemAvatar>
                </ListItemButton>
              </ListItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "10px 16px",
              borderRadius: 30,
              backgroundColor: "#CAFFD0",
              fontSize: 16,
              fontWeight: 500,
              lineHeight: "100%",
            }}
          >
            <span
              style={{
                marginTop: 2,
                marginRight: 3,
              }}
            >
              {approvedIcon}
            </span>{" "}
            {PLATFORM_ACCOUNT_STATUS}: {PLATFORM_ACCOUNT_STATUS_APPROVED}
          </Box>
        </DrawerHeader>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Sidebar;
