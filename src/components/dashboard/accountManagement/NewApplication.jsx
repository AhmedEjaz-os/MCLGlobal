import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Tooltip,
  Typography,
} from "@mui/material";
import NewApplicationFormOne from "./NewApplicationFormOne";
import NewApplicationFormTwo from "./NewApplicationFormTwo";
import NewApplicationFormThree from "./NewApplicationFormThree";
import NewApplicationFormFour from "./NewApplicationFormFour";
import NewApplicationFormFive from "./NewApplicationFormFive";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";

function NewApplication() {
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [passportNumber, setPassportNumber] = useState("");

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    dateOfBirth: false,
    nationality: false,
    passportNumber: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    nationality: "",
    passportNumber: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const steps = [
    "Student Information",
    "Academic Background",
    "Course Selection",
    "Documents",
    "Review & Submit",
  ];

  const resetFormStep1 = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setDateOfBirth("");
    setNationality("");
    setPassportNumber("");
    setErrors({
      firstName: false,
      lastName: false,
      email: false,
      phoneNumber: false,
      dateOfBirth: false,
      nationality: false,
      passportNumber: false,
    });
    setErrorMessage({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      nationality: "",
      passportNumber: "",
    });
  };

  const handleFormSubmit = () => {
    if (firstName && firstName.length > 0) {
      setErrorMessage({
        ...errors,
        firstName: "",
      });
      setErrors({ ...errors, firstName: false });
      if (lastName && lastName.length > 0) {
        setErrorMessage({
          ...errors,
          lastName: "",
        });
        setErrors({ ...errors, lastName: false });
        if (email && email.length > 0) {
          setErrorMessage({
            ...errors,
            email: "",
          });
          setErrors({ ...errors, email: false });
          if (!emailRegex.test(email)) {
            if (phoneNumber && phoneNumber.length > 0) {
              if (dateOfBirth && dateOfBirth.length > 0) {
                if (nationality && nationality.length > 0) {
                  if (passportNumber && passportNumber.length > 0) {
                    const payload = {
                      firstName: firstName,
                      lastName: lastName,
                      email: email,
                      phoneNumber: phoneNumber,
                      dateOfBirth: dateOfBirth,
                      nationality: nationality,
                      passportNumber: passportNumber,
                    };
                    console.log(payload);
                    resetFormStep1();
                    setActiveStep(activeStep >= 4 ? 0 : activeStep + 1);
                  } else {
                    setErrorMessage({
                      ...errors,
                      passportNumber: "Passport Number is required.",
                    });
                    setErrors({ ...errors, passportNumber: true });
                    return;
                  }
                } else {
                  setErrorMessage({
                    ...errors,
                    nationality: "Nationality is required.",
                  });
                  setErrors({ ...errors, nationality: true });
                  return;
                }
              } else {
                setErrorMessage({
                  ...errors,
                  dateOfBirth: "Phone Number is required.",
                });
                setErrors({ ...errors, dateOfBirth: true });
                return;
              }
            } else {
              setErrorMessage({
                ...errors,
                phoneNumber: "Phone Number is required.",
              });
              setErrors({ ...errors, phoneNumber: true });
              return;
            }
          } else {
            setErrorMessage({
              ...errors,
              email: "Please enter a valid email.",
            });
            setErrors({ ...errors, email: true });
            return;
          }
        } else {
          setErrorMessage({ ...errors, email: "Email is required." });
          setErrors({ ...errors, email: true });
          return;
        }
      } else {
        setErrorMessage({ ...errors, lastName: "Last name is required." });
        setErrors({ ...errors, lastName: true });
        return;
      }
    } else {
      setErrorMessage({ ...errors, firstName: "First name is required." });
      setErrors({ ...errors, firstName: true });
      return;
    }
  };

  function CustomStepIcon(props) {
    const { active, icon } = props;

    return (
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          backgroundColor: active ? "#1F3E78" : "#fff",
          border: "2px solid",
          borderColor: active ? "#1F3E78" : "#D3D3D3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: active ? "#fff" : "#000",
          fontWeight: 500,
          fontSize: "14px",
        }}
      >
        {`0${icon}`}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        marginTop: "37px",
      }}
    >
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: "500",
          lineHeight: "32px",
          letterSpacing: "0.5%",
          marginBottom: "3px",
        }}
      >
        Create New Application
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "32px",
          letterSpacing: "0.5%",
          marginBottom: "18px",
        }}
      >
        Follow the steps to create a comprehensive application
      </Typography>
      <Box
        sx={{
          backgroundColor: "#DFEDFF",
          borderRadius: "10px",
          padding: "48px 58px",
        }}
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            "& .MuiStepLabel-label": {
              fontSize: "14px",
              fontWeight: 500,
              color: "#000",
              marginTop: "8px",
            },
            "& .MuiStepLabel-label.Mui-active": {
              color: "#1F3E78",
            },
            "& .MuiStepConnector-line": {
              borderColor: "#D3D3D3",
              borderTopWidth: 2,
            },
            "& .MuiStepConnector-root": {
              top: "16px",
            },
          }}
        >
          {steps.map((label, index) => (
            <Step key={label} icon={`0${index + 1}`}>
              <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          {activeStep === 0 ? (
            <NewApplicationFormOne
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              dateOfBirth={dateOfBirth}
              setDateOfBirth={setDateOfBirth}
              nationality={nationality}
              setNationality={setNationality}
              passportNumber={passportNumber}
              setPassportNumber={setPassportNumber}
              errors={errors}
              errorMessage={errorMessage}
            />
          ) : activeStep === 1 ? (
            <NewApplicationFormTwo />
          ) : activeStep === 2 ? (
            <NewApplicationFormThree />
          ) : activeStep === 3 ? (
            <NewApplicationFormFour />
          ) : (
            <NewApplicationFormFive />
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "26px",
            }}
          >
            <Button
              sx={{
                padding: "17.5px 32.5px",
                borderRadius: "8.26px",
                backgroundColor: activeStep <= 0 ? "#C4C4C4" : "#033C82",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "13px",
                "&:disabled": {
                  color: "white",
                },
              }}
              onClick={() => setActiveStep(activeStep - 1)}
              disabled={activeStep <= 0}
            >
              <ChevronLeftIcon />
              Back
            </Button>
            <span>
              <Button
                sx={{
                  padding: "17.5px 32.5px",
                  borderRadius: "8.26px",
                  backgroundColor: "#033C82",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "13px",
                  "&:disabled": {
                    color: "white",
                  },
                }}
                onClick={() => {
                  handleFormSubmit();
                }}
              >
                {activeStep === 4 ? "Finish" : "Next"}
                <ChevronRightIcon />
              </Button>
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NewApplication;
