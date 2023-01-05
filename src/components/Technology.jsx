export function Technology({ img, text}) {
  return (
    <div className='technology'>
      <img src={img} alt="Technology Logo" />
      <p>{text}</p>
    </div>
  )
}
