import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        margin: 0,
        margin: 0,
        minHeigth: '100vh',
        background: '#FFF5EE',
        fontFamily: 'Poppins',
        color: '#303030',
      },
    }),
  },
})

export default theme
