export type ThroneChapter = {
  id: string
  nav: string
  kicker: string
  title: string
  lede: string
  body: string[]
  image: string
  locationId: string | null
}

export type ThronePiece = {
  id: string
  name: string
  image: string
  what: string
  lesson: string
  remains: string
}

export type ThroneFace = {
  id: string
  name: string
  bench: 'The last dragon' | 'Stags' | 'The Hand' | 'The end'
  office: string
  image: string
  role: string
  fate: string
  locationId: string | null
}

export const throneQuote = {
  line: 'Aegon forged it so a king should never sit easy.',
  attrib: 'Viserys I, remembered',
}

export const throneBenches: ThroneFace['bench'][] = [
  'The last dragon',
  'Stags',
  'The Hand',
  'The end',
]

export const throneChapters: ThroneChapter[] = [
  {
    id: 'forging',
    nav: 'Forging',
    kicker: 'Chapter I · The Aegonfort',
    title: 'A Thousand Swords in One Fire',
    lede: 'The Conquest ended in a yard of surrendered steel. Balerion finished what the lords would not.',
    image: 'throne/forging.jpg',
    locationId: 'kings-landing',
    body: [
      'Aegon Targaryen did not want a pretty chair. He wanted the men who had bent to remember what bending cost. After the Field of Fire and the Submission of Storm’s End, after Harrenhal cooked in its own towers and Dorne still would not kneel, the swords of the conquered were piled on the highest hill at the mouth of the Blackwater. The Aegonfort was timber and mud then. The fire that came for the pile was not.',
      'Balerion the Black Dread was large enough to swallow a mammoth. His flame was not campfire orange. It was the white of a forge that has gone too far, the heat that turns iron into a liquid and stone into glass. The songs say a thousand blades went in. The songs like round numbers. What came out was not a thousand anything. It was one ugly mass of fused enemies, still edged, still pointed, still able to cut the man who sat it.',
      'That is the whole joke of the Iron Throne, and it is not a joke. Gold would have said wealth. Ivory would have said peace. Aegon sat a weapon. He sat it in a hall that did not exist yet, on a hill that would become a city that would become a kingdom, and he made the sitting part of the ruling. You climbed. You bled if you were careless. You looked down. Everyone else looked up.',
      'The books are plain about the forging and quiet about the hour. The show never films the dragon at the pile. It films the result for eight seasons, and that is enough. Every later king is sitting inside Balerion’s mouth. The fire went out. The heat, men said, did not.',
      'Maegor finished the Red Keep around the chair his father had made. The timber fort came down. Stone went up. The throne stayed. It is older than the room it lives in. That is the first thing to understand, and the last: the Iron Throne is not furniture the castle was built to hold. The castle is a box built around a threat.',
    ],
  },
  {
    id: 'swords',
    nav: 'The Swords',
    kicker: 'Chapter II · The object',
    title: 'Not a Seat. A Heap.',
    lede: 'Hilts, tangs, broken points, the swords of men who had names. Aegon stacked them until they were a country.',
    image: 'throne/blades.jpg',
    locationId: 'kings-landing',
    body: [
      'Look at it without the songs. It is a pile. Crossguards jammed through other crossguards. Fullers running the wrong way. A falchion melted into a longsword melted into something that might have been an axe. The show’s prop is Gemma Jackson’s mountain of blades, taller than a man standing on another man’s shoulders, asymmetric because a real heap is never fair. The books describe a monster even larger: a chair you climb, with steps of slag, so high the king’s feet dangle and a petitioner’s neck hurts from looking.',
      'The blades were not sanded down. That is the design. Aegon could have had a smooth iron block. He left the points. He left the edges. Viserys I, who sat it longer than most and liked to talk, said the Conqueror had seen something in those swords: a king should never sit easy. The show lets the chair say it without the speech. No arms you can rest on. No cushion that lasts. A back like a cage of spears. Sit still, or it sits in you.',
      'Folk in Flea Bottom have a simpler version. The throne cuts the unworthy. Maegor the Cruel was found dead on it in the night, opened by the metal, and the singers still argue whether a man did that or the chair did. The show never gives Maegor an hour. It gives Aerys, who cut himself so often the court had a nickname it did not use to his face. King Scab. The blades do not care which story you prefer. They are still sharp.',
      'A thousand is a liturgy’s number. Seven kingdoms, seven gods, a thousand swords. What matters is the inventory: every lord who came in and laid steel down instead of a head. The Iron Throne is a trophy room that you are required to sit in. It is also a warning written in the only language Westeros never fails to read.',
    ],
  },
  {
    id: 'easy',
    nav: 'Never Easy',
    kicker: 'Chapter III · What it does',
    title: 'The Chair That Rules',
    lede: 'It is not a metaphor that got loose. Sit it and you are the realm. Cut yourself and the realm notices.',
    image: 'throne/ugly.jpg',
    locationId: 'kings-landing',
    body: [
      'In Westeros the Iron Throne is the government. Not the Red Keep, not the crown, not the map. Men say the Iron Throne the way other countries say the crown: as a thing that can be taken, held, lost, and bled on. Stannis claimed it by law. Renly claimed it by love. Robb never claimed it; he claimed a different kingdom and died for a smaller word. Balon wanted the Seastone Chair and a joke about the rest. Five kings, and only one chair in the room that counted.',
      'The sitting is the job. Robert found that out and went hunting. Joffrey found it out and made cruelty into policy because the height felt like permission. Tommen sat it and wanted to be kind, which the chair cannot teach. Cersei sat it in black after she had burned the only other government in the city. Daenerys walked toward it through ash and never put her weight down. Bran inherited a realm whose prize had just been melted by a dragon who had opinions about chairs.',
      'What the chair does, practically: it raises you. Petitioners kneel on stone. You look down the length of a hall built to make that look into a fact. The Small Council can run the realm from a table. The Iron Throne is where the realm is shown who is running it. Ned sat it as Hand and discovered that a just man on an ugly chair is still only as strong as the gold cloaks at the door.',
      'What it does, unpractically, is cut. Aerys would not have a blade near him and then sat inside a thousand of them. Jaime learned the difference between a king and a chair the night he put a sword through the back of the first and did not sit the second. The throne does not make you king. It makes the king visible. That is usually enough to get someone killed.',
    ],
  },
  {
    id: 'hall',
    nav: 'Great Hall',
    kicker: 'Chapter IV · The Red Keep',
    title: 'A Room Built Around a Threat',
    lede: 'Doors at one end. A dais at the other. Between them, the long walk every claimant has to take with everyone watching.',
    image: 'throne/hall.jpg',
    locationId: 'kings-landing',
    body: [
      'The Great Hall of the Red Keep is a machine for approaching the chair. You enter under the eyes of whoever holds the door. You cross a floor long enough to think twice. The throne does not come to you. By the time you are close enough to speak, you have already been made small. Aegon understood spectacle. Maegor understood stone. Together they made a room that does the kneeling for you.',
      'In the books the hall was a reliquary of dragons. The skulls of the Targaryen beasts stood in two rows: Balerion’s jaws wide enough for a horse, the last hatchlings no larger than hounds. Robert had them hauled to the cellars and hung hunting tapestries instead — stags, boars, the forest he preferred to the court. The show keeps the skulls downstairs, where Tywin can walk past a monster’s head and look like a man who put it there. Upstairs the hall is windows, torches, and the chair.',
      'Robert’s tapestries were a confession. He had won the throne and could not stand what it was. He sat it when he had to, in a borrowed crown, and left the real work to Jon Arryn. The hall smelled of smoke and wine and dogs. The chair did not get more comfortable. It just got a drunker man on it.',
      'By the last season the windows are gone and the roof is a suggestion. The long walk is rubble. The machine still works. Daenerys crosses what is left of the floor and the chair is still there, black against the light, waiting for a weight that never comes. Drogon has the last opinion in the room.',
    ],
  },
  {
    id: 'heat',
    nav: 'The Heat',
    kicker: 'Chapter V · Dragonfire',
    title: 'The Fire That Stayed',
    lede: 'Balerion’s work was not a clean pour. The seams still look like they remember the temperature.',
    image: 'throne/heat.jpg',
    locationId: 'kings-landing',
    body: [
      'Men who have stood close say the Iron Throne is warm when the hall is not. That may be a story told to children who need the Conquest to still be happening. It may be the truth of black iron in a room full of torches. The books like the legend: the dragon’s fire never quite left the metal. The show likes the look of it — a thing that was melted once and could be melted again, which is the only prophecy in this room that comes true.',
      'Dragonfire is not a cookfire. It does not toast. It unmakes the categories smiths rely on. Edge and spine and tang become a single argument. The Iron Throne is that argument, frozen. When Drogon opens his mouth over it at the end, he is not inventing a new ending. He is finishing a sentence Aegon started on a hill with a pile of swords.',
      'Aerys wanted to complete the same sentence with wildfire under the city. Burn them all. The chair would have sat in a green kiln if Jaime had been a different man. The Mad King understood, in the only way he had left, that the throne was a fire that had agreed to hold still. He wanted to remind it.',
      'The heat is the point twice. Once in the making: you cannot sit a thousand enemies unless something hotter than all of them agrees to weld. Once in the unmaking: the only thing that ever beats the chair is the animal that made it. Between those two hours the realm spends three hundred years pretending a piece of slag is a government.',
    ],
  },
  {
    id: 'aerys',
    nav: 'Aerys',
    kicker: 'Chapter VI · King Scab',
    title: 'The Last Dragon on Iron',
    lede: 'He forbade blades near his person and then sat inside a thousand of them. The chair outlasted the dynasty that poured it.',
    image: 'council/got/aerys.jpg',
    locationId: 'kings-landing',
    body: [
      'Aerys II took the throne young, handsome, and hungry to be Aegon and Jaehaerys in one body. He talked of walls of ice and canals through Dorne and a new Valyria on the Blackwater. He began none of it. Tywin ran the realm from the Hand’s chair. Aerys sat the ugly one and hated the man who made him look seated.',
      'After Duskendale he would not have a naked blade in the same room, except for the ones he sat on. Hair and nails went uncut. He bled on the iron and the court learned not to look. The books call him King Scab. The show gives you the face in the flashback: a crown like a bite, the blades rising behind him like a second spine, Jaime standing where a son should have stood.',
      'The night the city fell he was on the throne, or just off it, ordering Rossart to wake the wildfire. Jaime killed the pyromancer at a postern, came back, and killed the king at the foot of the chair Aegon had made. He sat on it afterward with a bloody sword across his knees, which is the only time in the story a man uses the Iron Throne as a bench and gets away with the joke. The Lannister host found him there. They named him Kingslayer before they named him anything kinder.',
      'Aerys is the last Targaryen the show allows you to see sitting it. Rhaegar died in a ruby ford. Viserys died in a belt of gold. Daenerys comes close enough to taste the air and then the dragon decides. The dynasty ends not with a coronation but with a white cloak and a chair that did not even have to cut this one. Jaime did the work. The iron kept the stain.',
    ],
  },
  {
    id: 'robert',
    nav: 'Robert',
    kicker: 'Chapter VII · The usurper',
    title: 'A Warhammer on a Dragon’s Chair',
    lede: 'He won it in a river and could not stand to sit it. Seventeen years of a throne used as a hatstand for a hunting crown.',
    image: 'heroes/got/robert-baratheon.jpg',
    locationId: 'kings-landing',
    body: [
      'Robert Baratheon was made for a melee and crowned for a murder. He took the throne because Rhaegar had taken Lyanna, because Aerys had cooked a lord in his armor, because Jon Arryn would not give up the boys, and because a warhammer is a kind of argument the iron understands. He sat it in a hall he filled with dogs and tapestries of the woods. He wore the crown like a dare.',
      'He came to three Small Council meetings in seventeen years. Tywin counted. The rest of the time the Iron Throne was a piece of scenery behind a king who was elsewhere: a hunt, a winesink, a bed that was not his wife’s. Ned rides south and finds the chair occupied by a man who still looks like a warrior in the right light and like a ruin in the wrong one. The realm is six million gold in debt. The chair does not care. It was never about coin.',
      'Robert wanted to kill the last Targaryen children the way you salt a field. He wanted to be in the yard, not on the dais. He died of a boar and a bottle, which is a hunter’s death wearing a king’s name, and the first thing that happened after was a boy sitting the iron as if it were a toy. Robert had spent his reign treating the throne like a prize you hang on the wall. Joffrey treated it like a weapon. Both readings were already poured into the metal. Aegon had seen to that.',
      'The usurper’s gift to the chair was a reminder that you can win it without being the person it was built for. Every later claimant is standing in Robert’s shadow whether they admit it or not. He proved the iron does not care whose blood you have, only whose army is in the yard.',
    ],
  },
  {
    id: 'ned',
    nav: 'Ned',
    kicker: 'Chapter VIII · A wolf at court',
    title: 'The Hand Who Sat It',
    lede: 'Robert went hunting. Ned took the petitions. For a few hours the ugliest chair in Westeros had an honest man on it. That was not a defense.',
    image: 'heroes/got/ned-stark.jpg',
    locationId: 'kings-landing',
    body: [
      'The show lets you see it happen, which the songs usually skip. The king is gone. The Hand sits the Iron Throne to hear the realm. A riverlord’s man comes with a story about the Mountain burning holdfasts. Ned, in the chair Aegon made for a conqueror, does the only thing he knows how to do. He sends men. He names a false knight. He tries to make the height into justice.',
      'It is the most dangerous use the throne is ever put to in eight seasons, and it looks like paperwork. Sansa is in the hall. Littlefinger is in the hall. The queen is not yet ready to kill him and already ready. Ned does not enjoy the iron. He sits it because someone has to, which is the same reason he took the pin. The chair cuts men who grab. It also fails men who think sitting is the same as holding.',
      'When Robert is dying Ned writes a will: Lord Eddard Stark, Protector of the Realm, until the rightful heir comes of age. He is naming himself the person who sits it in the gap. Cersei tears the paper in the throne room. Joffrey sits. The gold cloaks turn. The only northern hour the Iron Throne ever had ends on the steps of Baelor, with Ice, which is a different kind of metal and a cleaner one.',
      'Ned never wanted the chair. That is why Robert gave him the job. The tragedy is not that an honest man sat the Iron Throne. It is that the chair was never a court of law. It was a pile of swords in a room full of people who had already chosen.',
    ],
  },
  {
    id: 'boys',
    nav: 'Boy Kings',
    kicker: 'Chapter IX · The stags',
    title: 'A Toy, Then a Kindness',
    lede: 'Joffrey sat it like a dare. Tommen sat it like a prayer. Neither of them had the blood the songs required. The iron did not ask.',
    image: 'throne/got/joffrey.jpg',
    locationId: 'kings-landing',
    body: [
      'Joffrey Baratheon took the Iron Throne the way he took a crossbow: because it was in the room and someone had told him it was his. He is Robert’s heir on the proclamations and Jaime’s son in the face. He holds court to hurt Sansa. He holds court to make the city watch him. He holds court because the height is the only education he ever finished. The War of the Five Kings is, among other things, the noise a realm makes when a cruel child sits a chair built for a dragon.',
      'He never learns the blades. He does not have to. Other people bleed. Ned on the steps. The riot in the streets. Blackwater, which he flees, then claims. At his wedding he is still the boy on the iron, toasting his own importance, and Olenna puts a stone in his cup because the chair will not do the work for them. He dies on the floor of the hall, not on the dais. The throne does not even get to cut this one. It only has to watch.',
      'Tommen is the correction the gods do not get credit for. A gentle boy in a crown of antlers, small against the swords, smiling because he has not yet understood the room. He wants to be good. He wants Margaery. He wants his mother to stop. He sits the Iron Throne and then gives pieces of the city to the Faith because someone kind told him that was piety. The show lets you see him with the blades at his shoulder, a child leaning on a weapon, and the image is the whole reign.',
      'When the Great Sept goes up green he walks to a window in the Red Keep and steps out of the story. He never hated the chair. He just could not live in the house it sat in. Two boys, one throne, no Baratheon blood in either of them, and the iron does not so much as chip. Aegon’s joke is still funny. No one is laughing.',
    ],
  },
  {
    id: 'melt',
    nav: 'The Melt',
    kicker: 'Chapter X · Fire and blood',
    title: 'The Lioness, the Dragon, the Slag',
    lede: 'Cersei sat it last. Daenerys came for it through a burned city. Drogon answered in the only language older than the chair.',
    image: 'throne/ruin.jpg',
    locationId: 'kings-landing',
    body: [
      'Cersei Lannister put the crown on her own head after she cooked the Faith, the roses, and her last useful uncle in wildfire. She sat the Iron Throne as Queen of the Seven Kingdoms with Qyburn at her ear and the Mountain where a Kingsguard should have been. No husband. No son. No Small Council worth the name. The chair had always been a pile of defeated enemies. She treated the rest of the government the same way.',
      'It is the last sitting the show gives you. Black dress, black room, the blades behind her like a second plot. She does not enjoy it. She does not have to. Enjoyment was Robert’s problem. She wanted the thing itself: the height, the city, the map that said her name. When the bells ring and the dragon comes she is under the Red Keep, not on the dais. The chair outlives her by minutes.',
      'Daenerys walks the ruined hall the way Aegon must have walked the yard of swords: as a person who has already won and has not yet sat. The throne is still there, black, intact, ridiculous in the snow. She does not take the last step. Jon Snow takes a different one. Drogon, who has watched men love this object more than they loved his mother, opens his mouth on the iron. The fire that made the chair comes back for it.',
      'What is left is slag. Not a thousand swords. Not a government. A black puddle that used to be a threat, smoking in a hall with no roof. The books have not reached this hour. The show has, and it is the most honest thing the chair ever does. It was always a dragon’s argument. The dragon ends the argument.',
    ],
  },
  {
    id: 'bran',
    nav: 'No Iron',
    kicker: 'Chapter XI · Six kingdoms',
    title: 'A King, and No Chair Left',
    lede: 'They chose a broken boy in a pit because Tyrion talked them into it. The prize was already a stain on the floor.',
    image: 'throne/wood.jpg',
    locationId: 'kings-landing',
    body: [
      'The lords meet in the Dragonpit, not the Great Hall, because the hall is a mouth without teeth. Tyrion names Bran the Broken. Sansa takes the North home. The Six Kingdoms need a king more than they need a pile of swords, which is fortunate, because the pile is gone. What they put him in is a wheeled chair, then a simple one, wood, in a room that still remembers the iron.',
      'This is the ending the show is willing to tell, and it is better than the memes. The Iron Throne taught three hundred years of men that ruling is sitting something dangerous. Bran cannot walk to it and does not need to. He has already seen more than any king who climbed those steps. The threat is over. The government is a table again, which is where it always actually was.',
      'Aegon made a chair so a king would never rest. The last king does not sit iron at all. He sits wood, in a ruined keep, while Tyrion pours wine into the Hand’s job and Bronn asks about brothels and Davos thinks about ships. The blades are a story you tell children about why the floor is stained.',
      'The Iron Throne was the prize. It was also the trap. Every war in this chronicle is a war about who gets to be uncomfortable in public. When the dragon melts the prize, the trap opens. What is left is the realm, which was always heavier than the chair, and a boy who does not want it, which may be the only qualification Aegon never thought to pour.',
    ],
  },
]

export const thronePieces: ThronePiece[] = [
  {
    id: 'thousand',
    name: 'A thousand swords',
    image: 'throne/blades.jpg',
    what: 'The surrendered steel of the Conquest: longswords, axes, the weapons of houses that chose to kneel. Aegon stacked them on the hill that would be King’s Landing and let a dragon do the smith’s work.',
    lesson: 'The number is a liturgy. Seven, a thousand, the Faith’s arithmetic. What matters is the inventory of enemies made into one object you have to sit on.',
    remains: 'Melted twice. Once into a chair. Once into a stain. The count does not survive Drogon.',
  },
  {
    id: 'balerion',
    name: 'Balerion’s fire',
    image: 'throne/forging.jpg',
    what: 'The Black Dread’s flame, hot enough to turn iron to a pour and stone to glass. The only forge large enough to make a kingdom into furniture.',
    lesson: 'Everything the chair later does — cut, loom, outlast — is a side effect of that temperature. Aegon did not hire a smith. He hired a weapon.',
    remains: 'The same fire comes back at the end, in a smaller dragon’s mouth, and unmakes the work. The animal always had the last say.',
  },
  {
    id: 'steps',
    name: 'The steps',
    image: 'throne/steps.jpg',
    what: 'Jagged slag and fused edges between the floor and the seat. In the books the king climbs. In the show the dais is lower and still feels like a dare. Petitioners look up the whole way.',
    lesson: 'The throne does not come to you. The long walk is the first law of the hall: by the time you can speak, you have already been made small.',
    remains: 'Rubble, then a round of stone under a wooden chair. The height went when the iron went.',
  },
  {
    id: 'seams',
    name: 'The heat that stayed',
    image: 'throne/heat.jpg',
    what: 'Black iron with seams that look unfinished, as if the pour never cooled in the middle. Men say the chair is warm when the hall is not.',
    lesson: 'A story, and also a design. The throne is a fire that agreed to hold still. Aerys wanted to remind it. Drogon did.',
    remains: 'Smoke over slag. For the first time the legend is literal.',
  },
  {
    id: 'edges',
    name: 'The cuts',
    image: 'throne/cuts.jpg',
    what: 'The blades were never ground down. Armrests are edges. The back is a cage of points. Sit carelessly and the chair sits in you.',
    lesson: 'Viserys I: a king should never sit easy. Aerys bled enough to earn a nickname. Maegor was found dead on it. Folk say it rejects the unworthy. The metal does not need the folklore. It is already sharp.',
    remains: 'Gone with the rest. Kindness was never the point. The point was the point.',
  },
  {
    id: 'skulls',
    name: 'The dragon skulls',
    image: 'throne/skulls.jpg',
    what: 'In the books the Great Hall was lined with the heads of Targaryen dragons, Balerion down to the last hatchling. The show keeps the monsters in the cellars, where a Lannister can walk past a jaw and look like the man who killed it.',
    lesson: 'The chair was never the only trophy in the room. The skulls said: we rode these. Robert had them hauled away because he had killed a prince, not a dragon, and he knew the difference.',
    remains: 'Cellars, dust, a story Tywin liked to stand next to. Upstairs the hall went back to windows and iron.',
  },
  {
    id: 'hangings',
    name: 'Robert’s tapestries',
    image: 'throne/tapestries.jpg',
    what: 'Hunting scenes — stags, boars, the woods — hung where the skulls had been. A usurper’s redecoration. He sat a dragon’s chair in a room he tried to make into a hunting lodge.',
    lesson: 'You can win the Iron Throne and still refuse to look at it. Robert’s whole reign is this impulse: hang something kinder over the fact.',
    remains: 'Ash. The woods came down with the roof. The chair lasted longer than the cloth, and then it did not.',
  },
  {
    id: 'slag',
    name: 'The melt',
    image: 'throne/melt.jpg',
    what: 'Drogon’s fire, after the bells, after the queen, after the hall has already lost its roof. The Iron Throne runs and cools into a black heap that is no longer a seat.',
    lesson: 'The prize was always a dragon’s argument. The dragon ends the argument. Every war fought for this object is, in the last shot, a war for slag.',
    remains: 'A stain on a dais. Snow. The realm, which was heavier all along.',
  },
  {
    id: 'wood',
    name: 'A chair of wood',
    image: 'throne/wood.jpg',
    what: 'What they put the last king in: wheeled, then simple, in a keep that still remembers the iron. No blades. No climb. No blood in the grain.',
    lesson: 'Aegon poured a trap and called it a prize. Bran inherits the realm after the trap has been opened. The government goes back to a table, which is where it always lived.',
    remains: 'This is the chair that is left. It will not cut you. It will not make you a conqueror. That may be the point.',
  },
]

export const throneFaces: ThroneFace[] = [
  {
    id: 'aerys',
    name: 'Aerys II Targaryen',
    bench: 'The last dragon',
    office: 'King · last Targaryen to sit it',
    image: 'council/got/aerys.jpg',
    role: 'Sat it for twenty years while Tywin ruled, then sat it mad, bleeding on the edges, forbidding every blade but the ones he wore as a chair. The show gives you the flashback: crown, blades, Jaime.',
    fate: 'Stabbed at the foot of it the night King’s Landing fell, wildfire still waiting under the streets. The dynasty leaves the iron. The iron stays.',
    locationId: 'kings-landing',
  },
  {
    id: 'jaime',
    name: 'Jaime Lannister',
    bench: 'The last dragon',
    office: 'Kingsguard · the man at the foot',
    image: 'heroes/got/jaime-lannister.jpg',
    role: 'Did not sit it. Killed the man who did, then sat on the steps with a bloody sword across his knees until his father’s host arrived. The only person in the story who uses the Iron Throne as a bench.',
    fate: 'Named Kingslayer for the best thing he ever did in that room. Dies later under the same keep, far from the dais. Brienne writes the hour down. The chair never did.',
    locationId: 'kings-landing',
  },
  {
    id: 'robert',
    name: 'Robert I Baratheon',
    bench: 'Stags',
    office: 'King · the usurper',
    image: 'heroes/got/robert-baratheon.jpg',
    role: 'Won it with a hammer in the Trident and spent seventeen years refusing to live in it. Three council meetings. Hunting tapestries over dragon skulls. A crown he wore like a dare.',
    fate: 'A boar and a bottle. The chair goes to a boy who is not his. Robert proved you can take the iron without being the blood it was poured for. Every later war is standing in that proof.',
    locationId: 'kings-landing',
  },
  {
    id: 'joffrey',
    name: 'Joffrey I Baratheon',
    bench: 'Stags',
    office: 'King · the toy',
    image: 'throne/got/joffrey.jpg',
    role: 'Sat it as a dare and a weapon. Held court to hurt, to be watched, to feel the height. Started a war of five kings because no one took the chair out of his hands.',
    fate: 'Poisoned at his own wedding, on the floor of the hall, not on the dais. The iron does not cut him. It only has to outlast him, which it does by four kings and a dragon.',
    locationId: 'kings-landing',
  },
  {
    id: 'tommen',
    name: 'Tommen I Baratheon',
    bench: 'Stags',
    office: 'King · the kindness',
    image: 'throne/got/tommen.jpg',
    role: 'A gentle boy against a cage of swords. He sat it because it was left, wanted to be good, and gave the city to the Faith with a smile the blades could not teach him out of.',
    fate: 'Walked out a window when the sept went green. He never hated the chair. He could not live in the house it sat in.',
    locationId: 'kings-landing',
  },
  {
    id: 'ned',
    name: 'Eddard Stark',
    bench: 'The Hand',
    office: 'Hand of the King · Protector, for an hour',
    image: 'heroes/got/ned-stark.jpg',
    role: 'Sat it to hear petitions while Robert hunted. Sent men after the Mountain. Wrote a will naming himself Protector. Treated the ugliest chair in Westeros as a court of law.',
    fate: 'Arrested in the throne room, killed on the steps of Baelor. The only northern hour the iron ever had. Ice did the work. The chair did not even have to.',
    locationId: 'kings-landing',
  },
  {
    id: 'cersei',
    name: 'Cersei Lannister',
    bench: 'The end',
    office: 'Queen · last to sit it',
    image: 'council/got/cersei.jpg',
    role: 'Crowned herself after the sept. Sat the iron in black with a dead council and a resurrected knight. The last weight the chair ever held on the show.',
    fate: 'The Red Keep comes down on her in the cellars, not on the dais. She outlasted her brothers and her children and not the dragon. Minutes later the chair is slag.',
    locationId: 'kings-landing',
  },
  {
    id: 'daenerys',
    name: 'Daenerys Targaryen',
    bench: 'The end',
    office: 'Queen · came for it, never sat',
    image: 'council/got/dany-council.jpg',
    role: 'Crossed a burned hall toward the thing her family had poured. Did not take the last step. She sat maps, benches, a painted table at Dragonstone. The iron was always the prize in the songs. It was never where she actually ruled.',
    fate: 'Killed in front of it. Drogon melts the chair instead of the man. The last Targaryen claim ends as a pile of swords going back to being fire.',
    locationId: 'kings-landing',
  },
  {
    id: 'bran',
    name: 'Bran the Broken',
    bench: 'The end',
    office: 'King · six kingdoms, no iron',
    image: 'council/got/bran-council.jpg',
    role: 'Chosen in the Dragonpit after the prize is gone. He does not climb. He does not bleed. He sits wood, and a table, and a job nobody else could see well enough to want.',
    fate: 'Alive, king of less than Aegon took, which may be the only way the story could end without another pile of swords. The furniture is gone. The realm is not.',
    locationId: 'kings-landing',
  },
]
