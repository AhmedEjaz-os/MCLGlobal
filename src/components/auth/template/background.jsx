import { Typography } from "@mui/material";

function BackgroundTemplate({ ...rest }) {
  const { children } = rest;
  return (
    <div
      style={{
        backgroundImage: `url('/images/background.png')`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "52px 75px 52px 155px",
      }}
    >
      {/* Left Content Section */}
      <div
        className="left"
        style={{
          width: "100%",
          zIndex: 2,
          marginBottom: "20px",
          maxWidth: "50%",
          color: "#ffffff",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ marginBottom: "24px" }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "46px",
            mb: "16px",
          }}
        >
          Welcome back <br /> to MCL Global
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "24px",
          }}
        >
          Empowering agents to manage leads, access <br /> insights, and stay
          connected. Sign in to continue <br /> delivering excellence.
        </Typography>
      </div>

      <div
        className="right"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "50%",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default BackgroundTemplate;
