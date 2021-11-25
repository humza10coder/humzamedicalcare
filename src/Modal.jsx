import React from 'react';
import Untitled from "./Untitled.png"
function Modal()
 {
        return(
            <>
                    <button type="button" className="btn btn-primary" data-toggle="tooltip" title="hooray!!!">Click me</button>
       <a href="#" data-toggle="tooltip" title="hooray!!!">
         <img src={Untitled}/>
       </a>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal"><b>Click me</b></button>
<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Confirmation</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
      <p>Do you want to save changes to this document before closing?</p>
      <p className="text-secondary"><small>If you don't save, your changes will be lost.</small></p>
      </div>

      <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
      <button type="button" className="btn btn-primary">Save changes</button>
      </div>

    </div>
  </div>
</div>
            </>
        );
 }

 export default Modal;