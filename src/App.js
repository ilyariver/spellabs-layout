import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import styled from 'styled-components'


const AppWrap = styled.div`

`

function App() {
  return (
      <AppWrap>
          <Header />
          <Main />
          {/*<Footer />*/}
      </AppWrap>
  );
}

export default App;
