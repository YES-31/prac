class Unit {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  healing(heal) {
    if (this.hp <= 0) return;
    this.hp += heal;
    if (this.hp >= 100) this.hp = 100;
  }
  damaged(damage) {
    if (this.hp <= 0) return;
    this.hp -= damage;
    if (this.hp <= 0) this.hp = 0;
  }
}

const unit = new Unit("hoho", 100);
unit.damaged(70); // 30
console.log(unit.hp);
unit.healing(10); // 40
console.log(unit.hp);
unit.damaged(50); // 0
console.log(unit.hp);
unit.healing(100); // 0
console.log(unit.hp);
