import HouseInfo from "./HouseInfo";

const Cards = (props) => {
    return (
        <div class="col-10">
          <div className="d-flex flex-wrap align-items-center">
              {
                props.display.map((item, ind) => { 
                  return <HouseInfo 
                  key={ind}
                  imageUrl={item.imageUrl}
                  size={item.size}
                  price={item.price}
                  loc={item.loc}
                  />
                })
              }
            </div>
        </div>
    )
}

export default Cards;