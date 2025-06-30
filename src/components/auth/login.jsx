import React from "react";
import BackgroundTemplate from "./template/background";
import {
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  CatchingPokemonSharp,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import CustomSnackBar from "../helpers/snackbar";
import CustomFormFields from "../helpers/customFormFeilds";
import { login } from "../helpers/API/auth.api";

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
  });

  const [errorMessage, setErrorMessage] = React.useState({
    email: "",
    password: "",
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState(false);
  const [snackbarError, setSnackbarError] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && email.length > 0) {
      setErrors((prev) => ({ ...prev, email: false }));
      setErrorMessage({
        ...errorMessage,
        email: "",
      });
      if (emailRegex.test(email)) {
        setErrors((prev) => ({ ...prev, email: false }));
        setErrorMessage({
          ...errorMessage,
          email: "",
        });
        if (password && password.length > 0) {
          setErrors((prev) => ({ ...prev, password: false }));
          setErrorMessage({
            ...errorMessage,
            password: "",
          });

          const payload = {
            email: email,
            password: password,
          };

          const response = await login(payload);
          if (response && response?.error) {
            if (response?.message?.status) {
              setSnackbarMessage(response?.message?.response?.data?.message);
            } else {
              setSnackbarMessage(response?.message?.message);
            }
            setOpenSnackbar(true);
            setSnackbarError(false);
          } else {
            localStorage.setItem("token", response?.data?.details?.token);
            localStorage.setItem(
              "user",
              JSON.stringify(response?.data?.details?.user)
            );
            setSnackbarError(true);
            setSnackbarMessage("Login successful");
            setOpenSnackbar(true);
            setEmail("");
            setPassword("");
          }
        } else {
          setErrors((prev) => ({ ...prev, password: true }));
          setErrorMessage({
            ...errorMessage,
            password: "Password is required",
          });
        }
      } else {
        setErrors((prev) => ({ ...prev, email: true }));
        setErrorMessage({
          ...errorMessage,
          email: "Please enter a valid email address",
        });
      }
    } else {
      setErrors((prev) => ({ ...prev, email: true }));
      setErrorMessage({
        ...errorMessage,
        email: "Email is required",
      });
    }
  };

  return (
    <>
      <BackgroundTemplate>
        {/* Login Form */}
        <Box
          className="login-container"
          sx={{
            minWidth: {
              xs: "fit-content",
              xl: "532px",
              xxl: "630px",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            borderRadius: "30px",
            padding: {
              xs: "28px 0px",
              md: "unset",
            },
            width: {
              xs: "fit-content",
              md: "fit-content",
            },
            backgroundImage: {
              md: "url(/images/layers.png)",
            },
            backgroundColor: {
              xs: "white",
              md: "unset",
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "left",
            minHeight: {
              md: "100%",
            },
          }}
        >
          {/* Form Header */}
          <Box
            sx={{
              textAlign: "start",
              marginBottom: {
                xs: "10px",
                md: "40px",
              },
              padding: {
                md: "60px 28px 0px",
                xl: "60px 80px 0px",
              },
              marginLeft: {
                xs: "20px",
                md: "60px",
                xl: "80px",
              },
              marginRight: {
                xs: "20px",
                md: "unset",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: "16px",
                  md: "24px",
                },
                fontWeight: 700,
                color: "#333",
                fontFamily: "inter",
                textAlign: "start",
                marginBottom: "6px",
              }}
            >
              Agent Sign In
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "12px",
                  md: "16px",
                },
                color: "#666",
                mt: 1,
              }}
            >
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
                xs: "20px",
                md: "60px",
                xl: "80px",
              },
              marginRight: {
                xs: "20px",
                md: "unset",
              },
            }}
            onSubmit={handleSubmit}
          >
            <CustomFormFields
              label={"Email"}
              value={email}
              setValue={setEmail}
              errors={errors.email}
              errorMessage={errorMessage.email}
              type={"email"}
              required={true}
            />
            <CustomFormFields
              label={"Password"}
              value={password}
              setValue={setPassword}
              errors={errors.password}
              errorMessage={errorMessage.password}
              type={showPassword ? "text" : "password"}
              required={true}
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
            <Box
              sx={{
                alignSelf: "flex-start",
                mb: {
                  xs: 1,
                  md: 3,
                },
              }}
            >
              <Button
                variant="text"
                sx={{
                  fontSize: {
                    xs: "12px",
                    md: "16px",
                  },
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
              type="submit"
              sx={{
                padding: {
                  xs: "6px 8px",
                  md: "6px 16px",
                },
                mb: {
                  xs: 1,
                  md: 3,
                },
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: {
                  xs: "12px",
                  md: "1rem",
                },
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
              sx={{
                fontSize: {
                  xs: "10px",
                  md: "16px",
                },
                color: "#666",
                textAlign: "center",
              }}
            >
              New to MCL Global? Contact admin for account creation
            </Typography>
          </Box>
        </Box>
      </BackgroundTemplate>
      <CustomSnackBar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        snackbarMessage={snackbarMessage}
        error={snackbarError}
      />
    </>
  );
}

export default LoginPage;
