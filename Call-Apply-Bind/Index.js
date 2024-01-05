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
  
  let obj2 = {
    name: "Arun",
    from: "West Bengal",
    designation: "React Developer",
  };
  
  let obj3 = {
    name: "Subash",
    from: "Noida",
    designation: "Full Stack Developer",
  };
  
  let obj4 = {
    name: "Jyoti",
    from: "Pune",
    designation: "React Native Developer",
  };
  
  function Desc(company, location) {
    return `I am ${this.name} from ${this.from} and I'm working as a ${this.designation} at ${company}, ${location}`;
  }
  
  const result1 = Desc.bind(obj1, "IBM", "Hyderabad");
  console.log(result1());
  
  const result2 = Desc.bind(obj2, "Google", "Bangalore");
  console.log(result2());
  
  const result3 = Desc.bind(obj3, "Microsoft", "Seattle");
  console.log(result3());
  
  const result4 = Desc.bind(obj4, "Facebook", "Menlo Park");
  console.log(result4());
  

// Best Way to do this

// let objects = [
//     {
//       name: "Manik",
//       from: "Odisha",
//       designation: "MERN Stack Developer",
//     },
//     {
//       name: "Arun",
//       from: "West Bengal",
//       designation: "React Developer",
//     },
//     {
//       name: "Subash",
//       from: "Noida",
//       designation: "Full Stack Developer",
//     },
//     {
//       name: "Jyoti",
//       from: "Pune",
//       designation: "React Native Developer",
//     },
//   ];
  
//   function Desc(company, location) {
//     return `I am ${this.name} from ${this.from} and I'm working as a ${this.designation} at ${company}, ${location}`;
//   }
  
//   let boundFunctions = objects.map((obj) => Desc.bind(obj));
  
//   boundFunctions.forEach((fn, index) => {
//     console.log(`Result for object ${index + 1}:`);
//     console.log(fn("Company", "Location"));
//   });
  