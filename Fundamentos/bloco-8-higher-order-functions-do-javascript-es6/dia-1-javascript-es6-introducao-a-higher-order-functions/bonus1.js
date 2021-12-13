const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };




const damageDragon = (dragao) => {
  let minDamage = 15;
  let dano = parseInt(Math.random() * (dragao.strength - minDamage + 1));
  return dano;
}

const damageWarrior = (guerreiro) => {
  let minDamage = 15;
  let dano = parseInt(Math.random() * (guerreiro.strength - minDamage + 1));
  return dano;
}

const danoMago = (mago) => {
  let minDamage = 15;
  let dano = parseInt(Math.random() * mago.intelligence * 2);
  let mana = mago.mana < 15 ? "Não possui mana" : mago.mana - minDamage;
  return { dano, mana }
}


console.log(danoMago(mage));
