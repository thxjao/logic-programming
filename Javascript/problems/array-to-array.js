// So just for introduce it, at my job I had the following problem:
// We have one object of objects and one array of objetcs, and each object have it's own ID, like the following plan:

const majorArray = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
];

const minorArray = {
  1: {
    color: "red",
  },
  2: {
    color: "red",
  },
  3: {
    color: "red",
  },
};

// By visualizing it, that thing needed is, we have to add the attribute of each minorArray's object, to it's matching object id presente in the majorArray.
