export default function Itemcard(props) {
    const {img,title,desc} = props
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
      <div className='card p-0 overflow-hidden h-100 shadow'>
        <img src={img} className='card-img-top img-fluid' alt="" />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{desc}</p>
          <button className='btn btn-success'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
