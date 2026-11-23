import './ChristmasItem.css'

const ChristmasItem = ({data}) => {

  const { title, description, price, img_url} = data;

  return <article>
          <h4>{title || "--"}</h4>
          <p>{description || "--"}</p>
          <p>{price || "--"}€</p>
          <img className="picture_item" src={img_url} alt={title} />
        </article>
};

export default ChristmasItem;
