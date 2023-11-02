
import './App.css'
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer />
      </div>
    </>
  )
}

export default App
