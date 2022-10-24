import { useCart } from 'react-use-cart';
import { AiFillDelete } from 'react-icons/ai'
import {MdRemoveShoppingCart} from 'react-icons/md'
import './Cart.css'
export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) {
    return <h1 className='text-center'>Your Cart is Empty.</h1>;
  }
  return (
    <section className='py-4 container '>
      <div className='row justify-content-center  '>
        <div className='col-12'>
          <h5>
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h5>
          <table className='table table-light table-hover m-2 '>
            <tbody  >
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      alt=''
                      src={item.img}
                      style={{ height: '6rem', borderRadius: '9999px' }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button
                      className='btn btn-info ms-2'
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className='btn btn-info ms-2'
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className='btn btn-danger btn-sm ms-2'
                      onClick={() => removeItem(item.id)}
                    >
                      <AiFillDelete size={25} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='col-auto ms-auto'>
          <h2>
            Total price: <span className='fs-5 fw-bold'>{cartTotal} FBu</span>{' '}
          </h2>
        </div>
        <div className='col-auto'>
          <button className='btn btn-danger ' onClick={() => emptyCart()}>
            <MdRemoveShoppingCart/> Cart
          </button>
        </div>
        <div className='col-auto'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
      {/* new */}

      {/* <div class='container mt-5 p-3 rounded cart'>
        <div class='row no-gutters'>
          <div class='col-md-8'>
            <div class='product-details mr-2'>
              <div class='d-flex flex-row align-items-center'>
                <i class='fa fa-long-arrow-left'></i>
                <span class='ml-2'>Continue Shopping</span>
              </div>
              <hr />
              <h6 class='mb-0'>Shopping cart</h6>
              <div class='d-flex justify-content-between'>
                <span>
                  You have <span className='text-danger'> {totalItems} </span>
                  items in your cart
                </span>
                <div class='d-flex flex-row align-items-center'>
                  <span class='text-black-50'>Sort by:</span>
                  <div class='price ml-2'>
                    <span class='mr-1'>price</span>
                    <i class='fa fa-angle-down'></i>
                  </div>
                </div>
              </div>
              {items.map((item, index) => (
                <div class='d-flex justify-content-between align-items-center mt-3 p-4 g-4  items rounded' key={index}>
                  <div class='d-flex flex-row'>
                    <img
                      alt=''
                      class='rounded'
                      src={item.img}
                      width='70'
                    />
                    <div class='ml-2'>
                      <span class='font-weight-bold d-block'>
                        {item.title}
                      </span>
                      <span class='spec'>{item.desc}</span>
                    </div>
                    
                  </div>
                  <div class='d-flex flex-row align-items-center'>
                    <span class='d-block'>{item.quantity}</span>
                    <span class='d-block ml-5 font-weight-bold'>${item.price}</span>
                    <i class='fa fa-trash-o ml-3 text-black-50'></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class='col-md-4'>
            <div class='payment-info'>
              <div class='d-flex justify-content-between align-items-center'>
                <span>Card details</span>
                <img
                  alt=''
                  class='rounded'
                  src='https://i.imgur.com/WU501C8.jpg'
                  width='30'
                />
              </div>
              <span class='type d-block mt-3 mb-1'>Card type</span>
              <label class='radio'>
                {' '}
                <input type='radio' name='card' value='payment' checked />{' '}
                <span>
                  <img
                    alt=''
                    width='30'
                    src='https://img.icons8.com/color/48/000000/mastercard.png'
                  />
                </span>{' '}
              </label>

              <label class='radio'>
                {' '}
                <input type='radio' name='card' value='payment' />{' '}
                <span>
                  <img
                    alt=''
                    width='30'
                    src='https://img.icons8.com/officel/48/000000/visa.png'
                  />
                </span>{' '}
              </label>

              <label class='radio'>
                {' '}
                <input type='radio' name='card' value='payment' />{' '}
                <span>
                  <img
                    alt=''
                    width='30'
                    src='https://img.icons8.com/ultraviolet/48/000000/amex.png'
                  />
                </span>{' '}
              </label>

              <label class='radio'>
                {' '}
                <input type='radio' name='card' value='payment' />{' '}
                <span>
                  <img
                    alt=''
                    width='30'
                    src='https://img.icons8.com/officel/48/000000/paypal.png'
                  />
                </span>{' '}
              </label>
              <div>
                <label class='credit-card-label'>Name on card</label>
                <input
                  type='text'
                  class='form-control credit-inputs'
                  placeholder='Name'
                />
              </div>
              <div>
                <label class='credit-card-label'>Card number</label>
                <input
                  type='text'
                  class='form-control credit-inputs'
                  placeholder='0000 0000 0000 0000'
                />
              </div>
              <div class='row'>
                <div class='col-md-6'>
                  <label class='credit-card-label'>Date</label>
                  <input
                    type='text'
                    class='form-control credit-inputs'
                    placeholder='12/24'
                  />
                </div>
                <div class='col-md-6'>
                  <label class='credit-card-label'>CVV</label>
                  <input
                    type='text'
                    class='form-control credit-inputs'
                    placeholder='342'
                  />
                </div>
              </div>
              <hr class='line' />
              
              <div class='d-flex justify-content-between information'>
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
              <button
                class='btn btn-primary btn-block d-flex justify-content-between mt-3'
                type='button'
              >
                <span>${cartTotal}</span>
                <span>
                  Checkout<i class='fa fa-long-arrow-right ml-1'></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
