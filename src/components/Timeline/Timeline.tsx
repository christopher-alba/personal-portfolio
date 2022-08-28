import React, { Children, FC, ReactNode } from "react";
import {
  SpaceshipStyled,
  SVGWrapper,
  TimelineItem,
  TimelineLine,
  TimelineMain,
} from "./styled";
const Timeline: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <TimelineMain>
      <TimelineLine>
        {Children.map(children, (child) => {
          return (
            <div data-aos="fade-up">
              <SVGWrapper>
                <SpaceshipStyled />
              </SVGWrapper>
              <TimelineItem>{child}</TimelineItem>
            </div>
          );
        })}
      </TimelineLine>
    </TimelineMain>
  );
};

export default Timeline;
