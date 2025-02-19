import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data.ts";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (selectedButton: string) => {
    setSelectedTopic(selectedButton);
  };
  let tabContent = <p>請選擇 topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          jsx
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          state
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
