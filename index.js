import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';

// class WhoAmI extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             years:26
//         }
//         // this.nextYear = () =>{
//         //     this.setState(state =>({
//         //         years: ++state.years
//         //     }))
//         // }
//         // this.nextYear = this.nextYear.bind(this)
//     }
//     nextYear = () =>{
//         this.setState(state => ({
//             years : ++state.years
//         }))
//     }

//     render(){
//         const {name,surname,link} = this.props;
//         const{years} = this.state;
//         return(
//             <>
//                 <button onClick = {this.nextYear}>++</button>
//                 <h1>My name is {name},surname - {surname},years = {years} </h1>
//                 <a href ={link}>My profile</a>
//             </>
//         )    
//     }
// }

// const All = () =>{
//     return (
//         <>  
//             <WhoAmI name = 'John' surname = 'Smith' link = 'facebook.com'/>
//             <WhoAmI name = 'Ivan' surname = 'Smith' link = 'facebook.com'/>
//             <WhoAmI name = 'Alex' surname = 'Smiths' link = 'facebook.com'/>
//         </>
//     )
// }

ReactDOM.render(<App/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
