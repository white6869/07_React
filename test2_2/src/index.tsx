import ReactDOM from 'react-dom/client';

//import React from 'react'; 
// import React... 생략해도 되는 이유: 리액트 17 이후 버전부터는 생략 가능
// const CE = React.createElement

// const rootVirtualDOM = CE('ul', null, [
//   CE('li', null, [
//     CE('a', {href: 'http://www.google.com', target: '_blank'}, [
//       CE('p', null, 'go to google')
//     ])
//   ])
// ])

// const rootVirtualDOM = (
//   <ul>
//     <li>
//       <a href="http://www.google.com" target="_blank">
//         <p>go to Google</p>
//       </a>
//     </li>
//   </ul>
// )

// const children = [
//   <li>
//     <a href="http://www.google.com" target="_blank">
//       <p>go to Google</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.facebook.com" target="_blank">
//       <p>go to Facebook</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.twitter.com" target="_blank">
//       <p>go to Twitter</p>
//     </a>
//   </li>
// ]

// const rootVirtualDOM = <ul>{children}</ul>

// const children = [0, 1, 2].map((n: number) => <h3>Hello world! {n}</h3>)
// const rootVirtualDOM = <div>{children}</div>

import * as D from './data'

const children = D.makeArrary(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))

const rootVirtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)