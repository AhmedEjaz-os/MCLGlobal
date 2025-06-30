import { IconButton, Slide, Snackbar, SnackbarContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { green, red } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Success icon
import ErrorIcon from "@mui/icons-material/Error"; // Error icon

function CustomSnackBar({
  openSnackbar,
  setOpenSnackbar,
  snackbarMessage,
  error,
}) {
  const SlideTransition = (props) => {
    return <Slide {...props} direction="down" />;
  };
  const getSnackbarStyle = (severity) => {
    if (severity === true) {
      return { backgroundColor: green[600] };
    } else if (severity === false) {
      return { backgroundColor: red[600] };
    } else {
      return { backgroundColor: green[600] }; // Default to success style
    }
  };

  const getIcon = (severity) => {
    if (severity === true) {
      return <CheckCircleIcon style={{ color: "white" }} />;
    } else if (severity === false) {
      return <ErrorIcon style={{ color: "white" }} />;
    } else {
      return <CheckCircleIcon style={{ color: "white" }} />;
    }
  };
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={() => setOpenSnackbar(false)}
      message={snackbarMessage}
      transitionDuration={{ enter: 500, exit: 500 }}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={() => setOpenSnackbar(false)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    >
      <SnackbarContent
        style={getSnackbarStyle(error)} // Apply dynamic background color
        message={
          <div style={{ display: "flex", alignItems: "center" }}>
            {getIcon(error)} {/* Display the appropriate icon */}
            <span style={{ marginLeft: 8 }}>{snackbarMessage}</span>
          </div>
        }
      />
    </Snackbar>
  );
}

export default CustomSnackBar;
