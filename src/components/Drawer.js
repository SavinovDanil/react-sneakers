function Drawer({items = [], onClose}) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 onClick={onClose} className='cu-p d-flex justify-between mb-30'>Корзина
          <img src="/img/btn-remove.svg" alt="" className='removeBtn  cu-p'/>
        </h2>
        <div className="items flex">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage:`url(${obj.imageUrl})` }} className="cartItemImg"></div>
              <div className='mr-15 flex'>
                <p className='mb-5'>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img src="/img/btn-remove.svg" alt="" className='removeBtn'/>
            </div>
          ))}
        </div>
        <div className='cartTotalBlock'>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1 074 руб.</b>
            </li>
          </ul>
          <button className='greenButton'>Оформить заказ
            <img src="/img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer