import PropTypes from 'prop-types';
import { Contact, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onBtnDelete }) => {
  return (
    <Contact>
      <p>
        {name} : {number}
      </p>
      <DeleteBtn type="button" onClick={() => onBtnDelete(id)}>
        Delete
      </DeleteBtn>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onBtnDelete: PropTypes.func.isRequired,
};
