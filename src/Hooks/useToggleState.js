import { useState } from "react";

function useToggleState(initialValue = false)  {

    const [state, setValue] = useState(initialValue);

    const toggle = () => {setValue(!state)}


    return [state, toggle]
}

export default useToggleState