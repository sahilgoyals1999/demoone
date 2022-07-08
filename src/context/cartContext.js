import React from "react";

const CardContext = React.createContext({
    cardItems: 0,
    setCardItems: () => {}
});

export default CardContext;