import styles from './Card.module.scss'

function Card(props) {
  console.log(props)
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heard-unliked.svg" alt="Unliked" />
      </div>
      <img src={props.imageUrl} alt='sneakers' width={133} height={112} alt="sneakers"/>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button">
          <img src="/img/sneakers/plus.svg" width={32} height={32} alt="Plus"/>
        </button>
      </div>
    </div>
  )
}

export default Card