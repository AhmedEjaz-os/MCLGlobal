import { Box, Divider, Typography } from "@mui/material";

function BackgroundTemplate({ ...rest }) {
  const { children } = rest;
  return (
    <Box
      sx={{
        backgroundImage: `url('/images/background.png')`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: {
          md: "cover",
          xl: "cover",
        },
        height: "100%",
        display: "flex",
        justifyContent: {
          md: "space-between",
          xl: "flex-start",
        },
        alignItems: "center",
        padding: {
          md: "52px 25px 52px 25px", // Adjust padding on large screens and larger
          xxl: "52px 75px 52px 155px",
        },
      }}
    >
      {/* Left Content Section */}
      <Box
        className="left"
        sx={{
          width: "100%",
          zIndex: 2,
          marginBottom: "20px",
          display: {
            xs: "none",
            md: "block",
          },
          maxWidth: {
            md: "30%",
            xl: "50%",
          },
          color: "#ffffff",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ marginBottom: "24px" }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            maxWidth: {
              xl: "270px",
            },

            fontSize: {
              md: "30px",
              xl: "36px",
            },
            lineHeight: "46px",
            mb: "16px",
          }}
        >
          Welcome back to MCL Global
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "24px",
            whiteSpace: "pre-line",
            maxWidth: {
              xl: "352px",
            },
          }}
        >
          Empowering agents to manage leads, access insights, and stay
          connected. Sign in to continue delivering excellence.
        </Typography>
      </Box>

      <Box
        className="right"
        sx={{
          width: {
            xs: "100%",
            md: "fit-content",
          },
          height: "100%",
          display: {
            xs: "flex",
            md: "block",
          },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: {
            xs: "100%",
            md: "70%",
            xl: "50%",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default BackgroundTemplate;
