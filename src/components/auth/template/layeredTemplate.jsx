function LayeredLoginBox({ children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        zIndex: 2,
      }}
    >
      {/* Content Container */}
      <div style={{ padding: "32px" }}>{children}</div>

      {/* Layered Wave Effects */}
      <div
        style={{
          position: "relative",
          height: "80px",
          marginTop: "-20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100px",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            clipPath: "polygon(0% 70%, 100% 60%, 100% 100%, 0% 100%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            clipPath: "polygon(0% 60%, 100% 50%, 100% 100%, 0% 100%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100px",
            backgroundColor: "rgba(255, 255, 255, 0.37)",
            clipPath: "polygon(0% 50%, 100% 40%, 100% 100%, 0% 100%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            clipPath: "polygon(0% 40%, 100% 30%, 100% 100%, 0% 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}
