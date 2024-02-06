interface Item {
  image: string;
  title: string;
  author: string;
}

const Card = (props: Item) => {
  const {image, title, author} = props;
  return (
    <div className='card'>
      <img src={image} alt="content cover" />
      <section className="details">
        <h2>{title}</h2>
        <h4>{author}</h4>
      </section>
    </div>
  )
};

export default Card;