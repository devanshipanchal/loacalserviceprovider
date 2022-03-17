import React from 'react'
import axios from 'axios'

export const ApiDemo = () => {

    const getData = () => {

        axios.get('http://localhost:4000/roles').then(data => {
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })
    }

    const postData = (e) => {

        e.preventDefault();

        var data = {
            roleName: e.target[0].value
        }

        axios.post('http://localhost:4000/roles', data).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })

    }

    const deleteData = (e) => {

        e.preventDefault()
        var id = e.target[0].value;
        axios.delete(`http://localhost:4000/roles/` + id).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const updateData = (e) => {

        e.preventDefault()
        var data = {
            roleId: e.target[0].value,
            roleName: e.target[1].value
        }


        axios.put('http://localhost:4000/roles', data).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })

    }




    return (

        <div>
      
                  
            <h1>Role Detail</h1>
            <h3>Retrive All Roles</h3>
            <button onClick={getData}>Get Roles</button>
            <br /><br />

           

            <h3 >Add Role</h3>
            <form onSubmit={postData} method="POST">
                <input type="text" placeholder='roleName' name='roleName' />
                <input type="submit" value="Add Role" />


            </form>
            <br />

            <h3>Delete Role</h3>
            <form onSubmit={deleteData} method="DELETE">
                <input type="text" placeholder='roleId' name='roleId' />
                <input type="submit" value="Delete Role" />


            </form>

            <br />

            <h3>Update Role</h3>
            <form onSubmit={updateData} method="PUT">
                <input type="text" placeholder='roleId' name='roleId' />
                <input type="text" placeholder='roleName' name='roleName' />
                <input type="submit" value="Update Role" />


            </form>


        </div>

    )
}



  