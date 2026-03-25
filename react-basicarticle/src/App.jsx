import './App.css';
import Homepage from './pages/Index.jsx';
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/index.jsx";
function App() {
  const user = {
    username: "Fajar Ramadhan",
  };
  return (
    <div className='App'>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>

    </div>
  );
}

export default App
