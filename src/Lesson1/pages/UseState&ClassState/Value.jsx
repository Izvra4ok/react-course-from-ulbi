import React, {useState} from 'react';


    const Value = () => {

        const [value, setValue] = useState("text in input");
        return (
            <div>
                <h2>{value}</h2>

                <input type="text"
                       value={value}
                   onChange={event => setValue(event.target.value)}/>
        </div>
    );
};

export default Value;