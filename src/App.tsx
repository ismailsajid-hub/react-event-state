
import './App.css'

function App() {
  const handleClick = () =>{
    alert('button click')
  }
  return (
    <>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick}>click me 2</button>
      <button onClick={()=> alert("click 3")}>click 3</button>
    </>
  )
}

export default App
