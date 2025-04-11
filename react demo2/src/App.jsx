import { useState } from 'react'
import React from 'react'

      // class App extends React.Component{
      //   render() {
      //     return(
      //       <>
      //       <h1>hello</h1>
      //       </>
      //     )
          
      //   }
      // }

      // class App extends React.Component{
      //   constructor() {
      //     super()
      //     this.state = {name:'akhil'}
      //   }
      //   render() {
      //     return(
      //       <>
      //       <h1>hello {this.state.name}</h1>
      //       </>
      //     )
          
      //   }
      // } //helo akhil 

      // class App extends React.Component{
      //   constructor(props){
      //     super(props)
      //     this.state = {name:props.name,age:props.age}
      //   }
      //   render(){
      //     return(
      //       <>
      //       <h1>hello {this.state.name}</h1>
      //       <h1>age {this.state.age}</h1>
      //       </>
      //     )
      //   }
      // }
// ----------------------nested class-----------------------------------------------------------------------------------------------------------
      // class Demo extends React.Component{
      //   render(){
      //     return(
      //       <>
      //       <h1>Demo Component {this.props.name}</h1>
      //       </>
      //     )
      //   }
      // }

      // class App extends React.Component{
      //   render(){
      //     return(
      //       <>
      //       <h1>hello</h1>
      //       <h2>age{this.props.age}</h2>
      //       <Demo name={this.props.age} />
      //       </>
      //     )
      //   }
      // }
    // -------------------------------------------------------------------------------------------------------------------------------

//     class App extends React.Component{
//       constructor(){
//         super()
//         this.state = {age:20}

//       }
//       changeAge = ()=>{
//         this.setState({age:25})
//       }
//       render(){
//         return(
//           <>
//           <h1>Helo</h1>
//           <h2>age {this.state.age}</h2>
//           <button onClick={this.changeAge} >Change age</button>
          
//           </>
//         )
//       }

//     }

// export default App

// --------------------------------getderivedstatefromprops-------------------------------------------------------------------------
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {age:20}

//   }
//   changeAge = ()=>{
//     this.setState({age:23})
//   }
//   static getDerivedStateFromProps(props,state){
//     return {age:props.age}
//   }
//   render(){
//     return(
//       <>
//       <h1>Helo</h1>
//       <h2>age {this.state.age}</h2>
//       <button onClick={this.changeAge} >Change age</button>
      
//       </>
//     )
//   }

// }

// export default App

// -------------------------------componenet didmount------------------------------------------------------------------------
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {age:20}

//   }
//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({age:30})
//     },1000)
//   }

//   render(){
//     return(
//       <>
//       <h1>Helo</h1>
//       <h2>age {this.state.age}</h2>
//       <button onClick={this.changeAge} >Change age</button>
      
//       </>
//     )
//   }

// }

// export default App

// ----------------------------shouldcomponenetupdate--------------------------------------------------------------------------------------
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {age:20}

//   }
//   shouldComponentUpdate(){
//     return true
//   }
//   changeAge=()=>{
//   this.setState({age:30})
// }

//   render(){
//     return(
//       <>
//       <h1>Helo</h1>
//       <h2>age {this.state.age}</h2>
//       <button onClick={this.changeAge} >Change age</button>
      
//       </>
//     )
//   }

// }

// export default App
// no changes effect shouldcomponentupdate

// ----------------------------------getSnapshotBeforeUpdate---componentDidUpdate--------------------------------------------------------------------------
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {age:20}

//   }
//   shouldComponentUpdate(){
//     return true
//   }
//   changeAge=()=>{
//   this.setState({age:30})
// }
// componentDidMount(){
//   setTimeout(()=>{
//     this.setState({age:30})
//   },1000)
// }
// getSnapshotBeforeUpdate(prevProps,prevSate){
//   console.log(prevProps,prevSate);
  
// }
// componentDidUpdate(){
//   console.log("component updated");
  
// }

//   render(){
//     return(
//       <>
//       <h1>Helo</h1>
//       <h2>age {this.state.age}</h2>
//       <button onClick={this.changeAge} >Change age</button>
      
//       </>
//     )
//   }

// }

// export default App

// ----------------------------------------------------------------------------------------------------------

class App extends React.Component{
  constructor(){
    super()
    this.state = {show:true}

  }
  deleteHead=()=>{
    this.setState({show:false})
  }

  render(){
    let myhead;
    if(this.state.show){
      myhead=<Sub />
    }
    return(
      <>
      <h1>Helo</h1>
      {myhead}
      <button onClick={this.deleteHead} >delete</button>
      </>
    )
  }

}

class Sub extends React.Component{
  componentWillUnmount(){
    alert("componentwillunmount")

  }
  render(){
    return(
      <>
      <h1>Sub</h1>
      </>
    )
  }
}
  
  
export default App
