import "../css/Main.css"
import Cards from "./Cards"
import cardsContent from '../Datas/cardsContent'

function Main() {
  return (
    <main className="Main">
        <h1><i class="fa-solid fa-shield"></i> Sua proteção em primeiro lugar sempre</h1>
        <div className="Cards">
            <Cards lista={cardsContent} />
        </div>
    </main>
  )
}

export default Main