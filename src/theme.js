import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: {
            500: '#4d3e3e',
            main: '#ff4400',
        },
        secondary: green,

    },
    status: {
        danger: 'orange',
    },
});

export default theme