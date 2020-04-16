//Call the data using d3.json and inside the function we call the function DrawBar
d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json",
  (data) => {
    let dataset = data.data;
    drawBar(dataset);
  }
);
