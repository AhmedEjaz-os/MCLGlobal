import React from "react";
import BackgroundTemplate from "./template/background";
import {
  Button,
  TextField,
  Typography,
  Box,
  InputLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <BackgroundTemplate>
        {/* Login Form */}
        <div
          className="login-container"
          style={{
            minWidth: "630px",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
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
              textAlign: "start",
              marginBottom: "40px",
              padding: "60px 80px 0px",
              marginLeft: "80px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#333",
                fontFamily: "inter",
                textAlign: "start",
                marginBottom: "6px",
              }}
            >
              Agent Sign In
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", mt: 1 }}>
              Access your MCL Global agent portal
            </Typography>
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0px 80px 0px",
              marginLeft: "80px",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <InputLabel
              required
              style={{
                alignSelf: "flex-start",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "10px",
              }}
            >
              Email
            </InputLabel>
            <OutlinedInput
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                borderRadius: "12px",
                backgroundColor: "#f8f9fa",
                mb: 3,
                fontSize: "14px",
              }}
            />

            {/* Password Field */}
            <InputLabel
              required
              style={{
                alignSelf: "flex-start",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "10px",
              }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              fullWidth
              type={showPassword ? "text" : "password"}
              variant="outlined"
              placeholder="Enter your password"
              sx={{
                borderRadius: "12px",
                backgroundColor: "#f8f9fa",
                mb: 3,
                fontSize: "14px",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />

            {/* Forgot Password Link */}
            <Box sx={{ alignSelf: "flex-start", mb: 3 }}>
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
                textTransform: "capitalize",
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
              New to MCL Global? Contact admin for account creation
            </Typography>
          </form>
        </div>
      </BackgroundTemplate>
    </>
  );
}

export default LoginPage;
