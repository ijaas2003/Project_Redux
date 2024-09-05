import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Ref from './components/Ref';
import LearnProps from './components/LearnProps';
import { createContext, useReducer, useState } from 'react';
import ErrorBoundry from './components/Errors'; // Make sure the filename and import are correct
import Counter from './components/Counter';
import { DoubleInc } from './components/store';

export const ThemeContext = createContext();
export const DoubleIncrement = createContext();
function App() {
  const [dark, setDark] = useState(true);
  const [DoubleState, doubleDispatch] = useReducer(DoubleInc, 0);

  const ToToggle = () => {
    setDark(prevDark => !prevDark);
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={ dark }>
        <DoubleIncrement.Provider value={{ DoubleState, doubleDispatch }}>
          <BrowserRouter>
            <Routes>
              {/* No need to wrap Route itself with ErrorBoundary, instead wrap the components */}
              <Route path="/" element={<ErrorBoundry><Header ToToggle={ToToggle} /></ErrorBoundry>} />
              <Route path="/Ref" element={<ErrorBoundry><Ref /></ErrorBoundry>} />
              <Route path="/props" element={<ErrorBoundry><LearnProps /></ErrorBoundry>} />
              <Route path='/reduce' element={<Counter />}/>
            </Routes>
          </BrowserRouter>
        </DoubleIncrement.Provider>
        
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
