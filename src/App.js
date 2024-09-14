import { FiSearch } from 'react-icons/fi'
import './styles.css'
import { useState } from 'react';
import api from "./services/api"


function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch(){
   // 94475740/json/

    if(input === ""){
      alert("Preencha com algum CEP")
      return;
    }

    try {
      const response = await api.get(`${input}/json/`)
      setCep(response.data)
      setInput("")
    }catch{
      alert("Ops, erro ao buscar!!")
      setInput("")
      
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu CEP"
        value={input}
        onChange={(event) => setInput(event.target.value)}>
        </input>
      <button className="buttonSearch" onClick={handleSearch} >
        <FiSearch size={25} color="FFF"/>
      </button>
      </div>
      
      <main className='main'>
        <h2>CEP: 79003222</h2>

        <span>Rua Teste Algum</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila Rosa</span>
        <span>Viamão - RS</span>
      </main>
      
    </div>
    
  );
}

export default App;
