const generateName = () => {
  const animals = [
    "Lion",
    "Rabbit",
    "Cat",
    "Dog",
    "Gerbil",
    "Tiger",
    "Hedgehog",
    "Ferret",
    "Hare",
    "Hound",
    "Butterfly",
    "Moth",
    "Slug",
    "Otter",
    "Beaver",
    "Hamster",
    "Chinchilla",
    "Poodle",
    "Sheep",
    "Eagle",
    "Spider",
    "Squirrel",
    "Griffin",
    "Dragon",
    "Wyvern"
  ]

  const colours = [
    "Puce",
    "Red",
    "Gold",
    "Lime Green",
    "Magenta",
    "Black",
    "Orange",
    "Blue",
    "Purple",
    "Grey",
    "Yellow",
    "Cyan",
    "Turquoise",
    "Mauve",
    "Burgundy",
    "Lilac",
    "Ochre",
    "Rose",
    "Indigo",
    "Jade",
    "Terracotta",
    "Opal"
  ]

  const rand = (myArray) => myArray[Math.floor(Math.random() * myArray.length)]

  if (Math.random() > 0.5) {
    return `The ${rand(colours)} ${rand(animals)}`
  } else {
    return `The ${rand(animals)} and ${rand(animals)}`
  }

}

const generateBeers = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const beers = [
    "Bishop's Finger",
    "Stella Artois",
    "Carling Black Label",
    "Lagunitas",
    "John Smiths",
    "Doom Bar",
    "Bombardier",
    "Landlord",
    "Harvey's Best",
    "Five Points Pale Ale",
    "Spitfire",
    "Skol"
  ]

  shuffleArray(beers)

  const numberOfRegularBeers = Math.ceil(Math.random() * 3)
  const numberOfGuestBeers = Math.ceil(Math.random() * 3)

  return {
    regular: beers.slice(0, numberOfRegularBeers),
    guest: beers.slice(numberOfRegularBeers, numberOfRegularBeers + numberOfGuestBeers)
  }

}

const generatePubs = () => {
  const pubs = [];
  for (let i = 0; i < 20; i++) {
    const id = Math.floor(Math.random() * 10000)
    const beers = generateBeers()

    pubs.push({
      Name: generateName(),
      RegularBeers: beers.regular,
      GuestBeers: beers.guest,
      PubService: `https://example.com/pub/?id=${id}`,
      Id: id,
      CreateTS: "2019-08-03 12:47:24"
    })
  }

  return { Pubs: pubs };
};

module.exports = generatePubs();
