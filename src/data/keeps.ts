export type KeepEvent = {
  title: string
  note: string
}

export type Keep = {
  id: string
  name: string
  region: string
  image: string
  built: string
  lords: string
  events: KeepEvent[]
}

export const keeps: Keep[] = [
  {
    id: 'winterfell',
    name: 'Winterfell',
    region: 'The North',
    image: 'seats/winterfell.jpg',
    built: 'Raised by Brandon the Builder in the Age of Heroes, after the Long Night, of the same legend that raised the Wall. Hot springs run under the walls. A godswood of ancient weirwoods stands inside the inner ward, and the crypts keep every King of Winter and Lord of Winterfell who came after.',
    lords: 'Kings of Winter of House Stark held it for thousands of years until Torrhen knelt to Aegon. Rickard Stark died in King’s Landing. Eddard ruled until Robert named him Hand. Robb rode to war as King in the North. Theon Greyjoy took the castle, then Ramsay Bolton. Roose Bolton sat it after the Red Wedding. Jon Snow retook it at the Battle of the Bastards. Sansa Stark is Lady of Winterfell, and Queen in the North when the kingdom breaks away.',
    events: [
      { title: 'Robert’s coming', note: 'The king rides north. Ned leaves the godswood for the south, and Winterfell’s peace ends.' },
      { title: 'Theon takes the castle', note: 'Greyjoy ironborn seize the seat of his foster father. Two farm boys die in Bran and Rickon’s names.' },
      { title: 'Bolton wedding', note: 'Ramsay marries “Arya” (Jeyne in the books, Sansa on the show) and rules by terror in Stark halls.' },
      { title: 'Battle of the Bastards', note: 'Jon and Sansa break Ramsay in the snow. The direwolf flies over Winterfell again.' },
      { title: 'The Long Night', note: 'The dead come through the godswood. The Night King falls by Arya’s hand among the weirwoods.' },
    ],
  },
  {
    id: 'castle-black',
    name: 'Castle Black',
    region: 'The Wall',
    image: 'seats/castle-black.jpg',
    built: 'One of the nineteen castles of the Night’s Watch, raised against the dark when the Wall was new. It is timber and stone in the shadow of seven hundred feet of ice — never a lord’s seat, always a brotherhood’s.',
    lords: 'Lord Commanders, not lords: Jeor Mormont the Old Bear; after his murder the Watch elects Jon Snow; Alliser Thorne rules in mutiny; Eddison Tollett holds it when Jon rides south. The Watch remains when the wars end, a thinner black line than before.',
    events: [
      { title: 'The wight in the Lord Commander’s tower', note: 'A dead man walks. Jon burns it. Jeor gives him Longclaw.' },
      { title: 'The mutiny at Craster’s', note: 'Mormont dies off the Wall. Castle Black waits without a commander.' },
      { title: 'The battle for the Wall', note: 'Mance Rayder’s host comes. Stannis arrives in the snow and breaks it.' },
      { title: 'Jon’s watch ends', note: 'Brothers stab their Lord Commander in the yard. He is brought back, and he leaves.' },
    ],
  },
  {
    id: 'eastwatch',
    name: 'Eastwatch-by-the-Sea',
    region: 'The Wall',
    image: 'keeps/eastwatch.jpg',
    built: 'The Watch’s easternmost castle, where the Wall meets the Shivering Sea. A hard quay, a harder wind, and the first place an enemy from the water would land.',
    lords: 'Commanders of Eastwatch, never a house. Cotter Pyke holds it in the books. On the show it is the staging ground for the wight hunt: Tormund Giantsbane, Jorah, Gendry, and the rest sail from here.',
    events: [
      { title: 'The wight hunt', note: 'A party rides beyond the Wall to steal a dead man for Cersei. A dragon dies in the ice.' },
      { title: 'The Wall falls', note: 'The Night King rides Viserion. Eastwatch is the breach. The ice comes down, and the dead walk through.' },
    ],
  },
  {
    id: 'last-hearth',
    name: 'Last Hearth',
    region: 'The North',
    image: 'keeps/last-hearth.jpg',
    built: 'Seat of House Umber, the last roof before the Gift. First Men built it in a country of snow and shouting, a timber hall for a house that never learned to kneel quietly.',
    lords: 'The Greatjon Umber rides with Robb and is taken at the Twins. On the show his son Smalljon betrays the Starks to Ramsay. After the Boltons fall, young Ned Umber is given the keep — and is the first lord the Night King claims on the march south.',
    events: [
      { title: 'The Greatjon’s war', note: 'Last Hearth sends its giant of a lord to Robb’s host. He never comes home from the Twins.' },
      { title: 'Smalljon’s turn', note: 'The Umbers give Ramsay Rickon’s direwolf — and Rickon.' },
      { title: 'The last lord', note: 'Ned Umber is found pinned to a wall of corpses. Last Hearth is a message, not a battle.' },
    ],
  },
  {
    id: 'dreadfort',
    name: 'The Dreadfort',
    region: 'The North',
    image: 'keeps/dreadfort.jpg',
    built: 'The ancient seat of House Bolton, Red Kings of the North who flayed their enemies when the Starks were still only first among equals. Pale stone, damp vaults, and a reputation that does the work of an army.',
    lords: 'Roose Bolton, Lord of the Dreadfort, Warden of the North after he murders Robb. His bastard Ramsay is named heir, then lord. After the Battle of the Bastards the Dreadfort has no Bolton left to hold it.',
    events: [
      { title: 'Theon’s imprisonment', note: 'Theon is flayed into Reek in Bolton cells. The Dreadfort teaches what the North already knew about this house.' },
      { title: 'The Red Wedding’s pay', note: 'Roose returns north as Warden. The flayed man flies over Winterfell — but the Dreadfort is still the true Bolton seat.' },
      { title: 'The line ends', note: 'Ramsay dies in a kennel. No Bolton sits the Dreadfort again.' },
    ],
  },
  {
    id: 'bear-island',
    name: 'Bear Island',
    region: 'The North',
    image: 'keeps/bear-island.jpg',
    built: 'A hard island in a colder sea. House Mormont holds it after Rodrik Stark won it from the ironborn and gave it to the bears. The women keep axes by the bed because the men are often gone.',
    lords: 'Jeor Mormont left the island to take the black; Maege Mormont ruled in his stead. Jorah fled in disgrace. On the show little Lyanna Mormont is Lady of Bear Island, and she answers Jon’s call with a letter that shames greater lords.',
    events: [
      { title: 'Jeor takes the black', note: 'The Old Bear gives the island to his heirs and Longclaw to the Wall.' },
      { title: 'Lyanna’s letter', note: 'Bear Island has no men left, she writes — only women and children. They will still come.' },
      { title: 'The last Mormont', note: 'Lyanna dies under a giant at Winterfell. The she-bear’s line ends in the snow.' },
    ],
  },
  {
    id: 'the-eyrie',
    name: 'The Eyrie',
    region: 'The Vale',
    image: 'seats/eyrie.jpg',
    built: 'House Arryn’s castle in the Mountains of the Moon, so high the snow never leaves the Giant’s Lance. Artys Arryn, the Winged Knight, took the Vale from the First Men. The Eyrie is reached by mule, by sky cells, and by a Moon Door that does not argue.',
    lords: 'Jon Arryn, Hand of the King, dies in King’s Landing. Lysa Arryn rules as Lady of the Eyrie and Lady Regent for her son Robert (Robin on the show). Petyr Baelish marries her, murders her, and rules as Lord Protector. Sweetrobin remains Lord of the Eyrie. After Littlefinger’s death the Vale answers to Sansa and to the boy lord.',
    events: [
      { title: 'The war begins here', note: 'Lysa writes Catelyn that the Lannisters killed Jon Arryn. The first lie of the game is posted from the Vale.' },
      { title: 'Tyrion’s trial', note: 'A sky cell, a Moon Door, and Bronn’s sword. Tyrion walks out of the Eyrie alive.' },
      { title: 'The Moon Door', note: 'Littlefinger sings, Lysa falls. The Eyrie has a new master who was born in a hut.' },
      { title: 'Littlefinger’s last court', note: 'Sansa and Arya try him in the hall of his own making. The Vale knights take him.' },
    ],
  },
  {
    id: 'bloody-gate',
    name: 'The Bloody Gate',
    region: 'The Vale',
    image: 'keeps/bloody-gate.jpg',
    built: 'The choke of the high road into the Vale: a fortified pass where the mountains do the killing and the knights finish it. Raised by the Arryns so that no army enters their valley unless the Gate allows it.',
    lords: 'Not a lord’s seat. The Knight of the Gate holds it for House Arryn. Nestor Royce has been that knight. Catelyn is asked “Who would pass the Bloody Gate?” and answers with a name that opens it.',
    events: [
      { title: 'Catelyn and the Imp', note: 'She brings Tyrion through the Gate as a prisoner. The Vale takes a Lannister, and the war finds a new room.' },
      { title: 'The knights ride out', note: 'Littlefinger later leads the Vale’s cavalry south. The Gate that kept armies out lets one through to change the Battle of the Bastards.' },
    ],
  },
  {
    id: 'riverrun',
    name: 'Riverrun',
    region: 'The Riverlands',
    image: 'keeps/riverrun.jpg',
    built: 'Seat of House Tully at the meeting of Tumblestone and Red Fork. Axel Tully raised it after the Andals came. Three sides water, one side wall: a castle that can drown an army if the sluice gates open.',
    lords: 'Hoster Tully, then his son Edmure. Catelyn and Lysa were daughters of this house. Robb uses Riverrun as his capital in the War of the Five Kings. Brynden the Blackfish holds it after Edmure is a Frey prisoner. Jaime takes it for the Iron Throne. The Freys are given the castle. When Walder’s line is cut down, the riverlands wait on a new king’s peace.',
    events: [
      { title: 'Catelyn’s homecoming', note: 'Ned’s wife returns to a dying father and a war already in the rivers.' },
      { title: 'Robb’s court', note: 'The King in the North is crowned among Tully trout. Riverrun is a war camp with a godswood.' },
      { title: 'The Blackfish’s siege', note: 'Brynden will not yield. Jaime talks Edmure into opening the gate to save the smallfolk — and the castle.' },
    ],
  },
  {
    id: 'the-twins',
    name: 'The Twins',
    region: 'The Riverlands',
    image: 'keeps/the-twins.jpg',
    built: 'House Frey’s fortune in stone: two keeps and a bridge over the Green Fork, raised over generations so that every southron army must pay the crossing or go the long way. Walder Frey’s grandfather began it; Walder finished the insult.',
    lords: 'Walder Frey, Lord of the Crossing, late to every war except the one he hosts at supper. After the Red Wedding his sons squabble over scraps. Arya Stark serves them a pie and cuts the line down in their own hall.',
    events: [
      { title: 'The crossing', note: 'Robb needs the bridge. He promises a Frey daughter and takes a Ford — then a Westerling, and the debt comes due.' },
      { title: 'The Red Wedding', note: 'Guest right dies in the Twins. Robb, Catelyn, and the northern host are murdered under the twin towers.' },
      { title: 'The last supper', note: 'Arya feeds Walder his sons and opens his throat. The Twins stand. The Freys do not.' },
    ],
  },
  {
    id: 'harrenhal',
    name: 'Harrenhal',
    region: 'The Riverlands',
    image: 'keeps/harrenhal.jpg',
    built: 'Harren the Black raised the greatest castle in Westeros, forty years in the building, mortared with the blood of riverlords. Aegon Targaryen and Balerion burned it on the first day of the Conquest. The towers slumped like melted candles. Every house that has held it since has died out.',
    lords: 'Harren Hoare died in it. Then Qoherys, Towers, Harroway, Strong, Lothston, Whent — all gone. In the war Tywin Lannister takes it, then Amory Lorch, then the Mountain, then Roose Bolton. The crown names Petyr Baelish Lord of Harrenhal, a title he wears like a ladder. No one lives there long.',
    events: [
      { title: 'The burning', note: 'Balerion makes a pyre of Harren and his sons. The largest castle in the realm becomes its largest ruin.' },
      { title: 'The tourney of Harrenhal', note: 'Rhaegar gives Lyanna a crown of winter roses. Robert’s Rebellion is a look across a lists.' },
      { title: 'Arya among the ghosts', note: 'She serves Tywin, names men for the tickler, and escapes a castle that eats its holders.' },
    ],
  },
  {
    id: 'pyke',
    name: 'Pyke',
    region: 'The Iron Islands',
    image: 'seats/pyke.jpg',
    built: 'Greyjoy seat on a stack of sea-bitten towers linked by rope bridges, older than the kings who drowned for it. The ironborn say the Drowned God set the islands here. The stone is always wet, and the throne is a Seastone Chair that no one sits comfortably.',
    lords: 'Lords Reaper of Pyke of House Greyjoy. Balon Greyjoy crowns himself, loses a rebellion, and tries again. Euron returns from exile, wins a kingsmoot, and takes the Salt Throne. Theon is a Greyjoy who is never truly lord. Yara (Asha in the books) holds to the old way against her uncle.',
    events: [
      { title: 'The Greyjoy Rebellion', note: 'Balon burns the Lannister fleet and loses his sons. Pyke is breached. Theon is taken to Winterfell as a ward.' },
      { title: 'Theon comes home', note: 'He finds no father’s love and a harder god. Pyke sends him to raid the North.' },
      { title: 'The kingsmoot', note: 'Euron’s horn and Euron’s tongue. The Iron Islands choose a man the Drowned God should have kept.' },
    ],
  },
  {
    id: 'casterly-rock',
    name: 'Casterly Rock',
    region: 'The Westerlands',
    image: 'seats/casterly-rock.jpg',
    built: 'A mountain that is a fortress. House Casterly delved it in the Age of Heroes. Lann the Clever took it from them by trick — gold, or a pride of lions, depending who tells it. The Rock has never been taken by storm. Mines, halls, and a sea-gate sit inside the stone.',
    lords: 'Lords of Casterly Rock of House Lannister, Wardens of the West. Tytos the Toothless, then Tywin who made the house feared again. Cersei is Lady of the Rock after Tywin. Tyrion, in the show, takes it with Unsullied and Unsullied only — a prize that costs Daenerys a war in the Reach.',
    events: [
      { title: 'The Rains of Castamere', note: 'Tywin drowns the Reynes. The song is the Rock’s true banner.' },
      { title: 'Tyrion’s youth', note: 'A lion who will never inherit walks halls that were built to outlast him.' },
      { title: 'The Rock is taken', note: 'Grey Worm comes through the unguarded sewers. Jaime is in the field. The invincible seat falls to a slighted brother.' },
    ],
  },
  {
    id: 'red-keep',
    name: 'The Red Keep',
    region: 'The Crownlands',
    image: 'seats/kings-landing.jpg',
    built: 'Aegon the Conqueror began a wooden Aegonfort on the highest hill of his new city. Maegor the Cruel finished the Red Keep of pale red stone, then killed every mason who knew its secrets. Beneath it: dungeons, a black cells, and a cache of wildfire Aerys left like a curse.',
    lords: 'Kings, not castellans: Aegon I through Aerys II; Robert Baratheon; Joffrey; Tommen; Cersei after the sept burns; Daenerys for a night of ash; Bran the Broken when the lords choose a storyteller. The Hand holds the castle when the king does not.',
    events: [
      { title: 'The Mad King’s end', note: 'Jaime opens Aerys’s throat on the steps of the throne. The wildfire is not lit — that day.' },
      { title: 'Ned’s arrest', note: 'The throne room turns. A Hand becomes a traitor in the hall he came to serve.' },
      { title: 'Blackwater', note: 'Stannis at the gate, wildfire on the river, a shadow of a king on the walls.' },
      { title: 'The sept and the keep', note: 'Cersei burns the Great Sept. The Red Keep is hers until a dragon makes it a grave.' },
      { title: 'The bells', note: 'Daenerys does not listen. The Red Keep falls in green fire and red brick, and a queen dies in the snow of ash.' },
    ],
  },
  {
    id: 'dragonstone',
    name: 'Dragonstone',
    region: 'The Crownlands',
    image: 'seats/dragonstone.jpg',
    built: 'Valyrians raised it as the westernmost outpost of the Freehold, two centuries before the Doom. Aenar Targaryen brought his dragons here and lived. The stone is carved into dragons. A painted table in the Chamber of the Painted Table shows Westeros as a Targaryen would take it.',
    lords: 'Targaryen princes of Dragonstone — the heir’s seat. After the Rebellion Robert gives it to Stannis, a slight instead of Storm’s End. Stannis holds it through two wars. Daenerys Targaryen takes it when she comes home, the first Targaryen on that rock in a generation.',
    events: [
      { title: 'The flight from Valyria', note: 'Aenar the Exile makes Dragonstone the last Valyrian roof in the west.' },
      { title: 'Stannis’s court', note: 'Melisandre burns the Seven on the beach. A fake Lightbringer is drawn from the fire.' },
      { title: 'The queen returns', note: 'Dany’s fleet fills the bay. Tyrion is Hand. The painted table is used again for a war of fire.' },
    ],
  },
  {
    id: 'driftmark',
    name: 'Driftmark',
    region: 'The Crownlands',
    image: 'keeps/driftmark.jpg',
    built: 'Seat of House Velaryon, old Valyrian blood on salt water, raised when the sea-horses still came west with the dragonlords. High Tide and the old castle on Driftmark have watched Blackwater Bay longer than the Iron Throne has existed.',
    lords: 'Lords of the Tides. Corlys Velaryon the Sea Snake made the house rich in the years of the Dance. By Robert’s day the Velaryons are a lesser power under Stannis and then under whoever holds Dragonstone. The blood remains even when the fleets do not.',
    events: [
      { title: 'Valyrian tides', note: 'Driftmark is the other Valyrian island. When Targaryens took Westeros, Velaryons took the sea.' },
      { title: 'The Dance’s wake', note: 'The house is spent in a civil war of dragons. Driftmark remains; the golden age does not.' },
      { title: 'Stannis’s vassal', note: 'In the War of the Five Kings the island answers the Lord of Dragonstone, not the Lord of the Seven Kingdoms.' },
    ],
  },
  {
    id: 'highgarden',
    name: 'Highgarden',
    region: 'The Reach',
    image: 'seats/highgarden.jpg',
    built: 'Seat of the Gardeners, Kings of the Reach, who claimed descent from Garth Greenhand. After the Field of Fire, Aegon gave the castle to Harlen Tyrell, the Gardener steward who opened the gates. Roses, mazes, and the Mander’s plenty made it the sweetest seat in Westeros.',
    lords: 'House Tyrell of Highgarden, Lords Paramount of the Reach. Mace Tyrell, his mother Olenna the Queen of Thorns, his children Loras and Margaery. When Cersei destroys the sept, the Tyrell line in King’s Landing dies. Jaime takes Highgarden for the Iron Throne. Olenna drinks the last cup there.',
    events: [
      { title: 'The Field of Fire’s prize', note: 'The Gardeners die. The steward becomes a lord. Highgarden learns to grow toward whoever sits the throne.' },
      { title: 'Renly’s roses', note: 'The Tyrells crown a Baratheon of their choosing, then a Lannister wedding when that fails.' },
      { title: 'The sack', note: 'The Lannister-Tarly host takes the castle. Olenna confesses Joffrey’s murder and drinks Jaime’s mercy.' },
    ],
  },
  {
    id: 'storms-end',
    name: 'Storm’s End',
    region: 'The Stormlands',
    image: 'keeps/storms-end.jpg',
    built: 'Durran Godsgrief raised it, the story says, with the help of Brandon the Builder, a curtain wall so thick the storm god could not pull it down. Seven failed castles before this one. The Durrandon Storm Kings held it until Orys Baratheon took the last Argilac’s daughter and his words: Ours is the Fury.',
    lords: 'House Baratheon of Storm’s End. Robert leaves it for the Iron Throne. Stannis holds it through a year-long siege in the Rebellion, fed by Davos’s onions. Renly claims it and the stormlords. At the end of the show the castle is given to Gendry, Robert’s acknowledged bastard, made Lord of Storm’s End.',
    events: [
      { title: 'The siege', note: 'Malesh of the Redwyne fleet and Mace Tyrell starve Storm’s End. Stannis does not yield. A smuggler becomes a knight.' },
      { title: 'Renly’s camp', note: 'A host of roses and storms gathers under a younger brother. A shadow with Stannis’s face ends it.' },
      { title: 'Gendry’s seat', note: 'Daenerys names a bastard a lord in the castle his father never gave him.' },
    ],
  },
  {
    id: 'tarth',
    name: 'Evenfall Hall',
    region: 'The Stormlands',
    image: 'keeps/tarth.jpg',
    built: 'Seat of House Tarth, the Evenstar, on the Sapphire Isle east of the stormlands. A fair castle on a fairer island: blue water, mountains, and a house old enough to have Andal and First Men both in its blood.',
    lords: 'Selwyn Tarth, the Evenstar, Lord of Tarth. His daughter Brienne is heir. There is no other living child of note. The island sends its evenstar into the world in plate, not in a lord’s chair.',
    events: [
      { title: 'Brienne’s leaving', note: 'The Maid of Tarth takes service with Renly, then Catelyn, then Jaime, then Sansa. Evenfall waits.' },
      { title: 'A knight of the Seven Kingdoms', note: 'Tarth’s heir is made a knight by Jaime in the snow, then Lord Commander of Bran’s Kingsguard. The island’s honor sits a throne-room, not a solar.' },
    ],
  },
  {
    id: 'sunspear',
    name: 'Sunspear',
    region: 'Dorne',
    image: 'seats/sunspear.jpg',
    built: 'Nymeria of the Rhoynar and Mors Martell of the stone Dornish joined their houses and raised a capital of spear and sun on the Broken Arm. The Old Palace and the New Palace, the Winding Walls, and a city of mud brick that never learned to kneel to dragons.',
    lords: 'Princes of Dorne of House Nymeros Martell. Doran Martell rules from a wheeled chair, slow as a sand snake. Oberyn was his brother, not his heir. Trystane is meant to follow. On the show Ellaria Sand and the Sand Snakes murder Doran and Trystane and take Sunspear until Cersei’s revenge unmakes them.',
    events: [
      { title: 'Elia’s ghost', note: 'Sunspear does not forget a murdered princess. Oberyn goes north to collect.' },
      { title: 'Myrcella in Dorne', note: 'A marriage pact and a botched revenge. The girl comes home shorter than she left.' },
      { title: 'The coup', note: 'Ellaria ends Doran’s peace. Sunspear chooses fire, and fire answers from King’s Landing.' },
    ],
  },
]
