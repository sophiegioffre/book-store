export const BookItem = ({ title, price, image }) => {
    return (
        <div>
            <img src={image}/>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    )
}