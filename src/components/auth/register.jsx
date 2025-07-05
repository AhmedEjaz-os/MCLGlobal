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
import "../../App.css";

function RegisterPage() {
  const [accountType, setAccountType] = React.useState("individual");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmEmail, setConfirmEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [phoneCountry, setPhoneCountry] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [whatsAppPhone, setWhatsAppPhone] = React.useState("");
  const [acceptTerms, setAcceptTerms] = React.useState("");

  const [ownersName, setOwnersName] = React.useState("");
  const [ownersEmail, setOwnersEmail] = React.useState("");
  const [ownersPhone, setOwnersPhone] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [addressOne, setAddressOne] = React.useState("");
  const [addressTwo, setAddressTwo] = React.useState("");
  const [city, setCity] = React.useState("");
  const [postCode, setPostCode] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [region, setRegion] = React.useState("");

  const urlRegex =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}([\/?#][^\s]*)?$/;

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
  }, [whatsAppPhone.countryCode]);

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

  const [errorsOrg, setErrorsOrg] = React.useState({
    ownersName: false,
    ownersEmail: false,
    ownersPhone: false,
    companyName: false,
    website: false,
    addressOne: false,
    addressTwo: false,
    city: false,
    postCode: false,
    country: false,
    region: false,
  });

  const [errorMessagesOrg, setErrorMessageOrg] = React.useState({
    ownersName: "",
    ownersEmail: "",
    ownersPhone: "",
    companyName: "",
    website: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    postCode: "",
    country: "",
    region: "",
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState(false);

  const resetForm = () => {
    setAccountType("individual");
    setFirstName("");
    setLastName("");
    setEmail("");
    setConfirmEmail("");
    setPhone("");
    setPhoneCountry("");
    setWhatsapp("");
    setWhatsAppPhone("");
    setAcceptTerms("");
    setOwnersName("");
    setOwnersEmail("");
    setOwnersPhone("");
    setCompanyName("");
    setWebsite("");
    setAddressOne("");
    setAddressTwo("");
    setCity("");
    setPostCode("");
    setCountry("");
    setRegion("");
    setErrors({
      firstName: false,
      lastName: false,
      email: false,
      confirmEmail: false,
      phone: false,
      whatsapp: false,
      acceptTerms: false,
    });
    setErrorMessage({
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      phone: "",
      whatsapp: "",
      acceptTerms: "",
    });
    setErrorsOrg({
      ownersName: false,
      ownersEmail: false,
      ownersPhone: false,
      companyName: false,
      website: false,
      addressOne: false,
      addressTwo: false,
      city: false,
      postCode: false,
      country: false,
      region: false,
    });
    setErrorMessageOrg({
      ownersName: "",
      ownersEmail: "",
      ownersPhone: "",
      companyName: "",
      website: "",
      addressOne: "",
      addressTwo: "",
      city: "",
      postCode: "",
      country: "",
      region: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (accountType === "individual") {
      const payload = {
        accountType: "individual agent",
        firstName: firstName,
        lastName: lastName,
        email,
        confirm_email: confirmEmail,
        phone: phoneCountry?.phoneCode + phone,
        whatsapp: whatsAppPhone?.phoneCode + whatsapp,
        platform: "web",
      };
      resetForm();
      console.log("Individual Registered Successfull", payload);
    } else {
      if (accountType === "business") {
        if (ownersName && ownersName.length > 0) {
          if (companyName && companyName.length > 0) {
            if (urlRegex.test(website)) {
              if (addressOne && addressOne.length > 0) {
                if (city && city.length > 0) {
                  if (postCode && postCode > 0) {
                    const payload = {
                      account_type: "individual agent",
                      ownerName: ownersName,
                      owner_email: ownersEmail,
                      ownerPhone: ownersPhone,
                      companyName: companyName,
                      website: website,
                      address1: addressOne,
                      address2: addressTwo,
                      city: city,
                      postcode: postCode,
                      country: country,
                      region: region,
                      platform: "web",
                    };
                    resetForm();
                    console.log("Organization Registered Successfull", payload);
                  } else {
                    setErrorsOrg({ ...errorsOrg, postCode: true });
                    setErrorMessageOrg({
                      ...errorsOrg,
                      postCode: "Post Code field is required",
                    });
                  }
                } else {
                  setErrorsOrg({ ...errorsOrg, city: true });
                  setErrorMessageOrg({
                    ...errorsOrg,
                    city: "city field is required",
                  });
                }
              } else {
                setErrorsOrg({ ...errorsOrg, addressOne: true });
                setErrorMessageOrg({
                  ...errorsOrg,
                  addressOne: "Address 1 field is required",
                });
              }
            } else {
              setErrorsOrg({ ...errorsOrg, website: true });
              setErrorMessageOrg({
                ...errorsOrg,
                website: "Not a valid URL",
              });
            }
          } else {
            setErrorsOrg({ ...errorsOrg, companyName: true });
            setErrorMessageOrg({
              ...errorsOrg,
              companyName: "Company Name field is required",
            });
          }
        } else {
          setErrorsOrg({ ...errorsOrg, ownersName: true });
          setErrorMessageOrg({
            ...errorsOrg,
            ownersName: "Owner Name field is required",
          });
        }
      }
    }
  };

  return (
    <>
      <BackgroundTemplate display="flex">
        {/* Login Form */}
        <Box
          className="login-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            borderRadius: "30px",
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
          }}
        >
          <Box
            component="form"
            sx={{
              display: {
                md: "flex",
              },
              flexDirection: {
                md: "row",
              },
              flexWrap: {
                md: "wrap",
              },
              overflow: "auto",
              padding: {
                xs: "20px",
              },
              margin: {
                xs: "30px 0px 30px",
                md: "20px 44px 20px 80px",
                xxl: "20px 10px 20px 80px",
              },
              minWidth: {
                md: "420px",
                xxl: "unset",
              },
              maxWidth: {
                xs: "80vw",
                md: "420px",
                xxl: "448px",
              },
              maxHeight: {
                xs: "80vh",
                md: "606px",
                xxl: "664px",
              },
            }}
            onSubmit={handleSubmit}
            className="register-form"
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
              {accountType === "individual" ? (
                <>
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
                    sx={{
                      width: {
                        xs: "100%",
                        md: "unset",
                      },
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
                        <InputAdornment
                          position="start"
                          sx={{
                            gap: "2px",
                            justifyContent: "flex-start",
                            padding: "0px",
                            margin: "0px",
                            width: "100px",
                          }}
                        >
                          <Autocomplete
                            options={countries}
                            getOptionLabel={(option) => option.countryCode}
                            value={phoneCountry}
                            clearIcon={null}
                            onChange={(e, newValue) =>
                              setPhoneCountry(newValue)
                            }
                            sx={{
                              width: {
                                xs: "50%",
                                md: "52%",
                              },
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
                                sx={{
                                  fontSize: "10px",
                                }}
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
                                <Typography>{option.countryCode}</Typography>
                                &nbsp;
                              </Box>
                            )}
                          />
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <Flag
                              code={phoneCountry?.countryCode}
                              style={{ width: 24, height: 16 }}
                            />
                            {phoneCountry?.phoneCode}
                          </Box>
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
                      sx={{
                        display: "block",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                      }}
                      startAdornment={
                        <InputAdornment
                          position="start"
                          sx={{
                            gap: "2px",
                            justifyContent: "flex-start",
                            width: "100px",
                          }}
                        >
                          <Autocomplete
                            options={countries}
                            getOptionLabel={(option) => option.countryCode}
                            value={whatsAppPhone}
                            clearIcon={null}
                            onChange={(e, newValue) =>
                              setWhatsAppPhone(newValue)
                            }
                            sx={{
                              width: {
                                xs: "50%",
                                md: "52%",
                              },
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
                                <Typography>{option.countryCode}</Typography>
                                &nbsp;
                              </Box>
                            )}
                          />
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <Flag
                              code={whatsAppPhone?.countryCode}
                              style={{ width: 24, height: 16 }}
                            />
                            {whatsAppPhone?.phoneCode}
                          </Box>
                        </InputAdornment>
                      }
                    />
                  </Grid>
                </>
              ) : (
                <>
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
                      label="Owner's Name"
                      value={ownersName}
                      setValue={setOwnersName}
                      errors={errorsOrg.ownersName}
                      errorMessage={errorMessagesOrg.ownersName}
                      type="text"
                      required={accountType === "business" ? true : false}
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
                      label="Owner's Phone Number"
                      value={ownersPhone}
                      setValue={setOwnersPhone}
                      errors={errorsOrg.ownersPhone}
                      errorMessage={errorMessagesOrg.ownersPhone}
                      type="number"
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
                      label="Owner's Email Address"
                      value={ownersEmail}
                      setValue={setOwnersEmail}
                      errors={errorsOrg.ownersEmail}
                      errorMessage={errorMessagesOrg.ownersEmail}
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
                      label="Company Name"
                      value={companyName}
                      setValue={setCompanyName}
                      errors={errorsOrg.companyName}
                      errorMessage={errorMessagesOrg.companyName}
                      type="text"
                      required={accountType === "business" ? true : false}
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
                      label="Website"
                      value={website}
                      setValue={setWebsite}
                      errors={errorsOrg.website}
                      errorMessage={errorMessagesOrg.website}
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
                      label="Address 1"
                      value={addressOne}
                      setValue={setAddressOne}
                      errors={errorsOrg.addressOne}
                      errorMessage={errorMessagesOrg.addressOne}
                      type="text"
                      required={accountType === "business" ? true : false}
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
                      label="Address 2"
                      value={addressTwo}
                      setValue={setAddressTwo}
                      errors={errorsOrg.addressTwo}
                      errorMessage={errorMessagesOrg.addressTwo}
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
                      label="City"
                      value={city}
                      setValue={setCity}
                      errors={errorsOrg.city}
                      errorMessage={errorMessagesOrg.city}
                      type="text"
                      required={accountType === "business" ? true : false}
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
                      label="Post Code"
                      value={postCode}
                      setValue={setPostCode}
                      errors={errorsOrg.postCode}
                      errorMessage={errorMessagesOrg.postCode}
                      type="number"
                      required={accountType === "business" ? true : false}
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
                      label="Country"
                      value={country}
                      setValue={setCountry}
                      errors={errorsOrg.country}
                      errorMessage={errorMessagesOrg.country}
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
                      label="Region/State"
                      value={region}
                      setValue={setRegion}
                      errors={errorsOrg.country}
                      errorMessage={errorMessagesOrg.country}
                      type="text"
                    />
                  </Grid>
                </>
              )}
            </Grid>

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
              Sign Up
            </Button>

            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                />
              }
              sx={{
                fontSize: {
                  xs: "10px",
                  md: "16px",
                },
                color: "#666",
                textAlign: "start",
                alignItems: "flex-start",
                ".MuiCheckbox-root": {
                  paddingTop: "1px",
                },
                ".MuiTypography-root": {
                  fontSize: {
                    xs: "10px",
                    md: "16px",
                  },
                },
              }}
              label="By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy."
            />
          </Box>
        </Box>
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
