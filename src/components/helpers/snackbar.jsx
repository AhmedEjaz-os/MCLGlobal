import { IconButton, Slide, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CustomSnackBar({ openSnackbar, setOpenSnackbar, snackbarMessage }) {
  const SlideTransition = (props) => {
    return <Slide {...props} direction="down" />;
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
    />
  );
}

export default CustomSnackBar;
