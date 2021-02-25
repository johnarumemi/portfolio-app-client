import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

// Create theme object to be passed to the ThemeProvider
export default createMuiTheme({
    palette: {
        common: {
            arcBlue: arcBlue,
            arcOrange: arcOrange,
            gold: "#edc967"

        },
        primary: {
            main: "#000"
        },

        secondary: {
            main: "#EDC967"
        }
    }
})