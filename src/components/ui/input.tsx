import React from 'react'
import { Box, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    inputText:{
        direction: "rtl",
        textAlign:"right",
        transformOrigin:"right" 
    },
    label:{
        textAlign:"right",
        direction:"rtl"
    }
   
})

const input = React.forwardRef<HTMLInputElement,any>(({
    name,
    value,
    onChange,
    label,
    variant,
    className,
    type="text",
    
},refIn) => {

    const classes = useStyles()
    return (
        <Box sx={{display:'flex',flexDirection:"column"}}>
            <label className={classes.label} htmlFor={name}>{label}</label>
            <TextField
                ref={refIn}
                aria-label={name}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                variant={variant ?? "filled"}
                className={`${className} ${classes.inputText}` }
                type={type}
                
            />   
        </Box>
    )
})

export default input
