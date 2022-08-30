class GamesText {
  constructor(games) {
    this._games = games;
  }

  asString() {
    const byGroups = this._games.reduce((byGroups, g) => {
      if(!byGroups[g.group]) return { ...byGroups, [g.group]: [g] };
      else return { ...byGroups, [g.group]: [...byGroups[g.group], g] };
    }, {});
    const byToursEntries = Object.entries(byGroups).map(([groupName, groupGames]) => {
      const byTours = groupGames.reduce((byTours, g) => {
        if(!byTours[g.tour]) return { ...byTours, [g.tour]: [g] };
        else return { ...byTours, [g.tour]: [...byTours[g.tour], g] };
      }, {});
      return [groupName, byTours];
    });
    let text = '';
    byToursEntries.forEach(([groupName, groupGames]) => {
      text += groupName + '\n\n';
      Object.entries(groupGames).forEach(([tourId, tourGames]) => {
        text += `Тур ` + tourId + '\n\n';
        tourGames.forEach(g => {
          const date = new Date(+g.time).toLocaleString();
          const teams = g.teams.join('-');
          const score = g.score ? g.score.join(':') : '?:?';
          text += `${date}\n ${teams} ${score}\n\n`
        })
      });
    });
    return text;
  }
}

module.exports = GamesText;
