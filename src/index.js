function Point(x, y) {
  this.x = x;
  this.y = y;
}

function create_and_add(class_name, ihtml, container) {
  let element = document.createElement("div");
  element.className = class_name;
  element.innerHTML = ihtml;
  container.append(element);
}

let allTeams = document.getElementById("teams");
let team_goal = new Map();
let teamInGoal = new Map();

d3.csv("premier-league-goals-chances.csv", d => {
  return {
    team: d.Team,
    goal: [new Point(d.y1, d.x1), new Point(d.y2, d.x2)],
    type: d.Type,
    opp: d.Opp
  };
})
  .then(data => {
    data.map(first_team => {
      team_goal[first_team.team] = team_goal[first_team.team] || [];
      teamInGoal[first_team.team] = teamInGoal[first_team.team] || [];
      data.map(second_team => {
        if (second_team.opp === first_team.team && second_team.type === "CG") {
          teamInGoal[first_team.team].push(second_team.goal);
        }
      });
      if (first_team.type === "CG") {
        team_goal[first_team.team].push(first_team.goal);
      }
    });
  })
  .then(() => {
    let n = 1;
    for (let team in team_goal) {
      let container = document.createElement("div");
      container.className = "TeamContainer";
      let allGoals = team_goal[team];
      let inGoals = teamInGoal[team];
      container.addEventListener("mousedown", () => {
        //element from another file
        clearGoalLine();
        allGoals.forEach(vector => {
          drawGoalALine(vector[0], vector[1], "blue");
        });
        inGoals.forEach(vector => {
          drawInGoalALine(vector[0], vector[1], "red");
        });
      });

      create_and_add("number", n, container);
      create_and_add("team", team, container);
      allTeams.appendChild(container);
      n++;
    }
  });
