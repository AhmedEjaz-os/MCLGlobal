import { FormHelperText, InputLabel, OutlinedInput } from "@mui/material";

function CustomFormFields({
  label,
  value,
  setValue,
  errors,
  errorMessage,
  type,
  endAdornment,
  startAdornment,
  disabled,
  title,
  required,
}) {
  return (
    <>
      <InputLabel
        required={required || false}
        sx={{
          alignSelf: "flex-start",
          fontSize: {
            xs: "12px",
            md: "14px",
          },
          fontWeight: 500,
          marginBottom: "10px",
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        fullWidth
        variant="outlined"
        required={required || false}
        disabled={disabled || false}
        title={title || ""}
        placeholder={`Enter your ${label.toLowerCase()}`}
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={Boolean(errors)}
        sx={{
          borderRadius: {
            xs: "6px",
            md: "12px",
          },
          backgroundColor: "#f8f9fa",
          fontSize: {
            xs: "12px",
            md: "14px",
          },
          "& input::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& input::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },

          // Remove spinners on Firefox
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
          ".MuiInputBase-input": {
            xs: {
              padding: "16.5px 14px",
            },
            md: {
              padding: "16.5px 14px",
            },
          },
        }}
        endAdornment={endAdornment || null}
        startAdornment={startAdornment || null}
      />
      <FormHelperText
        sx={{
          mb: {
            xs: "10px",
            md: 3,
          },
          color: "#d32f2f",
          alignSelf: "flex-start",
        }}
      >
        {errors && errorMessage}
      </FormHelperText>
    </>
  );
}

export default CustomFormFields;
