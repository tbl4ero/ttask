import React, { useState } from "react";

import { PropertiesContainer, AttributeHeader } from "./Tabs.style";

const InfoTabs = (props: any) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <PropertiesContainer direction="column">
        <PropertiesContainer>
            {props.tabs.map(({ title }: any, id: number) => (
                <AttributeHeader
                active={id === currentTab}
                onClick={() => setCurrentTab(id)}
                >
                {title}
                </AttributeHeader>
            ))}
        </PropertiesContainer>
        <PropertiesContainer>
            {props.tabs[currentTab].content}
        </PropertiesContainer>
    </PropertiesContainer>
  );
};

export default InfoTabs;
