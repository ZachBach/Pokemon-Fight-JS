// Variables for music,types sprites etc
var gameMusic = {};
spriteType = '';
types = [];
gameState = {};
attackName = '';
currAttack = {};
randNumber = 0;
enemyAttack = {};
pokeMon = [];
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

  // Initialize the state of the game
  gameState = {
    step: 1,
    hero: {},
    enemy: {},
  };

  //   Attack Variables
  attackName = '';
  currAttack = {};
  randNumber = 0;
  enemyAttack = {};
  defendProgressInt = null;
  defendProgressComplete = 0;
  progressInt = null;
  progressComplete = 0;

  // Avaiable Pokemon
  pokeMon = [
    {
      name: 'pikachu',
      type: 'electric',
      weakness: ['fighting'],
      resistance: ['steel'],
      img: {
        default:
          'http://vignette2.wikia.nocookie.net/all-anime-characters/images/7/7b/Cute_pikachu_with_hat_by_mlpochea-d63xlom.png/revision/latest?cb=20150108111832',
        front:
          'http://rs1263.pbsrc.com/albums/ii631/Pokemon-Vampire-Knight-lover/pikachu_.gif~c200',
        back:
          'http://vignette4.wikia.nocookie.net/pokemon/images/5/5b/Pikachu_Back_XY.gif/revision/latest?cb=20141009080948',
      },
      hp: {
        current: 1000,
        total: 1000,
      },
      attacks: [
        {
          name: 'thunder bolt',
          hp: randomNum(40, 20),
          avail: {
            total: 30,
            remaining: 30,
          },
        },
        {
          name: 'quick attack',
          hp: randNumber(30, 15),
          avail: {
            total: 15,
            remaining: 15,
          },
        },
        {
          name: 'lightning',
          hp: randNumber(100, 50),
          avail: {
            total: 5,
            remaining: 5,
          },
        },
        {
          name: 'headbutt',
          hp: randNumber(60, 40),
          avail: {
            total: 20,
            remaining: 20,
          },
        },
      ],
    },
    {
      name: 'squirtle',
      type: 'water',
      weakness: ['grass', 'electric'],
      resistance: ['fire', 'normal'],
      img: {
        default:
          'http://vignette3.wikia.nocookie.net/ssbb/images/7/79/Squirtle_Rojo_Fuego_y_Verde_Hoja.png/revision/latest?cb=20130907041944&path-prefix=es',
        front:
          'https://66.media.tumblr.com/ddd22fe10a485ed56a46d958c058a970/tumblr_n9lnpepqkW1scncwdo1_500.gif',
        back:
          'http://vignette3.wikia.nocookie.net/pokemon/images/d/d8/Squirtle_XY_Back_Sprite.gif/revision/latest?cb=20141031154426',
      },
      hp: {
        current: 1200,
        total: 1200,
      },
      attacks: [
        {
          name: 'bubblebeam',
          hp: randNumber(30, 15),
          avail: {
            total: 30,
            remaining: 30,
          },
        },
        {
          name: 'water gun',
          hp: randNumber(50, 25),
          avail: {
            total: 25,
            remaining: 25,
          },
        },
        {
          name: 'tackle',
          hp: randNumber(20, 10),
          avail: {
            total: 30,
            remaining: 30,
          },
        },
        {
          name: 'hydro pump',
          hp: randNumber(100, 60),
          avail: {
            total: 5,
            remaining: 5,
          },
        },
      ],
    },
  ];
};
