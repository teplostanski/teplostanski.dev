import Head from 'next/head'
import { keywords, PagePetsDesc, PagePetsTitle } from '../../constants'

const Pets = () => {
  return (
    <>
      <Head>
        <title>{PagePetsTitle}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={PagePetsDesc} />
      </Head>
      <div>Pets</div>
    </>
  )
}

export default Pets
