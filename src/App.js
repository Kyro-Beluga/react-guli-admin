import React from "react";
import {useRoutes} from 'react-router-dom'
import routes from './utils/router_config'
import './App.less';

function App() {
    const element = useRoutes(routes)
    return (
        <div className="App">
            {/* 注册路由 */}
            {element}
        </div>
    );
}

export default App;
