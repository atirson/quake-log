# quake-log

Este projeto é um analisador de logs do jogo Quake 3 feito em NodeJS. Um arquivo de log é gerado pelo servidor do jogo, registrando o inicio, fim de jogo, as mortes, etc.

Este programa lê um arquivo .log e organiza os dados do mesmo em formato de JSON, mostrando o numero do jogo, total de kills, lista de players, quantas kills possue cada jogador e os meios de kill. O resultado do parse será algo assim:

```javascript
"game_3": {
    "total_kills": 4,
    "players": [
      "Dono da Bola",
      "Mocinha",
      "Isgalamido",
      "Zeh"
    ],
    "kills": {
      "Dono da Bola": -1,
      "Mocinha": 0,
      "Isgalamido": 1,
      "Zeh": -2
    },
    "means_of_death": {
      "MOD_ROCKET": 1,
      "MOD_TRIGGER_HURT": 2,
      "MOD_FALLING": 1
    }
  }
```

## Como executar
{ Obs: Não cheguei a devenvolver as telas mas deixei um arquivo com o projeto testado no Insomnia }
- cd quake-log && cd server
- yarn install
- yarn dev
- Instale o Insomnia e crie um workspace e faça o import do arquivo insomia.json é só clicar no nome do worspace e vai listar esta opção
- https://support.insomnia.rest/article/23-installation
