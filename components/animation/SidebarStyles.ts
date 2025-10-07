import React, { useEffect, useRef } from "react";

export const container: React.CSSProperties = {
  position: "absolute",
  top: 0,
  right: 0,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "stretch",
  flex: 1,
  width: 300,
  height: "100vh",
  zIndex: 9,
};

export const nav: React.CSSProperties = {
  width: 300,
  position: "relative",
};

export const background: React.CSSProperties = {
  backgroundColor: "#f5f5f5f5",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: 300,
  height: "100%",
};

export const toggleContainer: React.CSSProperties = {
  outline: "none",
  border: "none",
  position: "absolute",
  top: 18,
  right: 0,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",
  zIndex: 10,
};

export const list: React.CSSProperties = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  position: "absolute",
  top: 80,
  width: 230,
  zIndex: 5,
};

export const listItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
  margin: 0,
  listStyle: "none",
  marginBottom: 20,
  cursor: "pointer",
};

export const iconPlaceholder: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  flex: "40px 0",
  marginRight: 20,
};

export const textPlaceholder: React.CSSProperties = {
  borderRadius: 5,
  width: 200,
  height: 20,
  flex: 1,
};
export const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
