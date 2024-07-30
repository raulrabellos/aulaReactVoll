import './App.css';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Rodape from './components/Rodape';
import Titulo from './components/Titulo';

function App() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Container>
        <Titulo>Area Administrativa</Titulo>
      </Container>
      <Rodape></Rodape>
    </>
  );
}

export default App;
