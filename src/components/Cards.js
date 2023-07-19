import Card from "./Card";
import '../css/Cards.css'

function Cards({lista}){
  return (
    <>
      {lista.map((e,i)=> <Card {...e} key={i} />  )}
    </>
  )
}

export default Cards