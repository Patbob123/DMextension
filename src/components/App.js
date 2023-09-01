import { Classroom } from './classroom.js';
import { Notepad } from './notepad.js';
import { Spotify } from './spotify.js'; 


function App() {
    return (
        <div className="absolute">
            ASDASD
            <Classroom />
            <Notepad />
            <Spotify />
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
console.log(root)
root.render(<App />);