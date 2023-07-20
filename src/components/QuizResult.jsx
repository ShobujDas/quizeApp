

const QuizResult = (props) => {
   return (
      <>
         <div>
            Your Score : {props.score} <br/>
            totalScore : {props.total}
         </div>
         <button id="next-button" onClick={props.trayagain}>Try Aaing</button>
      </>
   );
};

export default QuizResult;