// Call / Apply

let obj = {
  name: "Manik",
  from: "Odisha",
  designation: "MERN Stack Developer",
  Dec: function (company, location) {
    return `I am ${this.name} from ${this.from} and I wroking as a ${this.designation} at ${company},${location}`;
  },
};
// obj.Dec.call(obj,company,location);
const result = obj.Dec.apply(obj, ["Accenture", "Pune"]);
console.log(result);

// Bind
let obj1 = {
  name: "Manik",
  from: "Odisha",
  designation: "MERN Stack Developer",
};
function Desc(company, location) {
  return `I am ${this.name} from ${this.from} and I wroking as a ${this.designation} at ${company},${location}`;
}
const result1 = Desc.bind(obj1, "IBM", "Hyderabad");
console.log(result1());
