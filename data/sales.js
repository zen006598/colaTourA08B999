class Sales {
  constructor(id, name){
    this.id = id;
    this.name = name;
  }
}

const s1 = new Sales(1,"業務一")
const s2 = new Sales(2,"業務二")
const s3 = new Sales(3,"業務三")
const salesList = [s1, s2, s3]

export {salesList} 