import Card from '../components/Card'
function Home({
  items,
  searchValue, 
  setSearchValue,
  onChangeValueInput,
  onAddtoCarts,
  onAddtoFavorites 
}) {
  return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="contentHeading">{searchValue ? `Поиск по фильтру: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className='search-block d-flex align-center'>
            <img className='ml-10' src="/img/search.svg" alt="search" width={14} height={14}/>
            {searchValue && (<img src="/img/btn-remove.svg" onClick={() => setSearchValue('')} alt="" className='clear cu-p'/>)}
            <input onChange={onChangeValueInput} value={searchValue} placeholder='Поиск...'/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
              onPlus = {(obj) => onAddtoCarts(obj)}
              onFavorite = {(obj) => onAddtoFavorites(obj)}
              {...item}
            />
          ))}
        </div>
      </div>
  )
}

export default Home;