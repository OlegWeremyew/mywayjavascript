import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEnteireTree} from "./render";
import state from "./redux/state";

rerenderEnteireTree(state);

reportWebVitals();
