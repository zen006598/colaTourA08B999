class Team{
  constructor(id, code, name){
    this.id = id;
    this.code = code;
    this.name = name;
  }
}

const t1 = new Team(1, '001', '組別一')
const t2 = new Team(2, '002', '組別二')
const t3 = new Team(3, '003', '組別三')
const teamsList = [t1, t2, t3]

export {teamsList} 