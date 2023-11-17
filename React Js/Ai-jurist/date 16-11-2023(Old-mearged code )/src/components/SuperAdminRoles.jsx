import React, { useEffect, useState } from "react";

const SuperAdminRoles = () => {
  const [checkedAllValue, setCheckedAllValue] = useState(false);

  const roles = [
    { id: 1, name: "Templates" },
    { id: 2, name: "Label" },
    { id: 3, name: "Coupons" },
    { id: 4, name: "Categories" },
    { id: 5, name: "Invite_User" },
    { id: 6, name: "Invite_Business" },
    { id: 7, name: "User_Reports" },
    { id: 8, name: "Finance_Reports" },
  ];

  const [values, setValues] = useState([
    { id: 1, Templates: [] },
    { id: 2, Label: [] },
    { id: 3, Coupons: [] },
    { id: 4, Categories: [] },
    { id: 5, Invite_User: [] },
    { id: 6, Invite_Business: [] },
    { id: 7, User_Reports: [] },
    { id: 8, Finance_Reports: [] },
  ]);

  //Function for View CheckBox
  const viewFunction = (e, roles) => {
    const { id, name } = roles;
    const { checked } = e.target;

    if (checked) {
      const newObject = [];

      values?.forEach((ele) => {
        if (ele?.id === id) {
          newObject.push({
            id: ele?.id,
            [name]: [...ele?.[name], 0],
          });
        }
      });
      const newValues = values?.filter((ele) => ele.id !== id);
      setValues([...newObject, ...newValues]);
    } else {
      const removeObject = [];
      values?.forEach((ele) => {
        if (ele?.id === id) {
          removeObject.push({
            id: ele?.id,
            [name]: ele?.[name]?.filter((e) => e !== 0),
          });
        }
      });
      const newValues = values?.filter((ele) => ele.id !== id);
      setValues([...removeObject, ...newValues]);
    }
  };

  //Function for Add CheckBox
  const addFunction = (e, roles) => {
    const { id, name } = roles;
    const { checked } = e.target;
    if (checked) {
      const newObject = [];

      values?.forEach((ele) => {
        if (ele?.id === id) {
          newObject.push({
            id: ele?.id,
            [name]: [...ele?.[name], 1],
          });
        }
      });
      const newValues = values?.filter((ele) => ele.id !== id);
      setValues([...newObject, ...newValues]);
    } else {
      const removeObject = [];
      values?.forEach((ele) => {
        if (ele?.id === id) {
          removeObject.push({
            id: ele?.id,
            [name]: ele?.[name]?.filter((e) => e !== 1),
          });
        }
      });
      const newValues = values?.filter((ele) => ele.id !== id);
      setValues([...removeObject, ...newValues]);
    }
  };

  //Function for Edit CheckBox
  const editFunction = (e, roles) => {
    const { id, name } = roles;
    const { checked } = e.target;
    if (checked) {
      const newObject = [];

      values?.forEach((ele) => {
        if (ele?.id === id) {
          newObject.push({
            id: ele?.id,
            [name]: [...ele?.[name], 2],
          });
        }
      });
      const newValues = values?.filter((ele) => ele.id !== id);
      setValues([...newObject, ...newValues]);
    } else {
      const removeObject = [];
      values?.forEach((ele) => {
        if (ele?.id === id) {
          removeObject.push({
            id: ele?.id,
            [name]: ele?.[name]?.filter((e) => e !== 2),
          });
        }
      });
      const newValues = values?.filter((ele) => ele.id !== id);
      setValues([...removeObject, ...newValues]);
    }
  };

  //Function for Delete CheckBox
  const deleteFunction = (e, roles) => {
    const { id, name } = roles;
    const { checked } = e.target;
    if (checked) {
      const newObject = [];

      values?.forEach((ele) => {
        if (ele?.id === id) {
          newObject.push({
            id: ele?.id,
            [name]: [...ele?.[name], 3],
          });
        }
      });
      const newValues = values?.filter((ele) => ele.id !== id);
      setValues([...newObject, ...newValues]);
    } else {
      const removeObject = [];
      values?.forEach((ele) => {
        if (ele?.id === id) {
          removeObject.push({
            id: ele?.id,
            [name]: ele?.[name]?.filter((e) => e !== 3),
          });
        }
      });
      const newValues = values?.filter((ele) => ele.id !== id);
      setValues([...removeObject, ...newValues]);
    }
  };

  const selectRoles = (e, roles) => {
    const ids = [0, 1, 2, 3];
    const { id, name } = roles;
    const { checked } = e.target;
    if (checked) {
      const newObject = [];

      values?.forEach((ele) => {
        if (ele?.id === id) {
          newObject.push({
            id: ele?.id,
            [name]: ids,
          });
        }
      });
      const newValues = values?.filter((ele) => ele.id !== id);
      setValues([...newObject, ...newValues]);
    } else {
      const removeObject = [];
      values?.forEach((ele) => {
        if (ele?.id === id) {
          removeObject.push({
            id: ele?.id,
            [name]: [],
          });
        }
      });
      const newValues = values?.filter((ele) => ele.id !== id);
      setValues([...removeObject, ...newValues]);
    }
  };

  const handleSelectAll = () => {
    if (!checkedAllValue) {
      const ids = [0, 1, 2, 3];
      setValues([
        { id: 1, Templates: ids },
        { id: 2, Label: ids },
        { id: 3, Coupons: ids },
        { id: 4, Categories: ids },
        { id: 5, Invite_User: ids },
        { id: 6, Invite_Business: ids },
        { id: 7, User_Reports: ids },
        { id: 8, Finance_Reports: ids },
      ]);
      // setCheckedAllValue(true);
    } else {
      setValues([
        { id: 1, Templates: [] },
        { id: 2, Label: [] },
        { id: 3, Coupons: [] },
        { id: 4, Categories: [] },
        { id: 5, Invite_User: [] },
        { id: 6, Invite_Business: [] },
        { id: 7, User_Reports: [] },
        { id: 8, Finance_Reports: [] },
      ]);
      // setCheckedAllValue(false);
    }
  };

  useEffect(() => {
    const roleName = roles?.map((e) => e.name);
    if (roleName.length >= 8) {
      let allCheckedValue = [];
      roleName?.filter((ele) => {
        values?.filter((e) => {
          allCheckedValue = [...allCheckedValue, e[ele]]?.filter((res) => res);
        });
      });
      if (allCheckedValue) {
        const allRoles = allCheckedValue?.flat();
        if (allRoles) {
          allRoles?.length === 32
            ? setCheckedAllValue(true)
            : setCheckedAllValue(false);
        }
      }
    }
  }, [values]);

  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title">
            <h1 className="page-heading mb-0">Super Admin Roles</h1>
          </div>

          <div className="card roles-card">
            <div className="card-body">
              <div className="role-title d-flex align-items-center">
                <h6 className="mb-0 me-3 text-nowrap">Role Title:</h6>
                <input
                  type="text"
                  className="searchInput w-100"
                  placeholder="Role Title"
                />
              </div>

              <div className="permission-control mt-4">
                <h6>Permission Control</h6>
                <button
                  className={`btn ${
                    checkedAllValue ? "btn-danger" : "btn-success"
                  }`}
                  onClick={() => handleSelectAll()}
                >
                  {checkedAllValue ? "UnCheck All" : "Check All"}
                </button>
              </div>

              <div className="row">
                {roles.map((roles) => {
                  return (
                    <div className="col-md-6 col-xxl-4 mt-4" key={roles.id}>
                      <div className="card roles-card">
                        <div className="card-body">
                          <div className="roles-heading d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">
                              {roles.name.replace(/_/g, " ")}
                            </h6>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="check-field"
                                checked={
                                  roles.id ===
                                    values?.filter(
                                      (res) => res?.id === roles?.id && res
                                    )?.[0]?.id &&
                                  values?.filter(
                                    (ele) => ele?.[roles.name]
                                  )?.[0]?.[roles?.name].length === 4
                                }
                                onChange={(e) => selectRoles(e, roles)}
                              />
                            </div>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between flex-wrap">
                            <div className="form-check d-flex ps-0">
                              <label
                                className="form-check-label me-xl-2 me-1"
                                htmlFor="view"
                              >
                                View:
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="view"
                                checked={
                                  roles?.id ===
                                    values?.filter(
                                      (res) => res?.id === roles?.id && res
                                    )?.[0]?.id &&
                                  values
                                    ?.filter(
                                      (res) => res?.id === roles?.id && res
                                    )?.[0]
                                    ?.[roles?.name].includes(0)
                                }
                                onChange={(e) => viewFunction(e, roles)}
                              />
                            </div>
                            <div className="form-check d-flex ps-0">
                              <label
                                className="form-check-label me-xl-2 me-1"
                                htmlFor="add"
                              >
                                Add:
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="add"
                                checked={
                                  roles?.id ===
                                    values?.filter(
                                      (res) => res?.id === roles?.id && res
                                    )?.[0]?.id &&
                                  values
                                    ?.filter(
                                      (res) => res?.id === roles?.id && res
                                    )?.[0]
                                    ?.[roles?.name].includes(1)
                                }
                                onChange={(e) => addFunction(e, roles)}
                              />
                            </div>
                            <div className="form-check d-flex ps-0">
                              <label
                                className="form-check-label me-xl-2 me-1"
                                htmlFor="edit"
                              >
                                Edit:
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="edit"
                                checked={
                                  roles?.id ===
                                    values?.filter(
                                      (res) => res?.id === roles?.id && res
                                    )?.[0]?.id &&
                                  values
                                    ?.filter(
                                      (res) => res?.id === roles?.id && res
                                    )?.[0]
                                    ?.[roles?.name].includes(2)
                                }
                                onChange={(e) => editFunction(e, roles)}
                              />
                            </div>
                            <div className="form-check d-flex ps-0">
                              <label
                                className="form-check-label me-xl-2 me-1"
                                htmlFor="delete"
                              >
                                Delete:
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="delete"
                                checked={
                                  roles?.id ===
                                    values?.filter(
                                      (res) => res?.id === roles?.id && res
                                    )?.[0]?.id &&
                                  values
                                    ?.filter(
                                      (res) => res?.id === roles?.id && res
                                    )?.[0]
                                    ?.[roles?.name].includes(3)
                                }
                                onChange={(e) => deleteFunction(e, roles)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminRoles;
