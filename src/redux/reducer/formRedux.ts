import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Gender {
    Fmale="Fmale",
    Male="Male",
}
 
export enum Vazyat {
    single="single",
    mothel="mothel",
}

interface State {
    firstName: string,
    lastName: string,
    gender: Gender | any,
    codeMeli: number | any,
    phone: number | any,
    sabetPhone: number | any,
    vazitZendgi: Vazyat | any,
    uniCode: number | any,
    saleTahseil: number | any,
    maqte: string | any,
    bomiHsti: boolean | any,
    isAuth: boolean | any,
    farhngi: string | string[] | any,
    skils: string | string[] | any,
    learn: string | string[] | any,
    play: string | string[] | any,
    withWork: string | string[] | any,
    qorani: string | any,
    areaQorani: string | any,
    favoriteQorani: string | any,
}

const intialState:State = {
    firstName: "",
    lastName: "",
    qorani: "",
    areaQorani: "",
    favoriteQorani: "",
    gender: null,
    codeMeli: null,
    phone: null,
    skils:null,
    sabetPhone: null,
    saleTahseil: null,
    farhngi: null,
    learn: null,
    play: null,
    withWork: null,
    maqte: "",
    bomiHsti: null,
    isAuth: null,
    vazitZendgi: null,
    uniCode: null
}

const formRedux = createSlice({
    name:"form",
    initialState:intialState,
    reducers:{
        chooseFirstName:(state,action:PayloadAction<string>) => {
            state.firstName = action.payload
        },
        chooseLastName:(state,action:PayloadAction<string>) => {
            state.lastName = action.payload
        },
        chooseGender:(state,action:PayloadAction<Gender>) => {
            state.gender = action.payload
        },
        chooseCodeMeli:(state,action:PayloadAction<number>) => {
            state.codeMeli = action.payload
        },
        choosePhone:(state,action:PayloadAction<number>) => {
            state.phone = action.payload
        },
        chooseSabetPhone:(state,action:PayloadAction<number>) => {
            state.sabetPhone = action.payload
        },
        chooseSaleTahsili:(state,action:PayloadAction<any>) => {
            state.saleTahseil = action.payload
        },
        chooseIsBomi:(state,action:PayloadAction<boolean>) => {
            state.bomiHsti = action.payload
        },
        chooseMaqte:(state,action:PayloadAction<string>) => {
            state.maqte = action.payload
        },
        chooseUniCode:(state,action:PayloadAction<number>) => {
            state.uniCode = action.payload
        },
        chooseVazyt:(state,action:PayloadAction<Vazyat>) => {
            state.vazitZendgi = action.payload
        },
        authForm:(state,action:PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        chooseQorani:(state,action:PayloadAction<any>) => {
            state.qorani = action.payload
        },
        chooseAreaQorani:(state,action:PayloadAction<string>) => {
            state.areaQorani = action.payload
        },
        chooseFavoriteQorani:(state,action:PayloadAction<any>) => {
            state.favoriteQorani = action.payload
        },
        chooseFarhngi:(state,action:PayloadAction<any>) => {
            state.farhngi = action.payload
        },
        chooseSkils:(state,action:PayloadAction<any>) => {
            state.skils = action.payload
        },
        chooseLearn:(state,action:PayloadAction<any>) => {
            state.learn = action.payload
        },
        choosePlay:(state,action:PayloadAction<any>) => {
            state.play = action.payload
        },
        chooseWithWork:(state,action:PayloadAction<any>) => {
            state.withWork = action.payload
        },
    }
})

export const {
    authForm,
    chooseFarhngi,
    chooseLearn,
    choosePlay,
    chooseWithWork,
    chooseSkils,
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
    chooseQorani,
    chooseAreaQorani,
    chooseFavoriteQorani
} = formRedux.actions

export default formRedux.reducer