import { Box, TextField, InputLabel, Autocomplete } from "@mui/material";
import CustomFormFields from "../../helpers/customFormFeilds";
import countries from "../../helpers/JSON/countries.json";

function NewApplicationFormOne(props) {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    dateOfBirth,
    setDateOfBirth,
    nationality,
    setNationality,
    passportNumber,
    setPassportNumber,
    errors,
    errorMessage,
  } = props;

  return (
    <Box
      sx={{
        marginTop: "34.72px",
        backgroundColor: "#C0DCFF",
        borderRadius: "30px",
        padding: "62px 53px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <CustomFormFields
            label={"First Name"}
            value={firstName}
            setValue={setFirstName}
            errors={errors.firstName}
            errorMessage={errorMessage.firstName}
            type={"text"}
            required={true}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <CustomFormFields
            label={"Last Name"}
            value={lastName}
            setValue={setLastName}
            errors={errors.lastName}
            errorMessage={errorMessage.lastName}
            type={"text"}
            required={true}
          />
        </Box>
      </Box>
      <CustomFormFields
        label={"Email Address"}
        value={email}
        setValue={setEmail}
        errors={errors.email}
        errorMessage={errorMessage.email}
        type={"email"}
        required={true}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <CustomFormFields
            label={"Phone Number"}
            value={phoneNumber}
            setValue={setPhoneNumber}
            errors={errors.phoneNumber}
            errorMessage={errorMessage.phoneNumber}
            type={"number"}
            required={true}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <CustomFormFields
            label={"Date of Birth"}
            value={dateOfBirth}
            setValue={setDateOfBirth}
            errors={errors.dateOfBirth}
            errorMessage={errorMessage.dateOfBirth}
            type={"date"}
            required={true}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: "107px",
          }}
        >
          <InputLabel
            required={true}
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
            Nationality
          </InputLabel>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            value={nationality}
            onChange={(e, newValue) => setNationality(newValue)}
            sx={{
              border: "1px solid #DCDCDC",
              borderRadius: "10px",
              backgroundColor: "#FFFFFF",
              "&:focus": {
                borderColor: "#000",
              },
              "&:hover": {
                borderColor: "#000",
              },
              ".MuiInputBase-root": {
                borderRadius: "10px",
                fontSize: "14px",
              },
              ".MuiOutlinedInput-notchedOutline": {
                display: "none",
              },
            }}
            options={countries.map((option) => option.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label=""
                placeholder="Nationality"
                error={errors.nationality}
                helperText={errors.nationality ? errorMessage.nationality : ""}
              />
            )}
          />
          {/* <CustomFormFields
            label={"Nationality"}
            value={nationality}
            setValue={setNationality}
            errors={errors.nationality}
            errorMessage={errorMessage.nationality}
            type={"text"}
            required={true}
          /> */}
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <CustomFormFields
            label={"Passport Number"}
            value={passportNumber}
            setValue={setPassportNumber}
            errors={errors.passportNumber}
            errorMessage={errorMessage.passportNumber}
            type={"number"}
            required={true}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default NewApplicationFormOne;
