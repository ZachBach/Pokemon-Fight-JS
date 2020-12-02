// Variables for music,types sprites etc
var gameMusic = {};
spriteType = '';
types = [];
gameData = {};
attackName = '';
currAttack = {};
randNumber = 0;
enemyAttack = {};
characters = [];
defendProgressInt = null;
defendProgressComplete = 0;
progressInt = null;
progressComplete = 0;

populateVariables = () => {
  // all the music for the game
  // http://downloads.khinsider.com/game-soundtracks/album/pokemon-gameboy-sound-collection
  gameMusic = {
    opening:
      'http://66.90.91.26/ost/pokemon-gameboy-sound-collection/aipycrsoym/101-opening.mp3',
    battle:
      'http://66.90.91.26/ost/pokemon-gameboy-sound-collection/fllwdebjsg/107-battle-vs-wild-pokemon-.mp3',
    victory:
      'http://66.90.91.26/ost/pokemon-gameboy-sound-collection/csqodhnibz/108-victory-vs-wild-pokemon-.mp3',
    pikachu:
      'http://66.90.91.26/ost/pokemon-gameboy-sound-collection/hpjacpzwof/170-pikachu.mp3',
    charmander:
      'http://66.90.91.26/ost/pokemon-gameboy-sound-collection/wfwdwleyga/149-charmander.mp3',
    squirtle:
      'http://66.90.91.26/ost/pokemon-gameboy-sound-collection/soagplijvq/152-squirtle.mp3',
    bulbasaur:
      'http://66.90.91.26/ost/pokemon-gameboy-sound-collection/gvqmhhryki/146-bulbasaur.mp3',
  };
  typeSprite =
    'http://orig15.deviantart.net/24d8/f/2011/057/3/5/ge___energy_type_icons_by_aschefield101-d3agp02.png';
  types = [
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water',
  ];
};
