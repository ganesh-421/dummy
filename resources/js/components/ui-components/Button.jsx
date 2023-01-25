import React, {useState} from "react";
const Button = () => {
    return(
    <div class="col-sm-4">
        <button type="button" class="btn btn-info add-new" onClick={ (event)=>setName() }>
            <i class="fa fa-plus"></i> Add New
        </button>;
    </div>
    )    
};
export default Button;
