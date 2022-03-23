import data from '../Data.js'

function Card()  {
    return (
      <div className="Card">
        <img src={data.album.images[0].url}></img>
        <div className="text-component" >
          <p>{data.album.name}</p>
          <p>{data.album.artists[0].name}</p>
        </div>
        <div className='button-component'>
          <button className='buttonSelect' type="button" onclick="alert('Hello world!')">Select</button>
        </div>
      </div>
    );
}

export default Card;