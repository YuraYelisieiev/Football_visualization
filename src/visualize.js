let field_wrap = d3
  .select("body")
  .append("svg")
  .attr("class", "pitch")
  .attr("height", height + 20)
  .attr("width", width + 100)
  .style("background", "lightgray");

//adding end-point ending to lines
field_wrap
  .append("svg:defs")
  .append("svg:marker")
  .attr("id", "triangle")
  .attr("refX", 6)
  .attr("refY", 6)
  .attr("markerWidth", 15)
  .attr("markerHeight", 15)
  .attr("markerUnits", "userSpaceOnUse")
  .attr("orient", "auto")
  .append("path")
  .attr("d", "M 0 0 12 6 0 12 3 6")
  .style("fill", "black");

field_wrap
  .append("rect")
  .attr("height", height)
  .attr("width", width)
  .attr("fill", background_color)
  .attr("stroke", color_of_strokes)
  .attr("x", 10 + move_all_by_x)
  .attr("y", 10);

function clearGoalLine() {
  field_wrap.selectAll(".TeamContainer__goals").remove();
}

function drawGoalALine(Point1, Point2, color) {
  field_wrap
    .append("line")
    .attr("class", "TeamContainer__goals")
    .attr("x1", Point1.x - ScoredGoalsParams.XIndent)
    .attr("y1", Point1.y - ScoredGoalsParams.YIndent)
    .attr("x2", Point2.x - ScoredGoalsParams.XIndent)
    .attr("y2", Point2.y - ScoredGoalsParams.YIndent)
    //this line is taken from arguments
    .attr("stroke", color);
}

function drawInGoalALine(Point1, Point2, color) {
  field_wrap
    .append("line")
    .attr("class", "TeamContainer__goals")
    .attr("x1", MissedGoalsParams.XIndent - Point1.x)
    .attr("y1", Point1.y - MissedGoalsParams.YIndent)
    .attr("x2", MissedGoalsParams.XIndent - Point2.x)
    .attr("y2", Point2.y - MissedGoalsParams.YIndent)
    //this line is taken from arguments
    .attr("stroke", color);
}

//cant scale not created element
field_wrap
  .append("rect")
  .attr("height", PenaltyArea.height)
  .attr("width", PenaltyArea.width)
  .attr("y", PenaltyArea.y)
  .attr("x", PenaltyArea.XLeft)
  .attr("fill", background_color)
  .attr("stroke", color_of_strokes);

field_wrap
  .append("rect")
  .attr("height", PenaltyArea.height)
  .attr("width", PenaltyArea.width)
  .attr("y", PenaltyArea.y)
  .attr("x", PenaltyArea.XRight)
  .attr("fill", background_color)
  .attr("stroke", color_of_strokes);

field_wrap
  .append("rect")
  .attr("height", GoalKeeperZone.height)
  .attr("width", GoalKeeperZone.width)
  .attr("y", GoalKeeperZone.YPos)
  .attr("x", GoalKeeperZone.XLeft)
  .attr("fill", background_color)
  .attr("stroke", color_of_strokes);

field_wrap
  .append("rect")
  .attr("height", GoalKeeperZone.height)
  .attr("width", GoalKeeperZone.width)
  .attr("y", GoalKeeperZone.YPos)
  .attr("x", GoalKeeperZone.XRight)
  .attr("fill", background_color)
  .attr("stroke", color_of_strokes);

field_wrap
  .append("line")
  .attr("x1", field_center_x)
  .attr("x2", field_center_x)
  .attr("y1", 10)
  .attr("y2", height + 10)
  .attr("stroke", color_of_strokes);

field_wrap
  .append("rect")
  .attr("height", GateRect.height)
  .attr("width", GateRect.width)
  .attr("y", GateRect.YPos)
  .attr("x", GateRect.XLeft)
  .attr("fill", "transparent")
  .attr("stroke", color_of_strokes);

field_wrap
  .append("rect")
  .attr("height", GateRect.height)
  .attr("width", GateRect.width)
  .attr("y", GateRect.YPos)
  .attr("x", GateRect.XRight)
  .attr("fill", "transparent")
  .attr("stroke", color_of_strokes);

field_wrap
  .append("circle")
  .attr("r", 70)
  .attr("cx", field_center_x)
  .attr("cy", field_center_y)
  .attr("fill", "transparent")
  .attr("stroke", color_of_strokes);
