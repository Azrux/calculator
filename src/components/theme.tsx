import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: '#ff5080' }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25
        },
      },
    },
  },
  typography: {
    button: {
      fontsize: '1rem'
    },
  },
});

export default theme;