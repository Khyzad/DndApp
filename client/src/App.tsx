import React from 'react';
import './styles/App.scss';
import CharacterSheet from './components/CharacterSheet';
import { NavBar } from './components/NavBar/NavBar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

//   background-color: #eaeaea;
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <CharacterSheet></CharacterSheet>
    </ThemeProvider>
  );
}

export default App;
