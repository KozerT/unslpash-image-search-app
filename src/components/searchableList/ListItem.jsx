export default function ListItem({ item }) {
  return (
    <article className="list-item">
      <img src={item.urls.small} alt={item.title} />
      <div>
        {/* <h2>{item.user.location}</h2>
        <p>{item.alt_description}</p> */}
      </div>
    </article>
  );
}
