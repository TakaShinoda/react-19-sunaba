import './App.css'
import { UseTransitionDemo } from './UseTransitionDemo'

function App() {
  return (
    <>
      {/* https://ja.react.dev/reference/react/useTransition#displaying-an-error-to-users-with-error-boundary */}
      {/* react 19 だと、react-error-boundary 入れられなかったのでまた今度試す */}
      <UseTransitionDemo />
    </>
  )
}

export default App
