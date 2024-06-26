import Router from "./routes/Router";
import { GlobalContext } from "./context/GlobalContext";
import GlobalState from "./context/GlobalState";
import './scss/_styles.scss';


function App() {
  const context = GlobalState()
  return (
    <>
    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider>   
    </>
  );
}

export default App;
