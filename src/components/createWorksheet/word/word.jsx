import React, { useState, useEffect } from "react";

function Word(prop) {

    const [foo, setFoo] = useState(0);

    return (
        <div style={{ border: '1px dolid black' }} onClick={() => setFoo(0 ? 1 : 0)}>
            <div id={prop.id} style={{ display: foo == 0 ? 'inherit' : 'none', color: "red" }}>{prop.text}</div>
            <div id={prop.id} style={{ display: foo == 0 ? 'none' : 'inherit' }}> {prop.text}</div >
        </div >
    );
}
export default Word;
