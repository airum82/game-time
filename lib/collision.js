function collides(character1, character2) {
  let xCollides = character1.x < character2.x + character2.width && character1.x + character1.width > character2.x;
  let yCollides = character1.y < character2.y + character2.height && character1.height + character1.y > character2.y;
  if (xCollides && yCollides) {
    return true;
  } else {
    return false;
  }
}

module.exports = {collides};

