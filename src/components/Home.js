import Container from "../components/Container"
import "../css/Home.css"
import imgHome from "../assets/amigos-proximos-viajando-de-carro.jpg"

function Home() {
  return (
    <>
      <Container>
        <section>
            <h1><i class="fa-solid fa-shield"></i> ESSENCIAL È ESTAR SEGURO</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam</p>
            <div>
              <button><i class="fa-solid fa-scroll"></i> CONHEÇA AS SOLUÇÔES</button>
            </div>
        </section>
        <section><img src={imgHome} /></section>
      </Container>
    </>
  )
}

export default Home;