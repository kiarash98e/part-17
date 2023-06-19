export interface IStudent {
    name:string,
    lastName:string,
    nationalCode:string,
    phoneNumber:string,
    landLine:string,
    isMale:boolean,
    isMarried:boolean,
    isLocal:boolean,
    password:string,
    isVerified:boolean,
    description:string,
    major:ICombo | ICombo[],
    grade:ICombo | ICombo[],
    talents: ICombo | ICombo[],    
    quranFields: ICombo | ICombo[],    
    cooprationFields: ICombo | ICombo[],  
    compettions: ICombo | ICombo[],
    educationalClasss: ICombo | ICombo[],   
}

export interface ICombo {
    id?:number,
    name:string,
}