import React from 'react'

const FormField = ({lableName , type , name , placeholder ,value, handleChange , isSurpriseMe , handleSupriseMe}) => {
  return (
    <div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }} >
        <lable
        htmlFor={name}
        style={{display: "block",fontSize: "0.875rem", fontWeight: "500", color: "#1F2937"
}}
        
        >
        {lableName}
        </lable>
       


    </div>
          <input 
          style={{ backgroundColor: '#f9fafb', borderColor: '#d2d6dc', color: '#1a202c', fontSize: '1.5rem', borderRadius: '0.5rem', outline: 'none', display: 'block', width: '100%', padding: '.75rem', boxShadow: '0 0 0 2px #e2e8f0, 0 1px 2px 0 rgba(0,0,0,0.05)' }}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value ={value}
          onChange={handleChange}
          required
         
           />




    </div>
  )
}

export default FormField