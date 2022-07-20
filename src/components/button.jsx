const Button=(props)=>
{
    const{label,handleClick}=props;
    return(
        <button onClick={handleClick} style={{width:400}}>
            {label}
        </button>
    );
}
export default Button;