// @vendors
import React, { PureComponent } from 'react';

// @components
import ClipsList from './components/clips-list';

// @styles
import './App.scss';

class App extends PureComponent {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">SLICE UP VIDEO</h1>
                </header>
                <section className="App-content">
                    <p className="App-content__intro">
                        In here, you can create a clip out of the default video below by seting the start and end time.
                    </p>
                    <ClipsList className="App-content__clips-list"/>
                </section>
            </div>
        );
    }
}

export default App;
