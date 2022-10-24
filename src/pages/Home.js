import Itemcard from "../component/Itemcard";
import data from '../data'
export default function Home() {
console.warn(data.productData)
  return (
    <>
      <h1 className='text-center mt-3'>All Items</h1>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          <Itemcard img='img' title='title' desc='desc' />
        </div>
      </section>
    </>
  );
}