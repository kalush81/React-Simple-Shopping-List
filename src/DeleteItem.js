import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = props => {
	return (
    	<button onClick={props.deleteLastItem} disabled={props.isDisabled}>
          Delete Last Item
        </button>
    )
}

DeleteItem.propTypes = {
	deleteLastItem: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default DeleteItem;