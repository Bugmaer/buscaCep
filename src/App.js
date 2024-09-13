import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="cointainerInput">
        <input 
        type="text"
        placeholder="Digite seu CEP">
        </input>
      <button className="buttonSearch">
        <FiSearch size={25} color="FFF"/>
      </button>
      
      <main className='main'>
        <h2>CEP: 79003222</h2>

        <span>Rua Teste Algum</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila Rosa</span>
        <span>Viamão - RS</span>
      </main>

      </div>
      
    </div>
  );
}

export default App;
