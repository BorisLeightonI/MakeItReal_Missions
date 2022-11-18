import { useRouter } from "next/router";
import { useEffect } from "react";


function CharactersId({character}) {
  const router = useRouter()

  useEffect(()=>{
    const redirect = () => {
      router.push({
        pathname: '/home'
      })
    }
    const timer = setTimeout(redirect, 5000)

    return ()=>clearTimeout(timer)
  },[])

  return <>
    <h1>Detalles del Personaje</h1>
    <div key={character.id}>
        <img src={character.image} alt='actor' loading="lazy"/>
        <h2>{character.name}</h2>
        
      </div>
  </>;
}

export default CharactersId;

export async function getServerSideProps({params}) {
  const apiRickMorty = await fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`,
  {
    method:'GET'
  }
  )
  const character = await apiRickMorty.json()
  return {
    props: {character}, // will be passed to the page component as props
  }
}