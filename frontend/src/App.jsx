import { AppContext } from "./contexts/contextProvider";
import { useContext } from 'react'

function App() {
  const { page } = useContext(AppContext);
  console.log(page);
  return (
    <div className="App">
      <p>Estamos de volta</p>
    </div>
  );
}

export default App;
