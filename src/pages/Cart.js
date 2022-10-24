import { useCart } from 'react-use-cart';
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
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.img}
                      style={{ height: '6rem', borderRadius: '9999px' }}
                      alt=''
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
                      Remove item
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
            Clear Cart
          </button>
        </div>
        <div className='col-auto'>
          <button className='btn btn-primary'>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
