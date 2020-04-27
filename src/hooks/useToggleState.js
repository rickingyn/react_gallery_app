import React, { useState } from 'react';

const useToggle = () => {
    const [state, setState] = useState(true);
    return [state, setState];
}

export default useToggle;