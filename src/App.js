import React from 'react';
import './App.css';

const App = () => {
    return (
        <main className="app-wrapper">
            <header className="header">
                <img src="https://pbs.twimg.com/media/EUmpUI6UEAImg9a.jpg" alt="logo"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://images5.alphacoders.com/890/thumb-1920-890117.jpg" alt="backgroungimage"/>
                </div>
                <div>
                    Ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
