const InputSelect = (props) => {
    const{label,options}=props;
  return (
    <div>
      <div>{label}</div>
     <select >
        {options.map((value)=><option key={value.key}>{value.label}</option>)}

     </select>
    </div>
  );
};
export default InputSelect;