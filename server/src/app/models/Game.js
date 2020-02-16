class Game {
  constructor(line = '') {
    this.players = new Map();
    this.total_kills = 0;
  }

  static new(parser, line) {
    parser.addGame(new Game(line));
  }

  addKill() {
    this.total_kills++;
  }

  getPlayerById(id) {
    if (this.players.has(id)) {
      return this.players.get(id);
    }
    return null;
  }

  newPlayer(player) {
    this.players.set(player.id, player);
  }

  playersNames() {
    const result = [];
    this.players.forEach(player => {
      result.push(player.username);
    });
    return result;
  }

  playersKills() {
    const result = {};
    this.players.forEach(player => {
      result[player.username] = player.calcScore();
    });
    return result;
  }
}

module.exports = Game;
