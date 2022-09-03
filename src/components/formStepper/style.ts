/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme:any) =>
    ({
        
        formStep:{
            overflowX:"hidden",
             width:'650px',
             heigh:"auto",
             background:"transparent",
             padding:10,
             [theme.breakpoints.down("md")]:{
                width:"100%",
                padding:10
             }
       },
       formLabel:{
            fontSize:"20px",
            lineHeight:"1.3",
            fontWeight:"bold",
            color:"#093637"
        },
    })
)

export { useStyles }