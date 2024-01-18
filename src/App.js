import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createTheme , ThemeProvider} from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Layout from './pages/components/Layout';


// change the defult primary color 
const theme = createTheme({
  palette: {
    primary: { 
      main: '#111111'
    },
    secondary: purple // color in mui.com all the diffrent color
  }, 
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() { 
  

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  
  );
}

export default App;

