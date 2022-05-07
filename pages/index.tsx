import type { NextPage } from 'next'
import { About } from '../components/about'
import { Hero } from '../components/hero'

const Home: NextPage = () => {
  return (
    <>
    <Hero></Hero>
    <About></About>
    </>
  )
}

export default Home
