import React from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

function BackgroundTemplate() {
  return (
    <div
      style={{
        backgroundImage: `url('/images/background.png')`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "52px 75px 52px 155px",
      }}
    >
      {/* Left Content Section */}
      <div
        className="left"
        style={{
          width: "100%",
          zIndex: 2,
          marginBottom: "20px",
          maxWidth: "50%",
          color: "#ffffff",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ marginBottom: "24px" }}
        />
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Welcome back to MCL Global
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
        >
          Empowering agents to manage leads, access insights, and stay
          connected. Sign in to continue delivering excellence.
        </Typography>
      </div>

      <div
        className="right"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "50%",
        }}
      >
        <div
          className="login-container"
          style={{
            minWidth: "630px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "30px",
            width: "fit-content",
            backgroundImage: "url(/images/layers.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "left",
            minHeight: "920px",
          }}
        >
          {/* Form Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
              padding: "60px 80px 0px",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#333" }}>
              Agent Sign In
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", mt: 1 }}>
              Access your MCL Global agent portal
            </Typography>
          </div>

          {/* Login Form */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0px 80px 0px",
              marginLeft: "48px",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Email Field */}
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              sx={{ mb: 3 }}
              InputProps={{
                style: {
                  borderRadius: "12px",
                  backgroundColor: "#f8f9fa",
                },
              }}
              InputLabelProps={{
                style: {
                  fontWeight: 600,
                  color: "#555",
                },
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              sx={{ mb: 1 }}
              InputProps={{
                style: {
                  borderRadius: "12px",
                  backgroundColor: "#f8f9fa",
                },
              }}
              InputLabelProps={{
                style: {
                  fontWeight: 600,
                  color: "#555",
                },
              }}
            />

            {/* Forgot Password Link */}
            <Box sx={{ alignSelf: "flex-end", mb: 3 }}>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  color: "#2563eb",
                  padding: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Forgot Password?
              </Button>
            </Box>

            {/* Sign In Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                py: 1.5,
                mb: 3,
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "1rem",
                backgroundColor: "#2563eb",
                "&:hover": {
                  backgroundColor: "#1d4ed8",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 8px rgba(37, 99, 235, 0.3)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Sign In
            </Button>

            {/* Sign Up Prompt */}
            <Typography
              variant="body2"
              sx={{ color: "#666", textAlign: "center" }}
            >
              New to MCL Global?{" "}
              <span style={{ fontWeight: 600 }}>Contact admin</span> for account
              creation
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BackgroundTemplate;
