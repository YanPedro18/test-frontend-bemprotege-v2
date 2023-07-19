import styles from "../css/Footer.css";
import imgLogo from "../assets/logo-bemprotege.svg"
function Footer() {
  return (
    <>
      <footer className="Footer">
        <section>
          <img src={imgLogo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem non alias natus possimus? At tempore perferendis.
          </p>
        </section>
        <section>
            <h1><i class="fa-solid fa-phone"></i> Atendimento 0000 0000</h1>
            <div>
              <br></br>
              <p><i class="fa-solid fa-location-dot"></i> Rua Rio de Janeiro, n* 1279 - Lourdes</p>
              <p><i class="fa-solid fa-location-crosshairs"></i> Belo Horizonte/MG 30160-042</p>
              <p><i class="fa-solid fa-envelope"></i> meu@email.com.br</p>
            </div>
        </section>
        <section>
        {/* <iframe className="ifr" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.97143238694!2d-43.94281922514978!3d-19.925608638171155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e1140cfa7b%3A0x210b45be683cd000!2sR.%20Rio%20de%20Janeiro%2C%201279%20-%20Lourdes%2C%20Belo%20Horizonte%20-%20MG%2C%2030160-042!5e0!3m2!1spt-BR!2sbr!4v1689784241184!5m2!1spt-BR!2sbr"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.97143238694!2d-43.94281922514978!3d-19.925608638171155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e1140cfa7b%3A0x210b45be683cd000!2sR.%20Rio%20de%20Janeiro%2C%201279%20-%20Lourdes%2C%20Belo%20Horizonte%20-%20MG%2C%2030160-042!5e0!3m2!1spt-BR!2sbr!4v1689784241184!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </footer>
    </>
  );
}

export default Footer;
