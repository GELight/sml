# ReliableTXT - The Reliable Text File Format

## Using

**Generate your first ReliableTxt document**

```js
import { ReliableTxtDocument, ReliableTxtDocumentServer } from "@gelight/reliabletxt";

// Create new instance of a ReliableTxt document with load and save methods for server side stuff
const reliableTxtDocument = new ReliableTxtDocumentServer(
    "Hello World.",
    "This is the second line of your ReliableTxt document."
);

// Save the new document as a SML file
reliableTxtDocument.save("myReliableTxtDoc.sml");

// Load the new file and read the text content
const content = ReliableTxtDocumentServer.load("myReliableTxtDoc.sml").getText();

console.log(content);
```

**Result:**

```bash
Hello World.
This is the content of your ReliableTxt document.
```

---

## Methods

### Constructor()
Creates a new ReliableTxt document instance.

> constructor(...args: string[])

```js
import { ReliableTxtDocument } from "@gelight/reliabletxt";

// Create an empty ReliableTxt document
const reliableTxtDocument1 = new ReliableTxtDocument();

// Create a ReliableTxt document with 2 lines
const reliableTxtDocument2 = new ReliableTxtDocument("Line 1", "Line 2");
```

### setText()
Set the text content of the ReliableTxt document

> setText(text: string): void

```js
import { ReliableTxtDocument } from "@gelight/reliabletxt";

const reliableTxtDocument = new ReliableTxtDocument();
reliableTxtDocument.setText("Hello World");

const content = reliableTxtDocument.getText();
console.log(reliableTxtDocument);
```

### getText()
Returns the text content of the ReliableTxt document

> getText(): string

```js
import { ReliableTxtDocument } from "@gelight/reliabletxt";

const reliableTxtDocument = new ReliableTxtDocument("Hello World");
const content = reliableTxtDocument.getText();

console.log(content);
```

### setTextByCodePoints()
Set the text content of a ReliableTxt document by code points

> setTextByCodePoints(codePoints: number[]): void

```js
import { ReliableTxtDocument } from "@gelight/reliabletxt";

const reliableTxtDocument = new ReliableTxtDocument();
reliableTxtDocument.setTextByCodePoints([9731, 9733, 9842, 0x2F804]);

console.log(reliableTxtDocument.getText());
```

### getTextByCodePoints()
Returns the text content of a ReliableTxt document as an array of code points

> getTextAsCodePoints(): number[]

```js
import { ReliableTxtDocument } from "@gelight/reliabletxt";

const reliableTxtDocument = new ReliableTxtDocument("Hello World");
const content = reliableTxtDocument.getTextAsCodePoints();

console.log(content);
```

### setLines()
Set all content lines in a ReliableTxt document 

> setLines(...lines: string[]): void

```js
import { ReliableTxtDocument } from "@gelight/reliabletxt";

const reliableTxtDocument = new ReliableTxtDocument();
reliableTxtDocument.setLines("Line 1", "Line 2", "Line 3");

console.log(reliableTxtDocument.getText());
```

### getLines()
Returns all content lines in a ReliableTxt document as an array 

> getLines(): string[]

```js
import { ReliableTxtDocument } from "@gelight/reliabletxt";

const reliableTxtDocument = new ReliableTxtDocument();
reliableTxtDocument.setLines("Line 1", "Line 2", "Line 3");

console.log(reliableTxtDocument.getLines());
```

### toString()
Returns a ReliableTxt document as a string 

> toString(): string

```js
import { ReliableTxtDocument } from "@gelight/reliabletxt";

const reliableTxtDocument = new ReliableTxtDocument("Hello", "World");

console.log(reliableTxtDocument.toString());
```

## Methods for server side stuff

### save()
Writes ReliableTxt document data to a file

> save(filePath: string): ReliableTxtDocumentServer

```js
import { ReliableTxtDocumentServer } from "@gelight/reliabletxt";

const reliableTxtDocument = new ReliableTxtDocumentServer(
    "Hello World.",
    "This is the second line of your ReliableTxt document."
);

reliableTxtDocument.save("myReliableTxtDoc.sml");
```

### load()
Read a ReliableTxt file and returns a ReliableTxt document

> static load(filePath: string): ReliableTxtDocumentServer

```js
import { ReliableTxtDocumentServer } from "@gelight/reliabletxt";

const content = ReliableTxtDocumentServer.load("myReliableTxtDoc.sml").getText();
```

### setEncoding()
Defines the encoding of the ReliableTxt document. "UTF8" is the default.

> setEncoding(encoding: ReliableTxtEncoding): ReliableTxtDocumentServer

```js
import { ReliableTxtDocumentServer, ReliableTxtEncoding } from "@gelight/reliabletxt";

const reliableTxtDocument = new ReliableTxtDocumentServer();
reliableTxtDocument.setEncoding(ReliableTxtEncoding.UTF16_REVERSED);
```

### getEncoding()
Returns the encoding of the ReliableTxt document

> getEncoding(): ReliableTxtEncoding

```js
import { ReliableTxtDocumentServer, ReliableTxtEncoding } from "@gelight/reliabletxt";

const reliableTxtDocument = new ReliableTxtDocumentServer();
const encoding: ReliableTxtEncoding = reliableTxtDocument.getEncoding();

console.log(encoding); // utf8
```
