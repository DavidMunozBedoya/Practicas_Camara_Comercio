# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


- Instalacion de tailwind
Dependencias: 
-yarn add -D @tailwindcss/vite 
-yarn install
-yarn dev

configurar archivo index.css borrando todo su contenido y solo importando tailwind
@import 'tailwindcss';

configurar archivo vite.config.js adicionando la importación:
import tailwindcss from '@tailwindcss/vite'

añadimos la linea en los pluguins:
tailwindcss(), 


en app.jsx incluimos el archivo de prueba con las clases de taildwind:
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
        Vite + React + Tailwind v4
      </h1>
      <p className="text-slate-400 text-lg">
        La instalación se ha completado con éxito.
      </p>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition-all font-semibold rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95"
      >
        Contador: {count}
      </button>
    </div>
  )
}

export default App

