import { Typography, Box } from "@mui/material";
import ConstantString from "../../../ConstantString";

function WelcomeCard() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "46px 38px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "15px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "600",
            lineHeight: "32px",
            letterSpacing: "0.5%",
            marginBottom: "14px",
            color: "white",
          }}
        >
          {`${ConstantString.DASHBOARD_WELCOME_BOARD_TITLE} John!`}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "0.5%",
            color: "white",
          }}
        >
          {`${ConstantString.DASHBOARD_WELCOME_BOARD_DESCRIPTION}`}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "600",
            lineHeight: "32px",
            letterSpacing: "0.5%",
            marginBottom: "14px",
            color: "white",
          }}
        >
          243
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "32px",
            letterSpacing: "0.5%",
            color: "white",
          }}
        >
          {ConstantString.DASHBOARD_WELCOME_BOARD_APPLICATION_TITLE}
        </Typography>
      </Box>
    </Box>
  );
}

export default WelcomeCard;
