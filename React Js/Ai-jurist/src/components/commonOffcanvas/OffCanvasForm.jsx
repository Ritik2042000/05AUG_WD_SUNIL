import React from 'react';
import { Offcanvas } from 'react-bootstrap';

const OffCanvasForm = () => {
    const [editShow, setEditShow] = useState(false);

    const handlEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);
    return (
        <>
            <Offcanvas
                className="offCanvas py-5 px-5"
                show={editShow}
                onHide={handlEditClose}
                placement="end"
            //   scroll={true}
            >
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="fw-bold">Edit User</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <form method="post" action="">
                        <input type="hidden" name="csrfmiddlewaretoken" />
                        <div class="modal-body">
                            <div class="mb-5">
                                {/* <!-- <input type="text" hidden value="2" name="id"> --> */}
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control form-control-solid" placeholder="Bradley Hughes" />
                            </div>
                            <div class="mb-5">
                                <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                                <input type="text" maxlength="10" class="form-control form-control-solid" placeholder="" value="2514789201" />
                            </div>
                            <div class="mb-10">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="text" id="superuseremailupdate" class="form-control form-control-solid validate-email-update" placeholder="" value="jekoja2813@in2reach.com" data-old-email="jekoja2813@in2reach.com" onkeyup="validate_email_update(this)" />

                                <p class="email_validation_msg_superuser_update" id="email_validation_msg_superuser_update" style="display: none;  color: red;"></p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input updateselectall" type="checkbox" value="true" id="flexCheckDefault_templet" />
                                <label class="form-check-label" for="flexCheckDefault_templet">
                                    <strong>Select All</strong>
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_edite" />
                                <label class="form-check-label" for="flexCheckDefault_edite">
                                    Able to create template
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_edite" />
                                <label class="form-check-label" for="flexCheckDefault_edite">
                                    Able to edit template
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_assign" />
                                <label class="form-check-label" for="flexCheckDefault_assign">
                                    Able to assign custom package to users
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
                                <label class="form-check-label" for="flexCheckDefault_able">
                                    Able to activate and block business users
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
                                <label class="form-check-label" for="flexCheckDefault_able">
                                    Able to edit the label
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
                                <label class="form-check-label" for="flexCheckDefault_able">
                                    Able to create coupons
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
                                <label class="form-check-label" for="flexCheckDefault_able">
                                    Able to edit coupons
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
                                <label class="form-check-label" for="flexCheckDefault_able">
                                    Able to create categories
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
                                <label class="form-check-label" for="flexCheckDefault_able">
                                    Able to edit categories
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
                                <label class="form-check-label" for="flexCheckDefault_able">
                                    Able to Invite users
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
                                <label class="form-check-label" for="flexCheckDefault_able">
                                    Able to Invite business
                                </label>
                            </div>
                            <div class="form-check my-5">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
                                <label class="form-check-label" for="flexCheckDefault_able">
                                    Able to download reports
                                </label>
                            </div>
                            <h5>Login Credentials</h5>
                            <div class="form-check mt-5 mb-20">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Generate automatically and send contact person email
                                </label>
                            </div>
                            <div class="pt-3 text-center mt-5">
                                <button type="submit" id="updatesuperuser" class="btn btn-primary me-5 updatesuperuser" value="2" >Update</button>
                            </div>
                        </div>
                    </form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffCanvasForm;
<form method="post" action="">
    <input type="hidden" name="csrfmiddlewaretoken" />
    <div class="modal-body">
        <div class="mb-5">
            {/* <!-- <input type="text" hidden value="2" name="id"> --> */}
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" class="form-control form-control-solid" placeholder="Bradley Hughes" />
        </div>
        <div class="mb-5">
            <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
            <input type="text" maxlength="10" class="form-control form-control-solid" placeholder="" value="2514789201" />
        </div>
        <div class="mb-10">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="text" id="superuseremailupdate" class="form-control form-control-solid validate-email-update" placeholder="" value="jekoja2813@in2reach.com" data-old-email="jekoja2813@in2reach.com" onkeyup="validate_email_update(this)" />

            <p class="email_validation_msg_superuser_update" id="email_validation_msg_superuser_update" style="display: none;  color: red;"></p>
        </div>
        <div class="form-check">
            <input class="form-check-input updateselectall" type="checkbox" value="true" id="flexCheckDefault_templet" />
            <label class="form-check-label" for="flexCheckDefault_templet">
                <strong>Select All</strong>
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_edite" />
            <label class="form-check-label" for="flexCheckDefault_edite">
                Able to create template
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_edite" />
            <label class="form-check-label" for="flexCheckDefault_edite">
                Able to edit template
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_assign" />
            <label class="form-check-label" for="flexCheckDefault_assign">
                Able to assign custom package to users
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
            <label class="form-check-label" for="flexCheckDefault_able">
                Able to activate and block business users
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
            <label class="form-check-label" for="flexCheckDefault_able">
                Able to edit the label
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
            <label class="form-check-label" for="flexCheckDefault_able">
                Able to create coupons
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
            <label class="form-check-label" for="flexCheckDefault_able">
                Able to edit coupons
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
            <label class="form-check-label" for="flexCheckDefault_able">
                Able to create categories
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
            <label class="form-check-label" for="flexCheckDefault_able">
                Able to edit categories
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
            <label class="form-check-label" for="flexCheckDefault_able">
                Able to Invite users
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
            <label class="form-check-label" for="flexCheckDefault_able">
                Able to Invite business
            </label>
        </div>
        <div class="form-check my-5">
            <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_able" />
            <label class="form-check-label" for="flexCheckDefault_able">
                Able to download reports
            </label>
        </div>
        <h5>Login Credentials</h5>
        <div class="form-check mt-5 mb-20">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
            <label class="form-check-label" for="flexCheckChecked">
                Generate automatically and send contact person email
            </label>
        </div>
        <div class="pt-3 text-center mt-5">
            <button type="submit" id="updatesuperuser" class="btn btn-primary me-5 updatesuperuser" value="2" >Update</button>
        </div>
    </div>
</form>