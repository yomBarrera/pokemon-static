import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import NextLink from "next/link";
import Image from 'next/image';


export const Navbar = () => {

  const { theme } = useTheme()
  return (
    <div style={{
      display:'flex',
      width: '100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'start',
      padding:'0px 20px',
      backgroundColor:theme?.colors.gray100.value
    }}>
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="icono de la App" width={70} height={70} />
      <Link href='/' >
        <Text color="white" h2>P</Text> <Text color="white" h3>okémon</Text>
      </Link>

      <Spacer css={{flex:1}}/>

      <Link href='/favorites' >
        <Text color="white" >Favoritos</Text>   
      </Link>
    </div>
  )
}

