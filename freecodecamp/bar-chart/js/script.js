const drawBar = (dataset) => {
  //Set the size of the area for the chart and the margins
  let margin = {
      top: 50,
      right: 20,
      bottom: 50,
      left: 100,
    },
    width = 800,
    height = 400;

  //Declares the function to determine positioning in the "x" and "y" domain
  let minDate = dataset[0][0].substr(0, 4);
  minDate = new Date(minDate);
  let maxDate = dataset[dataset.length - 1][0].substr(0, 4);
  maxDate = new Date(maxDate);

  // x-axis: start from 0 and keep giong until the last date
  let xAxisScale = d3.time.scale().domain([minDate, maxDate]).range([0, width]);
  //y-axis
  let yAxisScale = d3.scale
    .linear()
    .domain([
      0,
      d3.max(dataset, function (d) {
        //get the 2nd column of json file
        return d[1];
      }),
    ])
    .range([height, 0]);

  //show data (nums) under the x-axis line
  let xAxis = d3.svg.axis().scale(xAxisScale).orient("bottom");
  //show data (nums) left of the y-axis line
  let yAxis = d3.svg.axis().scale(yAxisScale).orient("left");

  let tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .attr("id", "tooltip");

  function mouseOverHandler(d) {
    tooltip.transition().style("opacity", 0.8);
    tooltip
      .style({
        left: d3.event.pageX + 10 + "px",
        top: d3.event.pageY + 15 + "px",
      })
      .html(`<p> Date: ${d[0]}</p><p> Billions: ${d[1]}</p>`);

    d3.select(this).style("opacity", 0.1);
  }

  function mouseOutHandler(d) {
    tooltip.transition().style("opacity", 0);
    d3.select(this).style("opacity", 1);
  }

  function mouseMoving(d) {
    tooltip
      .style("top", d3.event.pageY - 10 + "px")
      .style("left", d3.event.pageX + 10 + "px");
    d3.select(this).style("opacity", 0.8);
  }

  /*
   * Selects the id #barGraph on the web page and appends an svg object to it of
   * the size that have set up with the width, height and margin’s.
   *
   * It also adds a g element that provides a reference point for adding our axes.
   */
  let svg = d3
    .select("#barGraph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class", "graph-svg-component")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  /*
   * Add the bars to the chart.
   * Creates the bars (selectAll("bar"))
   * and associates each of them with a data set (.data(dataset)).
   * Then append a rectangle (.append("rect"))
   * with values for x/y position and height/width as configured earlier in code.
   */
  svg
    .selectAll("bar")
    .data(dataset)
    .enter()
    .append("rect")
    .style("fill", "blue")
    .attr("class", "bar")
    .attr({
      x: function (d, i) {
        return i * (width / dataset.length);
      },
      y: function (d) {
        return yAxisScale(d[1]);
      },
      width: width / dataset.length,
      height: function (d) {
        return height - yAxisScale(d[1]);
      },
    })
    .on("mouseover", mouseOverHandler)
    .on("mousemove", mouseMoving)
    .on("mouseout", mouseOutHandler);

  //Append our x axis
  /*
   * This is placed in the correct position with:
   * .attr("transform", "translate(0," + height + ")")
   * and the text is positioned (using dx and dy)
   * and rotated: (.attr("transform", "rotate(-45)" );) so that it is aligned vertically.
   */
  svg
    .append("g")
    .attr("id", "x-axis")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-0.5em")
    .attr("dy", "-.55em")
    .attr("y", 30)
    .attr("transform", "rotate(-45)");

  //Append the y axis in a similar way and append a label: text("Value (billions)")
  svg
    .append("g")
    .attr("id", "y-axis")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -85)
    .attr("dy", "0.8em")
    .attr("text-anchor", "end")
    .text("Value (billions)");
};

//Call the data using d3.json and inside the function we call the function DrawBar
d3.json(
  "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json",
  (data) => {
    let dataset = data.data;
    drawBar(dataset);
  }
);
