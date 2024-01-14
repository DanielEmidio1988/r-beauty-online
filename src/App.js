import Router from "./routes/Router";
import { GlobalContext } from "./context/GlobalContext";
import GlobalState from "./context/GlobalState";
import { GlobalStyled } from "./styles/GlobalStyled";


function App() {
  const context = GlobalState()
  return (
    <>
    <GlobalContext.Provider value={context}>
      <GlobalStyled/>
      <Router/>
    </GlobalContext.Provider>   
    </>
  );
}

export default App;
