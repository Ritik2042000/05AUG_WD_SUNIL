import React, { useEffect, useState } from 'react';
import SideNav from './common Layouts/SideNav';
import { MdModeEdit } from 'react-icons/md';
import DataTable from 'react-data-table-component';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Categories = () => {
    // for offcanvas
    const [addShowMain, setAddShowMain] = useState(false);

    //state for search function
    const [searchText, setSearchText] = useState('');

    //function of offcanvas
    const handlAddCloseMain = () => setAddShowMain(false);
    const handleAddShowMain = () => setAddShowMain(true);

    const columns = [
        {
            name: "SR. NO",
            selector: (row) => row.id,
            sortable: true,
            width: "120px",
          },
        {
            name: 'CATEGORY NAME ',
            selector: row => row.categoryname,
            sortable: true,
        },
        
        {
            name: 'ACTIVE',
            selector: row => row.active,
            sortable: true,
        },

        {
            name: 'ACTION',
            cell: (row) => (
                <MdModeEdit className="edit-icon " onClick={handleAddShowMain} />
            ),
            sortable: true,
        },

    ];
    const data = [

        {
            id: 1,
            categoryname: 'Loans',
            // categorynamearebic: 'القروض',
            status: '1984',
            active: 'Active'
        },
        {
            id: 2,
            categoryname: 'Loans',
            // categorynamearebic: 'القروض',
            // status: '1984',
            active: 'Active'
        },
        {
            id: 3,
            categoryname: 'Loans',
            // categorynamearebic: 'القروض',
            // status: '1984',
            active: 'Active'
        },
        {
            id: 4,
            categoryname: 'Loans',
            // categorynamearebic: 'القروض',
            // status: '1984',
            active: 'Active'
        },
        {
            id: 5,
            categoryname: 'Loans',
            // categorynamearebic: 'القروض',
            // status: '1984',
            active: 'Active'
        },
        {
            id: 6,
            categoryname: 'Software	',
            // categorynamearebic: 'برمجة',
            // status: '1984',
            active: 'Active'
        },
        {
            id: 7,
            categoryname: 'Technology',
            // categorynamearebic: 'تكنولوجي',
            // status: '1984',
            active: 'Active'
        },
        {
            id: 8,
            categoryname: 'Marketing',
            // categorynamearebic: 'تسويق',
            // status: '1984',
            active: 'Active'
        },
        {
            id: 9,
            categoryname: 'Loans',
            // categorynamearebic: 'القروض',
            // status: '1984',
            active: 'Active'
        },
        {
            id: 10,
            categoryname: 'Loans',
            // categorynamearebic: 'القروض',
            // status: '1984',
            active: 'Active'
        },
        {
            id: 11,
            categoryname: 'Loans',
            // categorynamearebic: 'القروض',
            // status: '1984',
            active: 'Active'
        },
        {
            id: 12,
            categoryname: 'Loans',
            // categorynamearebic: 'القروض',
            // status: '1984',
            active: 'Active'
        },

    ];

    // search functionality code
    // function for input changes
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };
    // filter function 
    const filteredData = data.filter((row) =>
        row.categoryname.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
        <>
            
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">Categories</h1>
                    </div>
                    <div className="d-flex align-items-center ">
                        <NavLink to='/categories/categoriestemplate' > <button  className="btn btn-primary  ">Create
                            Category</button></NavLink>
                    </div>
                    <div className="card  mt-3">
                        <div className="card-body">
                        <div className="d-flex  mt-2">
                            <div className="d-flex w-100">
                                <input type="text" className="form-control  w-100" placeholder="Search" onChange={handleSearch} />
                            </div>
                        </div>

                        </div>
                        <div className="card-body">
                            <DataTable
                                columns={columns}
                                data={filteredData}
                                pagination
                                striped
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* offCanvas  */}
            <Offcanvas
                show={addShowMain}
                onHide={handlAddCloseMain}
                placement="end"
            //   scroll={true}
            >
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton className='px-0'>
                        <Offcanvas.Title className="fw-bold ">Invite User</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <div className="card-body">
                        <div className="modal-body">
                            <form >
                                <div className="mb-10">
                                    <label htmlFor="FormControlInput1" className="form-label">Category Name </label>
                                    <input type="text" className="form-control form-control-solid w-100 " placeholder="Loans" name="category_name" />
                                </div>
                                {/* <div className="mb-10">
                                    <label htmlFor="FormControlInput1" className="form-label">Category Name (عربي)</label>
                                    <input type="text" className="form-control form-control-solid w-100 arabic_text-style" placeholder="القروض" name="category_name_arabic" />
                                </div> */}
                                <div className="category_availbility">
                                    <h6>Category Availability</h6>
                                    <div className="d-flex ">
                                        <div>
                                            <p>Individual Membership</p>
                                            <div className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" name="i_Free_Membership" />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Free Membership
                                                </label>
                                            </div>
                                            <div className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" name="i_Basic_Membership" />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Basic Membership
                                                </label>
                                            </div>
                                            <div className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" name="i_Premium_Membership" defaultChecked='' />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Premium Membership
                                                </label>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p>Business Membership</p>
                                            <div className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" name="b_Free_Membership" />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Free Membership
                                                </label>
                                            </div>
                                            <div className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" name="b_Basic_Membership" defaultChecked='' />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Basic Membership
                                                </label>
                                            </div>
                                            <div className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" name="b_Premium_Membership" />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Premium Membership
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-check form-check-solid form-switch d-flex mt-3 align-items-center">
                                    <label className="form-check-label  " htmlFor="allowmarketing" >ACTIVE : </label>
                                    <input className="form-check-input p-2  ms-3 check-box-switch" type="checkbox" defaultChecked='' />
                                </div>
                                <div className="pt-3 text-center mt-3">
                                    <button type="button" className="btn btn-primary me-5">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Categories;