d3.csv("data.csv", function (data) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }
  var dataToDraw = [
    {
      x: unpack(data, "x"),
      y: unpack(data, "y"),
      z: unpack(data, "z"),

      mode: "markers",

      marker: {
        size: 9,
        color: "rgb(32, 65, 123)",
        line: {
          color: "rgba(217, 217, 217, 0.14)",
          width: 0.5,
        },
        opacity: 0.8,
      },
      type: "scatter3d",
    },
  ];

  var layout = {
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },
    scene: {
      xaxis: {
        title: "X",
      },
      yaxis: {
        title: "Y",
      },
      zaxis: {
        title: "Z",
      },
    },
  };
  Plotly.newPlot("myDiv", dataToDraw, layout);
});
