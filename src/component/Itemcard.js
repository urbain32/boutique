import { useCart } from 'react-use-cart';
export default function Itemcard({items}) {
  const { img, title, desc, price } = items;
  const { addItem } = useCart();
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
      <div className='card p-0 overflow-hidden h-100 shadow'>
        <img src={img} className='card-img-top img-fluid' alt='' />
        <div className='card-body text-center'>
          <h5 className='card-title'>{title}</h5>
          <h5 className='card-title'>FBU {price}</h5>
          <p className='card-text'>{desc}</p>
          <button className='btn btn-success' onClick={()=>addItem(items)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
