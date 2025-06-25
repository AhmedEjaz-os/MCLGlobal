import React from "react";

function BackgroundTemplate() {
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
        justifyContent: "center",
        alignItems: "center",
        padding: "52px 75px 52px 155px",
      }}
    >
      <div
        className="left"
        style={{
          maxWidth: "344px",
          width: "100%",
          zIndex: 2,
          marginBottom: "20px",
          color: "#ffffff", // To ensure readability
        }}
      >
        <img src="/images/logo.png" alt="Logo" />
        <h1>Welcome back to MCL Global</h1>
        <p>
          Empowering agents to manage leads, access insights, and stay
          connected. Sign in to continue delivering excellence.
        </p>
      </div>

      <div
        className="right"
        style={{
          width: "100%",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div className="squares"></div>
        <div className="squares"></div>
        <div className="squares"></div>
        <div className="squares"></div>
      </div>
    </div>
  );
}

export default BackgroundTemplate;
