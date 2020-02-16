import values from '../../config/values';

class Player {
  constructor(line = '') {
    this.id = Player.getPlayerId(line);
    this.username = '';
    this.kills = 0;
    this.deadsByWorld = 0;
  }

  static getPlayerId(line) {
    const regex = /Client(Connect|UserinfoChanged): ([0-9]*)/;
    const playerId = line.match(regex);
    return playerId ? playerId[2] : 0;
  }

  static new(parser, line) {
    const currentGame = parser.getCurrentGame();
    currentGame.newPlayer(new Player(line));
  }

  static update(parser, line) {
    const currentGame = parser.getCurrentGame();
    const player = currentGame.getPlayerById(Player.getPlayerId(line));

    if (player) {
      player.update(line);
    } else {
      console.log(`[WARNING] Could not find player by ID (line: ${line})`);
    }
  }

  static kill(parser, line) {
    const currentGame = parser.getCurrentGame();
    const regex = /Kill: ([0-9]+) ([0-9]+)/;
    const players = line.match(regex); 
    if (players) {
      currentGame.addKill();
      if (players[1] == values.world_id) {
        currentGame.players.get(players[2]).deadsByWorld++;
      } else {
        currentGame.players.get(players[1]).addKill();
      }
    } else {
      console.log(
        `[WARNING] Could not find players to count kills (line: ${line})`
      );
    }
  }

  calcScore() {
    const score = this.kills - this.deadsByWorld;
    return score < 0 ? 0 : score;
  }

  addKill() {
    this.kills++;
  }

  removeKill() {
    const killsToBeRemoved = this.kills > 0 ? 1 : 0;
    this.kills -= killsToBeRemoved;
  }

  update(line) {
    this.username = line.match(
      /ClientUserinfoChanged: [0-9]* n\\(.*)\\t\\[0-9]+\\model/
    )[1];
  }
}

module.exports = Player;
