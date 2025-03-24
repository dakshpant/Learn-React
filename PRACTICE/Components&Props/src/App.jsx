import React from 'react'
import Card from './components/card'


const App = () => {
  return (
    <>
    <div className='flex flex-wrap gap-5 justify-center'>
      <Card img="https://images.unsplash.com/photo-1668554245893-2430d0077217?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Daksh" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters." />
      <Card img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Angel Priya" details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."/>
      <Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/John_Bauer_artist_Sweden.jpg/408px-John_Bauer_artist_Sweden.jpg" name="John Bauer" details="John Albert Bauer (4 June 1882 – 20 November 1918) was a Swedish painter and illustrator. His work is concerned with landscape and mythology, but he also composed portraits. He is best known for his illustrations of early editions of Bland tomtar och troll (Among Gnomes and Trolls), an anthology of Swedish folklore and fairy tales."/>
      </div>
    </>
  )
}

export default App
