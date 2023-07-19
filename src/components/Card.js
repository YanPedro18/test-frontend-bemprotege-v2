import styles from "../css/Card.css";

function Card({ title, content }) {
  return (
    <>
      <div className="Card shadow-1">
        <h1><i class="fa-solid fa-gear"></i> {title}</h1>
        <p>{content.slice(0,100)}...</p>
        <a href="/">Saiba Mais</a>
      </div>
    
    </>
  );
}

export default Card;
