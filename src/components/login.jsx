import Button from "./button";
import InputField from "./inputField";
import InputSelect from "./inputSelect";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
// import Counter from "./features/counter/Counter"

const Login = () => {
  const navigate = useNavigate();
  const items = [
    { key: "name", label: "User Name", type: "text" },
    { key: "password", label: "Password", type: "password" },
  ];
  
  return (
    <>
      <div class="sidenavlogin">
        <div id="Loginimg">
          <img  src="assets/loginimage.png" alt="keyvalue" />
        </div>
      </div>
      <div class="card2">
        <div>
          {/* <Counter></Counter> */}
          <form name="Employeeform">
            <div id="formsession">
              <div>
                <div>
                  <img src="assets/kvlogo.png" alt="Image" />
                </div>
                {items.map((inputs) => (
                  <InputField
                    key={inputs.key}
                    label={inputs.label}
                    type={inputs.type}
                    onChange={() => {}}
                  />
                ))}
                <button  id ="Loginbtn"label="Login" onClick={() => navigate("/list")}>Login</button>

                {/* <Button label="Login" handleClick={() => navigate("/list")} /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
