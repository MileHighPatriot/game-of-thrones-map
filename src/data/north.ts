export type NorthPlace = {
  id: string
  name: string
  region: string
  image: string
  atmosphere: string
  happened: string
  locationId: string
  season?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  far?: boolean
}

export type NorthClan = {
  id: string
  name: string
  image: string
  customs: string
  wall: string
  locationId: string
}

export type NorthFigure = {
  id: string
  name: string
  title: string
  image: string
  lore: string
  locationId: string
  season?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

export type ColdOne = {
  id: string
  name: string
  image: string
  known: string
  whispered: string
  locationId: string
  season?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

export const northPlaces: NorthPlace[] = [
  {
    id: 'hardhome',
    name: 'Hardhome',
    region: 'The Shivering Sea',
    image: 'north/hardhome.jpg',
    atmosphere:
      'A fishing village on a frozen bite of coast: driftwood huts, hide tents, and a harbor that never quite thaws. For a generation it was the closest thing the Free Folk had to a town. The sea is black. The wind comes off the ice without asking.',
    happened:
      'Jon Snow sails here in season 5 to bring the Free Folk south of the Wall. The Night King walks the frozen strand, looks Jon in the eye, and raises every corpse on the beach. Hardhome stops being a refuge. It becomes a demonstration.',
    locationId: 'hardhome',
    season: 5,
  },
  {
    id: 'fist',
    name: 'Fist of the First Men',
    region: 'The Haunted Forest',
    image: 'north/fist.jpg',
    atmosphere:
      'A bare hill with a broken ring of ancient stone — a fist closed against the sky. The First Men held it when the world was younger. The Night’s Watch finds dragonglass in its guts and thinks, for one night, that they have been given a weapon.',
    happened:
      'Jeor Mormont camps the Great Ranging here. Sam Tarly pockets obsidian. Then the snows start screaming. The Watch is broken on this hill; the survivors crawl to Craster’s with the knowledge that the dark is not a story.',
    locationId: 'fist',
    season: 2,
  },
  {
    id: 'crasters-keep',
    name: 'Craster’s Keep',
    region: 'The Haunted Forest',
    image: 'north/crasters-keep.jpg',
    atmosphere:
      'Not a keep in any southern sense: a sod-and-timber sty, sheep bones in the yard, a roof that leaks smoke. Craster keeps his daughters as wives and gives his sons to the wood. The Watch uses him because the maps have no other fire.',
    happened:
      'Mormont’s shattered ranging crawls here. The mutiny is over bread and fear. The Old Bear is murdered in his host’s hall. Sam takes Gilly and a baby south. The sons left in the snow do not stay dead.',
    locationId: 'crasters-keep',
    season: 3,
  },
  {
    id: 'raven-cave',
    name: 'Cave of the Three-Eyed Raven',
    region: 'The Frostfangs',
    image: 'north/raven-cave.jpg',
    atmosphere:
      'A weirwood root-hall under the mountains. Pale roots like frozen veins. A face in the wood that has been watching since before the Andals had names. The air tastes of earth and old sap. Time is thinner here than ice.',
    happened:
      'Bran, Meera, Jojen, Hodor, and Summer reach the last greenseer. Bran learns to see. The Night King marks him. The dead find the door. Hodor holds it. The cave falls, and the world’s memory has to walk.',
    locationId: 'raven-cave',
    season: 6,
  },
  {
    id: 'haunted-forest',
    name: 'The Haunted Forest',
    region: 'Beyond the Wall',
    image: 'north/haunted-forest.jpg',
    atmosphere:
      'Pines so dark they eat the noon. Weirwoods with faces the First Men cut and never explained. The Watch rangings start here and often end here. The Free Folk call it simply the wood. Southerners add the word haunted because they are new to being watched.',
    happened:
      'Will sees the Others in the first hour of the story. Jon takes his vows before a heart tree instead of a sept. Ygritte and Jon shelter in a cave of this forest. Every ranging that mattered walked these trunks before it learned what the snow was hiding.',
    locationId: 'haunted-forest',
    season: 1,
  },
  {
    id: 'frostfangs',
    name: 'Frostfangs / Skirling Pass',
    region: 'The Frostfangs',
    image: 'north/frostfangs.jpg',
    atmosphere:
      'A spine of ice and granite west of the haunted wood. The Skirling Pass is a knife-cut through it, wind that can take a man off his feet, and no southern road worth the name. Mance’s host used these heights the way other armies use maps.',
    happened:
      'Jon Snow climbs with the Free Folk through this pass to take the Wall from the south side of the argument. The mountains do not care who kneels. They only decide who is still standing when the wind stops.',
    locationId: 'frostfangs',
    season: 3,
  },
  {
    id: 'thenn',
    name: 'Thenn',
    region: 'A mountain vale',
    image: 'north/thenn.jpg',
    atmosphere:
      'A high vale of black rock and a frozen river, farther north than most Free Folk will winter. The Thenns keep bronze, laws, and a Magnar. They are the closest the True North comes to a kingdom, and they would spit at the word.',
    happened:
      'Styr, Magnar of Thenn, leads his people south with Mance, climbs the Wall, and dies in Castle Black’s yard. The vale remains. Whether anyone still forges bronze there, the south does not know — and does not ask.',
    locationId: 'thenn',
    season: 4,
    far: true,
  },
  {
    id: 'always-winter',
    name: 'Lands of Always Winter',
    region: 'Where the maps fail',
    image: 'north/always-winter.jpg',
    atmosphere:
      'The parchment goes white. No roads. No keeps. No maester’s chain long enough. What lives here does not name itself for southern ears. The First Men said the Long Night came from this waste. They built a wall and tried to forget the rest.',
    happened:
      'Bran sees a weirwood and a First Man bound to it, a shard of dragonglass in his heart: the birth of the Night King, if the show’s vision is to be trusted. The books have not walked this far. The atlas marks a place. It does not pretend to know it.',
    locationId: 'always-winter',
    season: 6,
    far: true,
  },
]

export const northClans: NorthClan[] = [
  {
    id: 'thenns',
    name: 'The Thenns',
    image: 'north/thenns.jpg',
    customs:
      'They keep Magnars, bronze armor, and laws the other Free Folk call southern. In the books they scar their cheeks and mine metal in a vale the ice has not yet taken. They raid with discipline. They eat the dead of their enemies when the hunger is honest — a rite the show flattens into a threat.',
    wall:
      'A wall is a dare. The Magnar climbed it with Mance because a kingdom of ice still has to eat, and because the real enemy was already walking behind them.',
    locationId: 'thenn',
  },
  {
    id: 'hornfoots',
    name: 'The Hornfoots',
    image: 'north/hornfoots.jpg',
    customs:
      'They walk the snow barefoot until the soles horn over. A southern maester would call it ruin. They call it not losing your boots to a thaw. They hunt the foothills of the Frostfangs and keep few tents worth stealing.',
    wall:
      'The Wall is a southern boast made of frozen water. A Hornfoot does not kneel to ice. He walks on it.',
    locationId: 'frostfangs',
  },
  {
    id: 'ice-river',
    name: 'Ice-river clans',
    image: 'north/ice-river.jpg',
    customs:
      'They winter on the frozen rivers in the far northwest, poorer and hungrier than the forest clans. The Watch’s old rangers swore some of them ate men when the game failed. How much of that is truth and how much is a crow’s scare-story, no one south of the Wall ever checked.',
    wall:
      'They do not think about the Wall until the cold behind them leaves no other direction. Then it is only a fence with food on the other side.',
    locationId: 'always-winter',
  },
  {
    id: 'cave-dwellers',
    name: 'Cave dwellers',
    image: 'north/cave-dwellers.jpg',
    customs:
      'They live in the deep Frostfangs, in holes the sun never finds. Bone charms, root-fires, a language even other Free Folk hear as a growl. They come out to raid and go back in. The cave is the keep. The mountain is the wall they actually trust.',
    wall:
      'Seven hundred feet of ice is a southern problem. A cave has a mouth you can hold with six spears and a dark you already know.',
    locationId: 'frostfangs',
  },
  {
    id: 'frozen-shore',
    name: 'The Frozen Shore',
    image: 'north/frozen-shore.jpg',
    customs:
      'Seal-fur, walrus ivory, chariots of bone on the pack ice of the Shivering Sea. They fish a sea that wants them dead and follow the ice when it moves. The books give them more names than the show ever had time to say.',
    wall:
      'The Wall does not reach the water the way they live. Eastwatch is a rumor with a tower. The sea is the older road.',
    locationId: 'hardhome',
  },
]

export const northFigures: NorthFigure[] = [
  {
    id: 'mance',
    name: 'Mance Rayder',
    title: 'King-Beyond-the-Wall',
    image: 'north/mance.jpg',
    lore:
      'A brother of the Night’s Watch who rode off, took a wildling wife, and spent years making a people out of a hundred clans that would rather steal from each other. He sang more than he shouted. He united the Free Folk because he had seen what was coming behind them, not because he wanted a crown. Stannis burns a man under a glamour. The King-Beyond-the-Wall dies in a tent, knifed while the south is still arguing about whose war this is.',
    locationId: 'castle-black',
    season: 4,
  },
  {
    id: 'tormund',
    name: 'Tormund Giantsbane',
    title: 'Tall-talker · Mance’s captain',
    image: 'north/tormund.jpg',
    lore:
      'The Free Folk’s loudest proof that they are not one thing. He boasts of bears and milk and murders, and then keeps a promise to a crow. He fights at Castle Black, Hardhome, Eastwatch, and Winterfell. When the thrones are finished he walks back beyond the Wall with Ghost, which is the only peace he would have trusted. He never learned to kneel. The story finally stops asking.',
    locationId: 'hardhome',
    season: 5,
  },
  {
    id: 'ygritte',
    name: 'Ygritte',
    title: 'Spearwife · kissed by fire',
    image: 'north/ygritte.jpg',
    lore:
      'She captures Jon Snow, loves him in a cave, and never quite forgives him for being a crow when it counts. She climbs the Wall, raids the Gift, and is shot in Castle Black’s yard by a boy who does not know what she meant. She dies looking at Jon, still trying to make a joke of it. You know nothing — said as a tenderness, then as a wound, then as a last true thing.',
    locationId: 'castle-black',
    season: 4,
  },
  {
    id: 'craster',
    name: 'Craster',
    title: 'A keep, a crime, a custom',
    image: 'north/crasters-keep.jpg',
    lore:
      'He keeps his own blood as wives and pays the wood in sons. The Watch calls him an ally because hunger makes ugly maps. The Free Folk call him a thing they would have burned out if the cold had left them the time. He dies on his own floor, and the bargain he made with the dark does not die with him.',
    locationId: 'crasters-keep',
    season: 3,
  },
  {
    id: 'styr',
    name: 'Styr',
    title: 'Magnar of Thenn',
    image: 'north/thenns.jpg',
    lore:
      'He leads Thenns over the Wall with Mance: bronze, scars, and a contempt for crows that needs no speech. He dies in Castle Black’s yard in the same night Ygritte does. The vale that made him is still up there, farther than most southron chains will stretch.',
    locationId: 'thenn',
    season: 4,
  },
  {
    id: 'osha',
    name: 'Osha',
    title: 'A wildling who walked south',
    image: 'north/haunted-forest.jpg',
    lore:
      'Taken in the wolfswood, she stays because the true north is already dying behind her. She carries Bran and Rickon out of a fallen Winterfell, teaches southern boys that the cold has a mind, and pays for that teaching later at the hands of Ramsay’s men. She is proof the Free Folk were never only a horde at the gate. Some of them tried to save the realm’s children and were not sung.',
    locationId: 'winterfell',
    season: 2,
  },
]

export const coldOnes: ColdOne[] = [
  {
    id: 'others',
    name: 'The Others / White Walkers',
    image: 'north/others.jpg',
    known:
      'The show names them White Walkers: ice-pale, armored in frost, armed with blades that drink steel. They are unmade by dragonglass and Valyrian steel. The Night King is their first, a First Man bound to a weirwood with a shard of obsidian by the Children of the Forest — a weapon that learned to walk. They do not speak. They do not bargain. They raise what they kill.',
    whispered:
      'The books still call them the Others. Their language is a sound like cracking ice. They lay wights in artful rings. They steal Craster’s sons. What they want — a world of always winter, a revenge, an ending of memory — is guessed at by men who have not lived to write the answer. The atlas records the guess. It does not close the book.',
    locationId: 'always-winter',
    season: 6,
  },
  {
    id: 'wights',
    name: 'Wights',
    image: 'north/wights.jpg',
    known:
      'The dead, risen. Blue in the eye, frost in the joint, as strong as the body they used to wear. Fire unmakes them. Ordinary steel does not. At Hardhome the Night King raises a beach of them with one gesture. At Winterfell they climb the walls in a single black tide. When he shatters, they shatter with him.',
    whispered:
      'A wight remembers enough to use a tool, a door, a child’s name. Whether anything of the person remains is a question the Watch answers with oil and a torch. The books have not yet spent this coin. The show spends it all in one night.',
    locationId: 'hardhome',
    season: 5,
  },
  {
    id: 'giants',
    name: 'Giants and mammoths',
    image: 'north/giants.jpg',
    known:
      'They are the old people of the wood, not monsters in their own telling. Mag the Mighty dies in Castle Black’s tunnel, holding a gate that was built to keep his kind out. Wun Wun fights for Jon at the Battle of the Bastards and is shot to death in Winterfell’s yard. Mammoths carried the Free Folk to war and died on the ice.',
    whispered:
      'There were more of them when the Wall was new. The Children knew their names. South of the Gift they are a rhyme. North of it they are a people running out of room, the way everything in the True North is running out of room.',
    locationId: 'castle-black',
    season: 4,
  },
]

export const wallFromNorth = {
  image: 'north/wall-from-north.jpg',
  gate: 'north/gate.jpg',
  abandoned: 'north/abandoned-castles.jpg',
  lede: 'From the south the Wall is a shield. From the north it is a cliff that learned to say no.',
  body: [
    'Seven hundred feet of ice, older than any house still sitting a throne. The Free Folk do not see a wonder of the world. They see a fence built by men who stole the summer and then locked the door. Climb it, and you are a raider. Beg at a gate, and you are a problem for a Lord Commander who has forgotten why the ice was poured.',
    'Nineteen castles were raised along it. By the time the dead walk, three are manned. The rest are timber and snow: empty yards, frozen winches, names the Watch recites like a prayer they no longer mean. Westwatch-by-the-Bridge. Snowgate. The Nightfort, where a king’s rat-cook and a corpse queen are the only tenants left in the stories. From the north those keeps are black teeth in a white jaw, and most of them are broken.',
    'The gates face south in the minds of kings. The tunnels run through. A portcullis in the ice, a chain, a dark that takes a long time to walk. The Free Folk who come this way are not invading a realm. They are leaving a grave. Jon Snow understands it at Hardhome. Tormund understood it first. The Wall was not built to keep out men. The men came anyway, because the thing it was built for was finally moving.',
  ],
  locationId: 'the-wall',
}

export const whyTheWall = {
  image: 'north/long-night.jpg',
  kicker: 'The forgotten history',
  title: 'Why the Wall was built',
  lede: 'A night that lasted a generation. A dawn the south no longer believes. Ice, raised against the dark, then used against the living.',
  body: [
    'The Long Night is the oldest war the histories still bother to spell. A winter that did not break. A darkness that did not lift. The Others walked, and the dead walked with them, and the First Men and the Children of the Forest made a peace because the alternative was an ending with no songs in it.',
    'What broke the night depends on who is talking. The north remembers a last hero and a sword that drank light. The Citadel prefers a measurable dawn. The Free Folk say the cold was beaten back, not beaten. The Wall went up afterward: ice and old spells, a wound across the continent, manned by a Watch that was meant to be the shield of the realms of men — all of them, not only the ones with sigils.',
    'Eight thousand years is long enough for a purpose to rot. The Watch became a dumping-ground for bastards, criminals, and spare sons. The enemy became wildlings, because wildlings could be seen and buried. The true north thinned. Knowledge thinned with it. By the time a boy finds a direwolf in the snow, most of Westeros is certain that winter is only weather and the Wall is only a border.',
    'It was never only a border. It was a lock. The key was forgotten on purpose. This wing of the atlas is the inventory of what was locked away: the places, the peoples, the cold ones, and the view from the side of the ice that never got a maester.',
  ],
  locationId: 'the-wall',
}
