
function RedPanda(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "red panda";
  this.image = "img/redpanda.png";
}

function Bunny(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "bunny rabbit";
  this.image = "img/bunny.png";
}

function Axolotl(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "axolotl";
  this.image = "img/axolotl.png";
}

smiley = new RedPanda("Smiley", 10);
orie = new Bunny("Orie", 5);
axe = new Axolotl("Axe", 2);

animal = [smiley, orie, axe];
names = ["Smiley", "Orie", "Axe"]

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  randomIndex = generateRandomIndex(3);
  return names[randomIndex];
}


function generateRandomAge() {
  return generateRandomIndex(100);
}

function generateRandomAnimal() {
  randomIdx = generateRandomIndex(3);
  randAnimal = animal[randomIdx];
  if (randAnimal instanceof RedPanda) {
    myAnimal = new RedPanda(generateRandomName(), generateRandomAge());
  }
  else if (randAnimal instanceof Bunny) {
    myAnimal = new Bunny(generateRandomName(), generateRandomAge());
  }
  else if (randAnimal instanceof Axolotl) {
    myAnimal = new Axolotl(generateRandomName(), generateRandomAge());
  }
  return myAnimal;
}


function onLoad() {
    var animal = generateRandomAnimal();
    // fill in code
    var img = document.getElementById("randomAnimal");
    img.setAttribute("src", animal.image);
    img.setAttribute("alt", animal.image_alt);

    document.getElementById("name").innerHTML = animal.name;
    document.getElementById("age").innerHTML = animal.age;
  }

