import React from "react";
import styled from "styled-components";

export type Props = {
  children: Array<string | JSX.Element> | string | JSX.Element;
  maxWidth?: number | string;
  isGrid: boolean;
};

const gridStyle = (maxWidth: number | string) => {
  return `display:grid; grid-template-columns: 1fr min(${maxWidth}px, 100% - 20px * 2) 1fr; & > * { grid-column:2;}`;
};

const Container = (props: Props) => {
  const { children, maxWidth, isGrid } = props;
  return (
    <SContainer maxWidth={maxWidth} isGrid={isGrid}>
      {children}
    </SContainer>
  );
};

export default Container;

const SContainer = styled.div<Props>`
  max-width: ${(props) =>
    props.maxWidth && typeof props.maxWidth === "number"
      ? `${props.maxWidth}px`
      : "unset"};
  margin-right: auto;
  margin-left: auto;
  ${(props) =>
    props.isGrid && typeof props.maxWidth === "number"
      ? `${gridStyle(props.maxWidth)}`
      : ""};
`;
