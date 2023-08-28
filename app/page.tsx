import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Total from   './components/Aboutus/Total'
import Dedicated from './components/Dedicated/index';
import Beliefs from './components/Beliefs/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';



export default function Home() {
  return (
    
    // <main>
    <>
      <Banner />
      <Articles />
      <Beliefs />
      <Aboutus />
      <Total />
      <Dedicated />
      <Joinus />
      </>
    // </main>
  )
}
