import fs from 'fs';
import values from '../../config/values';
import Game from './Game';
import Player from './Player';

class Parser {
  constructor() {
    this.games = new Map();
    this.currentGame = 0;
  }

  addGame(game) {
    this.currentGame++;
    this.games.set(this.currentGame, game);
    return this;
  }

  toObject() {
    const ret = {};
    this.games.forEach((item, idx) => {
      ret[`game_${parseInt(idx)}`] = {
        total_kills: item.total_kills,
        players: item.playersNames(),
        kills: item.playersKills(),
      };
    });
    return ret;
  }

  readFile(logFile) {
    const lines = fs
      .readFileSync(logFile)
      .toString()
      .split('\n');
    this.parseLines(lines);
  }

  parseLines(lines) {
    let command = '';
    const lastLine = lines.length;
    let i;

    for (i = 0; i < lastLine; i++) {
      command = lines[i].match(values.get_comand);
      if (command) {
        this.checkCommand(command[1], lines[i], i);
      }
    }
  }

  checkCommand(command, line, idx) {
    switch (command) {
      case 'InitGame':
        Game.new(this, line);
        break;
      case 'ClientConnect':
        Player.new(this, line);
        break;
      case 'ClientUserinfoChanged':
        Player.update(this, line);
        break;
      case 'Kill':
        Player.kill(this, line);
        break;
      default:
        // console.log(`[INFO] Command ${command} ignored (line: ${idx})`)
        break;
    }
  }

  getCurrentGame() {
    return this.games.get(this.currentGame);
  }
}

module.exports = Parser;
