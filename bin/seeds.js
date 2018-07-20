const mongoose = require('mongoose');
const Show     = require('../models/showModel');
const Movie    = require ('../models/movieModel');

// const dbName = 'starter-code';
// mongoose.connect('mongodb://localhost/rate-flex');
mongoose.connect(process.env.MONGODB_URI);

const shows = [{
    title: "The Office",
    genre: "Comedy",
    image: "/images/showpic/theofficecover.jpg",
    cast: ["Jenna Fischer", "John Krasinski", "Steve Carell", "Rainn Wilson"],
    summary: "This series depicts the everyday lives of office employees in Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company."
},
{
    title: "13 Reasons Why",
    genre: "Teen Drama",
    image: "/images/showpic/13reasonscover.jpg",
    cast: ["Katherine Langford", "Dylan Minnette", "Alisha Boe"],
    summary: "Seventeen year old, Clay Jensen, returns home from school one day to find a mysterious box on his porch. Inside he discovers seven cassette tapes recorded by Hannah Baker, his deceased classmate and unrequited love, who committed suicide two weeks earlier."
},
{
    title: "Somewhere Between",
    genre: "Mystery",
    image: "/images/showpic/somewherebetweencover.jpg",
    cast: ["Paula Patton", "Devon Sawa", "Aria Birch"],
    summary: "A mother tries to change the fate of her 8 year old daughter, as she knows where, when, and how she's murdered, but doesn't know who kills her and why.",
}, 
{
    title: "The Sinner",
    genre: "Mystery",
    image: "/images/showpic/thesinnercover.jpg",
    cast: ["Bill Pullman", "Jessica Biel", "Christopher Abbott"],
    summary: "Follows the story of a young woman who commits a horrific act of violence and rage, and to her surprise, has no idea why. And the investigator who becomes obsessed with the case and is determined to dig into her past and figure out why this is happening."
}, 
{
    title: "Dexter",
    genre: "Crime",
    image: "/images/showpic/dextercover.jpg",
    cast: ["Michael C. Hall", "Jennifer Carpenter", "David Zayas"],
    summary: "By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers."
},
{
    title: "Black Mirror",
    genre: "Sci-Fi",
    image: "/images/showpic/blackmirrorcover.jpg",
    cast: ["Daniel Lapaine", "Hannah John-Kamen", "Michaela Coel"],
    summary: "An anthology series exploring a twisted, high-tech world where humanity's greatest innovations and darkest instincts collide."
},
{
    title: "Secret City",
    genre: "Mystery",
    image: "/images/showpic/secretcitycover.jpg",
    cast: ["Anna Torv", "Jacki Weaver", "Marcus Graham"],
    summary: "Beneath the placid facade of Canberra, amidst rising tension between China and America, senior political journalist Harriet Dunkley uncovers a secret city of interlocked conspiracies, putting innocent lives in danger including her own."
}, 
{
    title: "Sense 8",
    genre: "Sci-Fi",
    image: "/images/showpic/sense8cover.jpg",
    cast: ["Doona Bae", "Jamie Clayton", "Tina Desai"],
    summary: "A group of people around the world are suddenly linked mentally, and must find a way to survive being hunted by those who see them as a threat to the world's order." 
}, 
{
    title: "Bloodline",
    genre: "Drama",
    image: "/images/showpic/bloodlinecover.jpg",
    cast: ["Kyle Chandler", "Linda Cardellini", "Norbert Leo Butz"],
    summary: "A family of adult siblings find that their past secrets and scars are revealed when their black sheep of a brother returns home."
}, 
{
    title: "Glow",
    genre: "Comedy",
    image: "/images/showpic/glowcover.jpg",
    cast: ["Alison Brie", "Betty Gilpin", "Sydelle Noel"],
    summary: "A look at the personal and professional lives of a group of women who perform for a wrestling organization in Los Angeles."
}, 
{
    title: "Anne with an E",
    genre: "Drama",
    image: "/images/showpic/annecover.jpg",
    cast: ["Amybeth McNulty", "Geraldine James", "R.H. Thomson"],
    summary: "The adventures of a young orphan girl living in the late 19th century. Follow Anne as she learns to navigate her new life on Prince Edward Island, in this new take on L.M. Montgomery's classic novels."
}, 
{
    title: "Arrested Development",
    genre: "Comedy",
    image: "/images/showpic/arrestedcover.jpg",
    cast: ["Jason Bateman", "Portia de Rossi", "Will Arnett"],
    summary: "Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable."
}, 
{
   title: "Hemlock Grove",
   genre: "Horror",
   image: "/images/showpic/hemlockcover.jpg",
   cast: ["Framke Janssen", "Bill Skarsgard", "Landon Liboiron"],
   summary: "Secrets are just part of daily life in the small Pennsylvania town of Hemlock Grove,where the darkest evils hide in plain sight." 
}, 
{
    title: "Stranger Things",
    genre: "Fantasy",
    image: "/images/showpic/strangerthingscover.jpg",
    cast: ["Winona Ryder", "David Harbour", "Finn Wolfhard"],
    summary: "When a young boy disappears, his mother, a police chief, and his friends, must confront terrifying forces in order to get him back."
},
{
    title: "Comedians in Cars",
    genre: "Comedy",
    image: "/images/showpic/comedianscover.jpg",
    cast: ["Jerry Seinfeld"],
    summary: "Jerry Seinfeld is joined by friends for a cup of coffee and a drive in a classic car, sharing stories all along the way."
},
{
    title: "Orange is the New Black",
    genre: "Comedy",
    image: "/images/showpic/orangecover.jpg",
    cast: ["Taylor Schilling", "Uzo Aduba", "Danielle Brooks"],
    summary: "Convicted of a decade old crime of transporting drug money to an ex-girlfriend, normally law abiding Piper Chapman is sentenced to a year and a half behind bars to face the reality of how life changing prison can really be."
},
{
    title: "The Crown",
    genre: "Drama",
    image: "/images/showpic/crowncover.jpg",
    cast: ["Claire Foy", "Matt Smith", "Victoria Hamilton"],
    summary: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century."
},
{
    title: "Slasher",
    genre: "Horror",
    image: "/images/showpic/slashercover.jpg",
    cast: ["Christopher Jacot", "Jim Watson", "Paula Brancati"],
    summary: "A young woman returns to the small town where her parents were murdered, only to find the past re-emerging as a new series of murders begins."
},
{
    title: "Mindhunter",
    genre: "Crime",
    image: "/images/showpic/mindhuntercover.jpg", 
    cast: ["Jonathan Groff", "Holt McCallany", "Hannah Gross"],
    summary: "In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters."
}, 
{
    title: "BoJack Horseman",
    genre: "Comedy",
    image: "/images/showpic/bojackcover.jpg",
    cast: ["Will Arnett", "Amy Sedaris"],
    summary: "BoJack Horseman was the star of the hit TV show Horsin' Around in the '90s, now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters."
},
{
    title: "The Boss Baby",
    genre: "Animation",
    image: "/images/showpic/bossbabycover.jpg",
    cast: ["JP Karliak", "Pierce Gagnon", "Kevin Michael Richardson"],
    summary: "With a little help from his brother and accomplice, Tim, Boss Baby tries to balance family life with his job at Baby Corp headquarters."
},
{
    title: "Luke Cage",
    genre: "Action",
    image: "/images/showpic/lukecagecover.jpg",
    cast: ["Mike Colter", "Simone Missick", "Theo Rossi"],
    summary: "When a sabotaged experiment gives him super strength and unbreakable skin, Luke Cage becomes a fugitive attempting to rebuild his life in Harlem and must soon confront his past and fight a battle for the heart of his city."
},
{
    title: "Sugar Rush",
    genre: "Reality",
    image: "/images/showpic/sugarrushcover.jpg",
    cast: ["Hunter March", "Candace Nelson", "Adriano Zumbo"],
    summary: "Cake competition with 4 teams with 3 rounds. Only 2 teams go into the last round."
}, 
{
    title: "The Fosters",
    genre: "Drama",
    image: "/images/showpic/fosterscover.jpg",
    cast: ["Teri Polo", "Sherri Saum", "Hayden Byerly"],
    summary: "Teenager Callie Jacob is placed in a foster home with a lesbian couple and their blend of biological, adoptive, and foster children."
},
{
    title: "Life Sentence",
    genre: "Comedy",
    image: "/images/showpic/lifesentencecover.jpg",
    cast: ["Lucy Hale", "Elliot Knight", "Jayson Blair"],
    summary: "When Stella finds out her terminal cancer is cured, she must learn to live with all the choices she made when deciding to live like she was dying."
},
{
    title: "Seven Seconds",
    genre: "Crime",
    image: "/images/showpic/sevensecondscover.jpg",
    cast: ["Clare-Hope Ashitey", "Michael Mosley", "David Lyons"],
    summary: "Tensions run high between African American citizens and Caucasian cops in Jersey City when a teenage African American boy is critically injured by a cop."
},
{
    title: "Greenleaf",
    genre: "Drama",
    image: "/images/showpic/greenleafcover.jpg",
    cast: ["Merle Dandridge", "Kim Hawthorne", "Lamman Rucker"],
    summary: "The unscrupulous world of the Greenleaf family and their sprawling Memphis megachurch, dark secrets and lies."
},
{
    title: "Marlon",
    genre: "Comedy",
    image: "/images/showpic/marloncover.jpg",
    cast: ["Marlon Wayans", "Essence Atkins", "Bresha Webb"],
    summary: "A loving (but immature) father with a larger-than-life personality is committed to co-parenting his two kids with his very-together ex-wife but for Marlon family really always does come first - even if he's the biggest kid of all."
},
{
    title: "Doctor Foster",
    genre: "Drama",
    image: "/images/showpic/doctorfostercover.jpg",
    cast: ["Suranne Jones", "Bertie Carvel", "Tom Taylor"],
    summary: "A woman suspects her husband of having an affair. After following several lines of inquiry far more unravels including a streak of violence below the surface."
},
{
    title: "Bates Motel",
    genre: "Horror",
    image: "/images/showpic/batesmotelcover.jpg",
    cast: ["Vera Farmiga", "Freddie Highmore", "Max Thieriot"],
    summary: "A contemporary prequel to Psycho, giving a portrayal of how Norman Bates' psyche unravels through his teenage years, and how deeply intricate his relationship with his mother, Norma, truly is."
},
{
    title : "Shameless",
    genre: "Comedy",
    image: "/images/showpic/shamelesscover.jpg",
    cast: ["Emmy Rossum", "William H. Macy", "Ethan Cutkosky"],
    summary: "An alcoholic man lives in a perpetual stupor while his six children cope as best they can."
},
{
    title: "Crazy Ex Girlfriend",
    genre: "Comedy",
    image: "/images/showpic/crazyexgirlfriendcover.jpg",
    cast: ["Rachel Bloom", "Donna Lynne Champlin", "Vincent Rodriguez"],
    summary: "A young woman abandons a choice job at a law firm and her life in New York in an attempt to find happiness in the unlikely locale of West Covina, California."
},
{
    title: "Requiem",
    genre: "Mystery",
    image: "/images/showpic/requiemcover.jpg",
    cast: ["Lydia Wilson", "James Frecheville", "Sian Reese-Williams"],
    summary: "In 1994, a toddler disappeared from a small Welsh village, never to be seen again. 23 years later, in London, the mother of rising cello star Matilda Gray commits suicide, without apparent reason."
},
{
    title: "Narcos",
    genre: "Crime",
    image: "/images/showpic/narcoscover.jpg",
    cast: ["Pedro Pascal", "Wagner Moura", "Boyd Holbrook"],
    summary: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years."
},
{
    title: "Breaking Bad",
    genre: "Crime",
    image: "/images/showpic/breakingbadcover.jpg",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    summary: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."
},
{
    title: "Santa Clarita Diet",
    genre: "Comedy",
    image: "/images/showpic/santaclaritadietcover.jpg",
    cast: ["Drew Barrymore", "Timothy Olyphant", "Liv Hewson"],
    summary: "Sheila and Joel are married real estate agents in Santa Clarita, California. When Sheila dies, their lives take a dark turn."
},
{
    title: "Ozark",
    genre: "Crime",
    image: "/images/showpic/ozarkcover.jpg",
    cast: ["Trevor Long", "Jason Bateman", "Laura Linney"],
    summary: "A Chicago-based financial advisor secretly relocates his family to the Missouri Ozarks when his dealings with a drug cartel go awry."
},
{
    title: "Broadchurch",
    genre: "Mystery",
    image: "/images/showpic/broadchurchcover.jpg",
    cast: ["David Tennant", "Olivia Colman", "Jodie Whittaker"],
    summary: "The murder of a young boy in a small coastal town brings a media frenzy, which threatens to tear the community apart."
},
{
    title: "Love",
    genre: "Comedy",
    image: "/images/showpic/lovecover.jpg",
    cast: ["Gillian Jacobs", "Paul Rust", "Claudia O'Doherty"],
    summary: "A program that follows a couple who must navigate the exhilarations and humiliations of intimacy, commitment and other things they were hoping to avoid."
},
{
    title: "Naruto",
    genre: "Anime",
    image: "/images/showpic/narutocover.jpg",
    cast: ["Junko Takeuchi", "Maile Flanagan", "Kate Higgins"],
    summary: "Naruto Uzumaki, an adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja."
},
{
    title: "Sherlock",
    genre: "Crime",
    image: "/images/showpic/sherlockcover.jpg",
    cast: ["Benedict Cumberbatch", "Martin Freeman", "Una Stubbs"],
    summary: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London."
},
{
    title: "Big Mouth",
    genre: "Animation",
    image: "/images/showpic/bigmouthcover.jpg",
    cast: ["Nick Kroll", "John Mulaney", "Fred Armisen"],
    summary: "Teenage friends find their lives upended by the wonders and horrors of puberty."
},
{
    title: "Jane the Virgin",
    genre: "Comedy",
    image: "/images/showpic/janethevirgincover.jpg",
    cast: ["Gina Rodriguez", "Andrea Navedo", "Yael Grobglas"],
    summary: "A young, devout Catholic woman discovers that she was accidentally artificially inseminated."
},
{
    title: "Riverdale",
    genre: "Mystery",
    image: "/images/showpic/riverdalecover.jpg",
    cast: ["K.J. Apa", "Lili Reinhart", "Camila Mendes"],
    summary: "A subversive take on Archie and his friends, exploring small town life, the darkness and weirdness bubbling beneath Riverdale's wholesome facade."

},
{
    title: "Charmed",
    genre: "Drama",
    image: "/images/showpic/charmedcover.jpg",
    cast: ["Holly Marie Combs", "Alyssa Milano", "Brian Krause"],
    summary: "Three sisters discover their destiny, to battle against the forces of evil, using their witchcraft. They are the Charmed Ones."
},
{
    title: "Portlandia",
    genre: "Comedy",
    image: "/images/showpic/portlandiacover.jpg",
    cast: ["Fred Armisen", "Carrie Brownstein", "Kyle MacLachlan"],
    summary: "A sketch-comedy series that parodies life in Portland, Oregon."
},
{
    title: "Containment",
    genre: "Drama",
    image: "/images/showpic/containmentcover.jpg",
    cast: ["David Gyasi", "Christina Marie Moses", "Chris Wood"],
    summary: "The series follows an epidemic that breaks out in Atlanta, leaving the large city quarantined and those stuck on the inside fighting for their lives."
},
{
    title: "Mad Men",
    genre: "Drama",
    image: "/images/showpic/madmencover.jpg",
    cast: ["Jon Hamm", "Elisabeth Moss", "Vincent Kartheiser"],
    summary: "A drama about one of New York's most prestigious ad agencies at the beginning of the 1960s, focusing on one of the firm's most mysterious but extremely talented ad executives, Donald Draper."
},
{
    title: "New Girl",
    genre: "Comedy",
    image: "/images/showpic/newgirlcover.jpg",
    cast: ["Zooey Deschanel", "Jake Johnson", "Max Greenfield"],
    summary: "After a bad break-up, Jess, an offbeat young woman, moves into an apartment loft with three single men. Although they find her behavior very unusual, the men support her - most of the time."
},
{
    title: "The Rain",
    genre: "Sci-Fi",
    image: "/images/showpic/theraincover.jpg",
    cast: ["Alba August", "Lynggaard Tonnesen", "Mikken Boe Folsgaard"],
    summary: "After a brutal virus wipes out most of the population, two young siblings embark on a perilous search for safety."
},
{
    title: "Unbreakable: Kimmy Schmidt",
    genre: "Comedy",
    image: "/images/showpic/unbreakablecover.jpg",
    cast: ["Ellie Kemper", "Jane Krakowski", "Tituss Burgess"],
    summary: "A woman is rescued from a doomsday cult and starts life over again in New York City."
},
{
    title: "House of Cards",
    genre: "Drama",
    image: "/images/showpic/houseofcardscover.jpg",
    cast: ["Kevin Spacey", "Michel Gill", "Robin Wright"],
    summary: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him."
},
{
    title: "Luther",
    genre: "Crime",
    image: "/images/showpic/luthercover.jpg",
    cast: ["Idris Elba", "Dermot Crowley", "Michael Smiley"],
    summary: "DCI John Luther is a near-genius murder detective whose brilliant mind can't always save him from the dangerous violence of his passions."
},
{
    title: "The Keepers",
    genre: "Documentary",
    image: "/images/showpic/thekeepers.jpg",
    cast: ["Gemma Hoskins", "Abbie Schnaub", "Jean Hargadon Wehner"],
    summary: "A seven-part docuseries about the unsolved murder of a nun and the horrific secrets and pain that linger nearly five decades after her death."
},
{
    title: "Grey's Anatomy",
    genre: "Drama",
    image: "/images/showpic/greysanatomycover.jpg",
    cast: ["Ellen Pompeo", "Justin Chambers", "Chandra Wilson"],
    summary: "A drama centered on the personal and professional lives of five surgical interns and their supervisors."
},
{
    title: "Fuller House",
    genre: "Comedy",
    image: "/images/showpic/fullerhousecover.jpg",
    cast: ["Candace Cameron Bure", "Jodi Sweetin", "Andrea Barber"],
    summary: "D.J. Fuller is a mother of three young boys and is a recent widow. D.J.'s sister Stephanie, her best friend Kimmy and Kimmy's teenage daughter all move in to help raise her sons. The house is now a lot fuller."
},
{
    title: "Bunk'd",
    genre: "Comedy",
    image: "/images/showpic/bunkdcover.jpg",
    cast: ["Peyton List", "Karan Brar", "Skai Jackson"],
    summary: "Emma, Ravi, and Zuri Ross head off to a rustic summer camp in Maine, where their parents met as teens."
},
{
    title: "Supernatural",
    genre: "Drama",
    image: "/images/showpic/supernaturalcover.jpg",
    cast: ["Jared Padalecki", "Jensen Ackles", "Jim Beaver"],
    summary: "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons, and gods that roam the earth."
},
{
    title: "NCIS",
    genre: "Crime",
    image: "/images/showpic/nciscover.jpg",
    cast: ["Mark Harmon", "David McCallum", "Pauley Perrette"],
    summary: "The cases of the Naval Criminal Investigative Service's Washington DC Major Case Response Team, led by Special Agent Leroy Jethro Gibbs."
},
{
    title: "Arrow",
    genre: "Action",
    image: "/images/showpic/arrowcover.jpg",
    cast: ["Stephen Amell", "Katie Cassidy", "David Ramsey"],
    summary: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow."
},
{
    title: "Pokemon: Sun & Moon",
    genre: "Anime",
    image: "/images/showpic/pokemoncover.jpg",
    cast: ["Anthony Fernandez", "Miguel Fernandez", "Zee Andrews"],
    summary: "Ash is new to the Alola region. He's found some new friends, and new Pokémon too."
},
{
    title: "One Punch Man",
    genre: "Anime",
    image: "/images/showpic/onepunchmancover.jpg",
    cast: ["Makoto Furukawa", "Max Mittelman", "Kaito Ishikawa"],
    summary: "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch."
},
{
    title: "Fullmetal Alchemist",
    genre: "Anime",
    image: "/images/showpic/fullmetalcover.jpg",
    cast: ["Iemasa Kayumi", "Kent Williams", "Muriel Hofmann"],
    summary: "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms."
},
{
    title: "Fauda",
    genre: "Action",
    image: "/images/showpic/faudacover.jpg",
    cast: ["Lior Raz", "Shadi Mar'i", "Laetitia Eido"],
    summary: "Fauda (Arabic for Chaos) depicts the two-sided story of the Israeli-Palestinian conflict. "
},
{
    title: "The Ranch",
    genre: "Comedy",
    image: "/images/showpic/ranchcover.jpg",
    cast: ["Ashton Kutcher", "Debra Winger", "Sam Elliot"],
    summary: "The son of a Colorado rancher returns home from a semi-pro football career to run the family business."
},
{
    title: "Pretty Little Liars",
    genre: "Drama",
    image: "/images/showpic/prettylittleliarscover.jpg",
    cast: ["Troian Bellisario", "Ashley Benson", "Lucy Hale"],
    summary: "Four friends band together against an anonymous foe who threatens to reveal their darkest secrets, while also investigating the disappearance of their best friend."
},
{
    title: "Sacred Games",
    genre: "Action",
    image: "/images/showpic/sacredgamescover.jpg",
    cast: ["Saif Ali Khan", "Nawazuddin Siddiqui", "Radhika Apte"],
    summary: "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm."
}]

Show.create(shows)
.then((response)=>{
    console.log(`created ${response.length} shows`)
})
.catch((err)=>{
    console.log(err);
})

const movies = [
{
    title: "How It Ends",
    genre: "Action",
    image: "/images/moviepic/howitendscover.jpg",
    cast: ["Theo James", "Forest Whitaker", "Kat Graham"],
    plot: "When a mysterious disaster turns the country into a war zone, a young lawyer heads west with his future father-in-law to find his pregnant fiance"
},
{
    title: "Brain On Fire",
    genre: "Drama",
    image: "/images/moviepic/brainonfirecover.jpg",
    cast: ["Chloe Grace Moretz", "Thomas Mann", "Richard Armitage"],
    plot: "A young, capable professional cannot explain her newly erratic behavior."
},
{
    title: "Set It Up",
    genre: "Comedy",
    image: "/images/moviepic/setitupcover.jpg",
    cast: ["Zoey Deutch", "Glen Powell", "Lucy Liu"],
    plot: "Two corporate executive assistants hatch a plan to match-make their two bosses."
},
{
    title: "Anon",
    genre: "Sci-Fi",
    image: "/images/moviepic/anoncover.jpg",
    cast: ["Clive Owen", "Afiya Bennett", "Morgan Allen"],
    plot: "In a world without anonymity or crime, a detective meets a woman who threatens their security."
},
{
    title: "The Titan",
    genre: "Sci-Fi",
    image: "/images/moviepic/titancover.jpg",
    cast: ["Sam Worthington", "Taylor Schilling", "Tom Wilkinson"],
    plot: "A military family takes part in a ground-breaking experiment of genetic evolution and space exploration."
},
{
    title: "Alex Strangelove",
    genre: "Comedy",
    image: "/images/moviepic/alexstrangelovecover.jpg",
    cast: ["Michael Abela", "Daniel Doheny", "Brendan Archer"],
    plot: "He loves his girlfriend. And she's eager to devirginize him. But why can't he stop thinking about the boy he just met?"
},
{
    title: "Ibiza",
    genre: "Comedy",
    image: "/images/moviepic/ibizacover.jpg",
    cast: ["Gwen Elizabeth Duchon", "Gillian Jacobs", "Michaela Watkins"],
    plot: "A young American woman and her two best friends seek out a hot DJ in Spain."
},
{
    title: "Clinical",
    genre: "Thriller",
    image: "/images/moviepic/clinicalcover.jpg",
    cast: ["Vinessa Shaw", "Alistair Legrand", "India Eisley"],
    plot: "A psychiatrist tries to put her life back together after a violent attack by seeking to repair the life of a new patient, but he has his own terrifying history."
},
{
    title: "Mute",
    genre: "Mystery",
    image: "/images/moviepic/mutecover.jpg",
    cast: ["Alexander Skarsgard", "Paul Rudd", "Justin Theroux"],
    plot: "A mute bartender goes up against his city's gangsters in an effort to find out what happened to his missing partner."
},
{
    title: "Little Evil",
    genre: "Comedy",
    image: "/images/moviepic/littleevilcover.jpg",
    cast: ["Evangeline Lilly", "Owen Atlas", "Adam Scott"],
    plot: "Gary, who has just married Samantha, the woman of his dreams, discovers that her six-year-old son may be the Antichrist."
},
{
    title: "Dude",
    genre: "Comedy",
    image: "/images/moviepic/dudecover.jpg",
    cast: ["Lucy Hale", "Kathryn Prescott", "Alexandra Shipp"],
    plot: "A group of teenage girlfriends deal with life after high school."
},
{
    title: "#RealityHigh",
    genre: "Comedy",
    image: "/images/moviepic/realityhighcover.jpg",
    cast: ["Nesta Cooper", "Keith Powers", "Alicia Sanz"],
    plot: "High-achieving high-school senior Dani Barnes dreams of getting into UC Davis, the world's top veterinary school. Then a glamorous new friend draws her into a Southern California scene that threatens everything she's worked for."
},
{
    title: "Shimmer Lake",
    genre: "Crime",
    image: "/images/moviepic/shimmerlakecover.jpg",
    cast: ["Benjamin Walker", "Rainn Wilson", "Stephanie Sigman"],
    plot: "An inventive crime thriller told backwards -- reversing day by day through a week -- following a local sheriff's quest to unlock the mystery of three small town criminals and a bank heist gone wrong."
},
{
    title: "The Discovery",
    genre: "Drama",
    image: "/images/moviepic/discoverycover.jpg",
    cast: ["Robert Redford", "Mary Steenburgen", "Brian McCarthy"],
    plot: "Two years after the afterlife is scientifically proven, a man attempts to help a young woman break away from her dark past."
},
{
    title: "iBoy",
    genre: "Action",
    image: "/images/moviepic/iboycover.jpg",
    cast: ["Bill Milner", "Maisie Williams", "Miranda Richardson"],
    plot: "After being shot, Tom wakes from a coma to discover that fragments of his smart phone have been embedded in his head, and worse, that returning to normal teenage life is impossible because he has developed a strange set of superpowers."
},
{
    title: "The Kissing Booth",
    genre: "Comedy",
    image: "/images/moviepic/kissingboothcover.jpg",
    cast: ["Megan du Plessis", "Caitlyn de Abrue"],
    plot: "A high school student is forced to confront her secret crush at a kissing booth."
},
{
    title: "Calibre",
    genre: "Thriller",
    image: "/images/moviepic/calibrecover.jpg",
    cast: ["Jack Lowden", "Martin McCann", "Tony Curran"],
    plot: "Two lifelong friends head up to an isolated Scottish Highlands village for a weekend hunting trip. Nothing could prepare them for what follows."
},
{
    title: "White Fang",
    genre: "Animation",
    image: "/images/moviepic/whitefangcover.jpg",
    cast: ["Rashida Jones", "Nick Offerman", "Paul Giamatti"],
    plot: "Based on the timeless novel by Jack London, White Fang follows the story of a boy who befriends a half breed wolf as he searches for his father, who has mysteriously gone missing during the Gold Rush."
},
{
    title: "Amanda Knox",
    genre: "Documentary",
    image: "/images/moviepic/amandaknoxcover.jpg",
    cast: ["Amanda Knox", "Meredith Kercher", "Raffaele Sollecito"],
    plot: "American exchange student Amanda Knox is convicted and eventually acquitted for the 2007 death of another student in Italy."
},
{
    title: "Tallulah",
    genre: "Comedy",
    image: "/images/moviepic/tallulahcover.jpg",
    cast: ["Ellen Page", "Allison Janney", "Tammy Blanchard"],
    plot: "Desperate to be rid of her toddler, a dissatisfied Manhattan housewife hires a stranger to babysit and ends up getting much more than she bargained for."
},
{
    title: "ARQ",
    genre: "Sci-Fi",
    image: "/images/moviepic/arqcover.jpg",
    cast: ["Robbie Amell", "Rachael Taylor", "Shaun Benson"],
    plot: "Trapped in a lab and stuck in a time loop, a disoriented couple fends off masked raiders while harboring a new energy source that could save humanity."
},
{
    title: "Coco",
    genre: "Adventure",
    image: "/images/moviepic/cococover.jpg",
    cast: ["Anthony Gonzalez", "Gael Garcia Bernal", "Benjamin Bratt"],
    plot: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
},
{
    title: "The Week Of",
    genre: "Comedy",
    image: "/images/moviepic/theweekofcover.jpg",
    cast: ["Adam Sandler", "Chris Rock", "Steve Buscemi"],
    plot: "Two fathers with opposing personalities come together to celebrate the wedding of their children. They are forced to spend the longest week of their lives together, and the big day cannot come soon enough."
},
{
    title: "Get Smart",
    genre: "Action",
    image: "/images/moviepic/getsmartcover.jpg",
    cast: ["Steve Carell", "Anne Hathaway", "Alan Arkin"],
    plot: "A highly intellectual but socially awkward spy is tasked with preventing a terrorist attack from a Russian spy agency."
},
{
    title: "The Boy",
    genre: "Horror",
    image: "/images/moviepic/theboy.jpg",
    cast: ["Lauren Cohan", "Rupert Evans", "James Russell"],
    plot: "An American nanny is shocked that her new English family's boy is actually a life-sized doll. After she violates a list of strict rules, disturbing events make her believe that the doll is really alive."
},
{
    title: "47 Meters Down",
    genre: "Horror",
    image: "/images/moviepic/47metersdown.jpg",
    cast: ["Mandy Moore", "Claire Holt", "Matthew Modine"],
    plot: "Two sisters vacationing in Mexico are trapped in a shark cage at the bottom of the ocean. With less than an hour of oxygen left and great white sharks circling nearby, they must fight to survive."
},
{
    title: "Mamma Mia!",
    genre: "Musical",
    image: "/images/moviepic/mammamiacover.jpg",
    cast: ["Lily James", "Amanda Seyfried", "Meryl Streep"],
    plot: "In this sequel to Mamma Mia!, Sophie learns about her mother's past while pregnant herself."
},
{
    title: "Penelope",
    genre: "Comedy",
    image: "/images/moviepic/penelopecover.jpg",
    cast: ["Christina Ricci", "James McAvoy", "Reese Witherspoon"],
    plot: "A modern romantic tale about a young aristocratic heiress born under a curse that can only be broken when she finds true love with one who will accept her as one of their own."
},
{
    title: "Playdate",
    genre: "Thriller",
    image: "/images/moviepic/playdatecover.jpg",
    cast: ["Marguerite Moreau", "Richard Ruccolo", "Abby Brammell"],
    plot: "After befriending a family that has just moved in next door, Emily Valentine begins to realize that these new neighbors are hiding a deadly secret. "
},
{
    title: "Despicable Me 3",
    genre: "Animation",
    image: "/images/moviepic/despicableme3cover.jpg",
    cast: ["Steve Carell", "Kristen Wiig", "Trey Parker"],
    plot: "Gru meets his long-lost charming, cheerful, and more successful twin brother Dru who wants to team up with him for one last criminal heist."
},
{
    title: "Bright",
    genre: "Action",
    image: "/images/moviepic/brightcover.jpg",
    cast: ["Will Smith", "Joel Edgerton", "Noomi Rapace"],
    plot: "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."
},
{
    title: "The Open House",
    genre: "Horror",
    image: "/images/moviepic/openhousecover.jpg",
    cast: ["Dylan Minnette", "Piercey Dalton", "Patricia Bethune"],
    plot: "A teenager and his mother find themselves besieged by threatening forces when they move into a new house."
},
{
    title: "The Invitation",
    genre: "Drama",
    image: "/images/moviepic/invitationcover.jpg",
    cast: ["Logan Marshall-Green", "Emayatzy Corinealdi", "Michiel Huisman"],
    plot: "While attending a dinner party at his former home, a man thinks his ex-wife and her new husband have sinister intentions for their guests."
},
{
    title: "You Get Me",
    genre: "Crime",
    image: "images/moviepic/yougetmecover.jpg",
    cast: ["Bella Thorne", "Halston Sage", "Taylor John Smith"],
    plot: "Tyler's crazy in love with his perfect girlfriend Ali, but when a big fight makes him and Ali break up, he lands in the arms of Holly, an out-of-towner who shows him a night he's gonna remember. "
},
{
    title: "The Babadook",
    genre: "Horror",
    image: "/images/moviepic/babadookcover.jpg",
    cast: ["Essie Davis", "Noah Wiseman", "Daniel Henshall"],
    plot: "A widowed mother, plagued by the violent death of her husband, battles with her son's fear of a monster lurking in the house, but soon discovers a sinister presence all around her."
},
{
    title: "The Babysitter",
    genre: "Comedy",
    image: "/images/moviepic/babysittercover.jpg",
    cast: ["Judah Lewis", "Samara Weaving", "Robbie Amell"],
    plot: "The events of one evening take an unexpected turn for the worst for a young boy trying to spy on his babysitter."
},
{
    title: "To The Bone",
    genre: "Drama",
    image: "/images/moviepic/tothebonecover.jpg",
    cast: ["Rebekah Kennedy", "Lily Collins", "Dana L. Wilson"],
    plot: "A young woman, dealing with anorexia, meets an unconventional doctor who challenges her to face her condition and embrace life."
},
{
    title: "Creep",
    genre: "Horror",
    image: "/images/moviepic/creepcover.jpg",
    cast: ["Patrick Brice", "Mark Duplass"],
    plot: "When a videographer answers a Craigslist ad for a one-day job in a remote mountain town, to video the last messages of a dying man, he finds his client is not at all what he initially seems."
},
{
    title: "The Good Neighbor",
    genre: "Crime",
    image: "/images/moviepic/goodneighborcover.jpg",
    cast: ["James Caan", "Logan Miller", "Keir Gilchrist"],
    plot: "A pair of mischievous high school kids create the illusion of a haunting on an unsuspecting elderly neighbor while keeping his every reaction under surveillance. A series of coincidences leads to tragedy."
},
{
    title: "Forgotten",
    genre: "Mystery",
    image: "/images/moviepic/forgottencover.jpg",
    cast: ["Ha-Neul Kang", "Mu-Yeol Kim", "Seong-kun Mun"],
    plot: "Jin-Seok (Kang Ha-Neul) moves into a new home with his older brother Yoo-Seok (Kim Moo-Yul), mother (Na Young-Hee) and father (Moon Sung-Geun). Jin-Seok suffers from hypersensitivity, but with medication he is able to live normally."
},
{
    title: "The Ritual",
    genre: "Horror",
    image: "/images/moviepic/ritualcover.jpg",
    cast: ["Rafe Spall", "Arsher Ali", "Robert James-Collier"],
    plot: "A group of college friends reunite for a trip to the forest, but encounter a menacing presence in the woods that's stalking them."
},
{
    title: "The Conjuring",
    genre: "Horror",
    image: "/images/moviepic/conjuringcover.jpg",
    cast: ["Patrick Wilson", "Vera Farmiga", "Ron Livingston"],
    plot: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
},
{
    title: "Meet the Blacks",
    genre: "Comedy",
    image: "/images/moviepic/meettheblackscover.jpg",
    cast: ["Mike Epps", "Zulay Henao", "Alex Henderson"],
    plot: "As Carl Black gets the opportunity to move his family out of Chicago in hope of a better life, their arrival in Beverly Hills is timed with that city's annual purge, where all crime is legal for twelve hours."
},
{
    title: "Bee Movie",
    genre: "Animation",
    image: "/images/moviepic/beemoviecover.jpg",
    cast: ["Jerry Seinfeld", "Renee Zellweger", "Matthew Broderick"],
    plot: "Barry B. Benson, a bee just graduated from college, is disillusioned at his lone career choice: making honey. On a special trip outside the hive, Barry's life is saved by Vanessa, a florist in New York City. "
},
{
    title: "Wind River",
    genre: "Crime",
    image: "/images/moviepic/windrivercover.jpg",
    cast: ["Kelsey Asbille", "Jeremy Renner", "Julia Jones"],
    plot: "A veteran hunter helps an FBI agent to investigate the murder of a young woman on a Wyoming Native American reservation."
},
{
    title: "Madagascar 2",
    genre: "Animation",
    image: "/images/moviepic/madagascar2.jpg",
    cast: ["Ben Stiller", "Chris Rock", "David Schwimmer"],
    plot: "The animals try to fly back to New York City, but crash-land on an African wildlife refuge, where Alex is reunited with his parents."
},
{
    title: "Gone Baby Gone",
    genre: "Crime",
    image: "/images/moviepic/gonebabygonecover.jpg",
    cast: ["Morgan Freeman", "Ed Harris", "Casey Affleck"],
    plot: "Two Boston area detectives investigate a little girl's kidnapping, which ultimately turns into a crisis both professionally and personally."
},
{
    title: "Duck Duck Goose",
    genre: "Animation", 
    image: "/images/moviepic/duckduckgoosecover.jpg",
    cast: ["Jim Gaffigan", "Zendaya", "Lance Lim"],
    plot: "A bachelor goose must form a bond with two lost ducklings as they journey south."
},
{
    title: "The Cloverfield Paradox",
    genre: "Horror",
    image: "/images/moviepic/cloverfieldcover.jpg",
    cast: ["Gugu Mbatha-Raw", "David Oyelowo", "Daniel Bruhl"],
    plot: "Orbiting a planet on the brink of war, scientists test a device to solve an energy crisis, and end up face-to-face with a dark alternate reality."
},
{
    title: "Scooby-Doo",
    genre: "Adventure",
    image: "/images/moviepic/scoobydoo.jpg",
    cast: ["Matthew Lillard", "Freddie Prinze Jr.", "Sarah Michelle Gellar"],
    plot: "After an acrimonious break up, the Mystery Inc. gang are individually brought to an island resort to investigate strange goings on."
},
{
    title: "Spanglish",
    genre: "Comedy",
    image: "/images/moviepic/spanglishcover.jpg",
    cast: ["Adam Sandler", "Tea Leoni", "Paz Vega"],
    plot: "A woman and her daughter emigrate from Mexico for a better life in America, where they start working for a family where the patriarch is a newly celebrated chef with an insecure wife."
},
{
    title: "Moana",
    genre: "Animation",
    image: "/images/moviepic/moanacover.jpg",
    cast: ["Auli'i Cravalho", "Dwayne Johnson", "Rachel House"],
    plot: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."
},
{
    title: "Bad Boys",
    genre: "Action",
    image: "/images/moviepic/badboyscover.jpg",
    cast: ["Will Smith", "Martin Lawrence", "Lisa Boyle"],
    plot: "Two hip detectives protect a witness to a murder while investigating a case of stolen heroin from the evidence storage room from their police precinct."
},
{
    title: "Ghostbusters",
    genre: "Action",
    image: "/images/moviepic/ghostbusterscover.jpg",
    cast: ["Bill Murray", "Dan Aykroyd", "Sigourney Weaver"],
    plot: "Three former parapsychology professors set up shop as a unique ghost removal service."
},
{
    title: "The Sixth Sense",
    genre: "Mystery",
    image: "/images/moviepic/sixthsensecover.jpg",
    cast: ["Bruce Willis", "Haley Joel Osment", "Toni Collette"],
    plot: "A boy who communicates with spirits seeks the help of a disheartened child psychologist."
},
{
    title: "Lincoln",
    genre: "History",
    image: "/images/moviepic/lincolncover.jpg",
    cast: ["Daniel Day-Lewis", "Sally Field", "David Strathairn"],
    plot: "As the American Civil War continues to rage, America's president struggles with continuing carnage on the battlefield as he fights with many inside his own cabinet on the decision to emancipate the slaves."
},
{
    title: "The King's Speech",
    genre: "History",
    image: "/images/moviepic/kingsspeechcover.jpg",
    cast: ["Colin Firth", "Geoffrey Rush", "Helena Bonham Carter"],
    plot: "The story of King George VI of the United Kingdom of Great Britain and Northern Ireland, his impromptu ascension to the throne and the speech therapist who helped the unsure monarch become worthy of it."
}]


Movie.create(movies)
.then((response)=>{
    console.log(`created ${response.length} movies`)
})
.catch((err)=>{
    console.log(err);
})