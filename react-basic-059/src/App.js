import Transaction from "./components/Transaction";
 import './App.css'

function App() {
  const design = {color:"orange",textAlign:"center",fontSize:'1.5rem'}
  return ( 
      <div className="container">
        <h1 style={design}>แอปบัญชี รายรับ - รายจ่าย 059</h1>
        <Transaction/>
      </div>
  );
}

export default App;
