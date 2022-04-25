import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function AuthLayout({ title, children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignSelf="center"
      justifySelf="center"
      width={1}
      p={3}
    >
      {title && (
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
      )}
      <Box component={Paper} p={2}>
        {children}
      </Box>
    </Box>
  );
}

AuthLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default AuthLayout;
