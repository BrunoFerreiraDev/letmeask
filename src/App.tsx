
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom"


import { AuthContextProvider } from "./context/AuthContext"



function App() {


  return (
    <BrowserRouter>
      {/* route é a rota */}{/*exact significa que o endereço para acessa  a pagina Home tem que ser exatamenteo o endereço na descrição*/}
      <AuthContextProvider>
        <Route path="/" exact component={Home} />{/* usa barra no path pq não vem nada antes da pagina inicial*/}
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>

    </BrowserRouter >


  );
}

export default App;
