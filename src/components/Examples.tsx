import { useState } from "react";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data.ts";
import Section from "./Section.tsx";

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
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              state
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      {/*     <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          jsx
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          state
        </TabButton>
      </menu>
      {tabContent} */}
    </Section>
  );
}
