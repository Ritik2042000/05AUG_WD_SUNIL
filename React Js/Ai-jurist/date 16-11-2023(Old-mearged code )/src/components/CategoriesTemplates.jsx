import React from 'react';

import { NavLink } from 'react-router-dom';

const CategoriesTemplates = () => {
    return (
        <>
          
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title ">
                        <h1 className="page-heading mb-0">Create Categories</h1>
                    </div>
                    <div className="card-body rounded bg-white p-3">

                        <div className="d-sm-flex justify-content-between align-items-baseline flex-wrap">
                            <h6 className='m-0 '>Category Information</h6>
                            <div className='mt-2  d-flex' >
                                <button type='submit' className='btn btn-primary ms-1'>Continue</button>
                                <NavLink to='/categories'><button type='button' className='text-white btn btn-danger ms-1 '>Cancel</button></NavLink>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col-12 col-sm-12 col-md-9 p-3">
                                <div className="mb-3 ">
                                    <label className="form-label  fw-bolder text-dark w-100 mt-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="required">Category Name </h6>

                                        </div>
                                    </label>
                                    <input className="form-control form-control-solid w-100" type="text" name="category_name" placeholder="Enter Category Title" maxLength="250" required="" />

                                </div>
                                {/* <div className="mb-3 ">
                                    <label className="form-label  fw-bolder text-dark w-100 mt-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="required">Category Name (عربي)</h6>
                                        </div>
                                    </label>
                                    <input className="form-control form-control form-control-solid  arabic_text-style" type="text" name="category_name_arabic" placeholder="أدخل عنوان الفئة" required="" />

                                </div> */}
                            </div>
                            <div className="">
                                <h5>Category Availability</h5>
                                <div className="mt-2  d-flex ">
                                    <div className='type_membership col-6'>
                                        <h6>Individual Membership</h6>
                                        <div className="form-check mt-3">
                                            <input className="form-check-input" type="checkbox" name="i_Free_Membership" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked" >
                                                Free Membership
                                            </label>
                                        </div>
                                        <div className="form-check mt-3">
                                            <input className="form-check-input" type="checkbox" name="i_Basic_Membership" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Basic Membership
                                            </label>
                                        </div>
                                        <div className="form-check mt-3 ">
                                            <input className="form-check-input" type="checkbox" name="i_Premium_Membership" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Premium Membership
                                            </label>
                                        </div>
                                    </div>
                                    <div className="ms-2 col-6">
                                        <h6>Business Membership</h6>
                                        <div className="form-check mt-3">
                                            <input className="form-check-input" type="checkbox" name="b_Free_Membership" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Free Membership
                                            </label>
                                        </div>
                                        <div className="form-check mt-3">
                                            <input className="form-check-input" type="checkbox" name="b_Basic_Membership" />
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
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CategoriesTemplates;