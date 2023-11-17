import React, { useEffect, useRef, useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import DataTable from 'react-data-table-component';
import imgfornotificationtable from '../assets/images/notificationimg.jpg'
import notificationimg2 from '../assets/images/notificationimg2.png'
import notificationimg3 from '../assets/images/notificationimg3.jpg'
import { Offcanvas } from 'react-bootstrap/esm';
import SearchableDropdown from './common Layouts/SearchableDropdown';
import { useForm } from 'react-hook-form';

const Notifications = () => {
    // for offcanvas
    const [addShowMain, setAddShowMain] = useState(false);
    const [addShow, setAddShow] = useState(false);

    //function of offcanvas
    const handlAddCloseMain = () => setAddShowMain(false);
    const handleAddShowMain = () => setAddShowMain(true);
    const handlAddClose = () => setAddShow(false);
    const handleAddShow = () => setAddShow(true);

    // Profile Picture Upload
    const [img, setImg] = useState("");
    const inputRef = useRef(null);

    const handleImgClick = () => {
        inputRef.current.click();
    };

    const handleImgChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImg(event.target.files[0]);
    };

    // Notifications table data
    const columns = [
        {
            name: 'IMAGE',
            selector: row => <img width={100} src={row.img} alt={img} />,
        },
        {
            name: 'USER INFO',
            cell: (row) => (
                <div className="description-cell ">{row.userinfo}</div>
            ),

        },
        {
            name: 'STATUS',
            cell: (row) => (
                <div className="description-cell  w-75 ">{row.status}</div>
            ),
        },
        {
            name: 'TIME',
            cell: (row) => (
                <div >Scheduled At:
                    <div>
                        25-09-2023 | 13:22
                    </div>
                </div>),

        },
        {
            name: 'ACTION',
            cell: (row) => (row.showIcon ? (
                <div>
                    <MdModeEdit className="edit-icon " onClick={handleAddShow} />
                </div>
            ) : null),
            sortable: true,
        },
    ]
    const data = [

        {
            img: imgfornotificationtable,
            userinfo: 'New User',
            time: '',
            status: 'CANCELLED  Created At: 25-09-2023 | 02:53',
            showIcon: false,
        },
        {
            img: imgfornotificationtable,
            userinfo: 'New User',
            status: 'CANCELLED  Created At: 25-09-2023 | 02:53',

            showIcon: false,
        },
        {
            img: imgfornotificationtable,
            userinfo: 'New User',
            status: 'CANCELLED  Created At: 25-09-2023 | 02:53',
            showIcon: false,
        },
        {
            img: notificationimg3,
            status: 'CANCELLED  Created At: 25-09-2023 | 02:53',
            userinfo: 'Free Contract Created Good news! A new free contract has been created. You can now access and use this contract for your needs.',
            showIcon: false,

        },
        {
            img: notificationimg3,
            status: 'CANCELLED  Created At: 25-09-2023 | 02:53',
            userinfo: 'Free Contract Created Good news! A new free contract has been created. You can now access and use this contract for your needs.',
            showIcon: false,


        },
        {
            img: notificationimg2,
            userinfo: 'New Membership Available! Exciting news! We have just launched a new membership plan. Check it out now and enjoy exclusive benefits.',
            status: 'PENDING Created At:13-10-2023 | 13:32',
            time: '',
            showIcon: true,
        },
    ]

    // react from hook for validation for CreateNotifications
    const { register: registerForm1, handleSubmit: handleSubmitForm1, formState: { errors: errorsForm1 }, reset: resetForm1 } = useForm();
    const onSubmitForCreateNotifications = (data) => {
        // console.log(data);
        // resetForm1();
    };
    // react from hook for validation for EditNotifications
    // const { register: registerForm2, handleSubmit: handleSubmitForm2, formState: { errors: errorsForm2 }, reset: resetForm2 } = useForm();

    // const onSubmitForEditNotifications = (data) => {
    //     // console.log(data);
    //     // resetForm2();
    // };

    return (
        <>
            {/* <SideNav /> */}
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title d-flex justify-content-between  align-items-center">
                        <h1 className="page-heading mb-0">Notifications</h1>
                        <div className="notification_btn">
                            <button className='btn btn-primary' onClick={handleAddShowMain}>Create Notification</button>
                        </div>
                    </div>
                    <div className="notification_table">
                        <DataTable columns={columns} data={data} pagination striped />
                    </div>
                </div>
            </div>


            {/* off canvas for  notification */}
            <Offcanvas

                show={addShowMain}
                onHide={handlAddCloseMain}
                placement="end"
            //   scroll={true}
            >
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton className='px-0'>
                        <Offcanvas.Title className="fw-bold ">Create Notification</Offcanvas.Title>
                    </Offcanvas.Header>

                    <hr />
                    <form onSubmit={handleSubmitForm1(onSubmitForCreateNotifications)}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label required"> Title </label>
                                <input type="text" className="form-control form-control-solid" placeholder="Name" name="title_name"  {...registerForm1('UserName', { required: true })} />
                            {errorsForm1.UserName && <p className='text-danger' style={{fontSize : '10px'}}>This Filed is Required</p>} 
                            </div>
                            {/* <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label required"> Title (عربي)</label>
                            <input type="text" className="form-control form-control-solid  arabic_text-style " placeholder="العنوان العربي" name="coupon_name_arabic" required="" />
                        </div> */}
                            <div className="form-group mt-3">
                                <label className="form-check-label" for="flexSwitchChecked">
                                    Message
                                </label>
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="4" placeholder="" name="message_details" {...registerForm1('Message', { required: true })} ></textarea>
                            {errorsForm1.Message && <p className='text-danger' style={{fontSize : '10px'}}>This Filed is Required</p>} 
                            </div>
                            {/* <div className="form-group mt-3">
                            <label className="form-check-label" for="flexSwitchChecked">
                                Message (عربي)
                            </label>
                            <textarea className="form-control rounded-0 arabic_text-style" id="exampleFormControlTextarea1" rows="4" placeholder="رسالة عربية" name="message_details_arabic" required=""></textarea>
                        </div> */}
                            <div className="row mt-5">
                                <label className="form-label">Notification image</label>
                                <p id="create-img-size-validation" >Allowed files .png, .jpg, .jpeg, .webp | Image size : 400px X 800px | Max 2MB.</p>
                                <div
                                    className="profileImgUpload text-center mt-3"
                                >
                                    {img ? (
                                        <img
                                            src={URL.createObjectURL(img)}
                                            alt="Prilfe Img Upload"
                                            className="notificationimg"
                                        />
                                    ) : (
                                        <img
                                            src={imgfornotificationtable}
                                            alt="Prilfe Img Upload"
                                            className="notificationimg"
                                        />
                                    )}
                                    <input
                                        type="file"
                                        ref={inputRef}
                                        onChange={handleImgChange}
                                        className="inputImg"
                                    />
                                    <div className="select_img-btn mt-4">
                                        <button className='btn btn-primary' onClick={handleImgClick}>Select an image</button>
                                    </div>
                                </div>
                                <div className="col-12 justify-content-center">
                                    <div className="col-12 mt-4">
                                        <label className="form-check-label" for="flexSwitchChecked">
                                            User Type
                                        </label>
                                        <select className="form-select form-select-sm form-select-solid select2-hidden-accessible" name="discount_for" >
                                            <option value="1" selected="" data-select2-id="select2-data-2-2iax">All user</option>
                                            <option value="2">Individual Users</option>
                                            <option value="3">Business Users</option>
                                        </select>
                                    </div>
                                    <div className="col-12 mt-4" >
                                        <label className="form-select-label required" for="flexSwitchselect">
                                            Users
                                        </label>
                                        <SearchableDropdown />
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <label className="form-check-label required" for="flexSwitchChecked">
                                                Notification Type
                                            </label>
                                            <select className="form-select form-select-sm form-select-solid " data-control="select2" data-placeholder=" " data-allow-clear="true" data-minimum-results-for-search="Infinity" name="discount_for" data-select2-id="select2-data-13-6cip" tabindex="-1" aria-hidden="true">
                                                <option value="1" data-select2-id="select2-data-15-m1en">Both</option>
                                                <option value="2">Email</option>
                                                <option value="2">Push Notification</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="col-12 mt-4">
                                        <label className="form-check-label" for="Schedule Date & Time">
                                            Schedule Date & Time
                                        </label>
                                        <div className="dataandtime">
                                            <input type="datetime-local" className='form-control w-100' />
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button type="submit" className="btn btn-primary ">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas >


            {/* off canvas for  notification */}

            <Offcanvas
                show={addShow}
                onHide={handlAddClose}
                placement="end"
            //   scroll={true}
            >
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton className='px-0'>
                        <Offcanvas.Title className="fw-bold ">Update Notification</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <form>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label required"> Title (ENGLISH)</label>
                                <input type="text" className="form-control form-control-solid" placeholder="Name" name="title_name" required="" />
                            </div>
                            {/* <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label required"> Title (عربي)</label>
                            <input type="text" className="form-control form-control-solid arabic_text-style" placeholder="أدخل اسم القسيمة" name="coupon_name_arabic" required="" />
                        </div> */}
                            <div className="form-group mt-3">
                                <label className="form-check-label" for="flexSwitchChecked">
                                    Message
                                </label>
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="4" placeholder="Exciting news! We have just launched a new membership plan. Check it out now and enjoy exclusive benefits." name="message_details" required=""></textarea>
                            </div>
                            {/* <div className="form-group mt-3">
                            <label className="form-check-label" for="flexSwitchChecked">
                                Message (عربي)
                            </label>
                            <textarea className="form-control rounded-0 arabic_text-style" id="exampleFormControlTextarea1" rows="4" placeholder="اخبار حماسية! لقد أطلقنا للتو خطة عضوية جديدة. التحقق من ذلك الآن والتمتع بالمزايا الحصرية." name="message_details_arabic" required=""></textarea>
                        </div> */}
                            <div className="row mt-5">
                                <label className="form-label">Notification image</label>
                                <p id="create-img-size-validation" >Allowed files .png, .jpg, .jpeg, .webp | Image size : 400px X 800px | Max 2MB.</p>
                                <div
                                    className="profileImgUpload text-center mt-3"

                                >
                                    {img ? (
                                        <img
                                            src={URL.createObjectURL(img)}
                                            alt="Prilfe Img Upload"
                                            className="notificationimg"
                                        />
                                    ) : (
                                        <img
                                            src={notificationimg2}
                                            alt="Prilfe Img Upload"
                                            className="notificationimg"
                                        />
                                    )}
                                    <input
                                        type="file"
                                        ref={inputRef}
                                        onChange={handleImgChange}
                                        className="inputImg"
                                    />
                                    <div className="select_img-btn mt-4">
                                        <button className='btn btn-primary' onClick={handleImgClick}>Select an image</button>
                                    </div>
                                </div>
                                <div className="col-12 justify-content-center">
                                    <div className="col-12 mt-4">
                                        <label className="form-check-label" for="flexSwitchChecked">
                                            User Type
                                        </label>
                                        <select className="form-select form-select-sm form-select-solid select2-hidden-accessible" data-control="select2" data-placeholder="All user" data-allow-clear="true" name="discount_for" >
                                            <option value="1" selected="" data-select2-id="select2-data-2-2iax">All user</option>
                                            <option value="2">Individual Users</option>
                                            <option value="3">Business Users</option>
                                        </select>
                                    </div>
                                    <div className="col-12 mt-4" >
                                        <label className="form-select-label required" for="flexSwitchselect">
                                            Users
                                        </label>
                                        <SearchableDropdown />
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <label className="form-check-label required" for="flexSwitchChecked">
                                                Notification Type
                                            </label>
                                            <select className="form-select form-select-sm form-select-solid " data-control="select2" data-placeholder=" " data-allow-clear="true" data-minimum-results-for-search="Infinity" name="discount_for" data-select2-id="select2-data-13-6cip" tabindex="-1" aria-hidden="true">
                                                <option value="1" data-select2-id="select2-data-15-m1en">Both</option>
                                                <option value="2">Email</option>
                                                <option value="2">Push Notification</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="col-12 mt-4">
                                        <label className="form-check-label" for="Schedule Date & Time">
                                            Schedule Date & Time
                                        </label>
                                        <div className="dataandtime">
                                            <input type="datetime-local" name="" id="" className='form-control w-100' />
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button type="submit" className="btn btn-primary  ">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
};

export default Notifications;