import React from "react";

const GameState = props => (
  <>
    <div className={`alert alert-${props.state.emo}`} role="alert">
      {props.state.message}
    </div>
  </>
);

// class GameState extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { message, talk } = this.props.state;
//     return (
//       <div
//         className={
//           talk == "player" ? "alert alert-warning" : "alert alert-primary"
//         }
//         role="alert"
//       >
//         {message}
//       </div>
//     );
//   }
// }

export default GameState;
