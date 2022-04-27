import React, { Children, useState } from "react";
import {
  ChildrenWrapper,
  MainDiv,
  TabButton,
  TabButtonsWrapper,
} from "./styled";

const Tabs = ({ children }) => {
  const [selectedTabName, setSelectedTabName] = useState(
    Children.map(children, (child) => child)[0].props.className
  );
  const handleTabClick = (name) => {
    setSelectedTabName(name);
  };
  return (
    <MainDiv>
      <TabButtonsWrapper>
        {Children.map(children, (child) => {
          return (
            <TabButton
              className={
                selectedTabName === child.props.className ? "active" : ""
              }
              onClick={() => handleTabClick(child.props.className)}
            >
              {child.props.className}
            </TabButton>
          );
        })}
      </TabButtonsWrapper>
      <ChildrenWrapper>
        {Children.map(children, (child) => child).filter(
          (child) => child.props.className === selectedTabName
        )}
      </ChildrenWrapper>
    </MainDiv>
  );
};

export default Tabs;
