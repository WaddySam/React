import React from 'react'
import PropTypes from 'prop-types'
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'



class Library extends React.Component {

    static defaultProps = {
          books: [
              {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
          ]
      }
      state = {
        open: true,
        freeBookmark: false,
        hiring: true,
        data: [],
        loading: false
      }
  
      componentDidMount (){
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}) )
      }
    
      componentDidUpdate (){
        console.log("component Did update");
      }
      
      toggleOpenClosed = () =>{
        this.setState(prevState => ({
          open: !prevState.open,
          freeBookmark : !prevState.freeBookmark
        }))
  
      }
  
    render(){
      const { books } = this.props
      return(
        <div>
          <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
          {this.state.hiring ? <Hiring/> : <NotHiring/>} 
          {this.state.loading? 'loading ....' :
          
          <div>
  
          {this.state.data.map(product =>{
            return(
                <div key={product.id}>
                  <h3> Library Product of the week!</h3>
                  <h4>{product.name}</h4>
                  <img alt={product.name} src={product.image} height= {100}/>
                  </div>
            )
          })}
  
  
  
          </div>
  
          }
          <button onClick= {this.toggleOpenClosed}>Change it</button>
          {books.map(
            (book,i)=>
            <Book 
                  key={i}
                  title = {book.title}
                  author = {book.author} 
                  pages = {book.pages}
                  freeBookmark = {this.state.freeBookmark}
                  />
          )}
        </div>
      )
  
    }
  
  }

  Library.prototypes = {
    books: PropTypes.array
  }
  Book.prototype = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
  }
  export default Library
