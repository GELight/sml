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

const attrs = doc.getRoot().getAttributes();
console.log(attrs);

const elements = doc.getRoot().getElements();
console.log(elements);
