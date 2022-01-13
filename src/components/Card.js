

function Card(params) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heard-unliked.svg" alt="" />
      </div>
      <img src="/img/sneakers/sneakers1.jpg" alt='sneakers' width={133} height={112} alt="sneakers"/>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img src="/img/sneakers/plus.svg" width={32} height={32} alt=""/>
        </button>
      </div>
    </div>
  )
}

export default Card