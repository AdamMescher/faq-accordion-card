import React from 'react';
import PropTypes from 'prop-types';

const CardBody = ({ children, ...props }) => <div {...props}>{children}</div>;

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardBody;
