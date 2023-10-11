import React, { useState } from "react";



const App = () => {
    const [fullName, setFullName] = useState({fName:"", lName:""});
    // const [finalName, setFinalName] = useState({finalFName:"", finalLName:""})


    // const Clicked = (events) => {
    //     events.preventDefault(events);
    //      setFinalName({finalFName:fullName.fName, finalLName:fullName.lName})
    //     //  alert('form submitted')
        
    // }


    const onChange = (events) => {
        const value = events.target.value
        const name = events.target.name
        setFullName((preValue) =>{
            if(name==='fName'){

                return{
                    fname:value,
                    lName:preValue.lName
                    
                }}else if(name==='lName'){
                    return{
                        fname:preValue.fName,
                        lName:value
                    }
                }
        } 
       )

       console.log(fullName.fName)
       console.log(fullName.lName)
        
    }


    return (
        <>
            <h1>{fullName.fName} {fullName.lName}</h1>
            <input type="text" onChange={onChange}  name = "fName" placeholder="Enter your first name  "/>
            <input type="text" onChange={onChange}  name = "lName" placeholder="Enter your last name  "/>
            <button >Submit</button>

        </>
    )
}

export default App;