import Router from "./routes/Router";
import { GlobalContext } from "./context/GlobalContext";
import GlobalState from "./context/GlobalState";
// import 'normalize.css';

import "./styles/styles.module.css"


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
