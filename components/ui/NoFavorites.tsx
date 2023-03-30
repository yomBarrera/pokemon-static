import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
      <Container css={{
        display:'flex',
        flexDirection:'column',
        height: 'calc(100vh - 100px)',
        alignItems:'center',
        justifyContent:'center',
        justifySelf:'center'
      }}>
        <Text h1>NO hay Favoritos</Text>
        <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg' alt='pika' width={250} height={200} css={{ opacity: 0.1}}/>
      </Container>
  )
}

