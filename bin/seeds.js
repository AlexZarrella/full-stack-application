const mongoose = require('mongoose');
// const Show     = require('../models/showModel');
const Movie    = require ('../models/movieModel');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const shows = [{
//     title: "The Office",
//     genre: "Comedy",
//     image: "/images/showpic/theofficecover.jpg",
//     cast: ["Jenna Fischer", "John Krasinski", "Steve Carell", "Rainn Wilson"],
//     summary: "This series depicts the everyday lives of office employees in Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company."
// },
// {
//     title: "13 Reasons Why",
//     genre: "Teen Drama",
//     image: "/images/showpic/13reasonscover.jpg",
//     cast: ["Katherine Langford", "Dylan Minnette", "Alisha Boe"],
//     summary: "Seventeen year old, Clay Jensen, returns home from school one day to find a mysterious box on his porch. Inside he discovers seven cassette tapes recorded by Hannah Baker, his deceased classmate and unrequited love, who committed suicide two weeks earlier."
// },
// {
//     title: "Somewhere Between",
//     genre: "Mystery",
//     image: "/images/showpic/somewherebetweencover.jpg",
//     cast: ["Paula Patton", "Devon Sawa", "Aria Birch"],
//     summary: "A mother tries to change the fate of her 8 year old daughter, as she knows where, when, and how she's murdered, but doesn't know who kills her and why.",
// }, 
// {
//     title: "The Sinner",
//     genre: "Mystery",
//     image: "/images/showpic/thesinnercover.jpg",
//     cast: ["Bill Pullman", "Jessica Biel", "Christopher Abbott"],
//     summary: "Follows the story of a young woman who commits a horrific act of violence and rage, and to her surprise, has no idea why. And the investigator who becomes obsessed with the case and is determined to dig into her past and figure out why this is happening."
// }, 
// {
//     title: "Dexter",
//     genre: "Crime",
//     image: "/images/showpic/dextercover.jpg",
//     cast: ["Michael C. Hall", "Jennifer Carpenter", "David Zayas"],
//     summary: "By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers."
// },
// {
//     title: "Black Mirror",
//     genre: "Sci-Fi",
//     image: "/images/showpic/blackmirrorcover.jpg",
//     cast: ["Daniel Lapaine", "Hannah John-Kamen", "Michaela Coel"],
//     summary: "An anthology series exploring a twisted, high-tech world where humanity's greatest innovations and darkest instincts collide."
// },
// {
//     title: "Secret City",
//     genre: "Mystery",
//     image: "/images/showpic/secretcitycover.jpg",
//     cast: ["Anna Torv", "Jacki Weaver", "Marcus Graham"],
//     summary: "Beneath the placid facade of Canberra, amidst rising tension between China and America, senior political journalist Harriet Dunkley uncovers a secret city of interlocked conspiracies, putting innocent lives in danger including her own."
// }, 
// {
//     title: "Sense 8",
//     genre: "Sci-Fi",
//     image: "/images/showpic/sense8cover.jpg",
//     cast: ["Doona Bae", "Jamie Clayton", "Tina Desai"],
//     summary: "A group of people around the world are suddenly linked mentally, and must find a way to survive being hunted by those who see them as a threat to the world's order." 
// }, 
// {
//     title: "Bloodline",
//     genre: "Drama",
//     image: "/images/showpic/bloodlinecover.jpg",
//     cast: ["Kyle Chandler", "Linda Cardellini", "Norbert Leo Butz"],
//     summary: "A family of adult siblings find that their past secrets and scars are revealed when their black sheep of a brother returns home."
// }, 
// {
//     title: "Glow",
//     genre: "Comedy",
//     image: "/images/showpic/glowcover.jpg",
//     cast: ["Alison Brie", "Betty Gilpin", "Sydelle Noel"],
//     summary: "A look at the personal and professional lives of a group of women who perform for a wrestling organization in Los Angeles."
// }, 
// {
//     title: "Anne with an E",
//     genre: "Drama",
//     image: "/images/showpic/annecover.jpg",
//     cast: ["Amybeth McNulty", "Geraldine James", "R.H. Thomson"],
//     summary: "The adventures of a young orphan girl living in the late 19th century. Follow Anne as she learns to navigate her new life on Prince Edward Island, in this new take on L.M. Montgomery's classic novels."
// }, 
// {
//     title: "Arrested Development",
//     genre: "Comedy",
//     image: "/images/showpic/arrestedcover.jpg",
//     cast: ["Jason Bateman", "Portia de Rossi", "Will Arnett"],
//     summary: "Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable."
// }, 
// {
//    title: "Hemlock Grove",
//    genre: "Horror",
//    image: "/images/showpic/hemlockcover.jpg",
//    cast: ["Framke Janssen", "Bill Skarsgard", "Landon Liboiron"],
//    summary: "Secrets are just part of daily life in the small Pennsylvania town of Hemlock Grove,where the darkest evils hide in plain sight." 
// }, 
// {
//     title: "Stranger Things",
//     genre: "Fantasy",
//     image: "/images/showpic/strangerthingscover.jpg",
//     cast: ["Winona Ryder", "David Harbour", "Finn Wolfhard"],
//     summary: "When a young boy disappears, his mother, a police chief, and his friends, must confront terrifying forces in order to get him back."
// },
// {
//     title: "Comedians in Cars",
//     genre: "Comedy",
//     image: "/images/showpic/comedianscover.jpg",
//     cast: ["Jerry Seinfeld"],
//     summary: "Jerry Seinfeld is joined by friends for a cup of coffee and a drive in a classic car, sharing stories all along the way."
// },
// {
//     title: "Orange is the New Black",
//     genre: "Comedy",
//     image: "/images/showpic/orangecover.jpg",
//     cast: ["Taylor Schilling", "Uzo Aduba", "Danielle Brooks"],
//     summary: "Convicted of a decade old crime of transporting drug money to an ex-girlfriend, normally law abiding Piper Chapman is sentenced to a year and a half behind bars to face the reality of how life changing prison can really be."
// },
// {
//     title: "The Crown",
//     genre: "Drama",
//     image: "/images/showpic/crowncover.jpg",
//     cast: ["Claire Foy", "Matt Smith", "Victoria Hamilton"],
//     summary: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century."
// },
// {
//     title: "Slasher",
//     genre: "Horror",
//     image: "/images/showpic/slashercover.jpg",
//     cast: ["Christopher Jacot", "Jim Watson", "Paula Brancati"],
//     summary: "A young woman returns to the small town where her parents were murdered, only to find the past re-emerging as a new series of murders begins."
// },
// {
//     title: "Mindhunter",
//     genre: "Crime",
//     image: "/images/showpic/mindhuntercover.jpg", 
//     cast: ["Jonathan Groff", "Holt McCallany", "Hannah Gross"],
//     summary: "In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters."
// }, 
// {
//     title: "BoJack Horseman",
//     genre: "Comedy",
//     image: "/images/showpic/bojackcover.jpg",
//     cast: ["Will Arnett", "Amy Sedaris"],
//     summary: "BoJack Horseman was the star of the hit TV show Horsin' Around in the '90s, now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters."
// }]

// Show.create(shows)
// .then((response)=>{
//     console.log(`created ${response.length} shows`)
// })
// .catch((err)=>{
//     console.log(err);
// })

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
}
]


Movie.create(movies)
.then((response)=>{
    console.log(`created ${response.length} movies`)
})
.catch((err)=>{
    console.log(err);
})