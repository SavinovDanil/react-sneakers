import 'macro-css';

import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="contentHeading">Все кроссовки</h1>
          <div className='search-block d-flex align-center'>
            <img className='ml-10' src="/img/search.svg" alt="search" width={14} height={14}/>
            <input  placeholder='Поиск...'/>
          </div>
        </div>
        <div className="d-flex">
          <Card />
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
