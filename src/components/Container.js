import styles from "../css/Container.css"

function Container({children}) {
  return (
   <section className="Container">{children}</section>
  )
}

export default Container;