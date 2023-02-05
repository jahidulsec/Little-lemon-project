import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => { 
 const RadioOptions = React.Children.map(children, (child) => { 
   return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   }); 
 }); 
 return <div className="radio-group">{RadioOptions}</div>; 
}; 
 
export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="radio-option"> 
     <label htmlFor={value}>{children}</label>
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     />  
   </div> 
 ); 
}; 