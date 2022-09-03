/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo } from 'react'
import './style.css'


export type Props = {
    value: string
    valueLength: number
    onChange: (value: string) => void
}
export const RE_DIGIT = new RegExp(/^\d+$/)
const userOpt:React.FC<Props> = ({value,valueLength,onChange}) => {
    

    const inputOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        idx: number
        ) => {
          const target = e.target;
          let targetValue = target.value.trim();
          const isTargetValueDigit = RE_DIGIT.test(targetValue);
      
          if (!RE_DIGIT.test(targetValue)) {
            return;
        
          }
    
        

    if (!isTargetValueDigit && targetValue !== '') {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : ' ';

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);
        onChange(newValue);
        target.blur();


      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInput(target);
    }
  };
          

    const valueItems = useMemo(() => {
        const valueArray = value.split('');
        const items: Array<string> = [];
    
        for (let i = 0; i < valueLength; i++) {
          const char = valueArray[i];
    
          if (RE_DIGIT.test(char)) {
            items.push(char);
          } else {
            items.push('');
          }
        }

        
        return items;
      }, [value, valueLength]);
    

      const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e
        const target = e.target as HTMLInputElement;
    
        if (key === 'ArrowRight' || key === 'ArrowDown') {
            e.preventDefault();
            return focusToNextInput(target);
          }

        if (key === 'ArrowLeft' || key === 'ArrowUp') {
            e.preventDefault();
            return focusToPrevInput(target);
        }
        let targetValue = target.value;
        let newValBack = valueItems
        if (key === 'Backspace' ) {
            e.preventDefault();
            
            newValBack = valueItems.filter((i) => i !== targetValue)
            onChange(newValBack.join(""))
            return focusToPrevInput(target);
        }


        if (e.key !== 'Backspace' || target.value !== '') {
          return;
        }
    
        focusToPrevInput(target);
        target.setSelectionRange(0, targetValue.length);

      };

    
      const inputOnFocus = (e: React.FocusEvent<any>) => {
        const { target } = e;
        target.setSelectionRange(0, target.value.length);
      };

      

      const focusToNextInput = (target: HTMLElement) => {
        const nextElementSibling =
          target.nextElementSibling as HTMLInputElement | null;
    
        if (nextElementSibling) {
          nextElementSibling.focus();
        }
      };

      const focusToPrevInput = (target: HTMLElement) => {
        const previousElementSibling =
          target.previousElementSibling as HTMLInputElement | null;
    
        if (previousElementSibling) {
          previousElementSibling.focus();
        }
      };

      

    
    return (
        <div className='opt-group'>
            {valueItems.map((digit:any, idx:any) => (
                <input
                onFocus={inputOnFocus}
                key={idx}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d{1}"
                maxLength={valueLength}
                className="otp-input"
                value={digit}
                onKeyDown={inputOnKeyDown}
                onChange={(e:any) => inputOnChange(e,idx)}
                />
            ))}
        </div>
    )
}

export default userOpt