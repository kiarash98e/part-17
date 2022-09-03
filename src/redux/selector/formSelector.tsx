/* eslint-disable react-hooks/rules-of-hooks */
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
    authForm,
    chooseCodeMeli,
    chooseFirstName,
    chooseGender,
    chooseIsBomi,
    chooseLastName,
    chooseMaqte,
    choosePhone,
    chooseSabetPhone,
    chooseSaleTahsili,
    chooseUniCode,
    chooseVazyt,
    Gender,
    Vazyat,
    chooseQorani,
    chooseAreaQorani,
    chooseFavoriteQorani,
    chooseFarhngi,
    chooseSkils,
    chooseLearn,
    choosePlay,
    chooseWithWork,
} from '../reducer/formRedux'

export default function useFormRedux(){
    const dispatch = useAppDispatch()
    const formState = useAppSelector((state) => state.form)
    const choosenFirstname = (name:string) => dispatch(chooseFirstName(name))
    const IsAuth = (name:boolean) => dispatch(authForm(name))
    const choosenSaletahsili = (name:any) => dispatch(chooseSaleTahsili(name))
    const choosenLastname = (name:string) => dispatch(chooseLastName(name))
    const choosenVazyat = (name:Vazyat) => dispatch(chooseVazyt(name))
    const choosenCodeMeli = (name:number) => dispatch(chooseCodeMeli(name))
    const choosenUniCode = (name:number) => dispatch(chooseUniCode(name))
    
    const choosenGender = (name:Gender) => dispatch(chooseGender(name))
    const choosenPhone = (name:number) => dispatch(choosePhone(name))
    const choosenIsBomi = (name:boolean) => dispatch(chooseIsBomi(name))
    const choosenMaqte = (name:string) => dispatch(chooseMaqte(name))
    
    const choosenSabetPhone = (name:number) => dispatch(chooseSabetPhone(name)) 
    const choosenQorani = (name:any) => dispatch(chooseQorani(name)) 
    const choosenAreaQorani = (name:string) => dispatch(chooseAreaQorani(name)) 
    const choosenFavoriteQorani = (name:any) => dispatch(chooseFavoriteQorani(name)) 

    const choosenFarhngi = (name:any) => dispatch(chooseFarhngi(name)) 
    const choosenSkils = (name:any) => dispatch(chooseSkils(name)) 
    const choosenPlay = (name:any) => dispatch(choosePlay(name)) 
    const choosenLearn = (name:any) => dispatch(chooseLearn(name)) 
    const choosenWithWork = (name:any) => dispatch(chooseWithWork(name)) 


    return { formState, choosenLearn, choosenPlay, choosenWithWork, choosenFarhngi, choosenSkils, choosenAreaQorani, choosenFavoriteQorani, choosenQorani, IsAuth, choosenCodeMeli, choosenFirstname, choosenLastname, choosenGender,choosenIsBomi, choosenMaqte, choosenPhone, choosenSabetPhone, choosenSaletahsili, choosenUniCode, choosenVazyat, }
} 
