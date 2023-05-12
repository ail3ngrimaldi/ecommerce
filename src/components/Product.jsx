import './ProductCard.scss';

export default function ProductCard (props) {

    console.log(typeof(ProductCard))
    return (
        <div className="card">
            <div className="card__body">
                <img className="card__img" src={props.img} alt="projectimg"/>
                <h1 className="card__title">{props.title}</h1>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn"><a className='card__link' href={props.link}>Agregar al carrito</a></button>
        </div>
    );
}