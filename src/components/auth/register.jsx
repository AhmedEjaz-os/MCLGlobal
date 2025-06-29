import React, { useEffect } from "react";
import BackgroundTemplate from "./template/background";
import {
  Button,
  Typography,
  Box,
  InputAdornment,
  InputLabel,
  RadioGroup,
  Radio,
  useRadioGroup,
  styled,
  Grid,
  Autocomplete,
  TextField,
  Checkbox,
} from "@mui/material";
import { ApartmentOutlined, PersonOutline } from "@mui/icons-material";
import CustomSnackBar from "../helpers/snackbar";
import CustomFormFields from "../helpers/customFormFeilds";
import FormControlLabel from "@mui/material/FormControlLabel";
import countries from "../helpers/JSON/countries.json";
import Flag from "react-world-flags";
import axios from "axios";

function RegisterPage() {
  const [accountType, setAccountType] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmEmail, setConfirmEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [phoneCountry, setPhoneCountry] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [whatsAppPhone, setWhatsAppPhone] = React.useState("");
  const [acceptTerms, setAcceptTerms] = React.useState("");

  useEffect(() => {
    axios
      .get("http://ip-api.com/json/")
      .then((response) => {
        if (response.status === 200) {
          const index = countries.findIndex(
            (country) => country.countryCode === response.data.countryCode
          );
          setPhoneCountry({
            countryCode: response.data.countryCode,
            phoneCode: countries[index].phoneCode,
          });
          setWhatsAppPhone({
            countryCode: response.data.countryCode,
            phoneCode: countries[index].phoneCode,
          });
        }
      })
      .catch((error) => {
        console.error("Failed to get country code", error);
      });
  }, []);

  const [errors, setErrors] = React.useState({
    firstName: false,
    lastName: false,
    email: false,
    confirmEmail: false,
    phone: false,
    whatsapp: false,
    acceptTerms: false,
  });

  const [errorMessages, setErrorMessage] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    whatsapp: "",
    acceptTerms: "",
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState(false);

  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({ theme }) => ({
    variants: [
      {
        props: { checked: true },
        style: {
          ".MuiFormControlLabel-label": {
            color: theme.palette.primary.main,
          },
        },
      },
    ],
  }));

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      account_type: accountType,
      first_name: firstName,
      last_name: lastName,
      email,
      confirm_email: confirmEmail,
      phone: phoneCountry?.phoneCode + phone,
      whatsapp: whatsAppPhone?.phoneCode + whatsapp,
    };
    console.log("Register Successfull", payload);
  };

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
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: {
                md: "0px 28px 0px",
                xl: "0px 24px 0px",
              },
              marginLeft: {
                md: "80px",
                xl: "80px",
              },
              maxHeight: {
                md: 525,
              },
              maxWidth: {
                md: 514,
              },
              overflow: {
                md: "auto",
              },
            }}
            onSubmit={handleSubmit}
          >
            <InputLabel
              style={{
                alignSelf: "flex-start",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "10px",
                overflow: "visible",
              }}
            >
              Account Type
            </InputLabel>
            <RadioGroup
              row
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              sx={{
                gap: 2,
                mb: 3,
              }}
            >
              <FormControlLabel
                value="individual"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <PersonOutline
                      sx={{
                        fontSize: 22,
                        color:
                          accountType === "individual" ? "#2563eb" : "#bdbdbd",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: accountType === "individual" ? "#111" : "#888",
                        fontSize: "14px",
                      }}
                    >
                      Individual Agent
                    </Typography>
                  </Box>
                }
                sx={{
                  flex: 1,
                  m: 0,
                  px: 3,
                  py: 2,
                  border: "1.5px solid",
                  borderColor:
                    accountType === "individual" ? "#2563eb" : "#DCDCDC",
                  borderRadius: "12px",
                  background: accountType === "individual" ? "#f1f6fd" : "#fff",
                  transition: "all 0.2s",
                  "&:hover": {
                    borderColor: "#2563eb",
                  },
                }}
              />

              <FormControlLabel
                value="business"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <ApartmentOutlined
                      sx={{
                        fontSize: 22,
                        color:
                          accountType === "business" ? "#2563eb" : "#bdbdbd",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: accountType === "business" ? "#111" : "#888",
                        fontSize: "14px",
                      }}
                    >
                      Business/Agency
                    </Typography>
                  </Box>
                }
                sx={{
                  flex: 1,
                  m: 0,
                  px: 3,
                  py: 2,
                  border: "1.5px solid",
                  borderColor:
                    accountType === "business" ? "#2563eb" : "#DCDCDC",
                  borderRadius: "12px",
                  background: accountType === "business" ? "#f1f6fd" : "#fff",
                  transition: "all 0.2s",
                  "&:hover": {
                    borderColor: "#2563eb",
                  },
                }}
              />
            </RadioGroup>

            <Grid container md={12} spacing={2}>
              <Grid
                item
                sx={{
                  width: "100%",
                }}
                size={{
                  sx: 12,
                  md: 6,
                }}
              >
                <CustomFormFields
                  label="First Name"
                  value={firstName}
                  setValue={setFirstName}
                  errors={errors.firstName}
                  errorMessage={errorMessages.firstName}
                  type="text"
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                }}
                size={{
                  sx: 12,
                  md: 6,
                }}
              >
                <CustomFormFields
                  label="Last Name"
                  value={lastName}
                  setValue={setLastName}
                  errors={errors.lastName}
                  errorMessage={errorMessages.lastName}
                  type="text"
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                }}
                size={{
                  sx: 12,
                  md: 6,
                }}
              >
                <CustomFormFields
                  label="Email"
                  value={email}
                  setValue={setEmail}
                  errors={errors.email}
                  errorMessage={errorMessages.email}
                  type="email"
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                }}
                size={{
                  sx: 12,
                  md: 6,
                }}
              >
                <CustomFormFields
                  label="Confirm Email"
                  value={confirmEmail}
                  setValue={setConfirmEmail}
                  errors={errors.confirmEmail}
                  errorMessage={errorMessages.confirmEmail}
                  type="email"
                />
              </Grid>
              <Grid
                item
                size={{
                  sx: 12,
                  md: 12,
                }}
              >
                <CustomFormFields
                  label="Phone number"
                  value={phone}
                  setValue={setPhone}
                  errors={errors.whatsapp}
                  errorMessage={errorMessages.whatsapp}
                  type="number"
                  startAdornment={
                    <InputAdornment position="start" sx={{ gap: 1 }}>
                      <Autocomplete
                        options={countries}
                        getOptionLabel={(option) => option.countryCode}
                        value={phoneCountry}
                        onChange={(e, newValue) => setPhoneCountry(newValue)}
                        sx={{
                          width: 100,
                          "& .MuiOutlinedInput-root": {
                            padding: 0,
                            border: "none",
                            "& fieldset": { border: "none" },
                          },
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="+Code"
                            variant="outlined"
                            InputProps={{
                              ...params.InputProps,
                              disableUnderline: true,
                            }}
                          />
                        )}
                        renderOption={(props, option) => (
                          <Box component="li" {...props}>
                            <Flag
                              code={option.countryCode}
                              style={{
                                width: 24,
                                height: 16,
                                marginRight: "10px",
                              }}
                            />
                            <Typography>{option.countryCode}</Typography>&nbsp;
                          </Box>
                        )}
                      />
                      <Flag
                        code={phoneCountry?.countryCode}
                        style={{ width: 24, height: 16 }}
                      />
                      {phoneCountry?.phoneCode}
                    </InputAdornment>
                  }
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "100%",
                }}
                size={{
                  sx: 12,
                  md: 12,
                }}
              >
                <CustomFormFields
                  label="Whatsapp Number"
                  value={whatsapp}
                  setValue={setWhatsapp}
                  errors={errors.whatsapp}
                  errorMessage={errorMessages.whatsapp}
                  type="number"
                  disabled={!whatsAppPhone}
                  title={"Select the country first"}
                  startAdornment={
                    <InputAdornment position="start" sx={{ gap: 1 }}>
                      <Autocomplete
                        options={countries}
                        getOptionLabel={(option) => option.countryCode}
                        value={whatsAppPhone}
                        onChange={(e, newValue) => setWhatsAppPhone(newValue)}
                        sx={{
                          width: 100,
                          "& .MuiOutlinedInput-root": {
                            padding: 0,
                            border: "none",
                            "& fieldset": { border: "none" },
                          },
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="+Code"
                            variant="outlined"
                            InputProps={{
                              ...params.InputProps,
                              disableUnderline: true,
                            }}
                          />
                        )}
                        renderOption={(props, option) => (
                          <Box component="li" {...props}>
                            <Flag
                              code={option.countryCode}
                              style={{
                                width: 24,
                                height: 16,
                                marginRight: "10px",
                              }}
                            />
                            <Typography>{option.countryCode}</Typography>&nbsp;
                          </Box>
                        )}
                      />
                      <Flag
                        code={whatsAppPhone?.countryCode}
                        style={{ width: 24, height: 16 }}
                      />
                      {whatsAppPhone?.phoneCode}
                    </InputAdornment>
                  }
                />
              </Grid>
            </Grid>

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
              Sign Up
            </Button>

            {/* Sign Up Prompt */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                />
              }
              sx={{
                color: "#666",
                textAlign: "start",
                alignItems: "flex-start",
                ".MuiCheckbox-root": {
                  paddingTop: "4px",
                },
              }}
              label="By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy."
            />
          </Box>
        </div>
      </BackgroundTemplate>
      <CustomSnackBar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        snackbarMessage={snackbarMessage}
      />
    </>
  );
}

export default RegisterPage;
