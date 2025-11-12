import React from "react";

function ToggleText(){
    const [visible, setVisible] = React.useState(true);

    return(
        <div>
            <h3>Toggle Visiblity</h3>

            <button onClick={()=> setVisible(!visible)}>
                {visible ? "Hide Text" : "Show Text"}
            </button>
            {visible && <p>This is some toggleable text!</p>}
        </div>
    );
}

export default ToggleText;