import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return <>
    <NavBar />

    <ItemListContainer greeting="Todo lo que en el mundo mágico se necesita" />
    </>
}

export default App;
