const Form = ({getRandomDogPic}) => {  
    return(
        <div className="wrap">
        <h1>Random Dog Image</h1>
        <button className="button" onClick={getRandomDogPic}>Get Pic</button>
        </div>
    )
}

export default Form