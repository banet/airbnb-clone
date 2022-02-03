import Info from './components/Info'
import Card from './components/Card'
import data from './data.js'

export default function App() {
    return (
        <main>
           <Info/>
           <section className="cards-list">
                {data.map(item => (
                    <Card key={item.id} item={item} />
                ))}
           </section>
            
        </main>
    )
}