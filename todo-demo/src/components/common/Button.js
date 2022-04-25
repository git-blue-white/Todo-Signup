import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

function LoadingButton({
  loading,
  children,
  disabled,
  variant,
  color,
  type,
  ...rest
}) {
  return (
    <Box display="inline-block" position="relative" {...rest}>
      <Button
        disabled={loading || disabled}
        color={color}
        variant={variant}
        type={type}
      >
        {children}
      </Button>
      {loading && (
        <Box
          component={CircularProgress}
          position="absolute"
          top="50%"
          left="50%"
          mt="-12px"
          ml="-12px"
          size={24}
        />
      )}
    </Box>
  );
}

LoadingButton.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string
};

LoadingButton.defaultProps = {
  variant: 'contained',
  color: 'primary'
};

export default LoadingButton;
