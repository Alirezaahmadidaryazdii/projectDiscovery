
import { createTheme } from '@mui/material/styles';

// ایجاد تم دارک
const theme = createTheme({
  palette: {
    mode: 'dark', // تنظیم حالت دارک
    primary: {
      main: '#C3C3C3', // رنگ اصلی
    },
    secondary: {
      main: '#A1A1AA', // رنگ ثانویه
    },
    background: {
        default: '#09090B',
        paper: '#18181B',   
    }
  },
});

export default theme;
