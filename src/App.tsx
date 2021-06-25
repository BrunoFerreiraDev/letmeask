
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom"
import { Room } from "./pages/Room"
import { AdminRoom } from './pages/AdminRoom';


import { AuthContextProvider } from "./context/AuthContext"



function App() {


  return (
    <BrowserRouter>
      {/* route é a rota */}{/*exact significa que o endereço para acessa  a pagina Home tem que ser exatamenteo o endereço na descrição*/}
      <AuthContextProvider>
        <Switch>{/*Switch para a procura de rota quando uma rota for achada*/}
          <Route path="/" exact component={Home} />{/* usa barra no path pq não vem nada antes da pagina inicial*/}
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>

    </BrowserRouter >


  );
}

export default App;
