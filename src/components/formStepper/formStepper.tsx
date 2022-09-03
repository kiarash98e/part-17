import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useStyles } from './style'
import UserDetail from '../userDetail/userDetail'
import UserOpt from '../userOpt/authOpt'
import FavoriteUser from '../favoriteUser/favoriteUser'

const steps = [
  {
    label:"در بخش اول باید مشخصات خود را کامل کنید",
    children:<UserDetail/>
  },
  {
    label:"در بخش دوم کد پیامک شده برای شماره تلفن همراه وارد کنید",
    children:<UserOpt/>
  },
  {
    label:" در بخش سوم علاقمندی های خود در گروه های مختلف فرهنگی وارد کنید",
    children:<FavoriteUser/>
  },
]

export default function TextMobileStepper() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const classes = useStyles()
  
  return (
    <Box className={classes.formStep}>
      <Paper
        square
        elevation={0}
        sx={{
          textAlign:"right",
          direction: theme.direction,
        }}
      >
        <Typography className={classes.formLabel} component={"h3"}>{steps[activeStep].label}</Typography>
      </Paper>
      <Box>
        {steps[activeStep].children}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
          >
            {
              activeStep === 2 ? "ثبت نهایی" : "مرحله بعدی"
            }
            

          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            مرحله قبلی
          </Button>
        }
      />
    </Box>
  );
}
