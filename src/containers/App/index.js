import React ,{Component}from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import './index.css'
let styles=require('./index.css')

export default  class App extends Component{
  render(){
      return(
          <div className="app">
            <Header />
              <Footer />
          </div>
      )
  }
}
