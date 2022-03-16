import React, { useState } from 'react'


export const EmployeeRegistration = () => {
    const [employeeName, setemployeenNme] = useState('')
    const [employeeEmail, setemployeeEmail] = useState('')
    const [employeePassword, setemployeePassword] = useState('')
    const [employeeAge, setemployeeAge] = useState('')

    const employeeNameHandler =(e)=>{

        setemployeenNme(e.target.value)
    }
    const employeeEmailHandler =(e)=>{
        
        setemployeeEmail(e.target.value)
    }
    const employeePasswordHandler =(e)=>{
        
        setemployeePassword(e.target.value)
    }
    const employeeAgeHandler =(e)=>{

        setemployeeAge(e.target.value)
    }
    const submit =(e)=>{
        
        //it will prevent action of form
        e.preventDefault()
        alert(`Name: ${employeeName} \nEmail: ${employeeEmail} \nPassword: ${employeePassword} \nAge: ${employeeAge}`)
        
    
    }

  return (
    <div>
        <h1>EmployeeRegistration</h1>
        <form onSubmit = {submit}>
            <table>
                <tr>
                    <td>Employee Name</td>
                    <td><input type = "text" name = "employeename" placeholder="enter employee name"
                    onChange={(e)=>{employeeNameHandler(e)}}></input></td>
                </tr>
                <tr>
                    <td>Employee Email</td>
                    <td><input type = "text" name = "employeeemail" placeholder="enter employee email"
                    onChange={(e)=>{employeeEmailHandler(e)}}></input></td>
                </tr>
                <tr>
                    <td>Employee Password</td>
                    <td><input type = "password" name = "employeepassword" placeholder="enter employee password"
                    onChange={(e)=>{employeePasswordHandler(e)}}></input></td>
                </tr>
                <tr>
                    <td>Employee age</td>
                    <td><input type = "number" name = "employeeage" placeholder="enter employee age"
                    onChange ={(e)=>{employeeAgeHandler(e)}}></input></td>
                </tr>
                <tr>
                    
                    <button type = "submit">Submit</button>
                </tr>
            </table>

        </form>

    </div>
  )
}
