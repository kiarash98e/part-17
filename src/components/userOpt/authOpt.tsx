import React, { useState } from 'react';
import OtpInput from './userOpt';
import { useForm } from 'react-hook-form'
import useFormRedux from '../../redux/selector/formSelector';
import ResendCodeTimer from "./resend-code-timer";


export default function AuthOpt() {
  const [otp, setOtp] = useState('');
  const onChange = (value: string) => setOtp(value);

  const { IsAuth,formState } = useFormRedux()
  const mobile = formState.phone
  const ISAuth = formState.isAuth
  const { handleSubmit } = useForm()

  const submitHandler = () => {
    otp.length === 4 && IsAuth(true)
  }
  
  return (
    <form
      style={{
        width:'100%',
        height:'100%',
        display:"flex",
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit(submitHandler)}>
      <div style={{
      marginTop:"15px",
      marginBottom:"15px",
      width:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems: 'center',
      
    }}>
      <OtpInput 
        value={otp} 
        valueLength={4} 
        onChange={onChange} 
      />


      </div>
      <div style={{marginTop: "12px",
      direction:"rtl"
      }}>
        {<ResendCodeTimer resend={ISAuth} mobile={mobile} />}           
      </div>
    </form>
  )
}