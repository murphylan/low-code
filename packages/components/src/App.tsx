import { Editor, Element, Frame } from "@craftjs/core";
import * as UserComponents from './components/UserComponent';
import './App.css'

function App() {
  return (
    <Editor resolver={{ ...UserComponents }}>
      <Frame>
        <Element is="div" canvas>
          <h1>Hello</h1>
          <UserComponents.Button text={'Hello'} />
        </Element>
      </Frame>
    </Editor>
  )
}

export default App
