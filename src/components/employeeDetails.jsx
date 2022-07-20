import Button from "./button";
import InputField from "./inputField";
import InputSelect from "./inputSelect";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useGetAllEmployeeQuery } from "../services/employeeService";
import { useDeleteEmployeeByIdMutation } from "../services/employeeService";
import { useParams } from "react-router-dom";
import { useGetEmployeeByIdQuery } from "../services/employeeService";

const EmployeeDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const { data, error, isLoading } = useGetEmployeeByIdQuery(id);

  console.log("details page------------------------", data);

  return (
    <>
      <div class="sidenavlist">
        <div>
          <img src="assets/kv logo.png" alt="keyvalue" />
        </div>
      </div>
      <div class="employeelistcard1">
        <h1 id="employeelist_heading">Employee Details</h1>
        <button
          id="createbutton"
          onClick={() => {
            navigate(`/update/${id}`);
          }}
        >
          Edit
        </button>
      </div>

      <div class="detailcard">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <div>
              <label>Employee Name</label>
              <br />
              {data.data.empname}
            </div>
            <div>
              <label>Employee ID</label>
              <br />
              {data.data.id}
            </div>
            <div>
              <label>Joining date</label>
              <br />
              {data.data.joining_date}
            </div>
            <div>
              <label>Role</label>
              <br />
              {data.data.role}
            </div>
            <div>
              <label>Status</label>
              <br />
              {data.data.status}
            </div>
            <div>
              <label>Experience</label>
              <br />
              {data.data.Experience}
            </div>

            <div>
              <label>Address</label>
              <br />
              {data.data.address.address}
            </div>
            <div>
              <label>Employee ID Proof</label>
              <br />
              <img src="assets/uploadfile.svg" alt="keyvalue" />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
export default EmployeeDetails;
