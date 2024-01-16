export const chartConfigDefault = {
  // angleField: "total",
  // colorField: "type",
  paddingRight: 80,
  innerRadius: 0.6,
  label: {
    text: "total",
    style: {
      fontWeight: "bold",
    },
  },
  tooltip: {
    title: "label",
  },
  legend: {
    color: {
      title: false,
      position: "bottom",
      rowPadding: 5,
    },
  },
  state: {
    inactive: { opacity: 0.3 },
    active: { stroke: "#666", strokeWidth: 2, linkFillOpacity: 0.5 },
  },
  interaction: {
    elementHighlightByColor: {
      link: true,
    },
  },
  autoFit: true,
  height: 320,
  width: 320,
};
