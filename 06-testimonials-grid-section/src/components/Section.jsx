export default function Section({ name, img, review, contentTop, contentBottom }) {
  return (
    <>
      <section>
        <div className="testimanials__person-info__container">
          <img src={img} alt="" className="avatar"/>
          <div className="testimanials__person-info">
            <p className="name">{name}</p>
            <p className="review">{review}</p>
          </div>
        </div>
        <div className="testimanials__content">
          <p className="testimanials__content__top">{contentTop}</p>
          <p className="testimanials__content__bottom">{contentBottom}</p>
        </div>
      </section>
    </>
  )
}