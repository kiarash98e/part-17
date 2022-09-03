import React from 'react'
import { Autocomplete, Paper, TextField } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [stylisRTLPlugin]
});

interface IAuto{
  name:string,
  label:string,
  value:any,
  options:any,
  multiple?:boolean,
  placeholder:string,
  limitTags:number,
  onChange:Function,
  defaultValue?:any,
}

const Select = React.forwardRef<IAuto,any>(({
    name="",
    options,
    label,
    placeholder,
    limitTags,
    multiple,
    value,
    onChange,
    defaultValue
},refIn) => {
  return (
    <div>
      <CacheProvider value={cacheRtl}>
        <Autocomplete
          ref={refIn}
          onChange={onChange}
          PaperComponent={({ children }) => (
            <Paper style={{ textAlign:"right", direction:"rtl" }}>{children}</Paper>
          )}
          value={value}
          multiple={multiple}
          limitTags={limitTags}
          defaultValue={defaultValue}
          id={`select item ${name}`}
          options={[...options]}
          style={{ marginTop: "10px",direction:"rtl",textAlign:"revert-layer" }}
          renderInput={(params) => (
            <TextField
              sx={{textAlign:"right"}}
              {...params}
              label={label}
              placeholder={placeholder}
              fullWidth
              name={name}
            />
          )}
        />
      </CacheProvider>
    </div>
  );
})

export default Select