import "./App.css";
import { CORE_CONCEPTS, EXAMPLES } from "./data.ts";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {

  const handleSelect = () => {
    console.log(`You Selected`);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect} >components</TabButton>
            <TabButton onSelect={handleSelect} >jsx</TabButton>
            <TabButton onSelect={handleSelect} >props</TabButton>
            <TabButton onSelect={handleSelect} >state</TabButton>
          </menu>
          動態內容
        </section>
      </main>
    </div>
  );
}

export default App;
