import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { mergeAll, path, keys } from "ramda";

import * as copy from "./../copy";

const Modal = ({actions, active, receipt}) => receipt && active >= 0 ? (
  <div className="modal">
    <span className="icon icon-dissmiss-mark" />
    <div className="modal-content">
      <span className="modal-close icon icon-dismiss-dark" onClick={actions.closeModal()} />

      {{
        share: "",
        application: (
          <div
            className="modal-header"
            style={{backgroundColor: path(["application", "appearance", "bg-color"])(receipt)}}
          >
            <img className="modal-header-logo" src={path(["application", "appearance", "bg-img"])(receipt)} />
          </div>
        )
      }[receipt.type]}

      <div className="modal-body modal-info">
        <span className="modal-avatar icon icon-user_selfie_ph_medium" />
        <span className="modal-check icon icon-receipt_confirmed" />
        <h4 className="modal-source"> {path(["application", "name"])(receipt)} </h4>
        <p className="modal-message">

          {{
            share: "",
            application: copy.message,
          }[receipt.type]}

        </p>
        <p className="modal-date">
          { moment(path(["transaction", "unix-timestamp"])(receipt) * 1000).format(copy.dateFormat.modal) }
        </p>
      </div>
      <div className="modal-footer">

        {(() => {
          const merged = mergeAll(path(["transaction", "attributes"])(receipt));

          return keys(merged).map(key => (
             <div key={key} className="modal-info-field">
               <small className="text-capitalize"> {key.split("-").join(" ")} </small><br />
               <span> {merged[key]} </span>
             </div>
          ))
        })()}

      </div>
    </div>
  </div>
) : <div />;

Modal.PropTypes = {
  active: PropTypes.bool,
  receipt: PropTypes.array
};

Modal.DefaultProps = {
  active: false,
  receipt: []
};

export default Modal;
