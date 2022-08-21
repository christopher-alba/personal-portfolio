import React, { Children, FC, ReactNode } from "react";
import { TimelineItem, TimelineLine, TimelineMain } from "./styled";
const Timeline: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <TimelineMain>
      <TimelineLine>
        {Children.map(children, (child) => {
          return (
            <TimelineItem
              randomNumberRight={Math.random() * -600 - 400}
              randomNumberTop={Math.random() * 200}
              randomNumberHeight={Math.random() * 200 + 200}
              randomNumberWidth={Math.random() * 200 + 200}
              randomNumberRight2={Math.random() * -300 - 400}
              randomNumberTop2={Math.random() * 200}
              randomNumberHeight2={Math.random() * 200 + 200}
              randomNumberWidth2={Math.random() * 200 + 200}
            >
              {child}
            </TimelineItem>
          );
        })}
      </TimelineLine>
    </TimelineMain>
  );
};

export default Timeline;
