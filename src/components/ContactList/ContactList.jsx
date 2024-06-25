import PropTypes from "prop-types";

import Contact from "./Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ contactArr, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contactArr.map((elem) => {
        return (
          <li key={elem.id} className={css.contact}>
            <Contact contact={elem} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactArr: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactList;
