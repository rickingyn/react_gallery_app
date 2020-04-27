// import Reacts hook 
import { useState } from 'react';

// create function using React's hook to create toggle state
const useToggle = () => {
    const [state, setState] = useState(true);
    return [state, setState];
}

export default useToggle;