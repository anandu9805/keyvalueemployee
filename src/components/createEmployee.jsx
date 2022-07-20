// import Button from "./button";
// import InputField from "./inputField";
// import InputSelect from "./inputSelect";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useCreateEmployeeMutation } from "../services/employeeService";
const CreateEmployee = () => {
  const navigate = useNavigate();
  const [createEmployee, result] = useCreateEmployeeMutation ();
  // console.log("result",result);
  // console.log("createEmployee",createEmployee);
     // const formfields = [
  //   { key: "name", label: "Employee Name", type: "text" },
  //   { key: "address", label: "Address", type: "text" },
  //   { key: "id", label: "Employee Id", type: "text" },
  //   { key: "email_id", label: "Email Id", type: "text" },
  //   { key: "j_date", label: "Joining Date", type: "date" },
  //   { key: "proof", label: "Upload ID Proof", type: "file" },
  // ];
    const [formvalues, setValues] = useState({
        empname: "",
        role: "",
        id: "",
        address: "",
        status: "",
        joining_date: "",
        Experience: "",
        email: "",
        departmentId:"",
        password:"",
      });
      const set = (name) => {
        return ({ target: { value } }) => {
          setValues((oldValues) => ({ ...oldValues, [name]: value }));
        };
      };
  function submitfn() {
   console.log(formvalues);
    // tempemplist.push(formvalues);
    // updateList(tempemplist);
    createEmployee(formvalues);
    navigate("/list");
  }
  return (
    <>
      <div class="sidenavlist">
        <div>
          <img src="assets/kv logo.png" alt="keyvalue" />
        </div>
      </div>
      <div class="employeelistcard1">
        <h1 id="employeelist_heading">Create Employee</h1>
      </div>
      <div >
        <form name="Employeeform">
          <div id="createemployeeformsession">
            <div>
              <div>
                <label id="enlabel">Employee Name</label>
                <input
                className="createinput"
                  type="text"
                  id="en"
                  name="ename"
                  placeholder="Employee name"
                  value={formvalues.name}
                  onChange={set("empname")}
                />
              </div>
              <div>
                <label id="Ridlabel">Role</label>

                <select
                className="createinput"
                  name="Rname"
                  id="Rid"
                  value={formvalues.role}
                  onChange={set("role")}
                >
                  <option value="Trainee">Trainee</option>
                  <option value="Developer">Developer</option>
                </select>
              </div>
              <div>
                <label id="addidlabel">Addresss</label>
                <input
                className="createinput"
                  type="text"
                  id="addid"
                  name="Add"
                  placeholder="Addresss"
                  value={formvalues.address}
                  onChange={set("address")}
                />
              </div>
            </div>

            <div>
              <div>
                <label id="didlabel">Department ID</label>
                <input
                className="createinput"
                  type="text"
                  id="eid"
                  name="emid"
                  placeholder="Department ID"
                  value={formvalues.departmentId}
                  onChange={set("departmentId")}
                />
              </div>

              <div>
                <label id="Sidlabel">Status</label>

                <select
                className="createinput"
                  name="Sname"
                  id="Sid"
                  value={formvalues.status}
                  onChange={set("status")}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Probation">Probation</option>
                </select>
              </div>

              <div>
                <label id="pidlabel">Upload ID Proof</label>
                <input
                className="createinput"
                  type="file"
                  id="pid"
                  name="pname"
                  placeholder="Choose file "
                />
              </div>
            </div>
            <div>
              <div>
                <label id="jdlabel">Joining Date</label>
                <input
                className="createinput"
                  type="text"
                  id="jd"
                  name="Jdate"
                  placeholder="Joining Date"
                  value={formvalues.joining_date}
                  onChange={set("joining_date")}
                />
              </div>
              <div>
                <label id="Eidlabel">Experience</label>
                <input
                className="createinput"
                  type="text"
                  id="Eid"
                  name="Exp"
                  placeholder="Experience"
                  value={formvalues.Experience}
                  onChange={set("Experience")}
                />
              </div>

              <div>
                <label id="emailidlabel">Email</label>
                <input
                className="createinput"
                  type="text"
                  id="emailid"
                  name="ename"
                  placeholder="Enter email"
                  value={formvalues.email}
                  onChange={set("email")}
                />
              </div>
              <div>
                <label id="passwordlabel">Password</label>
                <input
                className="createinput"
                  type="password"
                  id="passwordid"
                  name="passwordname"
                  placeholder="Password"
                  value={formvalues.password}
                  onChange={set("password")}
                />
              </div>
            </div>
            {/* <div>
                {formfields.map((inputs) => (
                  <InputField
                    key={inputs.key}
                    label={inputs.label}
                    type={inputs.type}
                  />
                ))}
              </div>
           
              <div>
                <InputSelect
                  label={"Role"}
                  options={[
                    { key: "r1", label: "Trainee" },
                    { key: "r2", label: "Developer" },
                  ]}
                />
              </div>
              <div>
                <InputSelect
                  label={"Status"}
                  options={[
                    { key: "s1", label: "Married" },
                    { key: "s2", label: "Single" },
                  ]}
                />
              </div> */}
              
          
          <div >
            <button
              type="button"
              id="createbutton2"
              onClick={() => {
                submitfn();
               
              }}
            >
              create
            </button>
            <button type="button" id="createpagecancelbutton" onClick={() => {}}>
            Cancel
          </button>
          </div>
          </div>

          

        
        </form>
      </div>
    </>
  );
};
export default CreateEmployee;
