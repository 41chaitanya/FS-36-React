import React, { useContext } from 'react'
import { EmployeeContext } from '../context/EmployeeContext.jsx'
import EmployeeCard from './EmployeeCard.jsx'

const Employee = () => {
    const {employeeData}=useContext(EmployeeContext)
  return (
    <>
        {employeeData.map((emp)=>{
            return <EmployeeCard key={emp.id} emp={emp}/>
        })}
    
    
    </>
  )
}

export default Employee