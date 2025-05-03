// Shree Ganeshay namah 

import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { DeleteUser } from '../Redux/Features/UserSlice'
const View = () => {

    const user = useSelector((state)=>state.user.userlist)
    console.log(user)

    const dispatch = useDispatch()

    function trash(id){
        dispatch(DeleteUser(id))
        
    }

    return (
        <>
            <table className="table container table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Emaik</th>
                        <th scope="col">MobileNumber</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    user.map((user,index)=>{
                        return (
                            <tr>
                                <th>{index+1}</th>
                            <th scope="row">{user.username}</th>
                            <td >{user.email}</td>
                            <td>{user.mobilnumber}</td>
                            <td><button className=' btn btn-danger' onClick={()=>trash(user.id)}>Delete</button></td>
                        </tr>
                        )
                    })
                   }
                  
                </tbody>
            </table>
        </>
    )
}

export default View