import data from '../Data.js'

function Card()  {
    return (
      <div className="Card">
        <img src={data.album.images[1].url}></img>
        <div className="text-component" >
          <div className="title">
          <p>{data.album.name}</p>

          </div>
          <div className="artists">
          <p>{data.album.artists[0].name}</p>
          </div>
          
        </div>
        <div className='button-component'>
          <button className='buttonSelect' type="button" onclick="alert('Hello world!')">Select</button>
        </div>
      </div>
    );
}

export default Card;