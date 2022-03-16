import React ,{useState} from 'react'

export const SelectDemo = () => {
    //const [value, setvalue] = useState('volvo')

    var options = [
            {
                label:"Volvo",
                value:"Volvo"
            },
            {
                label:"Audi",
                value:"Audi"
            },
            {
                label:"Bmw",
                value:"Bmw"
            }
            {
                label:"TATA",
                value:"tata"
            }

    ]
    
    var slectedoption
    const SelectChangeHandler =(e)=>{
        slectedoption = e.target.value;
        alert(slectedoption)
    }
    const genderchange =(e)=>{
        alert("You Selected"+ " "+e.target.value)
    }

    const hobbychange =(e)=>{
        alert("You Selected"+ " "+e.target.value)
    }
  return (
    <div>
        <form>
            <select onChange={(e)=>{SelectChangeHandler(e)}}>
               {
                   options.map((option)=>{
                       return(<option value={option.value}>{option.label}</option>)
                   })
               }
            </select> <br></br>
                <label>Male</label> 
                <input type="radio" name='gender' value="male" onChange={(e)=>{genderchange(e)}}/>
                <label>female</label>
                <input type="radio" name='gender' value="female"onChange={(e)=>{genderchange(e)}}/><br></br>

               <label>Dancing</label>
                <input type="checkbox" name='hobby' value="Dancing" onChange={(e)=>{hobbychange(e)}}/>
                <label>Singing</label>
                <input type="checkbox" name='hobby' value="Singing"onChange={(e)=>{hobbychange(e)}}/>
                
           
        </form>
    </div>
  )
}