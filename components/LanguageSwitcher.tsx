import React from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value as string);
  };

  const languageOptions = [
    { value: "pt", label: "Pt" },
    { value: "es", label: "Es" },
    { value: "en", label: "En" },
  ];

  return (
    <FormControl sx={{ m: 0.2, minWidth: 44 }} size="small" className=" ">
      <Select
        value={i18n.language}
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Language"
        variant="outlined"
        sx={{
          ".MuiSelect-select": {},
        }}
        onChange={handleChange}
        className="text-textDark"
      >
        {languageOptions.map((option) => (
          <MenuItem key={option.value} value={option.value} className="">
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
