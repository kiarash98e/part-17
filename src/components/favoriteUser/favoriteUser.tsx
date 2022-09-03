/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Typography, FormControl, TextareaAutosize } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'
import useFormRedux from '../../redux/selector/formSelector'
import Select from '../ui/select'
import { useStyles } from './style'

let items = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "صوت و قرآن", label: "صوت و قرآن" },
]

const userFavorite: React.FC = () => {


    const classes = useStyles()
    const { formState, choosenAreaQorani, choosenFarhngi, choosenPlay, choosenWithWork, choosenLearn, choosenSkils, choosenQorani, choosenFavoriteQorani } = useFormRedux()

    const qorani = formState.qorani
    const areaQorani = formState.areaQorani
    const favoriteQorani = formState.favoriteQorani
    const farhngi = formState.farhngi
    const skils = formState.skils
    const learn = formState.learn
    const play = formState.play
    const withWork = formState.withWork
    // const navigate = useNavigate()

    const { register, handleSubmit } = useForm({
        defaultValues: {
            qorani,
            areaQorani,
            favoriteQorani,
            skils,
            farhngi,
            learn,
            play,
            withWork
        }
    })

    const [formData, setFormData] = React.useState({
       qorani:[], 
       areaQorani, 
       favoriteQorani:[],
       skils:[],
       farhngi:[],
       learn:[],
       play:[],
       withWork:[],
    })

    const submitHandler = (e: any) => {
        const { value, name } = e.target as any
        if (value) {
            setFormData({
                ...formData,
                [name]: value
            })
        }
        
    }

    const handleSelect = (e: any,val:any) => {
        const { name } = e.target as any
        if (name) {
            setFormData({
                ...formData,
                [name]: val
            })
        }
    }
    const onSubmit = () => {
      choosenQorani(formData.qorani)  
      choosenAreaQorani(formData.areaQorani)  
      choosenFavoriteQorani(formData.favoriteQorani)  
      choosenFarhngi(formData.farhngi)  
      choosenSkils(formData.skils)  
      choosenLearn(formData.learn)  
      choosenPlay(formData.play)  
      choosenWithWork(formData.withWork)  
    }

    return (
        <Box sx={{ width: "100%", height: "auto", py: 2, display: "flex", flexDirection: "column" }}>
            <form style={{ paddingTop: "10px", paddingBottom: "10px" }} onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
                    <FormControl sx={{ direction: "rtl", textAlign: "right" }} variant='outlined' fullWidth>
                        <Typography component={"h5"}>سوابق قرآنی</Typography>
                        <Typography component={"p"}>دانشجویانی که در هر یک از رشته های ذیل در گذشته دارای رتبه و فعالیت بوده اند با علاقمند هستند ضمن انتخاب گزینه توضیحات تکمیلی کامل کنند</Typography>
                        <div style={{
                            display: 'flex',
                            marginTop:"15px",
                            width:"100%",
                            flexDirection: 'column',
                        }}>
                            <Select
                                refIn={(input:any) => input.focus()}
                                options={items}
                                value={formData.qorani[0]}
                                label={"رشته های دارای رتبه"}
                                placeholder={"رشته های دارای رتبه"}
                                name={"qorani"} 
                                limitTags={10}
                                multiple={true}
                                onChange={handleSelect}
                            />
                        </div>
                        <TextareaAutosize 
                            className={classes.textArea}
                                    {
                                        ...register("areaQorani",{
                                            onChange(event) {
                                                submitHandler(event)
                                            }, 
                                        })
                                    }
                                   aria-label='text-area for field qorani' placeholder='توضیحات تکمیلی' style={{width:"100%"}}/>
                    
                    <div style={{
                            display: 'flex',
                            marginTop:"15px",
                            width:"100%",
                            flexDirection: 'column',
                        }}>
                            <Select
                                refIn={(input:any) => input.focus()}
                                options={items}
                                value={formData.favoriteQorani[0]}
                                label={"رشته های علاقمند"}
                                placeholder={"رشته های علاقمند"}
                                name={"qorani"} 
                                limitTags={10}
                                multiple={true}
                                onChange={handleSelect}
                            />
                        </div>
                    </FormControl>
                    <FormControl sx={{ mt:"15px",direction: "rtl", textAlign: "right" }} variant='outlined' fullWidth>
                        <Typography component={"h5"}>سوابق فرهنگی</Typography>
                        <Typography component={"p"}>دانشجویانی که در هر یک از رشته های ذیل در گذشته دارای رتبه و فعالیت بوده اند با علاقمند هستند ضمن انتخاب گزینه توضیحات تکمیلی کامل کنند</Typography>
                        <div style={{
                            display: 'flex',
                            marginTop:"15px",
                            width:"100%",
                            flexDirection: 'column',
                        }}>
                            <Select
                                refIn={(input:any) => input.focus()}
                                options={items}
                                value={formData.farhngi[0]}
                                label={"سوابق فرهنگی"}
                                placeholder={"سوابق فرهنگی"}
                                name={"farhngi"} 
                                limitTags={10}
                                multiple={true}
                                onChange={handleSelect}
                            />
                        </div>
                    </FormControl>
                    <FormControl sx={{ mt:"15px",direction: "rtl", textAlign: "right" }} variant='outlined' fullWidth>
                        <Typography component={"h5"}>مهارت ها</Typography>
                        <div style={{
                            display: 'flex',
                            marginTop:"15px",
                            width:"100%",
                            flexDirection: 'column',
                        }}>
                            <Select
                                refIn={(input:any) => input.focus()}
                                options={items}
                                value={formData.skils[0]}
                                label={"مهارت ها"}
                                placeholder={"مهارت ها"}
                                name={"skils"} 
                                limitTags={10}
                                multiple={true}
                                onChange={handleSelect}
                            />
                        </div>
                    </FormControl>
                    <FormControl sx={{ mt:"15px",direction: "rtl", textAlign: "right" }} variant='outlined' fullWidth>
                        <Typography component={"h5"}>علاقه به همکاری</Typography>
                        <div style={{
                            display: 'flex',
                            marginTop:"15px",
                            width:"100%",
                            flexDirection: 'column',
                        }}>
                            <Select
                                refIn={(input:any) => input.focus()}
                                options={items}
                                value={formData.withWork[0]}
                                label={"علاقه به همکاری"}
                                placeholder={"علاقه به همکاری"}
                                name={"withWork"} 
                                limitTags={10}
                                multiple={true}
                                onChange={handleSelect}
                            />
                        </div>
                    </FormControl>
                    <FormControl sx={{ mt:"15px",direction: "rtl", textAlign: "right" }} variant='outlined' fullWidth>
                        <Typography component={"h5"}>شرکت در مسابقات</Typography>
                        <div style={{
                            display: 'flex',
                            marginTop:"15px",
                            width:"100%",
                            flexDirection: 'column',
                        }}>
                            <Select
                                refIn={(input:any) => input.focus()}
                                options={items}
                                value={formData.play[0]}
                                label={"شرکت در مسابقات"}
                                placeholder={"شرکت در مسابقات"}
                                name={"play"} 
                                limitTags={10}
                                multiple={true}
                                onChange={handleSelect}
                            />
                        </div>
                    </FormControl>
                    <FormControl sx={{ mt:"15px",direction: "rtl", textAlign: "right" }} variant='outlined' fullWidth>
                        <Typography component={"h5"}>شرکت در کلاس های آموزشی</Typography>
                        <div style={{
                            display: 'flex',
                            marginTop:"15px",
                            width:"100%",
                            flexDirection: 'column',
                        }}>
                            <Select
                                refIn={(input:any) => input.focus()}
                                options={items}
                                value={formData.learn[0]}
                                label={"شرکت در کلاس های آموزشی"}
                                placeholder={"شرکت در کلاس های آموزشی"}
                                name={"learn"} 
                                limitTags={10}
                                multiple={true}
                                onChange={handleSelect}
                            />
                        </div>
                    </FormControl>
                </Box>
                
            </form>
        </Box>
    )
}

export default userFavorite