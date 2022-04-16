import React, { useState } from "react";
import ReactDOM from "react-dom";
import { State } from "./types";

export const Hello = () => {
    const [state, setState] = useState<State>({state: ''});
    return <div>{state.state} World!</div>;
};