function Header(params) {
  return (
    <header className='d-flex justify-between align-center p-40'>
        <div className='headerLeft d-flex align-center'>
          <img className='mr-15' width={40} height={40} src="/img/logo.png" alt=""/>
          <div className='headerInfo'>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='headerRight d-flex'>
          <li className='mr-30'>
            <img className="mr-10" src="/img/basket.svg" width={18} height={17} alt=""/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/Union.svg" width={20} height={20} alt=""/>
          </li>
        </ul>
      </header>
  )
}

export default Header