const InputField = (props) => {
    const{label,type,onChange}=props;
  return (
    <><label>{label}</label>
    <input id="Custombtn" type={type} onChange={(event)=>onChange(event.target.value)} style={{width:400}}/>
    <br></br>
    <br></br></>
   
      
    
  );
};
export default InputField;
