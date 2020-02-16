import parser from '../../config/parser';

class GameController {
  index() {
    return (request, res) => {
      res.json(parser.toObject());
    };
  }

  show() {
    return (request, res) => {
      const game = parser.toObject()[`game_${request.params.id}`];
      if (game) {
        res.json(game);
      } else {
        res.json({ error: `Game ${request.params.id} not found` }).status(404);
      }
    };
  }
}

export default new GameController();
