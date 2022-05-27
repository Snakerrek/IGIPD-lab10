d3.csv("iris.csv", (data) => {
  const unpack = (rows, key, species) => {
    return rows.map(function (row) {
      if (row["species"] === species) return row[key];
    });
  };
  const species = ["Setosa", "Versicolor", "Virginica"];
  const colors = ["rgb(256, 0, 0)", "rgb(0, 256, 0)", "rgb(0, 0, 256)"];
  let dataCombined = [];

  species.forEach((s, index) => {
    dataCombined.push({
      x: unpack(data, "sepal_length", s),
      y: unpack(data, "sepal_width", s),
      z: unpack(data, "petal_length", s),
      text: unpack(data, "petal_width", s),

      name: s,
      mode: "markers",

      marker: {
        size: unpack(data, "petal_width", s).map((r) => r * 20),
        color: colors[index],
        opacity: 0.8,
      },
      type: "scatter3d",
    });
  });
  var layout = {
    scene: {
      xaxis: {
        title: "Sepal length",
      },
      yaxis: {
        title: "Sepal width",
      },
      zaxis: {
        title: "Petal length",
      },
    },
  };
  Plotly.newPlot("myDiv", dataCombined, layout);
});
