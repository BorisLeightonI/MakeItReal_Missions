import Image from 'next/image'
import Link from 'next/link';
function Characters({dataRickMorty}) {
  console.log('data RickMorty:', dataRickMorty);
  return <>
  <h1>Personajes</h1>
  {dataRickMorty.results.map(item => {
    return(
      <div key={item.id}>
        {/* <Image src={item.image} alt='actor' width={500} height={500}/> */}
        <img src={item.image} alt='actor'/>
        <h2>{item.name}</h2>
        <Link href={`/characters/${item.id}`}>
          <a>Home</a>
        </Link>
      </div>
    )
  })}
  </>;
}

export default Characters;

export async function getServerSideProps(conext) {

  const apiRickMorty = await fetch("https://rickandmortyapi.com/api/character", 
    {
      method: 'GET',

    }
  )
  const dataRickMorty = await apiRickMorty.json()
  console.log('dataServer:', dataRickMorty);

  return {
    props: {
      dataRickMorty
    }
  }
}