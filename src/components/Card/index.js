import React from 'react'
import {} from "react-router-dom"
import styles from './Card.module.scss'

function Card({id, imageUrl, title, price, onPlus, onFavorite, favorited = false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setisFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    setIsAdded(!isAdded)
    onPlus({imageUrl, title, price})
  }

  
  const onClickFavorite = () => {
    setisFavorite(!isFavorite)
    onFavorite({id, imageUrl, title, price})
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={isFavorite ? "/img/heard-liked.svg":"/img/heard-unliked.svg"} alt="Unliked"  onClick={onClickFavorite}/>
      </div>
      <img src={imageUrl} alt='sneakers' width={133} height={112}/>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
          <img onClick={onClickPlus} className={styles.buttonPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} width={32} height={32} alt="Plus"/> 
      </div>
    </div>
  )
}

export default Card