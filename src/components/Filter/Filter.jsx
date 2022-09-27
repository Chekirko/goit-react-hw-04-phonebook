import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterForm, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  const filterInputId = nanoid();
  return (
    <FilterForm>
      <FilterLabel htmlFor="inputId">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterInputId}
        name="filter"
        value={filter}
        onChange={onChange}
      ></FilterInput>
    </FilterForm>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
