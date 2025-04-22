// Shree Ganeshay namah 

import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import { data } from 'react-router-dom'
const Home = () => {

    const { register, handleSubmit } = useForm()
    const [user, SetUser] = useState([])
    function submit(data) {
        console.log(data)

        SetUser([...user, data])

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

                <button className=' btn btn-success'>Submit</button>

            </form>
            <div className=' container'>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">index</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
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