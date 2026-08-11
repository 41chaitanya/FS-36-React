import React from 'react'

const EmployeeCard = ({emp}) => {

  return (
   <>
    <div>

        <img src={emp.download_url} style={{height:"50px",width:"50px"}} />
        <p>{emp.author}</p>
    </div>
   
   
   </>
  )
}

export default EmployeeCard