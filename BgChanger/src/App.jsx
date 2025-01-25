import { useState } from 'react'
import './App.css'

function App() {

    const [color, setColor] = useState("olive")

    return (
        <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
            <div className='flex flex-wrap'>
                <h1 onClick={() => setColor("olive")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "olive" }}>Olive</h1>
                <h1 onClick={() => setColor("gold")} className='px-3 text-center py-3 font-medium text-black cursor-pointer' style={{ backgroundColor: "gold" }}>Gold</h1>

                <h1 onClick={() => setColor("skyblue")} className='px-3 text-center py-3 font-medium text-black cursor-pointer' style={{ backgroundColor: "skyblue" }}>Sky Blue</h1>

                <h1 onClick={() => setColor("violet")} className='px-3 text-center py-3 font-medium text-black cursor-pointer' style={{ backgroundColor: "Violet" }}>violet</h1>
                <h1 onClick={() => setColor("grey")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "grey" }}>Grey</h1>
                <h1 onClick={() => setColor("pink")} className='px-3 text-center py-3 font-medium text-black cursor-pointer' style={{ backgroundColor: "pink" }}>Pink</h1>

                <h1 onClick={() => setColor("MidnightBlue")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "MidnightBlue" }}>MidnightBlue</h1>
                
                <h1 onClick={() => setColor("ghostwhite")} className='px-3 text-center py-3 font-medium text-black cursor-pointer' style={{ backgroundColor: "ghostwhite" }}>White</h1>



                <h1 onClick={() => setColor("teal")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "teal" }}>Teal</h1>
                <h1 onClick={() => setColor("indigo")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "indigo" }}>Indigo</h1>
                <h1 onClick={() => setColor("slategray")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "slategray" }}>Slate Gray</h1>
                <h1 onClick={() => setColor("crimson")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "crimson" }}>Crimson</h1>
                <h1 onClick={() => setColor("turquoise")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "turquoise" }}>Turquoise</h1>
                <h1 onClick={() => setColor("orchid")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "orchid" }}>Orchid</h1>
                <h1 onClick={() => setColor("firebrick")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "firebrick" }}>Firebrick</h1>
                <h1 onClick={() => setColor("goldenrod")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{ backgroundColor: "goldenrod" }}>Goldenrod</h1>
                <h1 onClick={() => setColor("seashell")} className='px-3 text-center py-3 font-medium text-black cursor-pointer' style={{ backgroundColor: "seashell" }}>Seashell</h1>

                <h1 onClick={() => setColor("plum")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{backgroundColor : "plum"}}>Plum</h1>
<h1 onClick={() => setColor("coral")} className='px-3 text-center py-3 font-medium text-white cursor-pointer' style={{backgroundColor : "coral"}}>Coral</h1>
<h1 onClick={() => setColor("lavender")} className='px-3 text-center py-3 font-medium text-black cursor-pointer' style={{backgroundColor : "lavender"}}>Lavender</h1>

            </div>
        </div>
    )
}

export default App
