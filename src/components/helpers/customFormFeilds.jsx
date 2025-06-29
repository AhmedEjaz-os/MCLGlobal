import { FormHelperText, InputLabel, OutlinedInput } from "@mui/material";

function CustomFormFields({
  label,
  value,
  setValue,
  errors,
  errorMessage,
  type,
  endAdornment,
}) {
  return (
    <>
      <InputLabel
        required
        style={{
          alignSelf: "flex-start",
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "10px",
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        fullWidth
        variant="outlined"
        required
        placeholder="Enter your email"
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={Boolean(errors)}
        sx={{
          borderRadius: "12px",
          backgroundColor: "#f8f9fa",

          fontSize: "14px",
        }}
        endAdornment={endAdornment}
      />
      <FormHelperText sx={{ mb: 3, color: "#d32f2f", alignSelf: "flex-start" }}>
        {errors && errorMessage}
      </FormHelperText>
    </>
  );
}

export default CustomFormFields;
