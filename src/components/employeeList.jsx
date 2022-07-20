import Button from "./button";
import InputField from "./inputField";
import InputSelect from "./inputSelect";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useGetAllEmployeeQuery } from "../services/employeeService";
import { useDeleteEmployeeByIdMutation } from "../services/employeeService";
const EmployeeList = () => {
  const { data, error, isLoading } = useGetAllEmployeeQuery();
  const [deleteEmployeeById, result] = useDeleteEmployeeByIdMutation();
  const navigate = useNavigate();

  return (
    <>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div class="sidenavlist">
        <div>
          <img src="assets/kv logo.png" alt="keyvalue" />
        </div>
      </div>
      <div class="employeelistcard1">
        <h1 id="employeelist_heading">Employee List</h1>
        <div></div>
        <label id="Filter">Filter By</label>
        <button id="statusbutton" onClick={() => {}}>
          status
        </button>
        <button id="createbutton" onClick={() => navigate("/create")}>
          create employee
        </button>
      </div>
      <div
      // className="card2list"
      >
        <div class="allemployee_listheading">
          <p class="allemployee_listheading_empname">Employee name</p>
          <p class="allemployee_listheading_eid">Employee ID</p>
          <p class="allemployee_listheading_jd">Joining date</p>

          <p class="allemployee_listheading_role">Role</p>
          <p class="allemployee_listheading_status">Status</p>
          <p class="allemployee_listheading_experience">Experience</p>
          <p class="allemployee_listheading_action">Action</p>
        </div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.data.map((item) => {
            console.log(item);
            return (
              <div>
                <div className="employee_item_div">
                  <p className="allemployee_listheading_empname">
                    {item.empname}
                  </p>
                  <p className="allemployee_listheading_eid">{item.id}</p>
                  <p className="allemployee_listheading_jd">
                    {item.joining_date}
                  </p>
                  <p className="allemployee_listheading_role">{item.role}</p>
                  <p className="allemployee_listheading_status">
                    {item.status}
                  </p>
                  <p className="  allemployee_listheading_experience">
                    {item.Experience}
                  </p>
                  <p className="delete_icon_emplist">
                    <i
                      className="fa fa-trash"
                      onClick={() => {
                        deleteEmployeeById(item.id);
                        navigate("/list");
                      }}
                    />
                  </p>
                  <p className="edit_icon_emplist">
                    <i
                      className="fa fa-pencil"
                      onClick={() => {
                        navigate(`/detail/${item.id}`);
                      }}
                    />
                  </p>
                </div>
              </div>

              // <tr>
              //   <td>{item.empname}</td>
              //   <td>{item.id}</td>
              //   <td>{item.joining_date}</td>
              //   <td>{item.role}</td>
              //   <td>{item.status}</td>
              //   <td>{item.Experience}</td>
              //   <td>
              //     <button
              //       onClick={() => {
              //         {
              //           deleteEmployeeById(item.id);
              //           navigate("/list");
              //         }
              //       }}
              //     >
              //       Delete
              //     </button>
              //     <button
              //       onClick={() => {
              //         {
              //           //navigate to employee detail page
              //           navigate(`/detail/${item.id}`);
              //         }
              //       }}
              //     >
              //       Details
              //     </button>
              //   </td>
              // </tr>
            );
          })
        ) : null}
      </div>
    </>
  );
};
export default EmployeeList;
