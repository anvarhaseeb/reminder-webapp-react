import React,{useState} from 'react'
import './remainder.css'

function Reminder() {
    //storing as Array
    const [reminder,setReminder]=useState([]);
    const [newReminder,setNewReminder]=useState("");


    const handleAddremainder=( )=>{
     
    if(newReminder.trim()){
        setReminder([...reminder,newReminder])
        setNewReminder("")
        
    }
    }
    const handleInputChange=(event)=>{
        setNewReminder(event.target.value)
    }

    const handledeletereminder=(index)=>{
        setReminder(reminder.filter((item,itemIndex)=> itemIndex !=index))
    }

  return (
    
    <div className='container'>
     <>
     <div className='logo-brand'>
        <img src='./logo.png'  style={{width:80, marginTop: -7,height:80}}/>
        <h1>remindme</h1>
     </div>
     </>
    {/* inputcontainer  */}
    <div className='input-container'>

        <input type='text'
         value={newReminder}
         placeholder='Enter a remainder'
         onChange={handleInputChange}
        />

        <button className='addbtn' onClick={handleAddremainder}
        >
        Add remainder </button>

    </div>

    {   reminder.length >0 ?(
        <ul className='reminder-list'>
        {
            reminder.map((reminder,index)=>(
                <li key={index}>
                    {reminder}
                  <button className='dlt-btn' onClick={()=>handledeletereminder(index)}>Delete</button>  
                </li>
            ))
        }
    </ul>):
    <p>No reminders found</p>
    }
    </div>
   
  )
}

export default Reminder
