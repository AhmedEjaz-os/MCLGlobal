import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import {
  UploadAgreementIcon,
  AccountCreatedIcon,
  ClockPinkIcon,
  AccountApprovedIcon,
  ClockBlueIcon,
  UploadIconBlack,
  DownloadIconBlack,
  WordIcon,
} from "./Icons/AgreementSectionIcons";
import { Button, Tooltip } from "@mui/material";
import ConstantString from "../../ConstantString";

const steps = [
  ConstantString.AGREEMENT_SCREEN_STEPPER_ONE,
  ConstantString.AGREEMENT_SCREEN_STEPPER_TWO,
  ConstantString.AGREEMENT_SCREEN_STEPPER_THREE,
];

const StepIconRoot = styled("div")(({ ownerState }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  borderRadius: "50%",
  backgroundColor: ownerState.completed
    ? "transparent"
    : ownerState.active
    ? "#ffc107"
    : "#cfd8dc",
}));

function CustomStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <StepIconRoot ownerState={{ active, completed }} className={className}>
      {completed ? (
        <Box
          sx={{
            backgroundColor: "#D0E0FF",
            padding: "8.45px 8.45px 3.45px",
            borderRadius: "50%",
          }}
        >
          <AccountCreatedIcon />
        </Box>
      ) : active ? (
        <Box
          sx={{
            backgroundColor: "#D0E0FF",
            padding: "8.45px 8.45px 3.45px",
            borderRadius: "50%",
            color: "#1F6DFF",
          }}
        >
          <UploadAgreementIcon />
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: "#EEECEC",
            padding: "8.45px 8.45px 3.45px",
            borderRadius: "50%",
            color: "#1F6DFF",
          }}
        >
          <AccountApprovedIcon />
        </Box>
      )}
    </StepIconRoot>
  );
}

function AgreeementScreen() {
  const fileInputRef = React.useRef(null);
  const [file, setFile] = React.useState(null); // State to store selected file
  const [error, setError] = React.useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(null);

    if (selectedFile) {
      // Check if the selected file is a PDF
      const fileType = selectedFile.type;
      if (fileType === "application/pdf") {
        setFile(selectedFile); // Set the selected file if it's a PDF
        setError(null); // Reset any previous error
      } else {
        setError("Please select a valid PDF file.");
        setFile(null); // Reset the file state in case of invalid file type
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(null);

    if (droppedFile) {
      // Check if the dropped file is a PDF
      const fileType = droppedFile.type;
      if (fileType === "application/pdf") {
        setFile(droppedFile); // Set the selected file if it's a PDF
        setError(null); // Reset any previous error
      } else {
        setError("Please select a valid PDF file.");
        setFile(null); // Reset the file state in case of invalid file type
      }
    }
  };

  // Handle file upload (this is where you would typically send the file to the server)
  const handleFileUpload = () => {
    if (file) {
      console.log("Uploading file:", file);
      // You can use fetch or axios to send the file to the server
    } else {
      console.log("No file selected");
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click(); // Programmatically trigger file selection
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "645px",
          width: "100%",
          margin: "auto auto",
          paddingTop: "60px",
          paddingBottom: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            marginBottom: "20px",
          }}
        >
          <ClockPinkIcon />
        </span>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {ConstantString.AGREEMENT_SCREEN_TITLE}
        </Typography>
        <Typography
          sx={{
            marginTop: "8px",
            fontSize: "24px",
            fontWeight: "400",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {ConstantString.AGREEMENT_SCREEN_SUBTITLE}
        </Typography>
        <Stepper
          sx={{
            width: "100%",
            "& .MuiStepLabel-label": {
              fontSize: "14px",
              fontWeight: 500,
              marginTop: "8px",
            },
          }}
          activeStep={1}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box
          sx={{
            marginTop: "57px",
            border: "1px solid #033C82",
            padding: "25px 50px",
            borderRadius: "15px",
            backgroundColor: "#EBF4FF",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              marginTop: "2px",
              marginRight: "28px",
            }}
          >
            <ClockBlueIcon />
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#033C82",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              {ConstantString.AGREEMENT_SCREEN_CARD_TITLE}
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "23px",
              }}
            >
              {ConstantString.AGREEMENT_SCREEN_CARD_DESCRIPTION}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "flex-start",
            marginTop: "27px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#202020",
              fontSize: "24px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            {ConstantString.AGREEMENT_SCREEN_UPLOAD_CARD_TITLE}
          </Typography>

          <Box
            sx={{
              border: "2px dashed #B5B6B7",
              backgroundColor: "#F4F4F4",
              padding: "45px 140px",
              borderRadius: "20px",
              marginTop: "14px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onDrop={handleDrop} // Handle the drop event
            onDragOver={(e) => e.preventDefault()} // Prevent default to allow drop
          >
            {file ? (
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <WordIcon /> {/* File icon */}
                <Typography sx={{ fontSize: "16px", color: "#292D32" }}>
                  {file.name} {/* Display the file name */}
                </Typography>
              </Box>
            ) : (
              <>
                <UploadIconBlack />
                <Typography
                  sx={{
                    color: "#292D32",
                    fontSize: "20px",
                    fontWeight: "500",
                    textAlign: "center",
                    width: "100%",
                    marginTop: "36px",
                  }}
                >
                  {ConstantString.AGREEMENT_SCREEN_UPLOAD_CARD_DESCRIPTION}
                </Typography>
                <Typography
                  sx={{
                    color: "#636363",
                    fontSize: "16px",
                    fontWeight: "400",
                    textAlign: "center",
                    marginTop: "11px",
                  }}
                >
                  {ConstantString.AGREEMENT_SCREEN_UPLOAD_CARD_HELPER}
                </Typography>
              </>
            )}
            <Button
              sx={{
                padding: "11px 38px",
                backgroundColor: "white",
                border: "1.51px solid #0072FF",
                marginTop: "16px",
                borderRadius: "12.11px",
                color: "#54575C",
              }}
              onClick={triggerFileInput}
            >
              {ConstantString.AGREEMENT_SCREEN_UPLOAD_CARD_BUTTON_TEXT}
            </Button>
            <input
              ref={fileInputRef} // Attach the ref to the file input
              type="file"
              onChange={handleFileChange}
              style={{
                display: "none", // Hide the input from view
              }}
            />
          </Box>
        </Box>

        {/* Display error if file is not a Word document */}
        {error && (
          <Typography
            sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
          >
            {error}
          </Typography>
        )}
        <a
          style={{
            marginTop: "15px",
            width: "100%",

            textDecoration: "none",
            backgroundColor: "#FFFFFF",
          }}
          href={ConstantString.AGREEMENT_SCREEN_DOWNLOAD_CONTRACT_PATH}
          download
          target="_blank"
        >
          <Button
            style={{
              color: "#033C82",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              fontSize: "16px",
              fontWeight: "600",
              width: "100%",
              height: "inherit",
              textDecoration: "none",
              textAlign: "center",
              padding: "10px 16px",
              border: "1.4px solid #033C82",
              borderRadius: "11.16px",
            }}
          >
            <DownloadIconBlack />
            {ConstantString.AGREEMENT_SCREEN_DOWNLOAD_CONTRACT}
          </Button>
        </a>
        <Tooltip title={!file ? "Upload The Signed Contract First" : ""}>
          <span style={{ width: "100%" }}>
            {" "}
            {/* Wrapping the button in span to avoid disabled issue */}
            <Button
              sx={{
                marginTop: "15px",
                width: "100%",
                color: "#fff",
                padding: "10px 16px",
                border: "1.4px solid #C4C4C4",
                backgroundColor: !file ? "#C4C4C4" : "#033C82",
                borderRadius: "11.16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                fontSize: "19.53px",
                fontWeight: "600",
                "&:disabled": {
                  color: "white",
                },
              }}
              disabled={!file}
            >
              {ConstantString.AGREEMENT_SCREEN_SUBMIT_AGREEMENT}
            </Button>
          </span>
        </Tooltip>
      </Box>
    </>
  );
}

export default AgreeementScreen;
