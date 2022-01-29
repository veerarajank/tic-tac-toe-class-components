import React from "react";
import Square from "./Square";
let board=[[],[],[]];
class Board extends React.Component {
    constructor(props){
          super(props);
          this.state={player:"X",winner:"None"};
          this.NextPlayer=this.NextPlayer.bind(this);
          this.Validate=this.Validate.bind(this);
          this.Reset=this.Reset.bind(this);
    }
  
    // function to rotate the player
    NextPlayer = (row,col) =>{
      board[row][col]=this.state.player;
      let winResult=this.Validate();
      this.setState({player:(this.state.player==="X"?"O":"X"),winner:(winResult!=null?winResult:"None")})
    }
  
    // function to validate the board and annouce the winner
    Validate = () =>{
       let winner="None";
       for (let i=0;i<board.length;i++){
         
          //row match check
         if ((board[i][0]===board[i][1])&&(board[i][1]===board[i][2])&&(board[i][2]===board[i][0])) {
           winner=board[i][0];
           break;
         }
  
         //column match check
         if ((board[0][i]===board[1][i])&&(board[1][i]===board[2][i])&&(board[2][i]===board[0][i])) {
           winner=board[0][i];
           break;
         }
       }
  
       //diagonal check
       if ((board[0][0]===board[1][1])&&(board[1][1]===board[2][2])&&(board[2][2]===board[0][0])) winner=board[0][0];
       if ((board[0][2]===board[1][1])&&(board[1][1]===board[2][0])&&(board[2][0]===board[0][2])) winner=board[0][2];
       return winner;
    }
    
    // function to reset all the board values
    Reset = () => {
        board=[[],[],[]];
        this.setState({player:"X",winner:"None"});
    }
    render() {
      return (
        <div style={containerStyle} className="gameBoard">
          <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{this.state.player}</span></div>
          <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{this.state.winner}</span></div>
          <button style={buttonStyle} onClick={()=>{this.Reset()}}>Reset</button>
          <div style={boardStyle}>
            <div className="board-row" style={rowStyle}>
              <Square row={"0"} col={"0"} currentSquare={board[0][0]} NextPlayer={this.NextPlayer}/>
              <Square row={"0"} col={"1"} currentSquare={board[0][1]} NextPlayer={this.NextPlayer} />
              <Square row={"0"} col={"2"} currentSquare={board[0][2]} NextPlayer={this.NextPlayer} />
            </div>
            <div className="board-row" style={rowStyle}>
              <Square row={"1"} col={"0"} currentSquare={board[1][0]} NextPlayer={this.NextPlayer} />
              <Square row={"1"} col={"1"} currentSquare={board[1][1]} NextPlayer={this.NextPlayer} />
              <Square row={"1"} col={"2"} currentSquare={board[1][2]} NextPlayer={this.NextPlayer} />
            </div>
            <div className="board-row" style={rowStyle}>
              <Square row={"2"} col={"0"} currentSquare={board[2][0]} NextPlayer={this.NextPlayer} />
              <Square row={"2"} col={"1"} currentSquare={board[2][1]} NextPlayer={this.NextPlayer} />
              <Square row={"2"} col={"2"} currentSquare={board[2][2]} NextPlayer={this.NextPlayer} />
            </div>
          </div>
        </div>
      );
    }
  }

  const rowStyle = {
    display: 'flex'
  }
  

  const boardStyle = {
    'backgroundColor': '#eee',
    'width': '208px',
    'alignItems': 'center',
    'justifyContent': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'border': '3px #eee solid'
  }
  
  const containerStyle = {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column'
  }
  
  const instructionsStyle = {
    'marginTop': '5px',
    'marginBottom': '5px',
    'fontWeight': 'bold',
    'fontSize': '16px',
  }
  
  const buttonStyle = {
    'marginTop': '15px',
    'marginBottom': '16px',
    'width': '80px',
    'height': '40px',
    'backgroundColor': '#8acaca',
    'color': 'white',
    'fontSize': '16px',
  }

  export default Board;