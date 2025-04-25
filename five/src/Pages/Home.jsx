// Shree Ganeshay namah 

import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import { data } from 'react-router-dom'
const Home = () => {

    const { register, handleSubmit,reset } = useForm()
    const [user, SetUser] = useState([])
    const [edit,setEdit] = useState(null)
    

    

    function submit(data) {
        // console.log(data)

        if(edit!== null){
        //   console.log(user[edit])
        // let updateUser = [...user]
        // updateUser[edit] = data
        // SetUser(updateUser)

        let updateuser = [...user] // USER
        updateuser[edit] =data
        SetUser(updateuser)
        setEdit(null)
        reset()
        }else{
                SetUser([...user, data])
        }


        // console.log(user)
    }


    useEffect(() => {
        if (user.length > 0) {
            localStorage.setItem('user', JSON.stringify(user))
        }
    }, [user])

    useEffect(() => {
        const get = localStorage.getItem('user')
        console.log(get)
        console.log(JSON.parse(get))
        if(get){

            SetUser(JSON.parse(get))
        }
    }, [])

    function trash(data){
        
        const filterUser = user.filter((ele,index)=>{
            console.log(ele,index)
            return data != index
        })
        console.log(filterUser)
        SetUser(filterUser)
    }

    function update(index){
        console.log(index)
        console.log(user[index])
        reset(user[index])
        setEdit(index)
    }

    // useEffect(()=>{
    //     let users = localStorage.getItem('user')
    //     let parseUser = JSON.parse(users)
    //     SetUser(parseUser)
    // },[])

    return (
        <>
            <h1>Jay Shree Ram</h1>
            <form action="" className='shadow col-6 mx-auto p-5' onSubmit={handleSubmit(submit)} method="post">

                <div className='mb-4'>
                    <input className=' form-control' {...register('username')} placeholder='Enter Your Name' type="text" />
                </div>

                <div className='mb-4'>
                    <input className=' form-control' {...register('email')} placeholder='Enter Your Email' type="text" />
                </div>

                {/* <button className=' btn btn-success'>Submit</button> */}
                {
                    edit!==null ?<button className=' btn btn-primary'>Edit</button>
                    : <button className=' btn btn-success'>Submit</button>
                }

            </form>
            <div className=' container'>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">index</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user.map((ele, index) => {
                                return (

                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{ele?.username}</td>
                                        <td>{ele?.email}</td>
                                        <td><button className=' btn btn-danger' onClick={()=>trash(index)}>Delete</button></td>
                                        <td><button className='btn btn-primary' onClick={()=>update(index)}>Edit</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Home