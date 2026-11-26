const Card = ({data}) => {
  return <li key={data.cover_edition_key}>{data.title+" - "+data.first_publish_year }</li>
};

export default Card;
