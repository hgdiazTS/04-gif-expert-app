

export const GifItem = ({title, url}) => {

    //console.log(image)

  return (
    <div className="card">
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
