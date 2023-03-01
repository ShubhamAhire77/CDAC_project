import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";

export default function PatientRegister() {
  const init = {
    fname: "",
    mname: "",
    lname: "",
    email_id: "",
    password: "",
    contact: "",
    city: "",
    area: "",
    address_line: "",
    gender: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };

      case "reset":
        return init;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);

  const sendData = () => {};
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <h3 className="Auth-form-title">SignUp</h3>
          {/* First name */}
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="form-control mt-1"
              placeholder="Enter First Name"
              value={info.fname}
              onChange={(e) => {
                dispatch({ type: "update", fld: "fname", val: e.target.value });
              }}
            />
          </div>
          {/* Middle Name */}
          <div className="form-group mt-3">
            <label>Middle Name</label>
            <input
              type="text"
              id="mname"
              name="mname"
              className="form-control mt-1"
              placeholder="Enter Middle Name"
              value={info.mname}
              onChange={(e) => {
                dispatch({ type: "update", fld: "mname", val: e.target.value });
              }}
            />
          </div>
          {/* Last name */}
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="form-control mt-1"
              placeholder="Enter Last Name"
              value={info.lname}
              onChange={(e) => {
                dispatch({ type: "update", fld: "lname", val: e.target.value });
              }}
            />
            {/* Email id */}
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                id="email_id"
                name="email_id"
                className="form-control mt-1"
                placeholder="Enter email"
                value={info.email_id}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fld: "email_id",
                    val: e.target.value,
                  });
                }}
              />
            </div>
            {/* Password */}
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={info.password}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fld: "password",
                    val: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          {/* Contact */}
          <div className="form-group mt-3">
            <label>Contact Number</label>
            <input
              type="number"
              id="contact"
              name="contact"
              className="form-control mt-1"
              placeholder="Enter Middle Name"
              value={info.contact}
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "contact",
                  val: e.target.value,
                });
              }}
            />
          </div>
          {/* Address line */}
          <div className="form-group mt-3">
            <label>Address Line</label>
            <input
              type="text"
              id="address_line"
              name="address_line"
              className="form-control mt-1"
              placeholder="Enter Middle Name"
              value={info.address_line}
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "address_line",
                  val: e.target.value,
                });
              }}
            />
          </div>
          {/* area_id */}

          {/* Gender */}

          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                sendData(e);
              }}
            >
              Register
            </button>
            <button
              type="reset"
              className="btn btn-primary"
              onClick={() => {
                dispatch({ type: "reset" });
              }}
            >
              Clear
            </button>
          </div>

          <p>{JSON.stringify(info)}</p>
          <p>{/*msg*/}</p>
        </div>
      </form>
      <div></div>
    </div>
  );
}
