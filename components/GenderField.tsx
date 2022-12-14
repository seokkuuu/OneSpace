import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { UseFormReturn } from "react-hook-form";
import { Inputs } from "./Forms/RegisterForm/index";

interface GenderFieldProps {
  label: string;
  formHook: UseFormReturn<Inputs, any>;
}

const GenderField: React.FC<GenderFieldProps> = ({ label, formHook }) => {
  const [gender, setGender] = React.useState<string>("");
  const { register } = formHook;

  const options = [
    { value: "male", key: "Hombre" },
    { value: "female", key: "Mujer" },
    { value: "non_binary", key: "No binario" },
    { value: "other", key: "Otro" },
  ];
  return (
    <FormControl fullWidth>
      <InputLabel id="gender-field-label">{label}</InputLabel>
      <Select
        labelId="gender-field-label"
        label={label}
        {...register("gender", { required: true })}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        {options.map((item, i) => (
          <MenuItem value={item.value} key={i}>
            {item.key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenderField;
