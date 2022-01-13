import 'macro-css';

import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {title:'Мужские Кроссовки Nike Blazer Mid Suede', imageUrl: '/img/sneakers/sneakers1.jpg', price: 12999,},
  {title:'Мужские Кроссовки Nike Air Max 270', imageUrl: '/img/sneakers/sneakers2.jpg', price: 12999,},
  {title:'Мужские Кроссовки Nike Blazer Mid Suede', imageUrl: '/img/sneakers/sneakers3.jpg', price: 8499,},
  {title:'Кроссовки Puma X Aka Boku Future Rider', imageUrl: '/img/sneakers/sneakers4.jpg', price: 8999,},
]

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
          {arr.map(obj => (
            <Card 
            title={obj.title}
            imageUrl={obj.imageUrl}
            price={obj.price}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
