// import Button from "./button";
// import InputField from "./inputField";
// import InputSelect from "./inputSelect";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useUpdateEmployeeByIdMutation } from "../services/employeeService";
import { useParams } from "react-router-dom";
import { useGetEmployeeByIdQuery } from "../services/employeeService";

const EmployeeUpdate = () => {
  //const { data, error, isLoading } = useGetAllEmployeeQuery();
  let { id } = useParams();
  const { data, error, isLoading } = useGetEmployeeByIdQuery(id);
  const [updateEmployee, result] =  useUpdateEmployeeByIdMutation();
 

  const navigate = useNavigate();
 
  const [formvalues, setValues] = useState({
    empname: "",
    role: "",
    id: "",
    address: "",
    status: "",
    joining_date: "",
    Experience: "",
    email: "",
    departmentId: "",
    
  });
  const set = (name, value) => {
    const newEmp = {
      ...formvalues,
      [name]: value,
    };
    setValues(newEmp);
  };

  useEffect(() => {
    if (data) {
      setValues({
        empname: data.data.empname,
        role: data.data.role,
        id: data.data.id,
        address: data.data.address,
        status: data.data.status,
        joining_date: data.data.joining_date,
        Experience: data.data.Experience,
        email: data.data.email,
        departmentId: data.data.departmentId,
       
      });
    }
  }, [data]);

  function submitfn() {
   

    updateEmployee({id,formvalues});
   
    navigate("/list");
  }
  return (
    <>
      <div class="sidenavlist">
      <div class="sidenavlist">
        <div>
          <img src="./assest/kvlogo.png" alt="keyvalue" />
        </div>
        <div class="sidenav2">
      <div className="sidenavemplist" >
        {/* <img src="./assets/Group.svg" alt="keyvalue" class="avatar" /> */}
        <p className="sidenavemppara" >Employee List</p>
      </div>
    </div>
      </div>
      </div>
      <div class="employeelistcard1">
        <h1 id="employeelist_heading">Update Employee</h1>
      </div>
      <div>
        <form name="Employeeform">
          <div id="createemployeeformsession">
            <div>
              <div>
                <label id="enlabel">Employee Name</label>
                <input
                className="updateinput"
                  type="text"
                  id="en"
                  name="ename"
                  placeholder="Employee name"
                  defaultValue={formvalues.empname}
                  value={formvalues.empname}
                  onChange={(e) => set("empname", e.target.value)}
                />
              </div>
              <div>
                <label id="Ridlabel">Role</label>

                <select
                className="updateinput"
                  name="Rname"
                  id="Rid"
                  defaultValue={formvalues.role}
                  value={formvalues.role}
                  onChange={(e) => set("role", e.target.value)}
                >
                  <option value="Trainee">Trainee</option>
                  <option value="Developer">Developer</option>
                </select>
              </div>
              <div>
                <label id="addidlabel">Addresss</label>
                <input
                className="updateinput"
                  type="text"
                  id="addid"
                  name="Add"
                  placeholder="Addresss"
                  defaultValue={formvalues.address.address}
                  value={formvalues.address.address}
                  onChange={(e) => set("address", e.target.value)}
                />
              </div>
            </div>

            <div>
              <div>
                <label id="didlabel">Department ID</label>
                <input
                className="updateinput"
                  type="text"
                  id="eid"
                  name="emid"
                  placeholder="Department ID"
                  defaultValue={formvalues.departmentId}
                  value={formvalues.departmentId}
                  onChange={(e) => set("departmentId", e.target.value)}
                />
              </div>

              <div>
                <label id="Sidlabel">Status</label>

                <select
                className="updateinput"
                  name="Sname"
                  id="Sid"
                  value={formvalues.status}
                  defaultValue={formvalues.status}
                  onChange={(e) => set("status", e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Probation">Probation</option>
                </select>
              </div>

              <div>
                <label id="pidlabel">Upload ID Proof</label>
                <input
                className="updateinput"
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
                className="updateinput"
                  type="text"
                  id="jd"
                  name="Jdate"
                  placeholder="Joining Date"
                  value={formvalues.joining_date}
                  defaultValue={formvalues.joining_date}
                  onChange={(e) => set("joining_date", e.target.value)}
                />
              </div>
              <div>
                <label id="Eidlabel">Experience</label>
                <input
                className="updateinput"
                  type="text"
                  id="Eid"
                  name="Exp"
                  placeholder="Experience"
                  value={formvalues.Experience}
                  defaultValue={formvalues.Experience}
                  onChange={(e) => set("Experience", e.target.value)}
                />
              </div>

              <div>
                <label id="emailidlabel">Email</label>
                <input
                className="updateinput"
                  type="text"
                  id="emailid"
                  name="ename"
                  placeholder="Enter email"
                  value={formvalues.email}
                  defaultValue={formvalues.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </div>
             
            </div>
            <div >
            <button
              type="button"
              id="createbutton2"
              onClick={() => {
                submitfn();
              }}
            >
              Update
            </button>
            <button type="button" id="updatepagecancelbutton" onClick={() => {}}>
            Cancel
          </button>
           
          </div>
          </div>

        

        
        </form>
      </div>
    </>
  );
};
export default EmployeeUpdate;
