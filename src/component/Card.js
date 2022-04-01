import data from '../Data.js'

const Card=({images,album,artists})=>  {
  
    return (
      <div className="Card">
        <img src={images}></img>
        <div className="text-component" >
          <div className="title">
          <p>{album}</p>

          </div>
          <div className="artists">
          <p>{artists}</p>
          </div>
          
        </div>
        <div className='button-component'>
          <button className='buttonSelect' type="button" onclick="alert('Hello world!')">Select</button>
        </div>
      </div>
    );
}

export default Card;