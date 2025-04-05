
import { useState } from 'preact/hooks'
import { render } from 'preact'
//import Head from '../components/Head';

export function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div class="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <div>
      </div>
      <h1 class="text-4xl font-bold">Page6 , Preact.js</h1>
      <hr />
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          [ count ]  is {count}
        </button>
      </div>
      <hr />
      <a href="/">[ home ]</a>

    </div>
  </>
  )
}

render(<App />, document.getElementById('app')!);
