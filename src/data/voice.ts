export type HouseWords = {
  house: string
  words: string
  note: string
  great?: boolean
}

export type VoiceLine = {
  id: string
  text: string
  speaker: string
  moment: string
  source: string
}

export type Oath = {
  id: string
  title: string
  spokenBy: string
  body: string
  moment: string
  source: string
}

export type Prophecy = {
  id: string
  title: string
  speaker: string
  text: string
  moment: string
  source: string
}

export const houseWords: HouseWords[] = [
  {
    house: 'House Stark of Winterfell',
    words: 'Winter Is Coming',
    note: 'Not a boast. A warning older than the Andals. Catelyn thinks of it as she looks at Ned’s direwolf banner in the godswood: other houses swear honor and glory; the Starks remember the dark.',
    great: true,
  },
  {
    house: 'House Lannister of Casterly Rock',
    words: 'Hear Me Roar!',
    note: 'The official words, little used. The realm prefers the unofficial coin: “A Lannister always pays his debts.” Tywin made the second one true with gold and with Castamere.',
    great: true,
  },
  {
    house: 'House Targaryen of Dragonstone',
    words: 'Fire and Blood',
    note: 'The words of Old Valyria’s last children. Aegon took a continent with them. Daenerys names her third child for them, and later a city.',
    great: true,
  },
  {
    house: 'House Baratheon of Storm’s End',
    words: 'Ours Is the Fury',
    note: 'Taken from House Durrandon, the Storm Kings, when Orys Baratheon took Argilac’s daughter and his words. Robert’s hammer made them literal at the Trident.',
    great: true,
  },
  {
    house: 'House Greyjoy of Pyke',
    words: 'We Do Not Sow',
    note: 'Reapers, not farmers. The ironborn take. The drowned god is closer than any king, and the words are a theology of theft.',
    great: true,
  },
  {
    house: 'House Tyrell of Highgarden',
    words: 'Growing Strong',
    note: 'Stewards who became lords after the Field of Fire. Roses, grain, and patience. Olenna called the words fat and empty — then used them anyway.',
    great: true,
  },
  {
    house: 'House Nymeros Martell of Sunspear',
    words: 'Unbowed, Unbent, Unbroken',
    note: 'Dorne bent to dragons only in marriage. The words are Nymeria’s landing and Elia’s ghost. They do not forget a murdered princess.',
    great: true,
  },
  {
    house: 'House Arryn of the Eyrie',
    words: 'As High as Honor',
    note: 'A falcon and a moon, a castle in the clouds, and a Moon Door that tests the boast. Jon Arryn’s honor starts the war; Lysa’s honor ends in open air.',
    great: true,
  },
  {
    house: 'House Tully of Riverrun',
    words: 'Family, Duty, Honor',
    note: 'Catelyn recites them in order, and the order is the trap. Family first. Duty next. Honor last — which is why the riverlands bleed for everyone else’s wars.',
    great: true,
  },
  { house: 'House Bolton', words: 'Our Blades Are Sharp', note: 'Red Kings who flayed. The words are the work. The Dreadfort never needed to shout.' },
  { house: 'House Mormont', words: 'Here We Stand', note: 'Bear Island. Axes by the bed. Lyanna Mormont’s letter is the words in a child’s hand.' },
  { house: 'House Hightower', words: 'We Light the Way', note: 'Oldtown’s beacon. The Citadel and the High Tower; knowledge as a kind of fire.' },
  { house: 'House Tarly', words: 'First in Battle', note: 'Horn Hill’s boast. Randyll meant it for Dickon, not Sam. Heartsbane is the punctuation.' },
  { house: 'House Royce', words: 'We Remember', note: 'Bronze Yohn and the First Men runes. The Vale’s oldest blood, and a memory longer than Littlefinger’s.' },
  { house: 'House Velaryon', words: 'The Old, the True, the Brave', note: 'Sea horses of Driftmark. Valyrian without dragons, until the Dance spent them.' },
  { house: 'House Karstark', words: 'The Sun of Winter', note: 'A white sunburst on black. Kin to the Starks who still remember they were kings once.' },
  { house: 'House Umber', words: 'Death Before Chains', note: 'Last Hearth. Confirmed in supplementary canon; the Greatjon lived them, whether the words were on a banner or not.' },
  { house: 'House Allyrion', words: 'No Foe May Pass', note: 'Godsgrace in Dorne.' },
  { house: 'House Ambrose', words: 'Never Resting', note: 'The Reach.' },
  { house: 'House Ashford', words: 'Our Sun Shines Bright', note: 'The tourney ground of Dunk and Egg.' },
  { house: 'House Beesbury', words: 'Beware Our Sting', note: 'Honeyholt. Bees, and a lord who died for Rhaenyra’s claim.' },
  { house: 'House Buckwell', words: 'Pride and Purpose', note: 'The crownlands.' },
  { house: 'House Bulwer', words: 'Death Before Disgrace', note: 'Blackcrown in the Reach.' },
  { house: 'House Caron', words: 'No Song So Sweet', note: 'Nightsong, in the Marches. Nightingales.' },
  { house: 'House Cerwyn', words: 'Honed and Ready', note: 'A battle-axe. Bannermen of Winterfell.' },
  { house: 'House Codd', words: 'Though All Men Do Despise Us', note: 'Ironborn. The only house words that admit the joke.' },
  { house: 'House Crakehall', words: 'None so Fierce', note: 'A boar. The westerlands.' },
  { house: 'House Durrandon', words: 'Ours Is the Fury', note: 'Storm Kings before the Conquest. Orys Baratheon took the words with the daughter.' },
  { house: 'House Egen', words: 'By Day or Night', note: 'The Vale.' },
  { house: 'House Farman', words: 'The Wind Our Steed', note: 'Faircastle, on Fair Isle.' },
  { house: 'House Flint of Widow’s Watch', words: 'Ever Vigilant', note: 'The North’s east coast.' },
  { house: 'House Follard', words: 'None so Wise', note: 'The crownlands.' },
  { house: 'House Footly', words: 'Tread Lightly Here', note: 'Tumbleton.' },
  { house: 'House Fossoway of Cider Hall', words: 'A Taste of Glory', note: 'Red apple. The green apple cadets split at Ashford.' },
  { house: 'House Fowler', words: 'Let Me Soar', note: 'Skyreach, Dorne. “The Warden of the Prince’s Pass.”' },
  { house: 'House Graceford', words: 'Work Her Will', note: 'Holyhall. The Reach, and the Mother.' },
  { house: 'House Grandison', words: 'Rouse Me Not', note: 'A sleeping lion. Grandview in the stormlands.' },
  { house: 'House Hastwyck', words: 'None So Dutiful', note: 'The Reach.' },
  { house: 'House Hornwood', words: 'Righteous in Wrath', note: 'The North. A moose, and a house Ramsay unmade.' },
  { house: 'House Jordayne', words: 'Let It Be Written', note: 'The Tor, Dorne. A quill.' },
  { house: 'House Lonmouth', words: 'The Choice Is Yours', note: 'The stormlands. A skull and red lips.' },
  { house: 'House Marbrand', words: 'Burning Bright', note: 'Ashemark. A burning tree. Addam rides for Tywin, then for honor.' },
  { house: 'House Mallister', words: 'Above the Rest', note: 'Seagard. An eagle, and the ironborn’s opposite shore.' },
  { house: 'House Merryweather', words: 'Behold Our Bounty', note: 'Longtable. A cornucopia. Varys unmade a Hand of this house.' },
  { house: 'House Mooton', words: 'Wisdom and Strength', note: 'Maidenpool.' },
  { house: 'House Oakheart', words: 'Our Roots Go Deep', note: 'Old Oak. Arys Oakheart died for a princess in Dorne.' },
  { house: 'House Peckledon', words: 'Unflinching', note: 'The westerlands.' },
  { house: 'House Penrose', words: 'Set Down Our Deeds', note: 'Parchments, in the stormlands.' },
  { house: 'House Piper', words: 'Brave and Beautiful', note: 'Pinkmaiden. A dancing maiden.' },
  { house: 'House Plumm', words: 'Come Try Me', note: 'The westerlands. Brown-and-gold.' },
  { house: 'House Redfort', words: 'As Strong as Stone', note: 'The Vale. Bronze Yohn’s neighbors.' },
  { house: 'House Sarsfield', words: 'True to the Mark', note: 'A green arrow. The westerlands.' },
  { house: 'House Serrett', words: 'I Have No Rival', note: 'Silverhill. Peacocks.' },
  { house: 'House Smallwood', words: 'From These Beginnings', note: 'Acorn Hall. Acorns.' },
  { house: 'House Stokeworth', words: 'Proud to Be Faithful', note: 'A lamb. Cersei used the house as a joke and a weapon.' },
  { house: 'House Swygert', words: 'Truth Conquers', note: 'The stormlands.' },
  { house: 'House Swyft', words: 'Awake! Awake!', note: 'Cornfield. A rooster. Ser Harys, forever late.' },
  { house: 'House Tallhart', words: 'Proud and Free', note: 'Torrhen’s Square. The North.' },
  { house: 'House Tollett', words: 'When All Is Darkest', note: 'Grey Glen. Edd’s house, and the joke writes itself.' },
  { house: 'House Toyne', words: 'Fly High, Fly Far', note: 'A winged heart. The Kingsguard Toynes ended in treason and exile.' },
  { house: 'House Trant', words: 'So End Our Foes', note: 'Meryn Trant’s house. The words are a threat; the knight is a thug.' },
  { house: 'House Waxley', words: 'Light in Darkness', note: 'Wickenden. Candles.' },
  { house: 'House Wendwater', words: 'For All Seasons', note: 'The kingswood.' },
  { house: 'House Wensington', words: 'Sound the Charge', note: 'The stormlands. A sweeping stallion.' },
  { house: 'House Westerling', words: 'Honor, Not Honors', note: 'The Crag. Jeyne’s house in the books; the words are the irony of Robb’s wedding.' },
  { house: 'House Wode', words: 'Touch Me Not', note: 'A black chevron. Hedge knights of the riverlands.' },
  { house: 'House Wydman', words: 'Right Conquers Might', note: 'The Vale.' },
  { house: 'House Yronwood', words: 'We Guard the Way', note: 'The Boneway. Bloodroyals of Dorne who still remember they were kings.' },
]

export const quotes: VoiceLine[] = [
  {
    id: 'game-of-thrones',
    text: 'When you play the game of thrones, you win or you die. There is no middle ground.',
    speaker: 'Cersei Lannister',
    moment: 'In the godswood of the Red Keep, she names the game for Ned — and for the reader. Season 1, and A Game of Thrones.',
    source: 'A Game of Thrones · Cersei to Ned',
  },
  {
    id: 'win-or-die-ned',
    text: 'The man who passes the sentence should swing the sword.',
    speaker: 'Eddard Stark',
    moment: 'He teaches Bran over a deserter’s body. It is the North’s justice, and the reason Ned cannot live in King’s Landing.',
    source: 'A Game of Thrones · Bran I',
  },
  {
    id: 'brave',
    text: 'Can a man still be brave if he’s afraid?\nThat is the only time a man can be brave.',
    speaker: 'Bran Stark · Eddard Stark',
    moment: 'The same morning, the same lesson. Fear is not the opposite of the Stark words. It is the condition they require.',
    source: 'A Game of Thrones · Bran I',
  },
  {
    id: 'pack',
    text: 'When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.',
    speaker: 'Eddard Stark',
    moment: 'Told to Arya in King’s Landing. Sansa says it back to her sister years later, when the pack is almost gone.',
    source: 'A Game of Thrones · Arya II',
  },
  {
    id: 'love-duty',
    text: 'Love is the bane of honor, the death of duty.',
    speaker: 'Maester Aemon',
    moment: 'On the Wall, to Jon, who wants to ride to Robb. Aemon chose the Watch over a crown. He knows the cost because he paid it.',
    source: 'A Game of Thrones · Jon VIII',
  },
  {
    id: 'things-i-do',
    text: 'The things I do for love.',
    speaker: 'Jaime Lannister',
    moment: 'He pushes Bran from the tower. The line is a confession, a joke, and the whole Lannister marriage in five words.',
    source: 'A Game of Thrones · Bran II',
  },
  {
    id: 'know-nothing',
    text: 'You know nothing, Jon Snow.',
    speaker: 'Ygritte',
    moment: 'First in a cave, then as a refrain. She is teaching him the free folk, and that his Watch has a hole in it.',
    source: 'A Clash of Kings · Jon VI',
  },
  {
    id: 'night-dark',
    text: 'The night is dark and full of terrors.',
    speaker: 'Melisandre of Asshai',
    moment: 'A prayer of R’hllor, spoken until it becomes a proverb. On Dragonstone it is liturgy. In the snow it is weather.',
    source: 'A Clash of Kings · throughout',
  },
  {
    id: 'chaos-ladder',
    text: 'Chaos isn’t a pit. Chaos is a ladder.',
    speaker: 'Petyr Baelish',
    moment: 'Show canon, spoken to Varys in the throne room. The books give the same man in other words: he would see the realm burn if he could be king of the ashes.',
    source: 'Game of Thrones · “The Climb”',
  },
  {
    id: 'power-power',
    text: 'Power is power.',
    speaker: 'Cersei Lannister',
    moment: 'She has Littlefinger’s throat held in the throne room. Knowledge is not power. A command is.',
    source: 'Game of Thrones · “You Win or You Die”',
  },
  {
    id: 'king-no-king',
    text: 'Any man who must say “I am the king” is no true king.',
    speaker: 'Tywin Lannister',
    moment: 'To Joffrey, after the boy screams in Small Council. Tywin never needed the sentence. The boy always did.',
    source: 'Game of Thrones · “The Prince of Winterfell”',
  },
  {
    id: 'sheep',
    text: 'A lion doesn’t concern himself with the opinion of a sheep.',
    speaker: 'Tywin Lannister',
    moment: 'Show canon. The book Tywin says it with Castamere instead.',
    source: 'Game of Thrones · “You Win or You Die”',
  },
  {
    id: 'drink-know',
    text: 'That’s what I do. I drink and I know things.',
    speaker: 'Tyrion Lannister',
    moment: 'To Daenerys in Meereen, applying for Hand. The books give him the same vice and the same mind, in longer sentences.',
    source: 'Game of Thrones · “Book of the Stranger”',
  },
  {
    id: 'never-forget',
    text: 'Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.',
    speaker: 'Tyrion Lannister',
    moment: 'To Jon, on the kingsroad south, two bastards of different kinds. It is the kindest thing anyone tells either of them for a long time.',
    source: 'A Game of Thrones · Jon I',
  },
  {
    id: 'books-whetstone',
    text: 'A mind needs books as a sword needs a whetstone, if it is to keep its edge.',
    speaker: 'Tyrion Lannister',
    moment: 'The same ride. Tyrion is already practicing the only fight he can win.',
    source: 'A Game of Thrones · Jon I',
  },
  {
    id: 'vows-jaime',
    text: 'So many vows. They make you swear and swear. Defend the king. Obey the king. Keep his secrets. Do his bidding. But obey your father. Love your sister. Protect the innocent. It is too much. No matter what you do, you’re forsaking one vow or the other.',
    speaker: 'Jaime Lannister',
    moment: 'In the bath at Harrenhal, to Brienne. The Kingslayer explaining the cut. Aerys had wildfire under the city. Jaime chose one vow and became a joke for it.',
    source: 'A Storm of Swords · Jaime V',
  },
  {
    id: 'pointy-end',
    text: 'Stick them with the pointy end.',
    speaker: 'Jon Snow',
    moment: 'Giving Arya Needle in Winterfell’s yard. A joke that becomes a life. Syrio later makes it a school.',
    source: 'A Game of Thrones · Arya I',
  },
  {
    id: 'one-god',
    text: 'There is only one god, and his name is Death. And there is only one thing we say to Death: not today.',
    speaker: 'Syrio Forel',
    moment: 'Water dancing in the Red Keep. Arya carries it to Braavos and back. The Faceless Men have a different grammar for the same god.',
    source: 'Game of Thrones · “A Golden Crown” (show wording; Syrio’s lessons are in A Game of Thrones)',
  },
  {
    id: 'valar',
    text: 'Valar morghulis.\nValar dohaeris.',
    speaker: 'Jaqen H’ghar · the Faceless Men',
    moment: 'All men must die. All men must serve. A password in Braavos, a theology in the House of Black and White, and Arya’s way through a closing door.',
    source: 'A Clash of Kings · Arya X',
  },
  {
    id: 'girl-no-name',
    text: 'A girl has no name.',
    speaker: 'the Kindly Man · Arya Stark',
    moment: 'The House of Black and White tries to unmake a Stark. She says it until she can’t, then she says her name in a hall of faces and goes home.',
    source: 'A Feast for Crows · Cat of the Canals',
  },
  {
    id: 'north-remembers',
    text: 'The North remembers.',
    speaker: 'Wyman Manderly · northern lords',
    moment: 'Not a house’s words. A threat kept under Bolton rule. In the books it is pies and secrets. On the show it is Lyanna Mormont’s letter and a cavalry charge.',
    source: 'A Dance with Dragons · throughout the North',
  },
  {
    id: 'debts',
    text: 'A Lannister always pays his debts.',
    speaker: 'the realm',
    moment: 'Not the house words — those are Hear Me Roar. This is the one people believe. Tyrion pays a gaoler in gold. Tywin pays the Reynes in a song.',
    source: 'A Game of Thrones · common speech',
  },
  {
    id: 'hold-the-door',
    text: 'Hold the door.',
    speaker: 'Hodor · Wylis',
    moment: 'Bran, warged through time, breaks a boy’s mind so a man can hold a gate against the dead. The name was the sentence all along.',
    source: 'Game of Thrones · “The Door” (the books have not yet reached this hour)',
  },
  {
    id: 'olenna',
    text: 'Tell Cersei. I want her to know it was me.',
    speaker: 'Olenna Tyrell',
    moment: 'Highgarden has fallen. She drinks Jaime’s mercy and claims Joffrey’s wedding cup. The Queen of Thorns keeps one last sting.',
    source: 'Game of Thrones · “The Queen’s Justice”',
  },
  {
    id: 'happy-ending',
    text: 'If you think this has a happy ending, you haven’t been paying attention.',
    speaker: 'Ramsay Bolton',
    moment: 'To Theon, in the Dreadfort. The show’s thesis in a bastard’s mouth.',
    source: 'Game of Thrones · “The Lion and the Rose”',
  },
  {
    id: 'burn-them-all',
    text: 'Burn them all.',
    speaker: 'Aerys II Targaryen',
    moment: 'The last command. Wildfire under King’s Landing. Jaime’s answer is a sword in the back, and a name he never lives down.',
    source: 'A Storm of Swords · Jaime’s confession',
  },
  {
    id: 'dracarys',
    text: 'Dracarys.',
    speaker: 'Daenerys Targaryen',
    moment: 'High Valyrian: dragonfire. First to a slaver, later to a city. The word does not change. The queen does.',
    source: 'A Storm of Swords · Daenerys III',
  },
  {
    id: 'different-roads',
    text: 'Different roads sometimes lead to the same castle.',
    speaker: 'Jaime Lannister',
    moment: 'To Catelyn, a prisoner’s riddle. He is talking about honor. He is also talking about the road that made him Kingslayer.',
    source: 'A Clash of Kings · Catelyn VII',
  },
  {
    id: 'nothing-burns',
    text: 'Nothing burns like the cold.',
    speaker: 'prologue, A Game of Thrones',
    moment: 'Will, in the haunted forest, before the Others show their faces. The first sentence of the Long Night in this telling.',
    source: 'A Game of Thrones · Prologue',
  },
  {
    id: 'what-is-dead',
    text: 'What is dead may never die, but rises again, harder and stronger.',
    speaker: 'the ironborn',
    moment: 'A drowning and a birth. Aeron Greyjoy’s liturgy, Balon’s rebellion, Theon’s unmaking. The Drowned God answers in salt.',
    source: 'A Clash of Kings · Theon I',
  },
]

export const oaths: Oath[] = [
  {
    id: 'nights-watch',
    title: 'The Night’s Watch',
    spokenBy: 'Sworn brothers, at a heart tree or in a sept',
    body: 'Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against the cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the nights to come.',
    moment: 'Jon Snow says it before a weirwood in the haunted forest, not in the sept, because the old gods are the North’s. The show shortens one line; this is the book oath in full. Sam, Grenn, Pyp, and the rest say it in the sept at Castle Black.',
    source: 'A Game of Thrones · Jon VI',
  },
  {
    id: 'ironborn',
    title: 'The drowning',
    spokenBy: 'Priests of the Drowned God · the drowned men',
    body: 'Let your servant be born again from the sea, as you were. Bless him with salt, bless him with stone, bless him with steel.\nWhat is dead may never die.\nWhat is dead may never die, but rises again, harder and stronger.',
    moment: 'Aeron Damphair drowns men and brings them back. Theon is received this way when he comes home to Pyke. It is baptism, boast, and a theory of resurrection the red priests would recognize.',
    source: 'A Clash of Kings · Theon I',
  },
  {
    id: 'knighting',
    title: 'The making of a knight',
    spokenBy: 'Any knight, with a sword',
    body: 'In the name of the Warrior I charge you to be brave. In the name of the Father I charge you to be just. In the name of the Mother I charge you to defend the young and innocent. In the name of the Maid I charge you to protect all women.',
    moment: 'The Faith of the Seven’s dubbing. A less formal cut, used in the field: “Do you swear before the eyes of gods and men to defend those who cannot defend themselves…” Beric Dondarrion knights Gendry. Jaime Lannister knights Brienne of Tarth in the snow, and the words finally fit the woman who kept them.',
    source: 'A Storm of Swords · knighting rites',
  },
  {
    id: 'fealty',
    title: 'A knight’s fealty',
    spokenBy: 'A sworn sword, kneeling',
    body: 'I offer my services. I will shield your back and keep your counsel and give my life for yours if need be. I swear it by the old gods and the new.\n\nAnd I vow that you shall always have a place by my hearth and meat and mead at my table, and I pledge to ask no service of you that might bring you dishonor. I swear it by the old gods and the new.',
    moment: 'The exchange of a sword for a seat at the table. Brienne offers it. So do a hundred nameless men who die for it.',
    source: 'A Clash of Kings · common formula',
  },
  {
    id: 'kingsguard',
    title: 'The White Swords',
    spokenBy: 'The Kingsguard, before the king',
    body: 'Defend the king. Obey the king. Keep his secrets. Counsel him when asked and keep silent when not. Give your life for his. Take no wife, hold no lands, father no children.',
    moment: 'Visenya Targaryen modeled the vows on the Night’s Watch after a Dornish knife in the street. Seven knights because there are Seven Kingdoms. Jaime recites the pile of them in a bath, and shows why a clean oath is a lie when the king is mad.',
    source: 'A Storm of Swords · Jaime; Fire & Blood',
  },
  {
    id: 'wedding-seven',
    title: 'A wedding before the Seven',
    spokenBy: 'Husband and wife, in a sept',
    body: 'Father, Smith, Warrior. Mother, Maiden, Crone. Stranger. I am his and he is mine from this day until the end of my days.',
    moment: 'The seven are named; the Stranger is not left out. Sansa says the words to Tyrion with a lie in her mouth. Robb says them to a Westerling and breaks a Frey promise. The Red Wedding is what happens when the words are said and then forgotten.',
    source: 'A Storm of Swords · wedding rites',
  },
  {
    id: 'faceless',
    title: 'The House of Black and White',
    spokenBy: 'acolytes of the Many-Faced God',
    body: 'Valar morghulis.\nValar dohaeris.\nA girl has no name.',
    moment: 'All men must die. All men must serve. Arya learns the first as a password from Jaqen, the second as an answer, the third as an erasure she cannot finish. The Many-Faced God is Death; the gift is the end of a name.',
    source: 'A Feast for Crows · Arya',
  },
]

export const prophecies: Prophecy[] = [
  {
    id: 'azor-ahai',
    title: 'Azor Ahai reborn',
    speaker: 'Melisandre of Asshai · the red priests',
    text: 'When the red star bleeds and the darkness gathers, Azor Ahai shall be born again amidst smoke and salt to wake dragons out of stone.',
    moment: 'She says it of Stannis on Dragonstone, a volcanic island in a salt sea, under the red comet. Maester Aemon later hears the same signs and thinks of Daenerys, who was born on Dragonstone, walked into a pyre, and woke three dragons from stone eggs. The books have not chosen. The show lets the Long Night end without naming the hero.',
    source: 'A Storm of Swords · Davos III',
  },
  {
    id: 'prince-promised',
    title: 'The prince that was promised',
    speaker: 'Rhaegar Targaryen · Maester Aemon · Melisandre',
    text: 'Born amidst salt and smoke, beneath a bleeding star. He shall have a song: the song of ice and fire.',
    moment: 'Rhaegar thought it was himself, then his son Aegon. Aemon, dying on the way to Oldtown, realizes High Valyrian has no gender here — prince or princess. On House of the Dragon, Aegon the Conqueror’s dream is the same prophecy in another mouth: from my blood come the Prince That Was Promised, and his is the song of ice and fire.',
    source: 'A Feast for Crows · Samwell; A Clash of Kings · Daenerys',
  },
  {
    id: 'lightbringer',
    title: 'Lightbringer',
    speaker: 'Salladhor Saan, telling the tale',
    text: 'Azor Ahai labored thirty days and thirty nights, and the sword shattered. He labored fifty, and it shattered. The third time he drove the blade through the heart of Nissa Nissa, his wife, and her blood, her soul, her strength, her courage went into the steel. The sword drank her. That is how Lightbringer came to be.',
    moment: 'Davos hears it on the Blackwater’s eve. Stannis draws a glowing sword from a burning sept; Aemon notes it gives no heat. A false Lightbringer for a false Azor Ahai — or a metaphor the story has not finished paying.',
    source: 'A Clash of Kings · Davos I',
  },
  {
    id: 'maggy',
    title: 'Maggy the Frog',
    speaker: 'Maggy, a maegi at Casterly Rock',
    text: 'Queen you shall be… until there comes another, younger and more beautiful, to cast you down and take all that you hold dear.\n\nSix-and-ten for him, and three for you. Gold shall be their crowns and gold their shrouds.\n\nAnd when your tears have drowned you, the valonqar shall wrap his hands about your pale white throat and choke the life from you.',
    moment: 'Cersei, a girl, hears it in a tent. She weds a king, not a prince. Joffrey, Myrcella, Tommen die in gold. The show keeps the queen and the shrouds and leaves out the valonqar — High Valyrian for little brother. The books have not yet collected that debt.',
    source: 'A Feast for Crows · Cersei VIII',
  },
  {
    id: 'stallion',
    title: 'The stallion who mounts the world',
    speaker: 'the dosh khaleen, in Vaes Dothrak',
    text: 'As swift as the wind he rides, and behind him his khalasar covers the earth, men without number. Fierce as a storm this prince will be. His enemies will cower before him, and their wives will weep tears of blood. The stallion who mounts the world.',
    moment: 'They say it of the child in Daenerys’s womb — Rhaego. The boy dies in a tent of blood magic. Dany walks into a pyre and the stallion is a dragon, or a queen, or a broken promise. The dosh khaleen have known the words for a thousand years. The child they named did not live a day.',
    source: 'A Game of Thrones · Daenerys V',
  },
  {
    id: 'quaithe',
    title: 'Quaithe’s riddle',
    speaker: 'Quaithe of the Shadow',
    text: 'To go north, you must journey south. To reach the west, you must go east. To go forward you must go back, and to touch the light you must pass beneath the shadow.',
    moment: 'Spoken to Daenerys in Qarth, from a lacquered mask. It is a map that is not a map: Slaver’s Bay before Westeros, the House of the Undying, Asshai unnamed. She has not yet passed beneath the shadow.',
    source: 'A Clash of Kings · Daenerys III',
  },
  {
    id: 'three-heads',
    title: 'Three heads has the dragon',
    speaker: 'the House of the Undying · Rhaegar',
    text: 'The dragon has three heads.\nThree fires must you light… three mounts must you ride… three treasons will you know.',
    moment: 'In the House of the Undying, Dany sees a man who looks like Rhaegar name his son the prince that was promised and add, almost as an afterthought, that the dragon has three heads. She takes it as a command to find two more riders. The fires, mounts, and treasons are her life in threes: Drogo, the pyre, Drogon; khalasar, ship, dragon; Mirri, Jorah, and a third not yet collected.',
    source: 'A Clash of Kings · Daenerys IV',
  },
  {
    id: 'blue-flower',
    title: 'A blue flower in a wall of ice',
    speaker: 'the House of the Undying',
    text: 'A blue flower grew from a chink in a wall of ice, and filled the air with sweetness.',
    moment: 'One of Dany’s visions in Qarth. A winter rose. Lyanna. A Wall. The books plant Jon Snow in a sentence Dany cannot yet read.',
    source: 'A Clash of Kings · Daenerys IV',
  },
  {
    id: 'aegon-dream',
    title: 'Aegon’s dream',
    speaker: 'Aegon the Conqueror, as told on Dragonstone',
    text: 'From my blood come the Prince That Was Promised, and his will be the Song of Ice and Fire.',
    moment: 'House of the Dragon’s telling: the Conquest was not only for a throne. Viserys I passes the secret to Rhaenyra. The show’s Game of Thrones never lets a character speak this sentence, but the title of the books is in it.',
    source: 'House of the Dragon · “King of the Narrow Sea”',
  },
  {
    id: 'woods-witch',
    title: 'The woods witch',
    speaker: 'Jenny of Oldstones’ companion · the Ghost of High Heart',
    text: 'The prince was promised, and the line of Prince Aerys and Princess Rhaella would bring him forth.',
    moment: 'The woods witch’s word sent Jaehaerys II to marry his children Aerys and Rhaella to each other. From that unhappy bed: Rhaegar, and then, by a different road, Daenerys — and, if the secret holds, Jon. A song of ice and fire from a forced wedding.',
    source: 'A Dance with Dragons · Barristan; A Storm of Swords · Arya (the Ghost of High Heart)',
  },
]
