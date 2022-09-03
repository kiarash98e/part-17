import React from 'react'
import FormStepper from './components/formStepper/formStepper'
import { Box,Typography } from '@mui/material'
import ausmt from '../src/img/ausmt.webp'


const App:React.FC = () => {
  return(
    <Box
      sx={{ borderRadius:8,width:"100%",height:"100%",display:"flex",flexDirection:"column",py:5,alignItems:"center",justifyContent:"center" }}>
      <Box 
        
        sx={{display:"flex",flexDirection:"column",justifyContent:"center" }}>
          <Box sx={{display:"flex",justifyContent:"center"}}>
            <img src={ausmt} width="70px" height={"100px"} alt="amol univercity" />
          </Box>
          <Typography style={{ color:"#093637"}} component={"h2"} sx={{fontSize:"25px",py:2,fontWeight:"bold"}}>فرم عضویت در کارگروه فرهنگی</Typography>
      </Box>
      <FormStepper/>
    </Box>
  )
}
export default App