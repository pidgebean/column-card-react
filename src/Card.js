

export default function Card({title, image, descr, className}) {
  return (
    <div className={className}>
      {image}
      <h2>{title}</h2>
      <p>{descr}</p>
      <button className="btn">Learn More</button>
    </div>
  )
}
