import React from "react";
import { Form } from "react-router-dom";
import Button from "../ui-components/Button";
import FormModel from "../ui-components/FormModel";
const IndexProduct = () => {
    
    return (
        <div class="container-lg pt-5">
            <FormModel />
            <div class="table-responsive">
                <div classnamename="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-8">
                                <h2>
                                    Employee <b>Details</b>
                                </h2>
                            </div>
                            <Button />
                        </div>
                    </div>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>Administration</td>
                                <td>(171) 555-2222</td>
                                <td>
                                    <a
                                        class="add"
                                        title="Add"
                                        data-toggle="tooltip"
                                    >
                                        <i class="material-icons"></i>
                                    </a>
                                    <a
                                        class="edit"
                                        title="Edit"
                                        data-toggle="tooltip"
                                    >
                                        <i class="material-icons"></i>
                                    </a>
                                    <a
                                        class="delete"
                                        title="Delete"
                                        data-toggle="tooltip"
                                    >
                                        <i class="material-icons"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Peter Parker</td>
                                <td>Customer Service</td>
                                <td>(313) 555-5735</td>
                                <td>
                                    <a
                                        class="add"
                                        title="Add"
                                        data-toggle="tooltip"
                                    >
                                        <i class="material-icons"></i>
                                    </a>
                                    <a
                                        class="edit"
                                        title="Edit"
                                        data-toggle="tooltip"
                                    >
                                        <i class="material-icons"></i>
                                    </a>
                                    <a
                                        class="delete"
                                        title="Delete"
                                        data-toggle="tooltip"
                                    >
                                        <i class="material-icons"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Fran Wilson</td>
                                <td>Human Resources</td>
                                <td>(503) 555-9931</td>
                                <td>
                                    <a
                                        class="add"
                                        title="Add"
                                        data-toggle="tooltip"
                                    >
                                        <i class="material-icons"></i>
                                    </a>
                                    <a
                                        class="edit"
                                        title="Edit"
                                        data-toggle="tooltip"
                                    >
                                        <i class="material-icons"></i>
                                    </a>
                                    <a
                                        class="delete"
                                        title="Delete"
                                        data-toggle="tooltip"
                                    >
                                        <i class="material-icons"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default IndexProduct;
