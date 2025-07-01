import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import routes from "../../../routes.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 304;

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
                      minHeight: 48,
                      backgroundColor: isActive(path)
                        ? "#C0DCFF"
                        : "transparent",
                      borderRadius: open ? "32px" : "50%",
                      minWidth: open ? "unset" : "36px",
                      minHeight: open ? "48px" : "36px",
                      "&:hover": {
                        backgroundColor: "#C0DCFF",
                        borderRadius: "32px",
                        ".MuiTypography-root": {
                          color: "#033C82",
                        },
                        ".sidebar-icon": {
                          filter:
                            "invert(14%) sepia(60%) saturate(3597%) hue-rotate(204deg) brightness(91%) contrast(98%)",
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
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <img
                      src={icon}
                      alt={text}
                      className="sidebar-icon"
                      style={{
                        width: 24,
                        objectFit: "contain",
                        filter: isActive(path)
                          ? "invert(14%) sepia(60%) saturate(3597%) hue-rotate(204deg) brightness(91%) contrast(98%)"
                          : "invert(0%) sepia(7%) saturate(7489%) hue-rotate(208deg) brightness(110%) contrast(101%)",
                        "&:hover": {
                          color: "#033C82",
                        },
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                            color: "white",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "100%",
                            textWrap: "wrap",
                            color: isActive(path) ? "#033C82" : "#fff",
                          }
                        : {
                            opacity: 0,
                            color: "white",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "100%",
                            color: isActive(path) ? "#033C82" : "#fff",
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
        }}
      >
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;
