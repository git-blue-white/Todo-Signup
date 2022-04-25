import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingContainer({ children, loading, ...rest }) {
  const boxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
    p: 4,
    minHeight: '200px',
    ...rest
  };

  if (loading) {
    return (
      <Box {...boxProps}>
        <CircularProgress />
      </Box>
    );
  }

  if (typeof children === 'function') {
    return children();
  }

  return children;
}

LoadingContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  loading: PropTypes.bool
};

LoadingContainer.defaultProps = {
  children: null
};

export default LoadingContainer;
