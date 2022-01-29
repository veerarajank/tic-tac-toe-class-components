import React from "react";
class Square extends React.Component {
    constructor(props){
      super(props);
      this.squareClick=this.squareClick.bind(this);
    }
    squareClick(){
       this.props.NextPlayer(this.props.row,this.props.col);
    }
   render() {
      return (
        <div
          className="square"
          style={squareStyle} onClick={this.squareClick}>{this.props.currentSquare}
        </div>
      );
    }
}

const squareStyle = {
    'width':'60px',
    'height':'60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'white'
  }
  
export default Square;