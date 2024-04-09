import './App.css'
import  SignUp  from  './SignUp.jsx'

function App() {
  let name = 'Rizul is dumb'
   
  return (
    <>
    <SignUp name = "Sneha" age = {20} /> 

    <div className = "bg-red-800" >
      <p>
        Hi! {name}.
      </p>
      <input type ="number" min = {5} max = {10}/>
    </div>
    </>
  )
}

export default App
