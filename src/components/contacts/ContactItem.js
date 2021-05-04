import React, { useState } from "react";
import PropTypes from "prop-types";

const ContactItem = (props) => {
  const { name, phone, email } = props.contact;

  const [displayInfo, setDisplayInfo] = useState(false);

  const onDeleteClick = props.contactDeleteHandler;

  return (
    <div className="ContactItem card pl-4 py-3 my-2" style={{ width: "26rem" }}>
      <h4>
        <i className="fas fa-id-card mr-2" />
        {name}
        <i
          className="fas fa-sort-down ml-3"
          style={{ cursor: "pointer" }}
          onClick={() => setDisplayInfo(!displayInfo)}
        />
      </h4>
      {displayInfo && (
        <div className="Contact__info">
          <ul className="list-unstyled ml-2">
            <li className="ml-2">
              <i className="fas fa-phone-square-alt mr-1" /> <b>Phone:</b>{" "}
              {phone}
            </li>
            <li className="ml-2">
              <i className="fas fa-at mr-1" /> <b>Email:</b> {email}
            </li>
          </ul>
          <button className="btn btn-danger btn-sm" onClick={onDeleteClick}>
            Delete Contact
          </button>
        </div>
      )}
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
