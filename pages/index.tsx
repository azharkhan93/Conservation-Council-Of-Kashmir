import Banner from '../app/components/Banner';
import Aboutus from '../app/components/Aboutus';
import Total from '../app/components/Stats';
import Donateus from '../app/components/Donate';
import Beliefs from '../app/components/Beliefs';
import Articles from '../app/components/Articles';
import Joinus from '../app/components/Joinus';

export default function Home() {
  return (

    <main>
      <>
        <Banner />
        <Articles />
        <Beliefs />
        <Aboutus />
        <Total />
        <Donateus />
        <Joinus />
      </>
    </main>
  )
}