import React, {FC} from 'react';

import './App.css';
import UsersComponent from "./components/usersContainer/users/UsersComponent";

const App: FC = () => {
    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default App;