# WhitespaceSV - Whitespace Separated Values (WSV)

## Using

### Simple way to generate your first WSV document

## WsvDocument > parse()

> parse(content: string): WsvDocument

```js
import { WsvDocument } from "@gelight/whitespacesv";

const wsvDoc = WsvDocument.parse('"My Value" "My ""Value""" "MyValue#1" "Line1"/"Line2" "" "-" - MyValue # My comment with ### hashes and "doublequotes"');

console.log(wsvDoc.toString());
// console.log(wsvDoc);
```

**Result:**

```bash
"My Value" "My ""Value""" "MyValue#1" "Line1"/"Line2" "" "-" - MyValue # My comment with ### hashes and "doublequotes"
```

For more controll you can build your WSV document step by step with appropriate methods.

## WsvDocument > addWsvLines()

> addWsvLines(...lines: WsvLine[]): WsvDocument

```js
import { WsvDocument, WsvLine } from "@gelight/whitespacesv";

let wsvDoc = new WsvDocument();

wsvDoc.addWsvLines(
    new WsvLine("Line 1 - Value 1", "Line 1 - Value 2"),
    new WsvLine("Line 2 - Value 1").setComment("Another comment")
);

console.log(wsvDoc.getLines());
```

## WsvDocument > addWsvLineByValues()

> addWsvLineByValues(...values: string[]): WsvDocument

```js
import { WsvDocument } from "@gelight/whitespacesv";

let wsvDoc = new WsvDocument();

wsvDoc.addWsvLineByValues("Line 1 - Value 1", "Line 1 - Value 2");

console.log(wsvDoc.getLines());
```

## WsvDocument > addWsvLineBySet()

> addWsvLineBySet(values: string[], whitespaces: string[], comment: string): WsvDocument

```js
import { WsvDocument, WsvLine } from "@gelight/whitespacesv";

let wsvDoc = new WsvDocument();

wsvDoc.addWsvLineBySet(["Value 1", "Value 2"], [], "My comment");

console.log(wsvDoc.getLines());
```

## WsvDocument > getLines()

> getLines(): WsvLine[]

```js
import { WsvDocument, WsvLine } from "@gelight/whitespacesv";

let wsvDoc = new WsvDocument();

wsvDoc.addWsvLineBySet(["Value 1", "Value 2"], [], "My comment");

console.log(wsvDoc.getLines());
```

## WsvDocument > getLine()

> getLine(index: number): WsvLine

```js
import { WsvDocument, WsvLine } from "@gelight/whitespacesv";

let wsvDoc = new WsvDocument();

wsvDoc.addWsvLines(
    new WsvLine("Line 1 - Value 1", "Line 1 - Value 2"),
    new WsvLine("Line 2 - Value 1").setComment("Another comment")
);
console.log(wsvDoc.getLine(1));

/*
WsvLine {
  values: [ 'Line 2 - Value 1' ],
  comment: 'Another comment',
  whitespaces: null
}
*/
```

## WsvDocument > toArray()

> toArray(): string[][]

```js
import { WsvDocument, WsvLine } from "@gelight/whitespacesv";

let wsvDoc = new WsvDocument();

wsvDoc.addWsvLines(
    new WsvLine("Line 1 - Value 1", "Line 1 - Value 2"),
    new WsvLine("Line 2 - Value 1").setComment("Another comment")
);

console.log(wsvDoc.toArray());

// [ [ 'Line 1 - Value 1', 'Line 1 - Value 2' ], [ 'Line 2 - Value 1' ] ]
```
