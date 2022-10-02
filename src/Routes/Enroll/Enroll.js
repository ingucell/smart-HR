import React, {useState, useEffect} from 'react'
import './Enroll.css'
import Data from '../../Components/Profile/Data'
import Entry from '../../Components/Inputs/Entry'
import base from './Base'
import axios from 'axios'

function Enroll() {
    const [name , setNewEntry ] = useState('')
    //stack
   const [stack, setNewStack] = useState('')
   //role
   const [role, setNewRole] = useState('')
   //mail 
   const [mail, setNewMail] = useState('')
  const [mydata, setMyData] = useState([])

  //work ethics = completed projects , Reporting Days, Interpersonal Work Relations // base metric system developed by @ingucell 

  //completed projects 
  const [projectsCompleted, setNewComp] = useState('')

  //Reporting Dats
  const [reportingDays, setnewRelation] = useState('')

  //P2p Assesments 
  const [p2p , setp2p] = useState('')


  
      
    const handleSubmit = async (e) =>{
      e.preventDefault();
      if(!name || !stack || !role || !mail) return;
      setNewEntry('');
      setNewStack('');
      setNewRole('');
      setNewMail('');
      setNewComp('');
      setp2p('');
      setnewRelation('');
    
      setMyData(([...mydata,
      {
       name: name,
       stacks: stack,
       mail: mail,
       role: role,
       projectsCompleted: projectsCompleted,
       p2p: p2p
     }  
     
    ]))



      try{
        await axios.post("http://localhost:5000/fontend",{
        name, mail, role, stack, projectsCompleted, p2p
         
        })
    } catch (error){
            console.log(error)
    }

  //  base.push([...retrieve])
   
    
    }

    // useEffect(()=>{
    //       localStorage.setItem('data', JSON.stringify(mydata))
    // }, [mydata])


    // var retrieve = JSON.parse(localStorage.getItem('data'));
    // useEffect(()=>{
    //   if(retrieve ){ setMyData(retrieve)}
    // }, [])



    

  return (
    <div className='entry-container'><Entry 
    name ={name}
    setNewEntry = {setNewEntry}
    setNewStack = {setNewStack}
    setNewRole = {setNewRole}
    handleSubmit = {handleSubmit}
    setNewMail = {setNewMail}
    setNewComp = {setNewComp}
    setnewRelation = {setnewRelation}
    setp2p = {setp2p}
    newRelation = {reportingDays}
    p2p = {p2p}
    projectsCompleted = {projectsCompleted}
    mail = {mail}
    role = {role}
    stack = {stack}
  /></div>
  )
}

export default Enroll