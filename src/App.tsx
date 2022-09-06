import './App.css'
import { useClock } from './hooks/useClock'

export const App = () => {
  const time = useClock()

  return (
    <div className="App">
      <h1>{`${time}`}</h1>
    </div>
  )
}
