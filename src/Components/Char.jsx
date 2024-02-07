const Char = ({ id, name, image, updateName }) => {
  const handleClick = () => {
    updateName(name)
  }
  return (
    <div className='color-square' key={id} onClick={handleClick}>
      <img src={image} alt={name} />
    </div>
  )
}

export default Char
