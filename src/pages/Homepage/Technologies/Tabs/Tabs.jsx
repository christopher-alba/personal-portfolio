import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Children, useState } from "react";
import { MainDiv, TabButton } from "./styled";

const Tabs = ({ children }) => {
  const [selectedTabName, setSelectedTabName] = useState(
    Children.map(children, (child) => child)[0].props.className
  );
  const handleTabClick = (name) => {
    setSelectedTabName(name);
  };
  return (
    <MainDiv>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {Children.map(children, (child) => {
          return (
            <TabButton
              className={
                selectedTabName === child.props.className ? "active" : ""
              }
              onClick={() => handleTabClick(child.props.className)}
            >
              {child.props.className === selectedTabName && (
                <FontAwesomeIcon icon={faArrowRight} />
              )}{" "}
              {child.props.className}
            </TabButton>
          );
        })}
      </div>
      <div>
        {Children.map(children, (child) => child).filter(
          (child) => child.props.className === selectedTabName
        )}
      </div>
    </MainDiv>
  );
};

export default Tabs;
