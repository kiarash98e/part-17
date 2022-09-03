/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { IoTime } from 'react-icons/io5'
let myInterval: any = null;

let defaultTime = {
    minutes: 1,
    seconds: 59,
    resetCount: 1
}

const ResendCodeTimer: React.FC<{ resend?: number; mobile: string }> = ({ resend, mobile }) => {

    const [time, setTime] = useState<{ minutes: number; seconds: number, resetCount?: number }>(defaultTime);
    
    React.useEffect(() => {
        if (resend) {
            setTime({
                minutes: parseInt((resend / 60) + ""),
                seconds: resend % 60,
                resetCount: (time.resetCount ?? 0) + 1
            })
        }
    }, [resend, time.resetCount]);

    React.useEffect(() => {
        startTimer();
        return () => {
            myInterval && clearInterval(myInterval);
        }
    }, [startTimer, time.resetCount]);

    function startTimer() {
        const { minutes, seconds } = time;
        let minute = minutes;
        let second = seconds;
        myInterval && clearInterval(myInterval);
        myInterval = setInterval(() => {
            if (second > 0) {
                second = second - 1;
            }
            if (second === 0) {
                if (minute === 0) {
                    clearInterval(myInterval);
                } else {
                    minute = minute - 1;
                    second = 59;
                }
            }
            setTime({ minutes: minute, seconds: second })
        }, 1000);
    }

    // function handleResendClick() {
    //     if (!resend)
    //         resendCode({ mobile })
    // }

    function handleResponseSendCode(ok: boolean, data: any) {
        if (ok) {
            const resend = data?.data?.resend;
            setTime({
                minutes: parseInt((resend / 60) + ""),
                seconds: resend % 60,
                resetCount: (time.resetCount ?? 0) + 1
            })
        }
    }

    return (
        (time.minutes === 0 && time.seconds === 0) ? (
            <div style={{color:"#093637"}}>
                <span style={{
                    cursor: 'pointer',
                    direction: 'rtl'
                }}
                    className='text-sm'
                    // onClick={handleResendClick}  >
                    >
                    {resend ? 'در حال ارسال ...' : 'ارسال مجدد'}
                </span>
            </div>
        ) :
            <div className='timeShow'>
                <h1> {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</h1>
                <IoTime size={30} className=' timeShowIc' />
            </div>
    )
}
export default ResendCodeTimer


