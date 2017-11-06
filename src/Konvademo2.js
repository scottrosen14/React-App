// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Line, Layer, Rect, Stage, Group, Circle} from 'react-konva';

// class Konvademo extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       isSelected: false
//     }

//     this.selectCard = this.selectCard.bind(this);
//   }

//   selectCard() {
//     console.log('wololo');
//     this.setState({
//        isSelected: true
//     });
//   }

//   renderAnchors(anchors) {
//     return anchors.map((anchor, index) => {
//       return (
//         <Circle
//           key={index}
//           x={anchor.x}
//           y={anchor.y}
//           width={10}
//           height={10}
//           strokeWidth={2}
//           stroke={'#666'}
//           fill={'#ddd'} />
//       );
//     });
//   }


//   render() {
//     return (
//       <Group
//         draggable={true}>
//         <Circle
//           x={100}
//           y={100}
//           radius = {50}
//           stroke = 'red'
//           strokeWidth = {15}
//           onClick={this.selectCard} />
//           <Rect
//           x={300}
//           y={300}
//           width={50}
//           height={50}
//           stroke = 'red'
//           strokeWidth = {15}
//           />
//           <Line
//           points= {[150, 100, 325, 100, 325, 300]}
//           tension= {0}
//           stroke = 'red'
//           strokeWidth = {15}
//           lineCap= 'round'
//           lineJoin= 'round'
//           />
//         {this.state.isSelected ?
//           this.renderAnchors([
//             {x: 0, y: 0},
//             {x: 120, y: 0},
//             {x: 120, y: 120},
//             {x: 0, y: 120}
//           ])
//           : null
//         }
//       </Group>
//     );
//   }
// }


// export default Konvademo;