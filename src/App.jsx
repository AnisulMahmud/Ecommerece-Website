import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {

  const name = 'Lalanke';
  const age = 20;

  return (
    <>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
