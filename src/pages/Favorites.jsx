import Card from '../components/Card'

function Favorites({items, onAddtoFavorites}) {
  return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="contentHeading">Закладки</h1>
        </div>
        <div className="d-flex flex-wrap">
        {items
          .map((item, index) => (
            <Card 
              key={index}
              favorited={true}
              onFavorite={onAddtoFavorites}
              {...item}
            />
          ))}
        </div>
      </div>
  )
}

export default Favorites;