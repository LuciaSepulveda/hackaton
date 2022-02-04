import type {NextPage} from "next"
import {Box, Flex, Text} from "@chakra-ui/react"
import React from "react"

const options = ["Medio Ambiente", "Social", "Género"]

const Home: NextPage = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Flex direction="column">
        <Text fontSize="30px">Elegí tu área de interés</Text>
        <Text>
          Ingresá tus preferencias, eso no significa que sólo vayamos a mostrarte iniciativas en ese
          área, pero nos permite entender tus preferencias.
        </Text>
      </Flex>
      <Flex direction="row">
        {options.map((option) => (
          <React.Fragment key={option}>
            <Box>logo</Box>
            <Text>{option}</Text>
          </React.Fragment>
        ))}
      </Flex>
    </Flex>
  )
}

export default Home
