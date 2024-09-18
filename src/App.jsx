import React ,{ useState, useContext, createContext } from 'react'
import './App.css'
import data from './Data'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Cart from './Components/Cart'
import Header from './Components/Header'
import Products from './Components/Products'

export const BookContext = createContext()


function App() {
  const [state, setState] = useState({
    bookList : data,
    Cart: []
  })
  
  const AddtoCart = (book) => {
    setState({
      ...state,
      Cart: state.Cart.find((item) => item.id === book.id) ?
      state.Cart.map((item) => item.id === book.id ?
    {...item, count: item.count + 1} :
    item ) :
    [...state.Cart, {...book, count : 1}]
    })
  }

  const RemoveCart = (id) => {
    setState({
      ...state, 
      Cart: state.Cart.filter ((item) => item.id !== id)
    })
  }

  const Increment = (id) => {
    setState({
      ...state,
      Cart: state.Cart.map((item) => item.id === id ?
      {...item, count : item.count + 1 } : item
    ) 
    })
  }
  const Decrement = (id) => {
    setState({
      ...state,
      Cart: state.Cart.map((item) => item.id === id ?
      {...item, count : item.count > 1 ? item.count - 1 : 1 }
      : item
    )
    })
  }


  return (
   <>
   <BookContext.Provider value={{state, AddtoCart, RemoveCart, Increment, Decrement}}>
    <HashRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Cart />}/>
        <Route path='/Products' element={<Products />}/>
      </Routes>
    </HashRouter>
   </BookContext.Provider>
   </>
  )
}

export default App
