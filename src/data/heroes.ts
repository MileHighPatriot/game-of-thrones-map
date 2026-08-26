export type Hero = {
  id: string
  name: string
  epithet: string
  house: string
  image: string
  locationId: string
  steel: string
  backstory: string
  deeds: string
  battles: string
  fate: string
  ties: string
}

export const heroes: Hero[] = [
  {
    id: 'arthur-dayne',
    name: 'Arthur Dayne',
    epithet: 'Sword of the Morning',
    house: 'House Dayne · Kingsguard',
    image: 'heroes/arthur-dayne.jpg',
    locationId: 'tower-of-joy',
    steel:
      'Dawn, the pale greatsword forged from a fallen star, kept at Starfall and given only to a knight of House Dayne judged worthy. He fought two-handed when the hour was worst — Dawn in the right, a common steel blade in the left — and men who saw it said the morning had a point.',
    backstory:
      'The finest knight of his age, brother to Ashara, sworn brother to the White Bull and to Prince Lewyn Martell. Aerys named him to the Kingsguard young. Rhaegar trusted him with more than a cloak: when the prince rode from Harrenhal with Lyanna Stark, it was Arthur who kept the tower in the Prince’s Pass. He was the realm’s idea of a true knight, and he died keeping a secret that would have hanged him for treason in any other hall.',
    deeds:
      'He broke the Kingswood Brotherhood, and the smallfolk of the kingswood still tell of the Sword of the Morning taking the Smiling Knight in single combat. He stood beside Rhaegar at Harrenhal. He held the Tower of Joy against Eddard Stark’s seven while a sister of Winterfell birthed a son behind the door.',
    battles:
      'The kingswood. The Tower of Joy, where three white cloaks met seven northerners in the red mountains of Dorne. The show gives the kill to Howland Reed’s knife in Arthur’s back after Ned is beaten to the ground. The books leave the how unsaid, and only the that: Dawn went home, and Arthur did not.',
    fate:
      'Dead in the Prince’s Pass. Ned rode Dawn back to Starfall and put it in Ashara’s keeping. There has been no Sword of the Morning since. The cloak is a story. The sword is still waiting.',
    ties:
      'Rhaegar’s friend and sword. Ned’s last living question. Howland Reed’s silence. Starfall, and the tower that was never on any maester’s map until the war made it one.',
  },
  {
    id: 'aemon-dragonknight',
    name: 'Aemon the Dragonknight',
    epithet: 'The Dragonknight',
    house: 'House Targaryen · Kingsguard',
    image: 'heroes/aemon-dragonknight.jpg',
    locationId: 'kings-landing',
    steel:
      'A knight of the Kingsguard first, a prince second. The songs give him Dark Sister in some tellings; the Citadel is less certain. What is sure is the style: a swordsman so clean that later ages used his name as a measuring stick. He fought with a white cloak on his back and a brother’s crown in his keeping.',
    backstory:
      'Prince Aemon Targaryen, second son of Viserys I’s line as the histories number him after the Dance’s dust had settled — brother to King Aegon IV the Unworthy, uncle and good-brother to the realm’s mess. He joined the Kingsguard so he would never be a rival for a throne. The songs say he loved Queen Naerys as a knight loves a charge. The Unworthy hated him for it. Aemon served anyway. That is the whole of the man: a prince who chose a vow over a crown, and kept it until a blow meant for a worse king found him instead.',
    deeds:
      'He was named the greatest knight of his century while he still lived. He championed his sister-in-law against slander. He rode in tourney and in war with a courtesy the Unworthy never learned. Later knights — Barristan among them — were measured against the Dragonknight and found the measuring unkind.',
    battles:
      'The wars of Aegon IV’s reign, and a dozen tilts the singers loved more than the maesters did. He died in Dorne, taking a blow meant for his king. Even a bad king, the white book says, is owed a body.',
    fate:
      'Slain defending Aegon the Unworthy. Buried in the White Sword Tower’s book as the standard later Lord Commanders still fail. The cloak outlived the man. The songs outlived the cloak.',
    ties:
      'Brother to Aegon IV. Uncle to Daeron II and to Daemon Blackfyre. The measuring stick Barristan Selmy was told he could not reach. The Red Keep’s white book still opens to his page.',
  },
  {
    id: 'barristan-selmy',
    name: 'Barristan Selmy',
    epithet: 'Barristan the Bold',
    house: 'House Selmy · Kingsguard',
    image: 'heroes/barristan-selmy.jpg',
    locationId: 'meereen',
    steel:
      'A longsword and a lifetime. He was never a named-steel knight; he was the named knight. Clean footwork, a high guard, and the patience of a man who had already survived the men who rushed. In old age he still moved like the boy who unhorsed Duncan the Tall.',
    backstory:
      'A younger son of Harvest Hall who won a melee at ten-and-six and never stopped. He served Aerys through madness, Robert through fat and regret, and Joffrey long enough to be dismissed like a dog. That insult sent him east. He found Daenerys in Slaver’s Bay, told her the truth about her father, and became the counselor who would not flatter a dragon. The show lets him die in Meereen’s streets. The books still have him holding a city together with a white cloak and a stubborn spine.',
    deeds:
      'Knighted by Aegon V. Named to the Kingsguard by Jaehaerys II. Cut his way through the Ninepenny Kings and later through the Trident. He took wounds for Robert that should have killed a lesser man, then spent a reign teaching a usurper’s court what a knight looked like. He told a Targaryen queen the truth about the Mad King when others would not.',
    battles:
      'The War of the Ninepenny Kings. The Trident, where he fought for Rhaegar and was spared by Robert because even Robert knew the difference between a knight and a butcher. The Sack’s aftermath, which he survived by being too wounded to stop. Meereen, against the Sons of the Harpy — on the show, his last yard.',
    fate:
      'On the show he dies in the dirt of a free city, still Barristan the Bold, cut down so a queen he believed in can live long enough to be worse than he hoped. In the books he is not done. Either way the white book is already full.',
    ties:
      'Sworn to Aerys, then Robert, then Daenerys. He unhorsed Duncan the Tall in his youth and spent an old age trying to keep a dragon from becoming Aerys. Meereen is his last command. The Red Keep is the one that dismissed him.',
  },
  {
    id: 'daemon-blackfyre',
    name: 'Daemon Blackfyre',
    epithet: 'The Black Dragon',
    house: 'House Blackfyre',
    image: 'heroes/daemon-blackfyre.jpg',
    locationId: 'the-trident',
    steel:
      'Blackfyre itself: Aegon the Conqueror’s Valyrian hand-and-a-half sword, darker than most of its kind, given to a bastard by a king who loved him more than his trueborn son. Daemon fought with it as if the steel were a crown. Men who saw him said he was the Warrior in the flesh, and the sword agreed.',
    backstory:
      'Daemon Waters, son of Aegon IV and Daena the Defiant, knighted at twelve with the Conqueror’s blade in his hand. He took the name Blackfyre from the sword. When the Unworthy died and legitimized his bastards, Daemon had a claim, a following, and a reason: Daeron II on the throne, Dorne in the bed, and the realm’s knights sure that the better swordsman should be king. He rose. He almost won. He died on the Redgrass Field with his twins beside him, and the rebellions that followed were only the sword trying to find another hand.',
    deeds:
      'He was the greatest living warrior of his generation, a tourney knight who made the lists look like a lesson. He drew half the realm’s chivalry into a banner of a black dragon on red. He fathered a house that would trouble the Iron Throne for five more Blackfyre Rebellions after he was in the ground.',
    battles:
      'The First Blackfyre Rebellion. The Redgrass Field, where Bloodraven’s arrows and Bittersteel’s charge wrote the ending. Daemon died there. The sword went into exile with Aegor Rivers and the Golden Company and has not come home.',
    fate:
      'Dead on the grass that named the battle. His line lived in Essos, a wound the Targaryens never cauterized. The sword is still a rumor with an army attached.',
    ties:
      'Half-brother to Daeron II. Brother in blood to Bloodraven and Bittersteel, who chose opposite sides of him. Blackfyre the sword is in the Armory’s keeping as a story. The Trident’s fords remember other princes; the Redgrass remembers this one.',
  },
  {
    id: 'robert-baratheon',
    name: 'Robert Baratheon',
    epithet: 'The Demon of the Trident',
    house: 'House Baratheon',
    image: 'heroes/robert-baratheon.jpg',
    locationId: 'the-trident',
    steel:
      'A two-handed warhammer too heavy for other men, antlered and ugly, the weapon of a storm lord who never learned the sword’s manners. He fought in a melee the way a storm hits a holdfast: all at once, and you were down before you understood the weather. In peace he let the hammer rust and the belly win.',
    backstory:
      'Fostered at the Eyrie with Ned Stark under Jon Arryn, betrothed to Lyanna, and made a rebel when Aerys called for his head. He won a throne because he was the hammer and Rhaegar was the song, then spent fifteen years hunting, drinking, and pretending the crown was a hunt he could finish tomorrow. He loved Ned. He hated the work. He died on a hunt Cersei arranged without having to hold the spear. His death is the door. Everything after walks through it.',
    deeds:
      'He ended Targaryen rule in Westeros. Three battles in particular made the songs: Summerhall, the bells at Stoney Sept, and the Trident, where the warhammer found a ruby-studded breastplate and ended a dynasty. He held a ragged peace for fifteen years because no one wanted to try the man who had done that — until the man was fat enough to try.',
    battles:
      'Robert’s Rebellion entire. The Trident is the one the singers keep: Rhaegar dead in the rush, rubies in the water, a hammer that made a king. The Greyjoy Rebellion later, which he crushed and then forgave, because Robert’s mercy was always louder than his judgment.',
    fate:
      'Gored by a boar while drunk on Lannister wine. He named Ned protector of the realm and asked him, at the last, to stop the boy from being king. Ned failed both. Robert did not live to see how much.',
    ties:
      'Ned’s brother in all but blood. Rhaegar’s killer. Cersei’s husband. Father, in the storm’s sense, to Gendry. Storm’s End raised him. The Trident crowned him. The Red Keep finished him.',
  },
  {
    id: 'rhaegar-targaryen',
    name: 'Rhaegar Targaryen',
    epithet: 'The Last Dragon',
    house: 'House Targaryen',
    image: 'heroes/rhaegar-targaryen.jpg',
    locationId: 'the-trident',
    steel:
      'A longsword and a suit of black plate inlaid with rubies. He was a tourney knight of the first rank, not a brawler. Men who trained with him said he fought as he played the harp: as if the next note were already decided. Armor and prophecy did not save him from a hammer.',
    backstory:
      'Heir to Aerys, bookish until he read something that made him take up the sword. He won Harrenhal’s tourney and laid a crown of blue winter roses in Lyanna Stark’s lap, with his own wife Elia Martell watching. What followed — abduction or elopement, depending on who is left to speak — set the Rebellion alight. He died in the Trident’s rush, and the show later lets a boy in a tower learn that Rhaegar had his marriage set aside and named the child Aegon. The singers cannot agree whether he was a fool or a prophet. The hammer did not care.',
    deeds:
      'He was the finest prince of his generation: jouster, musician, a man who might have been a better king than the ones who followed. He rode to the Trident to save a dynasty and a prophecy. He left behind a secret that outlived both.',
    battles:
      'The Trident, where Robert’s hammer caved the rubies in. Whatever else he won — Harrenhal’s lists, a tower in Dorne, a son who would be called Snow — the ford is the page the realm remembers.',
    fate:
      'Dead in the water. Rubies washed downstream. His children by Elia died in the Sack. The son by Lyanna lived under a lie in Winterfell’s yard. Rhaegar’s legacy is a war and a boy who did not want a throne.',
    ties:
      'Lyanna. Elia. Arthur Dayne at the tower. Robert at the ford. Jon Snow, who is the secret. Harrenhal began it. The Trident ended him. The Tower of Joy kept what he left.',
  },
  {
    id: 'jaime-lannister',
    name: 'Jaime Lannister',
    epithet: 'The Kingslayer',
    house: 'House Lannister · Kingsguard',
    image: 'heroes/jaime-lannister.jpg',
    locationId: 'whispering-wood',
    steel:
      'A prodigy with a longsword, knighted into the Kingsguard at fifteen, golden and cruelly gifted. After the maiming he learned the other hand badly and gave the better steel away: Oathkeeper to Brienne, Widow’s Wail later into his own remaining fist. He was never the knight the songs wanted. He was often the swordsman the yard required.',
    backstory:
      'Twin to Cersei, son of Tywin, made a kingsguard so he could not inherit a rock, and made a kingslayer so a city would not burn. He sat the Iron Throne in white while Aerys cooked in his own keep, and the realm never forgave the blade that saved it. Capture, maiming, a bath at Harrenhal, a vow to a woman who still believed in knights — the man who came out of the riverlands was not the boy who pushed a child from a window. The show lets him die in the Red Keep’s collapse with the sister he could not quit. The books still have him in the field, trying.',
    deeds:
      'He killed a king to stop a wildfire apocalypse and was hated for the killing, not thanked for the stopping. He lost a hand and still rode to war. He armed Brienne with Stark steel and sent her after Catelyn’s daughters. He fought the dead at Winterfell with a golden lie of a hand and a real one.',
    battles:
      'The Whispering Wood, where the Young Wolf took him. The siege of Riverrun. The fight with Ned’s men in King’s Landing’s street, where Jory Cassel died. The Long Night in Winterfell’s breach. The show’s last war in the capital, which he entered as a man trying to save one person and not a city.',
    fate:
      'On the show, crushed with Cersei under the Red Keep while the bells’ aftermath still smoked. A knight’s ending only if you squint. In the books he is not yet a corpse. The white book will not be kind either way, and Brienne is the one who will have to write the page.',
    ties:
      'Cersei. Tyrion. Brienne, who has Oathkeeper. Ned, who found him on the throne. Aerys, who made the name. Casterly Rock is the inheritance he was denied. The Whispering Wood is the cage. King’s Landing is the beginning and the show’s end.',
  },
  {
    id: 'gerold-hightower',
    name: 'Gerold Hightower',
    epithet: 'The White Bull',
    house: 'House Hightower · Kingsguard',
    image: 'heroes/gerold-hightower.jpg',
    locationId: 'tower-of-joy',
    steel:
      'Lord Commander of Aerys’s Kingsguard. A greatsword and a bulk that made the white cloak look like a sail. He was not the Sword of the Morning; he was the wall the Morning stood beside. Old, heavy, and still the man you sent if a door was not to open.',
    backstory:
      'The White Bull of Oldtown’s house, Lord Commander when the Mad King still had knights worth the name. He fought the Kingswood Brotherhood with Arthur Dayne and Barristan. When Rhaegar went to the tower, Gerold went with him — not as a prince’s friend, as a Lord Commander who had chosen a side of a vow that no longer had a clean reading. Three stood against seven in the Prince’s Pass. The Bull was one of them.',
    deeds:
      'He commanded the finest Kingsguard in living memory. He kept the door at the Tower of Joy while a child who would be called Snow drew his first breath. That is not a deed the white book boasts. It is the one that mattered.',
    battles:
      'The kingswood campaign. The Tower of Joy, where he died with Arthur Dayne and Oswell Whent. Ned’s party came with seven and left with two. The Bull did not leave.',
    fate:
      'Dead in the red mountains. Buried in the story of a tower that was pulled down afterward. Oldtown still has Hightowers. It does not have this one.',
    ties:
      'Arthur Dayne and Oswell Whent, the other two at the door. Rhaegar’s last order. Ned’s seven. The High Tower’s blood, spent far from the Honeywine, on a pass that was never theirs.',
  },
  {
    id: 'duncan-the-tall',
    name: 'Duncan the Tall',
    epithet: 'Dunk',
    house: 'The hedge · Kingsguard',
    image: 'heroes/duncan-the-tall.jpg',
    locationId: 'kings-landing',
    steel:
      'A hedge knight’s longsword and a shield beaten half to death. He was too tall for grace and too honest for the lists’ politics. What he had was reach, a stubborn guard, and a squire who would be king. Later, as Lord Commander, the steel was the same. The cloak was new.',
    backstory:
      'Ser Duncan the Tall came out of Flea Bottom and the roads, a hedge knight who claimed a dead man’s spurs and then spent a life trying to deserve them. He took on a bald boy named Egg and stumbled through tourneys, robber knights, and the polite murders of the highborn until the boy was Aegon V and Dunk was Lord Commander of the Kingsguard. The songs love the height. The histories love that a knight from nowhere kept a king from being his brother. He died at Summerhall, in the fire that was meant to be a birth.',
    deeds:
      'He championed the weak in tilts that should have killed him. He stood with Egg against a realm that wanted the boy small. He rose to Lord Commander without ever learning to like a lie. Barristan, as a boy, unhorsed him and still talked of Dunk as if the unhorsing were the honor.',
    battles:
      'Ashford. Whitewalls. The petty wars of a hedge knight that were never petty to the people in them. Summerhall, which was not a battle and killed him like one.',
    fate:
      'Dead in the tragedy at Summerhall, with his king. No grave the smallfolk can visit. The white book has the page. Dunk would have said the page was too clean.',
    ties:
      'Egg — Aegon V. Barristan, who knocked him down and never forgot him. The Red Keep’s white cloaks, which he commanded from a height the job had not seen. Summerhall is ash. The roads that made him are still there.',
  },
  {
    id: 'podrick-payne',
    name: 'Podrick Payne',
    epithet: 'Pod',
    house: 'House Payne',
    image: 'heroes/podrick-payne.jpg',
    locationId: 'kings-landing',
    steel:
      'A squire’s sword until it wasn’t. He learned in Tyrion’s shadow and Brienne’s patience: a straight, unfancy longsword, both hands when he was afraid, which was often, and still the blade that killed a kingsguard in a yard when no one was watching the squire. He is living proof that the lists lie about where knights come from.',
    backstory:
      'A shy cousin of Ser Ilyn Payne, handed to Tyrion as a squire because someone in the West wanted the boy gone. He stammered, spilled, and stayed. He followed a dwarf into war, a woman into oaths, and a dead army into a breach. The show lets him live long enough to be knighted in the snow at Winterfell, which is the correct ending for a boy who kept standing up. He is the least legendary name in this hall, and one of the few who earned the door by not wanting it.',
    deeds:
      'He killed Ser Mandon Moore of the Kingsguard in the Blackwater’s chaos when the man tried to drown Tyrion — a squire’s stroke the singers forget and Tyrion does not. He squired for Brienne through the riverlands. He stood the Long Night. He was made a knight because the people who had watched him asked for it.',
    battles:
      'The Blackwater. The riverlands with Brienne. Winterfell against the dead. He is never the charge. He is the reason the charge has someone left to squire for.',
    fate:
      'Alive when the songs stop, a knight of no great house and better habits. The Paynes gave the realm a headsman and a squire. The squire is the one worth the ink.',
    ties:
      'Tyrion, who named him. Brienne, who taught him. Ilyn Payne, the mute uncle whose work Pod would not do. King’s Landing made him. Winterfell knighted him.',
  },
  {
    id: 'arya-stark',
    name: 'Arya Stark',
    epithet: 'No One',
    house: 'House Stark',
    image: 'heroes/arya-stark.jpg',
    locationId: 'braavos',
    steel:
      'Needle, castle-forged and small, a thin sword for a thin girl who refused to sew. Syrio Forel’s water dancing first: swift feet, a pointed stick, the lesson that not-seeing is the death. Later the Faceless Men added the other knives, the poison, and the lying. She kills with a needle and with nothing you saw coming.',
    backstory:
      'Ned’s younger daughter, too northern for a queen and too quick for a cage. She lost a father on the steps, a pack on the road, and a name in Braavos, then came home with all three in different shapes. She is a Stark who learned the city’s lesson without loving the city. The hall lists her among warriors because the Long Night ended on a weirwood’s roots with Needle’s sister-blade in a dead king’s chest, and because the girl who said “I am no one” still knew the way to Winterfell.',
    deeds:
      'She survived the road when ladies did not. She took the faces of men who had taken hers. She killed Walder Frey and served his house its own pie. She ended the Night King in the godswood when the dragons and the named swords were looking the wrong way. Then she chose the west, and a map the maesters have not drawn.',
    battles:
      'The street in King’s Landing where Syrio made a last lesson of Meryn Trant. The Twins, repaid. The Long Night at Winterfell. A hall of Freys that was not a battle so much as a closing of accounts.',
    fate:
      'Alive, and gone into the Sunset Sea. Sansa has the North. Jon has the Wall’s far side. Arya has the part of the map that does not yet have names. Needle went with her.',
    ties:
      'Syrio, who named her a swordsman. Jaqen H’ghar and the House of Black and White. The Hound, who was almost a teacher. Jon, who gave her the first steel. Winterfell. Braavos. The Twins, which she unmade.',
  },
  {
    id: 'bronn',
    name: 'Bronn',
    epithet: 'Ser Bronn of the Blackwater',
    house: 'A sellsword · later a lord',
    image: 'heroes/bronn.jpg',
    locationId: 'kings-landing',
    steel:
      'A sellsword’s longsword and a knife for the work the longsword is too proud to do. No named blade. No style a master-at-arms would write down. He fights dirty, cheap, and alive. That is the style. It has killed better-trained men in better armor for worse pay.',
    backstory:
      'A sellsword who met Tyrion in the Eyrie’s sky cells and discovered that a dwarf who paid was rarer than a knight who prayed. He championed Tyrion against Ser Vardis Egen, took a knighthood after the Blackwater, and spent the wars asking what a castle cost. The show makes him Lord of Highgarden, which is a joke the Tyrells would not have laughed at and Bronn would. He is in this hall because skill without a song is still skill, and because half the named knights on this parchment would be dead if they had fought him in a ditch.',
    deeds:
      'He won a trial by combat in the Eyrie by not fighting like a Vale knight. He stood the Blackwater for a promise of a lordship. He taught Jaime to fight with the wrong hand, after a fashion. He survived every employer, which is a sellsword’s only masterpiece.',
    battles:
      'The Eyrie’s yard. The Blackwater. The later wars he joined only when the pay was a castle. He is a specialist in not dying where honor would have required it.',
    fate:
      'Lord of the Reach on the show, sitting a rose throne in boiled leather. Alive. Rich. Unloved by the maesters, which will not trouble him.',
    ties:
      'Tyrion, the employer who became something like a friend. Jaime, the student who hated the lessons. The Eyrie, where he first made a name. King’s Landing, where he bought the rest. Highgarden, which he was given like a last cynical coin.',
  },
  {
    id: 'howland-reed',
    name: 'Howland Reed',
    epithet: 'Lord of Greywater Watch',
    house: 'House Reed',
    image: 'heroes/howland-reed.jpg',
    locationId: 'tower-of-joy',
    steel:
      'A crannogman’s tools: net, frog spear, bronze knife, poison that does not care about your armor. He is not a knight of the lists. He is the reason a knight of the lists died in the Prince’s Pass. The small steel, used at the right time, unmade the Sword of the Morning.',
    backstory:
      'Lord of Greywater Watch, a moving keep the maps cannot pin. He was the smallest of Ned’s party at Harrenhal and at the tower — a crannogman among wolves, mocked until he was not. The Reeds keep to the Neck and to old gods the Andals never quite drowned. Howland went south once. He came home with a story he would not tell, and sent his children north with it in pieces. Meera and Jojen are his argument that the Neck still owes Winterfell a sword.',
    deeds:
      'He stood with the Starks at Harrenhal when it would have been wiser not to. He was one of two men who walked away from the Tower of Joy. The show is plain: Arthur Dayne had Ned until Howland put a knife in the white cloak’s back. The North calls that survival. The songs of knights call it something else. The child behind the door lived. That is the deed.',
    battles:
      'Harrenhal’s tourney grounds, in the crowd more than the lists. The Tower of Joy. The Neck, which he has held without a field army for a generation by knowing which ground swallows horses.',
    fate:
      'Alive in the swamps, still not riding to anyone’s war but the one that already took his son. Greywater Watch will not be on the atlas. The tower is. He is the link between them.',
    ties:
      'Ned, whose life he saved. Arthur Dayne, whose death he dealt. Meera and Jojen, sent to Bran. Lyanna’s son, who would not exist as Jon Snow without a crannogman’s knife. The Neck. The Prince’s Pass.',
  },
  {
    id: 'gendry',
    name: 'Gendry',
    epithet: 'The Bull',
    house: 'A bastard of Storm’s End',
    image: 'heroes/gendry.jpg',
    locationId: 'storms-end',
    steel:
      'A warhammer, because blood will out even when the name will not. He learned it at a forge first: Mott’s apprentice, a smith’s shoulders, a bull’s helm he made himself. In the field the hammer is Robert’s echo without Robert’s songs. He hits things until they are honest.',
    backstory:
      'A Flea Bottom bastard with a king’s face, sent to the Wall in a cart full of other people’s problems, pulled off the road by a Brotherhood that wanted royal blood for a red god. Arya named him a friend. Davos named him a duty. The show knights him in the snow and gives him Storm’s End because someone had to sit Robert’s chair who had actually swung a hammer. He is a warrior because the forge taught him that steel listens to the arm, not the lord.',
    deeds:
      'He survived being hunted for his blood. He rowed for his life beyond the Wall and ran for a raven that brought a dragon. He fought the dead at Winterfell. He took a bastard’s name and a storm lord’s seat in the same hour, which is a jest the old king would have roared at.',
    battles:
      'The Brotherhood’s woods. The ice beyond Eastwatch, where the dead and a chain taught him what a hammer is for. The Long Night. He is not a commander. He is the bull in the line.',
    fate:
      'Lord of Storm’s End when the wars end, a smith in a keep that has never known one. Alive. The Baratheon name goes on without the drunken part, if he is lucky.',
    ties:
      'Robert, who never knew him. Arya, who did. Davos, who saved him from a fire. Melisandre, who wanted the blood in him. Mott’s forge in King’s Landing. Storm’s End, which was always the inheritance if anyone had told the truth.',
  },
  {
    id: 'jory-cassel',
    name: 'Jory Cassel',
    epithet: 'Captain of the Household Guard',
    house: 'House Cassel',
    image: 'heroes/jory-cassel.jpg',
    locationId: 'kings-landing',
    steel:
      'Castle-forged steel and the drill of Winterfell’s yard. A household captain’s sword: competent, unshowy, meant to keep a lord alive in a street, not to win a tourney. He was good. He was not Jaime Lannister. The street made that a math problem.',
    backstory:
      'Rodrik’s nephew, Ned’s captain, the man who rode south with the Hand because someone had to count the cloaks and watch the windows. He had been to war with Ned before. He had a northern face and a southern job. King’s Landing killed him for being the man between a Lannister and a Stark, which is where household knights always die.',
    deeds:
      'He kept Winterfell’s men in a city that eats country guards. He arrested the wrong people on Ned’s orders and the right ones too late. He died in the street with a Lannister spear in him so that the songs could later say Ned was alone. He was not, until then.',
    battles:
      'The skirmish in King’s Landing’s streets after Jaime’s men came for Ned — a brawl that was over in breaths. Jory took a spear through the eye. That is the battle. It does not need a second verse.',
    fate:
      'Dead on the cobbles. Sent home, if anyone had the time. The Cassels kept serving. The captain did not.',
    ties:
      'Ned, his lord. Rodrik, his uncle. Jaime, whose quarrel it was. Winterfell’s yard. King’s Landing’s street, which is the only atlas pin the death deserves.',
  },
  {
    id: 'rodrik-cassel',
    name: 'Rodrik Cassel',
    epithet: 'Master-at-Arms of Winterfell',
    house: 'House Cassel',
    image: 'heroes/rodrik-cassel.jpg',
    locationId: 'winterfell',
    steel:
      'A knight’s sword and a cat-o’-nine-tails for the boys in the yard. Whiskers, plate, and the patience to teach a lord’s sons that the swing comes from the hips. He was Winterfell’s memory of how to hold a blade when the Starks were still children.',
    backstory:
      'Master-at-arms to two generations of wolves. He taught Robb, Jon, and Theon, and lived long enough to see one of them take the castle with ironborn and put him on his knees in the yard he had kept. Rodrik was the North’s idea of a loyal knight: not brilliant, not famous, present. When Winterfell needed a man to go south with Catelyn, he went. When it needed a man to retake the castle, he came home to a noose.',
    deeds:
      'He trained the last generation of Stark swords. He rode with Catelyn to the Eyrie and back to war. He raised men to take Winterfell from Theon’s handful and would have done it, if the Dreadfort’s bastard had not been playing a longer game.',
    battles:
      'The taking-back of Winterfell that never finished. Ramsay’s trick. The yard, where Theon — shaking — took his head because ironborn were watching. A knight’s last battle can be a boy with a sword and no choice.',
    fate:
      'Beheaded by Theon Greyjoy in Winterfell’s own yard. Buried, if the ironborn allowed it, in the place he had spent a life teaching other men not to die. They died anyway. So did he.',
    ties:
      'Ned’s household. Catelyn’s escort. Theon, his student and his ending. Jory, his nephew. Winterfell is the whole of the map he belongs on.',
  },
  {
    id: 'garlan-tyrell',
    name: 'Garlan Tyrell',
    epithet: 'Garlan the Gallant',
    house: 'House Tyrell',
    image: 'heroes/garlan-tyrell.jpg',
    locationId: 'highgarden',
    steel:
      'A longsword in a reachman’s hand, and the rare courtesy of practicing against three or four men at once because one was not enough to teach him anything. The books are clear: he was a better swordsman than Loras, and less interested in being seen. No named Valyrian. The style was enough.',
    backstory:
      'Second son of Mace Tyrell, husband to Leonette Fossoway, the brother the singers skipped because Loras was prettier in a cloak of flowers. The show has almost no room for him; the White Book of this hall will not follow that silence. Garlan wore Renly’s armor at the Blackwater so that a ghost would break Stannis’s men. He fought in the yard as if war were a craft. Highgarden produced a knight the lists should have made famous. Politics produced a brother instead.',
    deeds:
      'He trained against several foes at once and won. He took a dead king’s antlers into the Blackwater’s smoke and helped turn a battle from the inside of a lie. He was, by the testimony of men who knew both, the finest blade in a house that made a religion of chivalry.',
    battles:
      'The Blackwater, in Renly’s armor — a book’s fact the show leaves out, which is why a maester writes it here. The Reach’s later wars are a ruin around him. Highgarden falls in fire on the show without giving him a death scene. The ink has to stop where the tongues do.',
    fate:
      'Uncertain on the show, which forgot him. In the books he is alive when the last pages we have close, a gallant man in a house that is running out of ground. Either way Loras got the songs. Garlan got the work.',
    ties:
      'Loras, the famous brother. Margaery. Mace. Renly, whose armor he wore. Highgarden. The Blackwater, which is the one pin a careful atlas can give him.',
  },
  {
    id: 'brienne-of-tarth',
    name: 'Brienne of Tarth',
    epithet: 'The Maid of Tarth',
    house: 'House Tarth · Kingsguard',
    image: 'heroes/brienne-of-tarth.jpg',
    locationId: 'tarth',
    steel:
      'Oathkeeper, the Valyrian longsword Jaime put in her hand — Ice’s second life, a lion’s hilt on wolf steel. Before that, a plain even-star sword and a style no one in a tourney wanted to look at: strength, reach, a high guard, and the refusal to make a pretty corpse. She fights like a true knight in a century that uses the word for decoration.',
    backstory:
      'Evenstar’s unmarriageable daughter, mocked in halls, unbeaten in the mud. Renly made her a rainbow guard because she asked with a sword. Catelyn took the vow that came after. Jaime gave her a blade and a reason. She kept both. The show lets her live to write his page in the white book as Lord Commander of Bran’s Kingsguard, which is the only joke in her story that is also justice.',
    deeds:
      'She took Renly’s colors and kept his memory when it was dangerous. She swore to Catelyn and delivered what could be delivered: a daughter, a steel, a word kept in a country of broken ones. She knighted Jaime in the snow because she still believed the word meant something. She commanded a Kingsguard for a king who does not walk like a king.',
    battles:
      'The shadow in Renly’s tent, which she could not fight. The bear pit at Harrenhal. The brothers of the Bloody Mummers. The Long Night at Winterfell. A lifetime of single combats against men who thought the scarred woman would be easy.',
    fate:
      'Lord Commander, alive, the Evenstar still waiting across a narrow sea of a different kind. She has the white cloak they laughed at. She has the book. She has Oathkeeper. It is enough.',
    ties:
      'Renly. Catelyn. Jaime, who is the page. Sansa and Arya, the charge. Podrick, the squire. Tarth. Winterfell’s godswood snow. The riverlands, which taught her what oaths cost.',
  },
  {
    id: 'yara-greyjoy',
    name: 'Yara Greyjoy',
    epithet: 'Asha, in the older ink',
    house: 'House Greyjoy',
    image: 'heroes/yara-greyjoy.jpg',
    locationId: 'pyke',
    steel:
      'An axe, a dirk, and a longship. Ironborn fighting is boarding, wet decks, and the first man over the rail. She is that first man. The books name her Asha; the show names her Yara. The arm is the same. She prefers a fight she can sail away from if the gods are iron, and into if they are not.',
    backstory:
      'Balon’s daughter, the heir he actually wanted, a captain when Theon was still a ward playing at krakens. She sailed to war for the Islands, then for herself, then for a queen with dragons because the alternative was Euron’s drowning. She is in this hall because the Iron Islands rarely make knights and still make killers, and because she chose a living people over a drowned god’s theater. Theon died a Stark. Yara lived a Greyjoy. Both were correct.',
    deeds:
      'She took ships and keeps in the North when the kraken rose. She sailed into the Dreadfort to buy a brother and sailed out without him because the man in the kennel would not stand. She survived Euron. She sat the peace as the Greyjoy who wanted a people, not a pyre.',
    battles:
      'The ironborn rising. The Dreadfort raid. The sea-fight with Euron that cost her ships and, for a time, her freedom. The last wars, which she entered as an ally of dragon and wolf both, and left as Lady of the Iron Islands.',
    fate:
      'Alive, ruling Pyke, the drowned god’s least obedient daughter. The Islands remain. The kings she backed do not. That is an ironborn victory by any honest count.',
    ties:
      'Theon. Balon. Euron, the uncle who was the storm. Daenerys, for a season of sails. Pyke. The Dreadfort, where she learned a brother could be gone while still breathing.',
  },
  {
    id: 'ygritte',
    name: 'Ygritte',
    epithet: 'Kissed by Fire',
    house: 'The Free Folk',
    image: 'heroes/ygritte.jpg',
    locationId: 'haunted-forest',
    steel:
      'A weirwood bow, red hair, and an arrow for crows. She fought as the Free Folk fight: no plate, no lists, a running war in trees. The bow was the point. The mouth was the other weapon. She could have killed Jon Snow a dozen times and chose, for a while, not to.',
    backstory:
      'A spearwife of the haunted forest, kissed by fire, sure that the Wall was a scar and the men on it were thieves. She captured a crow, loved him, and followed him south of the ice into a killing that did not care about the love. She is in this hall because the Free Folk’s war is a war, and because she hit what she aimed at until the last arrow was not hers.',
    deeds:
      'She climbed the Wall. She fought in Mance’s great host. She taught a Lord Commander’s future that the enemy had songs, names, and a reason. She died in Castle Black’s yard with an arrow in her, still sure that Jon knew nothing.',
    battles:
      'The Frostfangs. The climb. The attack on Castle Black, where the Free Folk hit the tunnel and the stairs and the yard, and where a boy she had loved was on the other side of the shafts.',
    fate:
      'Dead in Jon’s arms in the snow of the castle that had always been the other side of her war. Buried beyond, if the Watch allowed it. The true north keeps her. The south never learned the name right.',
    ties:
      'Jon Snow. Tormund. Mance. The haunted forest. Castle Black’s yard. The Wall, which she crossed and which killed her for it.',
  },
  {
    id: 'qhorin-halfhand',
    name: 'Qhorin Halfhand',
    epithet: 'The Halfhand',
    house: 'The Night’s Watch',
    image: 'heroes/qhorin-halfhand.jpg',
    locationId: 'fist',
    steel:
      'A ranger’s longsword in the left hand, because a wildling axe had taken the better fingers of the right. He made the off hand the killing one. That is a style you only learn if you live. He fought like the Wall’s memory of what rangers were for: quiet, far, and already dead if the plan required it.',
    backstory:
      'A legend of the Shadow Tower, the ranger other rangers told stories about to stay awake. He took Jon Snow into the Frostfangs to find Mance, then gave the boy an order that looked like murder: kill me, take my cloak’s opposite, and live among the Free Folk. Jon did. Qhorin died as a crow and as a teacher. The Watch has had few better.',
    deeds:
      'He ranged farther than the maps. He taught Jon the only lesson that would keep him alive beyond the trees: the Watch is the men, not the black. His death was a mission, not a failure.',
    battles:
      'A hundred nameless fights in the haunted forest. The last one, among stones, with Rattleshirt’s band watching, where he pressed Jon until the boy had no choice but to be a wildling for a while.',
    fate:
      'Dead by Longclaw, on his own order. The Watch lists him fallen. The true north lists him as the crow who understood the assignment.',
    ties:
      'Jon Snow, his last recruit. Mance, the prey. The Fist of the First Men, the ranging that ate the Watch. The Shadow Tower. The haunted forest.',
  },
  {
    id: 'jeor-mormont',
    name: 'Jeor Mormont',
    epithet: 'The Old Bear',
    house: 'House Mormont · Night’s Watch',
    image: 'heroes/jeor-mormont.jpg',
    locationId: 'castle-black',
    steel:
      'Longclaw, the Valyrian bastard sword of Bear Island, until he put a wolf’s head on it and put it in Jon Snow’s hand. He fought like an old lord who had chosen a colder house: direct, mailed, tired of speeches. The blade was a gift. The style was a warning.',
    backstory:
      'Lord of Bear Island who took the black so that Jorah could have the land, then had to watch Jorah disgrace it. He commanded the Watch when the dark started walking. He gave Jon a sword, a ranging, and a kind of fatherhood. He died at Craster’s at the hands of his own brothers, which is the Watch’s oldest wound. The Old Bear deserved a better last yard.',
    deeds:
      'He kept the Wall manned with too few men and too many graves. He led the great ranging to the Fist. He named the dead a problem before the south would say the word. He made Jon Snow a Mormont in all but blood.',
    battles:
      'The ranging beyond the Wall. The wight in his own tower, which Jon burned. Craster’s Keep, which was not a battle but a mutiny, and which killed him.',
    fate:
      'Stabbed by his own at Craster’s. Burned, if the mutineers allowed a fire. Longclaw stayed with Jon. Bear Island stayed with the women who had always held it better.',
    ties:
      'Jon, the son he chose. Jorah, the son he lost. Sam, whom he ordered to read. Castle Black. The Fist. Craster’s. Bear Island, which still has his house and not him.',
  },
  {
    id: 'benjen-stark',
    name: 'Benjen Stark',
    epithet: 'The First Ranger',
    house: 'House Stark · Night’s Watch',
    image: 'heroes/benjen-stark.jpg',
    locationId: 'castle-black',
    steel:
      'A ranger’s sword and the old gods’ kind of quiet. First Ranger of the Watch, which means he was the man you sent when the maps went white. On the show he returns as something between a corpse and a vow, with a flaming chain, and spends his last act buying a nephew a horse. That is still a Stark’s steel.',
    backstory:
      'Ned’s younger brother, who took the black while the Rebellion’s graves were still new. He rode from Winterfell the day Robert came, and the North spent the rest of the war asking where Benjen was. The answer, when it came, was worse than absence. The show gives him a frozen half-life and a last stand on a frozen lake. The books have not yet spent him. Either way he is the missing wolf the Wall was supposed to explain.',
    deeds:
      'He ranged. He taught Jon that the black is a choice you do not get to unmake. He came back from the true north long enough to pull his brother’s son off the ice, and then the dead took the rest.',
    battles:
      'The rangers’ wars that do not get names. The frozen lake beyond the Wall, where he held a dead horde with fire so Jon could run. That is the only battle the south saw, and it was already over.',
    fate:
      'Gone, then briefly back, then gone into the dead for good. No crypt at Winterfell. The First Ranger rarely gets one.',
    ties:
      'Ned. Jon. The Watch. Castle Black. The true north, which kept him longer than his house did. Lyanna’s ghost, which is why a Stark was on the Wall at all.',
  },
  {
    id: 'jon-snow',
    name: 'Jon Snow',
    epithet: 'The White Wolf',
    house: 'House Stark · Night’s Watch',
    image: 'heroes/jon-snow.jpg',
    locationId: 'castle-black',
    steel:
      'Longclaw, Valyrian, a bastard sword for a boy who was told he was a bastard. He learned the Watch’s yard, then the Free Folk’s, then a king’s. Ghost at his side. The style is northern: two hands when it is honest, a shield wall when it is wise, and a bad habit of walking first into places that kill first-walkers.',
    backstory:
      'Raised at Winterfell as Ned’s shame, sent to the Wall, made a man by wildlings, made a Lord Commander by brothers, made a corpse by them too, and made a king by a North that had run out of better ideas. The secret under the name is Rhaegar and Lyanna, which he never asked for. He is in this hall because he held the Wall when it was a joke, rode a dragon when it was a heresy, and still chose a life at the edge of the map over a chair. That is a warrior’s ending even when it looks like exile.',
    deeds:
      'He took the black and kept it longer than the men who stabbed him. He defended Castle Black against Mance. He was named Lord Commander, then King in the North. He fought the Night King at Winterfell and a queen he loved in the south. He killed her because the world was going to burn, and then he went home to a Wall that no longer knew what it was for.',
    battles:
      'The Fist’s aftermath. The climb. Castle Black. Hardhome, which taught the south the dead. The Battle of the Bastards. The Long Night. King’s Landing, which he entered as a consort and left as a kinslayer of a kind. The true north, afterward, which is not a battle if you are lucky.',
    fate:
      'Alive, riding beyond the Wall with Free Folk and a white direwolf. The watch is ended and not ended. He is the last sword the ice required, and the ice has him back.',
    ties:
      'Ned, who lied. Arya, who got Needle from him. Ygritte. Sam. Tormund. Daenerys. Longclaw was Jeor’s. The blood was Rhaegar’s. Winterfell. Castle Black. Hardhome. The haunted forest.',
  },
  {
    id: 'tormund-giantsbane',
    name: 'Tormund Giantsbane',
    epithet: 'Husband to Bears',
    house: 'The Free Folk',
    image: 'heroes/tormund-giantsbane.jpg',
    locationId: 'hardhome',
    steel:
      'A great axe and a mouth that counts as a second weapon. He fights like a man who has already told the story of the fight and is checking the facts. No plate that a southron knight would recognize. The style is Free Folk: hit, boast, live, repeat. It has kept him alive through more ends of the world than most knights have named battles.',
    backstory:
      'A raider of the true north, Mance’s loudest captain, Jon Snow’s least likely friend. He climbed, he charged the Wall, he ate crow, he fought the dead at Hardhome and at Winterfell, and when the thrones were finished he walked back beyond the ice with Ghost, which is the only peace he would have trusted. He never learned to kneel. The story finally stopped asking.',
    deeds:
      'He led Free Folk against the Wall and later through it. He held Eastwatch. He stood the Long Night. He is the Free Folk’s proof that they are not one thing, and that a promise to a crow can be kept without a maester to write it down.',
    battles:
      'The attack on Castle Black. Hardhome. Eastwatch and the wight hunt. Winterfell against the dead. A hundred raids the Watch never numbered.',
    fate:
      'Alive, gone back into the white. The atlas thins where he is happiest. That is the point of him.',
    ties:
      'Mance. Jon. Ygritte. Brienne, whom he admired with a lack of shame that is its own style. Hardhome. Castle Black. The Wall from the north.',
  },
  {
    id: 'mance-rayder',
    name: 'Mance Rayder',
    epithet: 'The King-Beyond-the-Wall',
    house: 'The Free Folk · once the Watch',
    image: 'heroes/mance-rayder.jpg',
    locationId: 'hardhome',
    steel:
      'A longsword and a king’s gift for getting men who hate kneeling to walk in the same direction. He was a ranger before he was a wildling, which is why he knew where the Watch was weak. He fought as a commander of a people who do not keep commanders. The red god burned him on the show. The books suggest a glamour and a different corpse. This hall follows the fire the south saw, and notes the ink that disagrees.',
    backstory:
      'A brother of the Night’s Watch who stepped over the ice for a life that had songs in it. He united Thenns, Hornfoots, giants, and clans that had murdered each other for centuries because the dead had started walking and the Wall would not listen. He is the only king in this parchment who never wanted a chair — only a gate, and time.',
    deeds:
      'He made a people out of the Free Folk. He marched a host at the Wall that should not have existed. He failed the gate and still won the argument: the dead are coming, and the kneelers will have to share the dirt. Jon learned the north from Ygritte. He learned the king from Mance.',
    battles:
      'The gathering in the Frostfangs. The assault on Castle Black, broken by Stannis’s charge in the snow. The show’s pyre at the Wall, which was a king’s last public work.',
    fate:
      'Burned by Melisandre before the Watch, unless you trust the older ink that says the man in the flames was Rattleshirt. Either way the King-Beyond-the-Wall is finished as a banner. The Free Folk go on.',
    ties:
      'Jon, who was sent to kill him and could not. Tormund. Ygritte. Stannis, who broke the host. Melisandre, who wanted a king for kindling. Castle Black. The Frostfangs. Hardhome, where his people later learned he had been right.',
  },
  {
    id: 'khal-drogo',
    name: 'Khal Drogo',
    epithet: 'The Great Khal',
    house: 'The Dothraki',
    image: 'heroes/khal-drogo.jpg',
    locationId: 'vaes-dothrak',
    steel:
      'An arakh, the curved silk of the grass sea, and a braid uncut because no man had ever cut it. He fought from horseback, close, fast, and without the south’s idea of a line. A khalasar is the weapon. The arakh is only the tooth.',
    backstory:
      'A khal who had never lost, who took a dragon princess as a bride because a beggar king promised a world across the water. He was brutal in the way of the Dothraki, and to Daenerys he became, against every reasonable map, a home. A festering wound and a bloodmage undid him. He lived long enough to end a khalasar and start a pyre. Three dragons came out of it. He did not see them.',
    deeds:
      'He built a khalasar large enough to make the Free Cities quiet. He promised his wife the Iron Throne as a cradle for a son who would be the stallion who mounts the world. He died before the promise came due, which is why the promise became dragons instead of horses.',
    battles:
      'The endless victories the Dothraki do not write down. A wound in a village fight that should not have been the end, and was. There is no pitched battle with his name on a Westerosi parchment. The grass is the battle.',
    fate:
      'Dead in a tent, then gone in a fire that made a queen. Vaes Dothrak still has the bells of defeated khals. His braid is ash.',
    ties:
      'Daenerys. Viserys, who sold her. Mirri Maz Duur, who took the price. Vaes Dothrak. The grass sea, which the atlas can only edge.',
  },
  {
    id: 'syrio-forel',
    name: 'Syrio Forel',
    epithet: 'First Sword of Braavos',
    house: 'Braavos',
    image: 'heroes/syrio-forel.jpg',
    locationId: 'braavos',
    steel:
      'A wooden sword, then a lost practice blade, then whatever was in the room. Water dancing: the Bravo’s art, all footwork and seeing. He taught a northern girl that the eyes lie and the feet tell the truth. He faced steel plate with a broken stick and made it a lesson anyway.',
    backstory:
      'First Sword of Braavos, once, by his own word — the Sea Lord’s champion, come west to teach a Hand’s daughter how not to die in a sewing circle. He lasted a season in King’s Landing and a morning in the Red Keep. Whether he died there is a question the show leaves in the hallway with Meryn Trant. This hall records him as a warrior because Arya Stark is one, and she was not born that way. Someone taught the wolf to dance.',
    deeds:
      'He trained Arya. He held a hallway against men in plate so she could run. That is a First Sword’s last honest work, even with a toy in his hand.',
    battles:
      'The Red Keep’s corridor, Ser Meryn and the gold cloaks. Not a battle in the histories. The only one that mattered to the girl who left.',
    fate:
      'Unknown, which is a kinder ink than dead. Braavos still has water dancers. It does not have this one in the yard. Arya took the seeing with her.',
    ties:
      'Arya, the only pupil this parchment cares about. Ned, who hired him. Meryn Trant, the knight in the hall. Braavos. King’s Landing, for a few moons.',
  },
  {
    id: 'grey-worm',
    name: 'Grey Worm',
    epithet: 'Commander of the Unsullied',
    house: 'The Unsullied',
    image: 'heroes/grey-worm.jpg',
    locationId: 'astapor',
    steel:
      'A spear and a shortsword, the Unsullied pair, used as they were trained in Astapor: lockstep, silence, the shield of the man beside you more important than your name. Freedom did not change the grammar of it. It only gave him a reason that was not a master’s whip.',
    backstory:
      'A boy of the Good Masters, named for a worm, remade into a eunuch spear. Daenerys named him commander when she named all of them free. He loved Missandei. He learned that freedom is messier than a barracks. When the bells rang in King’s Landing he killed men who had dropped their swords, which is the old training answering a new grief. He is in this hall because the Unsullied won wars Westerosi knights said eunuchs could not win, and because he was the one who had to decide what winning was for.',
    deeds:
      'He took Astapor’s lesson and turned it on Astapor’s kind. He held Meereen. He fought at Winterfell against the dead. He took King’s Landing’s streets. He sailed, at the end, toward Naath, which is a commander choosing a living woman over a dead city.',
    battles:
      'The taking of the slaver cities. Meereen’s harpy war. The Long Night. The sack that followed the bells. Unsullied battles look like walls moving. He was the wall’s voice.',
    fate:
      'Alive, gone from Westeros, a spear on a road that is not on this atlas. Missandei is the map he kept.',
    ties:
      'Daenerys. Missandei. The Unsullied. Astapor, where he was made. Meereen, where he was a person. King’s Landing, where grief and drill met. Naath, which he chose.',
  },
  {
    id: 'daario-naharis',
    name: 'Daario Naharis',
    epithet: 'Of the Stormcrows',
    house: 'A sellsword of Pentos',
    image: 'heroes/daario-naharis.jpg',
    locationId: 'meereen',
    steel:
      'Arakh and stiletto, or the show’s gilded knives — a duelist’s pair for a man who smiles when he kills. Sellsword flash, not a knight’s guard. He is quick, vain, and effective in the kind of fight that happens in a tent or a street, not a shield wall.',
    backstory:
      'A captain of the Stormcrows who took the company by murdering the other captains and laying their heads at a queen’s feet. He loved Daenerys the way a sellsword loves a banner that pays in more than coin. She left him in Meereen when she sailed west, which is a queen’s decision and a lover’s ending. He is here because Slaver’s Bay was a war, and he was one of the blades that made it move.',
    deeds:
      'He delivered the Stormcrows. He took cities and captains for a dragon queen. He held Meereen’s uneasy peace when she rode north, a sellsword sitting a pyramid like a joke that had come true.',
    battles:
      'The campaigns around Yunkai and Meereen. Duels and street-work the Unsullied would not call battles. He is a specialist in the cut that starts the story.',
    fate:
      'Left behind in Meereen, alive, a king of nothing that will last. The queen did not return. Sellswords survive that. It is in the contract.',
    ties:
      'Daenerys. The Stormcrows. Meereen. Pentos, if the older name is true. The fighting pits, which suited him better than a throne.',
  },
  {
    id: 'oberyn-martell',
    name: 'Oberyn Martell',
    epithet: 'The Red Viper',
    house: 'House Nymeros Martell',
    image: 'heroes/oberyn-martell.jpg',
    locationId: 'sunspear',
    steel:
      'A spear, often poisoned, and a fighter’s vanity that was also a doctrine: keep moving, keep talking, make the big man follow. Dorne’s school, not the Reach’s. He fought as if the ending were already a story he was telling. That was the mistake, and also the reason anyone still tells it.',
    backstory:
      'Prince of Dorne, brother to Doran, uncle to a dead princess. He spent seventeen years making Elia’s rape and murder a thing he would finish in person. He came to King’s Landing for a wedding with Ellaria, poison, and a smile. He championed Tyrion because the Mountain would be in the yard. He needed Gregor to say the names. Gregor said them and then killed him anyway. Vengeance that pauses for a speech is not vengeance yet. The hall keeps him because the speech was almost enough, and because Dorne’s blade was real.',
    deeds:
      'He made the Red Viper a name the west actually feared. He fought in Essos with sellswords and with his own. He stood in a King’s Landing yard and made Tywin’s monster confess. That confession is a deed. The cost was the man.',
    battles:
      'The trial by combat against Ser Gregor Clegane, which is the only fight this age will remember him for. A lifetime of Dorne’s quieter knives before it.',
    fate:
      'Skull crushed in the Red Keep’s dust. The Sand Snakes tried to collect the debt and were collected instead. Oberyn’s legacy is a confession and a warning: do not stand over a dying monster to hear your own name.',
    ties:
      'Elia. Doran. Ellaria. Tyrion, whose trial it was. Gregor, the end. Sunspear. King’s Landing’s yard. The Water Gardens, if you want the man before the spear.',
  },
  {
    id: 'sandor-clegane',
    name: 'Sandor Clegane',
    epithet: 'The Hound',
    house: 'House Clegane',
    image: 'heroes/sandor-clegane.jpg',
    locationId: 'kings-landing',
    steel:
      'A greatsword as heavy as the man, no Kingsguard white, no songs. He fights like a butcher who was taught the knight’s forms and then set on fire. The burned side is the lesson. He hates his brother more than he hates the rest of the world, which is saying something, and he is still, against his own advice, the closest thing several children had to a shield.',
    backstory:
      'Gregor’s little brother, burned for a toy, made a Lannister dog, unmade on the Blackwater when the fire looked like the old fire. He went outlaw, went grave, went north, and came back to a keep that was falling down so he could finish a childhood. The show lets the brothers kill each other in the collapsing Red Keep. The books leave him possibly at rest on the Quiet Isle. This hall records both, and the man in the middle: a killer who kept a girl alive on a road that should have eaten her.',
    deeds:
      'He rode in Lannister wars and hated every cloak of it. He saved Loras from Gregor’s last blow in a tourney that should have ended the Mountain. He got Arya almost home. He fought the dead at Winterfell because there was nothing else left that made sense. He went back into the fire for the only fight he had ever wanted.',
    battles:
      'The Tourney of the Hand. The Blackwater, which broke him. The riverlands with Arya. The Long Night. The last duel with Gregor in a dying keep, which was not a duel so much as two dogs going into a hole.',
    fate:
      'Dead, on the show, under the Red Keep with the brother. Possibly alive in the books, a novice with a dog’s name. Either way the Hound is finished as a Lannister’s beast. That was the only ending worth the burn.',
    ties:
      'Gregor, the whole of the wound. Arya, the charge he would not admit. Sansa, once. The Brotherhood. Winterfell’s snow. King’s Landing, twice: the making and the unmaking.',
  },
  {
    id: 'gregor-clegane',
    name: 'Gregor Clegane',
    epithet: 'The Mountain That Rides',
    house: 'House Clegane',
    image: 'heroes/gregor-clegane.jpg',
    locationId: 'kings-landing',
    steel:
      'A two-handed greatsword the size of a lesser man’s spear, plate that looks like a keep, and a strength that makes skill a rumor. He does not fence. He ends. Later Qyburn’s work made the ending a habit that survived death. There is no style. There is a result.',
    backstory:
      'A knight in name, a horror in the riverlands, Tywin’s dog for the work dogs are not asked to describe. He killed Elia and her children in the Sack. He killed his own men for sport. He killed Oberyn after telling him the truth. He died of the Viper’s poison and was not allowed to stay dead. The thing that walked in his armor after that was Cersei’s oathbreaker and Qyburn’s boast. He is in this hall because a register of warriors that omitted him would be a lie. Skill is not the same as worth. The Mountain had the first in abundance.',
    deeds:
      'He won every fight that was only a fight. He made the riverlands a grave in the War of the Five Kings. He confessed Elia’s murder with Oberyn’s spear in him. He served as Cersei’s champion when the Faith wanted a trial and the queen wanted a monster.',
    battles:
      'The Sack of King’s Landing. The riverlands’ burning. The yard against the Red Viper. The last, with Sandor, in a keep that had finally found a fire big enough.',
    fate:
      'Dead as a man to Oberyn’s venom. Dead again, as a thing, in the Red Keep’s fall. No crypt. No quiet isle. The Clegane keep can go to whoever still wants the hounds.',
    ties:
      'Sandor. Tywin. Cersei. Qyburn. Oberyn. Elia, who is the debt. King’s Landing. Harrenhal, for a season of command. The riverlands, which remember the Mountain as weather.',
  },
  {
    id: 'ned-stark',
    name: 'Eddard Stark',
    epithet: 'The Quiet Wolf',
    house: 'House Stark',
    image: 'heroes/ned-stark.jpg',
    locationId: 'winterfell',
    steel:
      'Ice, the Valyrian greatsword of Winterfell, too large for a battlefield and perfect for a block. In war he carried a lord’s longsword like any northern commander. The style was the North’s: you swing the sword you sentence with. He was a soldier of Robert’s Rebellion before he was a cautionary tale about honor.',
    backstory:
      'Second son of Rickard, made lord when the Mad King cooked his father and strangled his brother. He rode to war with Robert, won a tower in Dorne, and came home with a sister’s bones and a bastard he would not explain. For fifteen years he kept the North by the old laws. Then he went south, found a truth, and died of it on the steps while a daughter watched. He is in this hall of warriors because the Rebellion was won by men like him as much as by Robert’s hammer, and because the Tower of Joy was a fight, not a riddle, until the riddle was all that was left.',
    deeds:
      'He fought through the Rebellion and took the North’s command from a grave. He survived the Tower of Joy. He ruled as Warden with a reputation for justice even among enemies. He uncovered the parentage of Robert’s children. He confessed a false treason to spare his girls, and was killed anyway. The confession was the last sword he had.',
    battles:
      'Robert’s Rebellion. The Tower of Joy. The street in King’s Landing where Jory died and Ice was not in his hand. The Sept of Baelor, which was not a battle, only an execution, and still belongs in the list because it ended the warrior.',
    fate:
      'Beheaded with Ice, his own steel, by a boy-king who wanted a show. Buried in Winterfell’s crypts, if the bones that came home were his. The North did not forgive it. His children made a war of the refusal.',
    ties:
      'Robert. Lyanna. Howland Reed. Jon, the secret. Catelyn. The girls who watched. Ice, which Tywin later unmade. Winterfell. The Tower of Joy. The Red Keep’s steps.',
  },
]
