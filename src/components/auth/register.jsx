import BackgroundTemplate from "./template/background";
import {
  Button,
  Typography,
  Box,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

function RegisterPage() {
  return (
    <>
      <BackgroundTemplate>
        {/* Login Form */}
        <div
          className="login-container"
          style={{
            minWidth: {
              xl: "532px",
              xxl: "630px",
            },
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
            minHeight: "100%",
          }}
        >
          {/* Form Header */}
          <Box
            sx={{
              textAlign: "start",
              marginBottom: "40px",
              padding: {
                md: "60px 28px 0px",
                xl: "60px 80px 0px",
              },
              marginLeft: {
                md: "60px",
                xl: "80px",
              },
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
          </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: {
                md: "0px 28px 0px",
                xl: "0px 80px 0px",
              },
              marginLeft: {
                md: "60px",
                xl: "80px",
              },
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
              required
              type="email"
              placeholder="Enter your email"
              sx={{
                borderRadius: "12px",
                backgroundColor: "#f8f9fa",
                mb: 3,
                fontSize: "14px",
              }}
            />

            {/* Sign In Button */}
            <Button
              fullWidth
              variant="contained"
              type="submit"
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
          </Box>
        </div>
      </BackgroundTemplate>
    </>
  );
}

export default RegisterPage;
