import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      fullWidth: true,
      variant: 'outlined',
      margin: 'dense'
    },
    MuiInputLabel: {
      shrink: true
    }
  }
});

export default theme;
