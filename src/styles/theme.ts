// theme.js
import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
export const theme = extendTheme({
  colors: {
    backgroundDark: '#19181E',
    background: '#19181E',
  },
  styles: {
    global: {
      body: {
        bg: '#19181E',
        color: '#E1EDFC'
      }
    }
  }
})
