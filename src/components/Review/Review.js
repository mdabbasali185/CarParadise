import React, { createContext } from 'react';
export const CarContext = createContext()
const Review = () => {
    return (
        <CarContext.Provider value=''>

        </CarContext.Provider>
    );
};

export default Review;