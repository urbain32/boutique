import Itemcard from '../component/Itemcard';
import data from '../data';
export default function Home() {
  console.warn(data.productData);
  return (
    <>
      <h1 className='text-center mt-5  '>All Items</h1>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          {data.productData.map((item, index) => {
            return <Itemcard items={item} key={index} />;
          })}
        </div>
      </section>
    </>
  );
}
