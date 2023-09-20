import star from '../../images/star.png'

const Star = ({className}) => {
  return (
    <section className={className}>
        <img src={star} alt='/' />
    </section>
  )
}

export default Star;