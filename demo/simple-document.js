const SML = require("../dist/index");

const doc = SML.SmlDocument.parse(`
# My first SML document
MyRootElement
  MyFirstAttribute Hi
  Group1
    MyFirstAttributeInGroup 123
    MySecondAttributeInGroup 10 20 30 40 50
  End
  MySecondAttribute SML says "Hello world" to all of you # Comment
  MyThirdAttribute 你好
End
`);

// All specific attributes
// const attrs = doc.root().attributes();
// console.log(attrs);

// All specific elements
// const elements = doc.root().elements();
// console.log(elements);

// Liste of attributes und elements
const attributesAndElements = doc.root().nodes;
console.log(attributesAndElements);

// Element
const attrs = doc.root().nodes[1].attributes();
console.log(attrs);

// Attribut
const values = doc.root().nodes[2].values;
console.log(values);
