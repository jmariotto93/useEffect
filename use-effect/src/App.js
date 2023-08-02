import React, { useState } from 'react';
import Produto from './Produto';

function App() {
  const [produto, setProduto] = useState(null);
  

  React.useEffect(() => {
   const produtoLocal = window.localStorage.getItem('produto');
   if(produtoLocal !== null) setProduto(produtoLocal);
  },[]);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({target}) {
    setProduto(target.innerText);
  }

  return (
    <div>
    <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{marginRight:'1rem'}}>Notebook</button>
      <button onClick={handleClick} >Smartphone</button>
      <Produto  produto={produto} />
    </div>
  );
}

export default App;
