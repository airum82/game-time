const collides = (character1, character2) => {
  const xCollides = character1.x < character2.x + character2.width && character1.x + character1.width > character2.x;
  const yCollides = character1.y < character2.y + character2.height && character1.height + character1.y > character2.y;
  return xCollides && yCollides;
}

module.exports = { collides };

