import React from 'react'
import "./FormAccountInfo.css"
const FormAccountInfo = () => {
  return (
    <>
        <div className="name">
          <div className="input_text">
            <input type="text" placeholder='First name' value="Ahmed" />
          </div>
          <div className="input_text">
            <input type="text" placeholder='Last name' value="Abdrabou" />
          </div>
        </div>
        <div className="input_text">
            <input type="email" placeholder='E-mail' value="dev.ahmedabdrabou@gmail.com" />
          </div>
        <div className="input_text">
            <input type="text" placeholder='City' value="Mansoura" />
          </div>
        <div className="input_text">
            <input type="text" placeholder='Country' value="Egypt" />
          </div>
        <div className="input_text">
            <input type="text" placeholder='Phone Number' value="00000000000" />
          </div>
        <div className="input_text">
            <input type="password" placeholder='Password' value="AHMED110@#" />
          </div>
          
    </>
  )
}

export default FormAccountInfo