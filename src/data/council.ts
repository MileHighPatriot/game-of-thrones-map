export type CouncilChapter = {
  id: string
  nav: string
  kicker: string
  title: string
  lede: string
  body: string[]
  image: string
  locationId: string | null
}

export type CouncilChair = {
  id: string
  name: string
  image: string
  duty: string
  who: string
  fate: string
}

export type CouncilFace = {
  id: string
  name: string
  bench: 'Hands' | 'Coin and whisper' | 'The old table' | 'The last table'
  office: string
  image: string
  role: string
  fate: string
  locationId: string | null
}

export const councilBenches: CouncilFace['bench'][] = [
  'Hands',
  'Coin and whisper',
  'The old table',
  'The last table',
]

export const councilChapters: CouncilChapter[] = [
  {
    id: 'table',
    nav: 'The Table',
    kicker: 'Chapter I · The Red Keep',
    title: 'Seven Chairs',
    lede: 'Aegon made a kingdom too large for one man. He sat a table so the realm could be ruled when the king was hunting, sleeping, or mad.',
    image: 'council/founding.jpg',
    locationId: 'kings-landing',
    body: [
      'The Small Council is the inner government of the Iron Throne: not the lords in their keeps, and not the mob in Flea Bottom. It is a closed room in the Red Keep where policy is made, debts are counted, and the king is told what he already wants to hear. The king heads it. Only he can turn its advice into law. When he is absent, a child, or drunk, the Hand of the King sits in his place and speaks with his voice.',
      'Show and book agree on the founding: Aegon the Conqueror assembled the first table after the Conquest, in 1 AC. Seven chairs, the number the Faith loved, so the Andals would see piety instead of a foreign war-camp. The offices were not hereditary. A king could name a smuggler, a eunuch, or his own brother, and dismiss them when the weather changed. In practice a dismissal could start a war, so the chairs filled with men who knew how to stay seated.',
      'Jaehaerys the Conciliator and his Hand, Septon Barth — a common-born man the Citadel never liked — turned the camp into a government. Roads, law, a realm that ran when the dragon was in the sky. That is the model later Hands pretend to sit. Viserys I’s table, the Green Council that stole a succession, Aerys’s shrinking circle: every later hour is a commentary on whether the room still works.',
      'The meeting place is the same building as the throne room. Maps, ledgers, wine. No banners on the table. The game in this room is quieter than a tourney and usually more expensive. Varys once told Ned that the king has many cares, and entrusts some small matters to them. Littlefinger smiled and said they were the lords of small matters. Both men were describing the actual government of Westeros.',
    ],
  },
  {
    id: 'aerys',
    nav: 'Aerys',
    kicker: 'Chapter II · A mad king’s table',
    title: 'The Lion’s Twenty Years',
    lede: 'Tywin ran the realm. Aerys sat the throne. The council learned what happens when the king hates the man who makes him look like a king.',
    image: 'council/aerys.jpg',
    locationId: 'kings-landing',
    body: [
      'For twenty years the Small Council was Tywin Lannister’s. He paid the debts, kept the roads, and turned a restless court into an administration. Aerys had wanted to be Aegon and Jaehaerys in one body. He began canals, walls, and wonders, and abandoned each when the stone needed paying. The whisper that followed was unbearable: it is Aerys who sits, but Tywin who rules. A proud king cannot live in a friend’s shadow. He kept Tywin close and punished him for being better.',
      'Pycelle was already Grand Maester before Aerys took the throne, and he would outlast the dynasty. Varys the eunuch arrived from the east and was named Master of Whisperers — little birds in every kitchen, a spider who served the crown because a stable realm was the only web worth spinning. The White Bull, Gerold Hightower, sat as Lord Commander. The books name the rest of that late table: Qarlton Chelsted on coin, Lucerys Velaryon on ships, Symond Staunton on laws. The show leaves those three in shadow and keeps the ones who survive into Robert’s reign.',
      'After Harrenhal, Tywin resigned. The Hands that followed were a lesson in decline. Owen Merryweather, chosen because he would not challenge, called Robert’s rising a nuisance until three kingdoms had united; Aerys stripped him. Jon Connington, young and fierce, failed to kill Robert in Stoney Sept and was exiled. Chelsted, promoted from coin, refused the wildfire plot and was burned alive in his own hall. Wisdom Rossart, a pyromancer, sat as Hand for the better part of two weeks. Jaime killed him at a postern gate before the signal could go out, then killed the king.',
      'The council did not save Aerys. It documented him. Pycelle, quietly Lannister for years, told the king to open the gates to Tywin. Varys told him to keep them shut. Aerys took the first advice. The city burned without wildfire. The table was still there when the new king arrived. So were Varys and Pycelle. Continuity is a kind of treason that looks like service.',
    ],
  },
  {
    id: 'robert',
    nav: 'Robert',
    kicker: 'Chapter III · Seventeen years',
    title: 'The Empty Chair',
    lede: 'Robert appeared at three meetings in seventeen years. The realm was governed by men he barely watched, in a room he barely entered.',
    image: 'council/robert.jpg',
    locationId: 'kings-landing',
    body: [
      'Jon Arryn took the Handship the day Robert took the throne and held it until a poisoned cup ended him. He had raised the king. He ran the kingdom. He married Lysa Tully to bind the Vale to the riverlands, and he brought a clever customs officer from Gulltown to court: Petyr Baelish, who made the port’s take tenfold and was rewarded with the realm’s purse. Littlefinger’s books showed a prosperous crown. The crown was six million gold dragons in debt — Lannister, Tyrell, the Iron Bank — and Robert would not hear the number.',
      'The rest of the table was a portrait of the new order. Stannis, Master of Ships, rebuilt the royal fleet and sat most days at Dragonstone, counting hulls and grudges. Renly, Master of Laws, was young, liked, and not yet a claimant; the dungeons ran, the jokes ran faster. Varys kept his birds. Pycelle kept his chain and his act of frailty. The Commander of the City Watch sat in when the capital needed reporting, but was not, strictly, a chair.',
      'Barristan Selmy, Lord Commander of the Kingsguard, would have sat by tradition. In the books he did. In the show Robert left him off the table because the white cloak had once guarded a dragon, and the king did not want a Targaryen knight in the room when the talk turned to killing the last two children of that house. Barristan did not mind. He was a knight. This was a counting-house.',
      'Tywin later said Robert came to three Small Council meetings in his entire reign. Renly and Pycelle lamented that he ignored every piece of Jon Arryn’s financial advice. The king hunted, drank, and spent. The lords of small matters kept the map from tearing until the Hand died, a northern friend was summoned, and the empty chair at the head of the table became a problem no ledger could hide.',
    ],
  },
  {
    id: 'ned',
    nav: 'Ned',
    kicker: 'Chapter IV · The last honest hour',
    title: 'A Wolf at the Table',
    lede: 'Ned found the debt, the bastards, and the secret. He thought the council was a court of law. It was already sold.',
    image: 'council/ned.jpg',
    locationId: 'kings-landing',
    body: [
      'Robert named Eddard Stark Hand because he trusted the only man at the table who did not want the job. Ned came south to learn why Jon Arryn had died. He found a realm that ran on Littlefinger’s credit, Varys’s birds, and a queen whose children did not have the king’s look. He sat the meetings. He argued against assassinating a girl across the sea. He tried to govern as if honor were a method.',
      'The hour that mattered was not a meeting. It was the private knowledge he took from Jon Arryn’s last question — the seed is strong — and from Sansa’s copy of the book of lineages. He told Cersei to run before Robert came back from the hunt. That mercy was the mistake. Robert came back dying. Ned wrote a will naming him Protector. He put it in front of a council that already belonged to the queen.',
      'Littlefinger promised the City Watch. Janos Slynt took Lannister gold instead. Varys watched. Pycelle had already chosen. When Ned declared for Stannis in the throne room, the gold cloaks turned. The Hand of the King was a prisoner before the next session could be called. Cersei and Joffrey’s first edicts named Tywin Hand, dismissed Barristan from a white cloak that is supposed to be for life, and put Jaime in his place. The table had changed kings without leaving the room.',
      'Janos Slynt was given an official seat as a reward for the betrayal. It was the only time the Commander of the City Watch was treated as a full councilor, and it lasted until Tyrion arrived. The wolf’s time at the table was weeks. The realm still runs on the debt he tried to read out loud.',
    ],
  },
  {
    id: 'tyrion',
    nav: 'Tyrion',
    kicker: 'Chapter V · A city under siege',
    title: 'The War Table',
    lede: 'Tywin sent his least-loved son to sit as acting Hand. The council shrank by the day. The city did not.',
    image: 'council/tyrion.jpg',
    locationId: 'kings-landing',
    body: [
      'Tywin was busy killing riverlords. He named Tyrion acting Hand and told him to keep Joffrey from destroying the capital before the war was won. Tyrion arrived to a table that was already a wreck. Renly and Stannis had taken their chairs into open rebellion. Master of Laws and Master of Ships stood vacant. Cersei sat as Queen Regent. Joffrey almost never came. Pycelle leaked every word to her. Janos Slynt sat among lords as if a massacre were a qualification.',
      'Tyrion made the room smaller on purpose. He sent Janos to the Wall with a title he would not survive. He found Pycelle’s treachery and put the Grand Maester in a black cell; he could not replace him — only the Citadel names a Grand Maester — so the chain sat empty for months. He kept Varys, who was useful, and Littlefinger, who was a viper he still needed for coin and for a hostage trade. Varys observed that the Small Council was growing smaller by the day. Four of seven offices vacant. A regent instead of a king. A Hand who was only acting.',
      'The work was the city. Tyrion chained the river, mixed wildfire with the fleet, and used the pyromancers Aerys had loved. He won the Blackwater from the walls while Joffrey fled and Cersei sat with a jar of wildfire for a last toast. When Tywin and the Tyrells arrived to take the credit, the acting Hand was thanked with a scar, a lost nose in the books, and the loss of the chair he had actually sat.',
      'Littlefinger was paid in Harrenhal and sent to the Vale to marry Lysa. Tyrion was moved to Master of Coin, which meant inheriting books that had never added up. He had governed. He was not forgiven for it.',
    ],
  },
  {
    id: 'tywin',
    nav: 'Tywin',
    kicker: 'Chapter VI · The Tower of the Hand',
    title: 'Order, Briefly',
    lede: 'Tywin moved the meetings next to his own bedchamber. The table looked like a government again. It lasted until a crossbow.',
    image: 'council/tywin.jpg',
    locationId: 'kings-landing',
    body: [
      'After the Blackwater, Tywin took the Handship in person. He reinstated Pycelle. He put Tyrion on coin. He brought Mace Tyrell in as Master of Ships, the price of roses and a royal marriage. He offered Oberyn Martell a chair with no office — a Dornish seat, meant later for Trystane — because Dorne had to be seen at the table if it was going to stay in the realm. Cersei still sat, but under her father she sat to hear orders.',
      'He moved the council out of its usual chamber and into the Tower of the Hand. It was a courtesy to his own convenience and a reminder of whose voice filled the room. Joffrey was king. Tommen would be. The government was Tywin. For a few months the Seven Kingdoms had the thing they had not had since Jon Arryn: a Hand who could make a decision and make it stick.',
      'Then Joffrey died at his own wedding, Tyrion was charged, Oberyn died in the dirt as his champion, and Tywin went to the privy with Shae in his bed and a crossbow in his son’s hands. Varys walked Tyrion out. The Spider left the city. The Handship, the Dornish chair, and the whisperer’s stool emptied in a single night.',
      'What Tywin restored was the idea of the table: that the realm is an administration, not a family argument. Cersei inherited the furniture and none of the method.',
    ],
  },
  {
    id: 'cersei',
    nav: 'Cersei',
    kicker: 'Chapter VII · Puppets',
    title: 'A Chair She Was Not Owed',
    lede: 'She sat the Hand’s place, invented an office, and filled the rest with men who would not contradict her. The Sparrows still took the city.',
    image: 'council/cersei.jpg',
    locationId: 'kings-landing',
    body: [
      'With Tywin dead and Tommen on the throne, Cersei left the Handship vacant and sat in the Hand’s chair herself. She was queen mother, not regent: Tommen had come of age and married Margaery. Kevan told her so, and refused the new title she invented for him — Master of War — because he would not be her patsy. He went home to the Rock. She gave Mace Tyrell both coin and ships, two offices in one stout lord who wanted to be liked. She named Qyburn Master of Whisperers over Pycelle’s objection: a maester stripped of his chain, rewarded for stitching the Mountain back into a man.',
      'The books spend a whole volume on this court of cronies — Harys Swyft, Aurane Waters, Gyles Rosby, Orton Merryweather. The show condenses it to the same lesson. A council of sycophants cannot hold a city. The Faith Militant rose. Cersei was walked through the streets. Pycelle, at last doing the realm a service, sent for Kevan, who came as Hand and Protector and put Olenna at the table to keep the roses from bolting.',
      'It did not last. The confrontation at the Great Sept failed. Olenna left. Jaime was stripped of command after kneeling in the dirt to the High Sparrow. Cersei answered with wildfire under the sept. Kevan, Mace, Margaery, Loras, the High Sparrow, and the ruling Faith died in green fire. Qyburn’s little birds ended Pycelle in his own chambers so the chain could not crawl out of the rubble and name another Hand.',
      'Cersei crowned herself. Her Small Council was Qyburn as Hand of the Queen and Master of Whisperers, and the Mountain standing where a Lord Commander should have sat. The other chairs were not filled because they would have required other people. She had taken the room. There was no government in it.',
    ],
  },
  {
    id: 'essos',
    nav: 'Essos',
    kicker: 'Chapter VIII · Across the sea',
    title: 'A Queen’s Own Table',
    lede: 'Daenerys built a council from sellswords, Unsullied, a knight who had left a white cloak, and a dwarf who had left a city. It was not the Red Keep. It was still a government.',
    image: 'council/essos.jpg',
    locationId: 'meereen',
    body: [
      'The Small Council is a Westerosi room. Daenerys sat something that did the same work without the old names. In Meereen: Barristan as advisor and Queensguard, Missandei as voice, Grey Worm for the Unsullied, Daario for the Second Sons, Jorah until the spying caught him. Later a Great Master and a freedman, so the city could see itself at the table. Mossador was executed for killing a captive without trial. Barristan died in the street. Hizdahr died in the pit. The lesson was the same as King’s Landing: a council is only as live as the people willing to sit it.',
      'Tyrion arrived in chains and was left in charge when Dany flew. Varys joined him, bringing the birds home to a Targaryen at last. When she sailed, she named Tyrion Hand of the Queen — the first time that title meant a woman — and sat her war table at Dragonstone on the painted map Aegon had used. Olenna, Ellaria, Yara. Then Jon Snow and Davos. Then the losses: Highgarden, the fleet, Missandei, Varys burned for a letter.',
      'By the time she took King’s Landing there was almost no council left to advise her, and she was no longer a woman who wanted advice. Tyrion resigned in a cell. Grey Worm held the city as something like a Master of War. The table in the Red Keep was ash and snow. The chairs would be filled by other names.',
    ],
  },
  {
    id: 'bran',
    nav: 'Six Kingdoms',
    kicker: 'Chapter IX · The last table',
    title: 'Who Sits It Now',
    lede: 'A king who does not want it. A Hand who failed the last queen. A sellsword on coin, a smuggler on ships, a Tarly in a chain, a woman in white plate. Master of Whisperers empty.',
    image: 'council/bran.jpg',
    locationId: 'kings-landing',
    body: [
      'The lords chose Bran the Broken in the Dragonpit because Tyrion talked them into it. The North took its independence and went home with Sansa. The Six Kingdoms still needed a government. The new Small Council is the joke the ending is willing to tell: almost no one at the table was born to it.',
      'Tyrion sits as Hand, older, slower, and finally in the chair he had only borrowed. Bronn of the Blackwater, Lord of Highgarden by extortion and a promise, is Master of Coin and immediately more interested in brothels than in the budget. Davos, who once smuggled onions under a Redwyne blockade, is Master of Ships. Samwell Tarly, who stole himself a maester’s chain and a stolen book, is Grand Maester — named, in the show’s shorthand, without waiting on the Conclave. Brienne of Tarth is Lady Commander of the Kingsguard, and she writes Jaime into the White Book as the man the songs would not.',
      'Master of Laws is unnamed. Master of Whisperers is unnamed. Master of War is unnamed. The empty chairs are the point. For the first time in the story the room is not full of people collecting secrets against each other. It may not last. It is, for an hour, a table that is trying to rebuild a city instead of a dynasty.',
      'The Small Council was invented so a king would not have to rule alone. It became the place where the ruling actually happened, whether the king was there or not. Hands died, whisperers fled, maesters were murdered in their chains. The furniture is older than any of them. Someone is always sitting it.',
    ],
  },
]

export const councilChairs: CouncilChair[] = [
  {
    id: 'hand',
    name: 'Hand of the King',
    image: 'council/chair-hand.jpg',
    duty:
      'Chief advisor and chair of the table. When the king is absent, a child, or unwilling, the Hand is the king in all but name. The pin is a golden hand. The job is to be blamed for everything the crown does and everything it fails to do.',
    who: 'Orys Baratheon sat the first. Septon Barth sat the best. Tywin sat the longest that the show still remembers. Jon Arryn, Ned, Tyrion, Kevan, Qyburn. The chair outranks every other office and is the one men kill for.',
    fate: 'Tyrion holds it now, under a king who sees too much and wants too little. The pin is the same metal. The realm in front of it is smaller.',
  },
  {
    id: 'maester',
    name: 'Grand Maester',
    image: 'council/chair-maester.jpg',
    duty:
      'The Citadel’s man in the Red Keep: letters, healing, history, and the polite voice of Oldtown at a table of lords. Unique among the chairs: the Conclave names him, not the king. A king may imprison a Grand Maester. He may not replace the chain.',
    who: 'Pycelle sat it through Aerys, Robert, Joffrey, and Tommen, feigning frailty and serving Lannister gold. He was murdered in his chambers so he could not crawl out of Cersei’s wildfire and name another Hand.',
    fate: 'Samwell Tarly sits it in the show’s last hour, chain and all, without the Conclave’s blessing. The Citadel would not have voted for that. The table did.',
  },
  {
    id: 'coin',
    name: 'Master of Coin',
    image: 'council/chair-coin.jpg',
    duty:
      'Treasurer and bookkeeper of the realm. Customs, taxes, loans, the mint. The office looks like a counting-house and is usually a story about who is actually owed.',
    who: 'Littlefinger made the ledgers sing and the crown poor: six million gold, much of it to Casterly Rock and the Iron Bank, hidden under a reputation for cleverness. Tyrion inherited the mess. Mace later held coin and ships together because Cersei needed a man who would sign.',
    fate: 'Bronn holds it as Lord of Highgarden. He asks how much the crown will spend on whores. The question is not as stupid as it sounds. The last Master of Coin to take the job seriously used it as a ladder.',
  },
  {
    id: 'whisper',
    name: 'Master of Whisperers',
    image: 'council/chair-whisper.jpg',
    duty:
      'Spymaster. Birds, secrets, the knowledge of what is being said in kitchens and across the narrow sea. The office has no army and often more power than the ones that do.',
    who: 'Varys sat it for Aerys, Robert, Joffrey, Tommen, and then Daenerys — the longest memory in the room. Qyburn took it as Cersei’s reward and used little birds as knives. Larys Strong sat a version of it in the Dance; the show’s later hours do not linger there.',
    fate: 'Empty under Bran. For the first time the table has no official spider. That may be wisdom. It may be a vacancy someone will fill the first time a letter needs stealing.',
  },
  {
    id: 'laws',
    name: 'Master of Laws',
    image: 'council/chair-laws.jpg',
    duty:
      'Chief legal advisor: the king’s justice, the dungeons of the Red Keep, the gold cloaks in their better hours. When the office is empty, law is whatever the person with the army says it is.',
    who: 'Renly Baratheon sat it for Robert, young and easy in the chair, until he crowned himself and took the office into the field. After that the show leaves it vacant through Joffrey, Tommen, and Cersei. In the books Kevan held it under Joffrey for a time.',
    fate: 'Unnamed at Bran’s table. The dungeons still exist. Someone will have to remember what they are for.',
  },
  {
    id: 'ships',
    name: 'Master of Ships',
    image: 'council/chair-ships.jpg',
    duty:
      'Admiral of the royal fleet and the crown’s maritime defense. In peacetime it is docks and timber. In war it is whether King’s Landing eats.',
    who: 'Stannis rebuilt the fleet after the rebellion and then used it against the nephew who took his brother’s throne. Mace Tyrell later held it as a Tyrell price, and held coin besides. The royal fleet is a habit more than a constant: it dies, and is built again.',
    fate: 'Davos Seaworth sits it now — the smuggler who once slipped a Redwyne blockade to feed Stannis. He knows what a closed bay does to a city. That is the qualification.',
  },
  {
    id: 'cloak',
    name: 'Lord Commander of the Kingsguard',
    image: 'council/chair-cloak.jpg',
    duty:
      'Commander of the seven white cloaks, and by tradition the table’s military voice. In the books the Lord Commander sits the council as a right. In the show Robert often left Barristan out of the room, and the seat itself was treated as optional until the ending put it back.',
    who: 'The White Bull under Aerys. Barristan the Bold under Robert, dismissed as if a lifetime vow were a job. Jaime named in his place, often absent, later stripped after kneeling to the Faith. The cloak is for life. The show broke that twice.',
    fate: 'Brienne of Tarth is Lady Commander. She keeps the White Book honestly. Podrick stands behind her. The old argument about whether a woman can wear the cloak ended the way most of them end: she was already wearing it.',
  },
  {
    id: 'war',
    name: 'Master of War',
    image: 'council/chair-war.jpg',
    duty:
      'Cersei’s invention during Tommen’s reign: a land commander at the table, overlapping the old work of the Lord Commander and the title Protector of the Realm. She offered it to Kevan. He refused. The office is a chair made to look like power.',
    who: 'No one sat it properly. Kevan would not. Grey Worm was something like it in the ruins of King’s Landing, holding the city for a queen who was already dead. Bran’s table leaves it unnamed.',
    fate: 'A reminder that a king can always add a chair. Adding a chair is not the same as adding a government.',
  },
]

export const councilFaces: CouncilFace[] = [
  {
    id: 'jon-arryn',
    name: 'Jon Arryn',
    bench: 'Hands',
    office: 'Hand of the King · Robert I',
    image: 'council/face-jon-arryn.jpg',
    role: 'Foster father to Robert and Ned. He refused Aerys the boys’ heads, won a rebellion with them, and then ran the kingdom the new king would not. Seventeen years. The last thing he asked was a question about seed.',
    fate: 'Poisoned. Lysa poured the cup at Littlefinger’s word. His death is the door the whole story walks through. Ned rides south to sit a chair still warm with a murdered man’s work.',
    locationId: 'the-eyrie',
  },
  {
    id: 'ned',
    name: 'Eddard Stark',
    bench: 'Hands',
    office: 'Hand of the King · Robert I',
    image: 'heroes/got/ned-stark.jpg',
    role: 'Named because Robert trusted him. He found the debt, the incest, and a council that had already chosen. He told Cersei to run. He put a will in front of men who needed him gone.',
    fate: 'Arrested in the throne room, traded his honor for Sansa’s life, and lost his head on the steps of Baelor. Ice did the work. The table did not even have to vote.',
    locationId: 'kings-landing',
  },
  {
    id: 'tyrion',
    name: 'Tyrion Lannister',
    bench: 'Hands',
    office: 'Acting Hand · Hand of the Queen · Hand of the King',
    image: 'council/face-tyrion.jpg',
    role: 'Sent to sit for Tywin and keep a city alive. He emptied bad chairs, chained a river, and won a battle he was not thanked for. Later Hand to Daenerys, then to Bran — the only man to pin the gold hand for three crowns.',
    fate: 'He failed a queen and talked a kingdom into a broken king. He sits the table still, older, pouring wine into a job that once made him feel alive.',
    locationId: 'kings-landing',
  },
  {
    id: 'tywin',
    name: 'Tywin Lannister',
    bench: 'Hands',
    office: 'Hand of the King · Aerys II, Joffrey I, Tommen I',
    image: 'council/face-tywin.jpg',
    role: 'Twenty years for a mad king, then the restoration after Blackwater. He moved the meetings into his own tower. He could make a decision and make it stick. That is rarer than a crown.',
    fate: 'A crossbow on a privy bench. The realm he had just put back in order came apart in the time it took to climb a stair. Cersei inherited the furniture.',
    locationId: 'kings-landing',
  },
  {
    id: 'kevan',
    name: 'Kevan Lannister',
    bench: 'Hands',
    office: 'Hand of the King · Tommen I',
    image: 'council/face-kevan.jpg',
    role: 'The competent Lannister who did not want a crown. He refused Cersei’s invented Master of War, then came when Pycelle called, as Hand and Protector, to pull the city out of her hands.',
    fate: 'Burned with Mace and the Faith in the Great Sept. In the books he is murdered by Varys so the realm cannot stabilize. Either way the last adult Lannister at the table is removed before he can finish the job.',
    locationId: 'kings-landing',
  },
  {
    id: 'qyburn',
    name: 'Qyburn',
    bench: 'Hands',
    office: 'Master of Whisperers · Hand of the Queen',
    image: 'council/face-qyburn.jpg',
    role: 'A maester stripped of his chain for cutting live men. Cersei gave him whisperers, then the Handship. He was kind in the voice and empty in the ethics. The Mountain was his proof of work.',
    fate: 'Crushed in the collapsing Red Keep when Dany’s dragon came, still standing beside the woman who had made him a government of one.',
    locationId: 'kings-landing',
  },
  {
    id: 'varys',
    name: 'Varys',
    bench: 'Coin and whisper',
    office: 'Master of Whisperers',
    image: 'council/face-varys.jpg',
    role: 'The Spider. Little birds in every kitchen. He sat Aerys, Robert, Joffrey, Tommen, and Daenerys, and told each of them he served the realm. Sometimes that was even true.',
    fate: 'Burned by Drogon for a letter that named another king. He had outlived every other constant at the table. The office dies with him on the show, and is left empty under Bran.',
    locationId: 'kings-landing',
  },
  {
    id: 'littlefinger',
    name: 'Petyr Baelish',
    bench: 'Coin and whisper',
    office: 'Master of Coin · Robert I, Joffrey I',
    image: 'council/face-littlefinger.jpg',
    role: 'Customs officer of Gulltown, then the realm’s purse. He made the books look like prosperity and the crown look like a debtor. Chaos was a ladder. The table was a rung.',
    fate: 'Paid in Harrenhal, sent to the Vale, and finally cut down in Winterfell by the girls whose father he had sold. No one replaced his kind of arithmetic. They only inherited it.',
    locationId: 'kings-landing',
  },
  {
    id: 'pycelle',
    name: 'Pycelle',
    bench: 'Coin and whisper',
    office: 'Grand Maester',
    image: 'council/face-pycelle.jpg',
    role: 'The chain that outlasted a dynasty. He told Aerys to open the gates. He leaked Tyrion’s table to Cersei. He played at being too old to stand, and stood just fine when the gold required it.',
    fate: 'Tyrion locked him in a black cell and could not take the chain. Qyburn’s children killed him in his rooms so he would not survive the sept. He served four kings and one idea: stay seated.',
    locationId: 'kings-landing',
  },
  {
    id: 'renly',
    name: 'Renly Baratheon',
    bench: 'The old table',
    office: 'Master of Laws · Robert I',
    image: 'council/face-renly.jpg',
    role: 'Youngest brother, Lord of Storm’s End, easy in the chair and serious only when he wanted to be loved. He sat the law while Stannis sat the ships, and liked the court more than either office.',
    fate: 'Crowned himself, took the Tyrells, and died in a tent with a shadow for a knife. The Master of Laws never returned as a filled chair on the show.',
    locationId: 'storms-end',
  },
  {
    id: 'stannis',
    name: 'Stannis Baratheon',
    bench: 'The old table',
    office: 'Master of Ships · Robert I',
    image: 'council/face-stannis.jpg',
    role: 'Rebuilt the royal fleet after the rebellion and then sat most of Robert’s reign at Dragonstone, absent from the jokes, counting hulls. He was the rightful king if the law is a blade. The table never treated him as one.',
    fate: 'He used the ships against Joffrey, broke on the Blackwater, and died in the snow outside Winterfell. Davos, who once fed him through a siege, later sits the same office for another king.',
    locationId: 'dragonstone',
  },
  {
    id: 'barristan',
    name: 'Barristan Selmy',
    bench: 'The old table',
    office: 'Lord Commander of the Kingsguard',
    image: 'heroes/got/barristan-selmy.jpg',
    role: 'The Bold. In the books he sat the council and heard the plot to kill a girl across the sea. In the show Robert left him out of the room because the cloak had once been a dragon’s. He did not love the politics. He loved the vow.',
    fate: 'Dismissed by Cersei as if a lifetime were a contract. He crossed the sea, told Dany his name, and died in Meereen’s streets keeping another kind of table alive.',
    locationId: 'kings-landing',
  },
  {
    id: 'cersei',
    name: 'Cersei Lannister',
    bench: 'The old table',
    office: 'Queen Regent · Queen Mother · Queen',
    image: 'council/face-cersei.jpg',
    role: 'Not an office. She sat anyway — as regent for Joffrey, as a silenced daughter under Tywin, as a mother who took the Hand’s chair for Tommen, and as a queen with one counselor. The table was a tool. She never liked sharing it.',
    fate: 'Wildfire for the sept, a crown she put on her own head, and the Red Keep coming down on the only council she trusted. She had emptied the room first.',
    locationId: 'kings-landing',
  },
  {
    id: 'mace',
    name: 'Mace Tyrell',
    bench: 'The old table',
    office: 'Master of Ships · Master of Coin',
    image: 'council/face-mace.jpg',
    role: 'Lord of Highgarden, brought to the table as the price of roses and a royal marriage. Cersei later gave him two offices at once because he would not refuse her. He wanted to be useful. He was.',
    fate: 'Burned in the Great Sept with his children and his king’s wife. Olenna outlived him long enough to tell Jaime the truth and drink the consequence.',
    locationId: 'highgarden',
  },
  {
    id: 'jaime',
    name: 'Jaime Lannister',
    bench: 'The old table',
    office: 'Lord Commander of the Kingsguard',
    image: 'heroes/got/jaime-lannister.jpg',
    role: 'Named to replace Barristan. He spent a year a prisoner and another year coming home, so the office was a title without a man in the chair. When he sat, he was bored. When the Faith made him kneel, the title was taken.',
    fate: 'He left the cloak on the floor and died in the keep with Cersei. Brienne wrote him into the White Book as more than the joke. The table never got that version.',
    locationId: 'kings-landing',
  },
  {
    id: 'oberyn',
    name: 'Oberyn Martell',
    bench: 'The old table',
    office: 'Dorne’s seat · no portfolio',
    image: 'heroes/got/oberyn-martell.jpg',
    role: 'Tywin invented a chair so Dorne would sit it. Oberyn took the place meant for his brother and did not want an office. He wanted a confession and a mountain’s skull.',
    fate: 'He got the confession. The Mountain still killed him. Trystane was promised the seat and murdered before he could take it. The Dornish chair was a gesture. Gestures die easy.',
    locationId: 'kings-landing',
  },
  {
    id: 'bronn',
    name: 'Bronn',
    bench: 'The last table',
    office: 'Master of Coin · Bran I',
    image: 'heroes/got/bronn.jpg',
    role: 'Sellsword, knight, Lord of Highgarden by pointing a crossbow at a promise. He sits coin because Tyrion pays his debts in titles and because the new realm is willing to be embarrassed.',
    fate: 'Alive, arguing about brothels in a rebuilt hall. The ladder Littlefinger talked about, climbed without the poetry.',
    locationId: 'highgarden',
  },
  {
    id: 'davos',
    name: 'Davos Seaworth',
    bench: 'The last table',
    office: 'Master of Ships · Bran I',
    image: 'council/face-davos.jpg',
    role: 'The Onion Knight. He fed a siege, lost fingers for old crimes, kept a grim king as honest as that king could stand, and then kept Jon. He knows blockades from the wrong side of them.',
    fate: 'Master of Ships for a king who does not sail. The royal fleet, if it is rebuilt, will be built by a man who once painted his sails black.',
    locationId: 'kings-landing',
  },
  {
    id: 'sam',
    name: 'Samwell Tarly',
    bench: 'The last table',
    office: 'Grand Maester · Bran I',
    image: 'council/face-sam.jpg',
    role: 'Night’s Watch steward, Citadel novice, thief of a chain and of books the archmaesters would have locked. He named the threat in the north when the table in the south was still counting gold.',
    fate: 'Grand Maester by acclamation of a room that no longer waits on Oldtown. He sits the chain Pycelle wore as a costume and wears it as a job.',
    locationId: 'kings-landing',
  },
  {
    id: 'brienne',
    name: 'Brienne of Tarth',
    bench: 'The last table',
    office: 'Lady Commander of the Kingsguard · Bran I',
    image: 'heroes/got/brienne-of-tarth.jpg',
    role: 'The oathkeeper. She sat no council until the last one. She took the white and the book, and she wrote Jaime as he was, not as the songs needed him.',
    fate: 'Alive in the cloak the show once pretended a woman could not wear. Podrick at her shoulder. The military voice at the table is finally a knight who meant the vow.',
    locationId: 'kings-landing',
  },
]
