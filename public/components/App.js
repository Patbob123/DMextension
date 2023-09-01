import { Classroom } from './classroom.js';
import { Notepad } from './notepad.js';
import { Spotify } from './spotify.js';
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute"
  }, "ASDASD", /*#__PURE__*/React.createElement(Classroom, null), /*#__PURE__*/React.createElement(Notepad, null), /*#__PURE__*/React.createElement(Spotify, null));
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
console.log(root);
root.render( /*#__PURE__*/React.createElement(App, null));