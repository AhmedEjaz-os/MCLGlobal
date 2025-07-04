import { Box, Typography } from "@mui/material";

function DashboardStatsCard(prop) {
  const { icon, cardNumber, cardTitle, cartStatus, statsColor } = prop;
  return (
    <Box
      sx={{
        border: "1px solid #C8E1FF",
        backgroundColor: "#fff",
        padding: "13px 18px",
        marginTop: "36px",
        borderRadius: "8px",
        flex: 1,
      }}
    >
      {icon}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "32px",
          letterSpacing: "0px",
          color: "#151D48",
          marginTop: "8px",
        }}
      >
        {cardNumber}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "24px",
          letterSpacing: "0px",
          color: "#425166",
        }}
      >
        {cardTitle}
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "16px",
          letterSpacing: "0px",
          color: statsColor,
        }}
      >
        {cartStatus}
      </Typography>
    </Box>
  );
}

export default DashboardStatsCard;
