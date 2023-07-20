
import React from 'react' 
import ReactDOM from 'react-dom/client' 

const TextDisplay = ({text}) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).
render(
  <React.StrictMode>
    <TextDisplay text="Shobuj Das" />
  </React.StrictMode>,
);