import 'macro-css';

function App() {
  return (
    <div className="wrapper clear">
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

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img src="/img/sneakers/sneakers1.jpg" width={133} height={112} alt=""/>
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
          <div className="card">
            <img src="/img/sneakers/sneakers2.jpg" width={133} height={112} alt=""/>
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
          <div className="card">
            <img src="/img/sneakers/sneakers3.jpg" width={133} height={112} alt=""/>
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
          <div className="card">
            <img src="/img/sneakers/sneakers4.jpg" width={133} height={112} alt=""/>
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
        </div>
      </div>
    </div>
  );
}

export default App;
