
//Em TS precisamos definir quais tipos de dados minha função precisa receber e para isso iremos usar a interface

interface MeuBotaoProps {
    texto: string,
}

function MeuBotao(props : MeuBotaoProps){
  //Props refere-se a um objeto de propriedades criado quando passamos atributos ao nosso componente
  console.log(props)
  return <button className="bg-green-800 h-10 px-3 rounded font-medium">{props.texto}</button>
  
}

export function App() {
 
  return (
  <>
  <div className="flex gap-2">
    <MeuBotao texto="Minha props Texto" />
    <MeuBotao texto="Testando minhas props"/>
  </div>
  </>
  
  )
  

}


