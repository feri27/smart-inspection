import ReactFlow, { MarkerType } from "react-flow-renderer";
const position = { x: 0, y: 0 };
const edgeType = "smoothstep";
const node_style = {
  color: "Black",
  title: "uploaded_data",
  content: "Dataaaaaaa",
  backgroundColor: "White",
  width: "150",
  height: "100",
  borderColor: "#aaa"
};

export const initialNodes = [
 
  {
    id: "1b",
    type: "input",
    data: { label: "External Data (Gireve-Stat)" },
    position
  },
  
  {
    id: "2aa",
    type: "output",
    data: { label: "Gireve-Stat History" },
    position
  },
  {
    id: "2b",
    data: { label: "Gireve-Dyn Subdomain" },
    position
  },
  {
    id: "2bb",
    type: "output",
    data: { label: "Gireve-Dyn History" },
    position
  },
  {
    id: "2c",
    data: { label: "Search Engine" },
    position
  },
  {
    id: "2d",
    type: "output",
    data: { label: "Search Engine History" },
    position
  },
  {
    id: "3",
    data: { label: "Gireve Domain" },
    position
  },
  {
    id: "2e",
    data: { label: "Gireve-Territories Subdomain" },
    position
  },
  {
    id: "5",
    type: "input",
    data: { label: "External Data (Territories API)" },
    position
  },
  {
    id: "6a",
    data: { label: "Territories Subdomain" },
    position
  },
  {
    id: "6aa",
    data: { label: "Territories History" },
    position
  },
  {
    id: "7",
    type: "input-output",
    data: { label: <>CustomNode</> },
    position
  }
];

export const initialEdges = [
  { id: "e1a3", source: "1a", target: "3", type: edgeType, animated: true },
  { id: "e1b3", source: "1b", target: "3", type: edgeType, animated: true },
  {
    id: "e32a",
    source: "3",
    target: "2a",
    type: edgeType,
    animated: true,
    style: { stroke: "green" }
  },
  {
    id: "e22b",
    source: "3",
    target: "2b",
    type: edgeType,
    animated: true,
    style: { stroke: "Peru" }
  },
  {
    id: "e2a2aa",
    source: "2a",
    target: "2aa",
    label: "Save into Object Store",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    type: edgeType,
    animated: true,
    style: { stroke: "green" },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e2b2bb",
    source: "2b",
    target: "2bb",
    label: "Save into Object Store",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    type: edgeType,
    animated: true,
    style: { stroke: "Peru" },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e22c",
    source: "3",
    target: "2c",
    type: edgeType,
    animated: true,
    style: { stroke: "red" }
  },
  {
    id: "e2c2d",
    source: "2c",
    target: "2d",
    type: edgeType,
    animated: true,
    style: { stroke: "Teal" },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e2a2e",
    source: "2a",
    target: "2e",
    type: edgeType,
    animated: true,
    style: { stroke: "MidnightBlue" },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e2b2e",
    source: "2b",
    target: "2e",
    type: edgeType,
    animated: true,
    style: { stroke: "MidnightBlue" },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  { id: "e56", source: "5", target: "6a", type: edgeType, animated: true },
  {
    id: "e6a6aa",
    source: "6a",
    target: "6aa",
    label: "Save into Object Store",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    type: edgeType,
    animated: true,
    style: { stroke: "DarkMagenta" },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e62c",
    source: "6a",
    target: "2c",
    type: edgeType,
    animated: true,
    style: { stroke: "red" }
  },
  {
    id: "e62e",
    source: "6a",
    target: "2e",
    type: edgeType,
    animated: true,
    style: { stroke: "MidnightBlue" },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e2a2c",
    source: "2a",
    target: "2c",
    type: edgeType,
    animated: true,
    style: { stroke: "red" }
  },
  {
    id: "e2b2c",
    source: "2b",
    target: "2c",
    type: edgeType,
    animated: true,
    style: { stroke: "red" }
  }
];
