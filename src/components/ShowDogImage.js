const ShowDogImage = ({randomDogPic}) => {
    console.log({randomDogPic})
    return(
        <div className="imagediv">
        <img className="image" src={randomDogPic.message} alt="..."></img>
        </div>
    )
}

export default ShowDogImage