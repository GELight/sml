[@gelight/sml](../README.md) / [Exports](../modules.md) / WsvDocumentServer

# Class: WsvDocumentServer

## Hierarchy

* [*WsvDocument*](wsvdocument.md)

  ↳ **WsvDocumentServer**

## Table of contents

### Constructors

- [constructor](wsvdocumentserver.md#constructor)

### Properties

- [encoding](wsvdocumentserver.md#encoding)
- [lines](wsvdocumentserver.md#lines)

### Methods

- [addWsvLineBySet](wsvdocumentserver.md#addwsvlinebyset)
- [addWsvLineByValues](wsvdocumentserver.md#addwsvlinebyvalues)
- [addWsvLines](wsvdocumentserver.md#addwsvlines)
- [getEncoding](wsvdocumentserver.md#getencoding)
- [getLine](wsvdocumentserver.md#getline)
- [getLines](wsvdocumentserver.md#getlines)
- [save](wsvdocumentserver.md#save)
- [setEncoding](wsvdocumentserver.md#setencoding)
- [toArray](wsvdocumentserver.md#toarray)
- [toString](wsvdocumentserver.md#tostring)
- [load](wsvdocumentserver.md#load)
- [parse](wsvdocumentserver.md#parse)

## Constructors

### constructor

\+ **new WsvDocumentServer**(): [*WsvDocumentServer*](wsvdocumentserver.md)

**Returns:** [*WsvDocumentServer*](wsvdocumentserver.md)

Overrides: [WsvDocument](wsvdocument.md)

Defined in: [src/sml/WsvDocumentServer.ts:22](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocumentServer.ts#L22)

## Properties

### encoding

• `Private` **encoding**: [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

Defined in: [src/sml/WsvDocumentServer.ts:22](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocumentServer.ts#L22)

___

### lines

• **lines**: [*WsvLine*](wsvline.md)[]

Inherited from: [WsvDocument](wsvdocument.md).[lines](wsvdocument.md#lines)

Defined in: [src/sml/WsvDocument.ts:12](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L12)

## Methods

### addWsvLineBySet

▸ **addWsvLineBySet**(`values`: *string*[], `whitespaces`: *string*[], `comment`: *string*): [*WsvDocument*](wsvdocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *string*[] |
`whitespaces` | *string*[] |
`comment` | *string* |

**Returns:** [*WsvDocument*](wsvdocument.md)

Inherited from: [WsvDocument](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:33](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L33)

___

### addWsvLineByValues

▸ **addWsvLineByValues**(...`values`: *string*[]): [*WsvDocument*](wsvdocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`...values` | *string*[] |

**Returns:** [*WsvDocument*](wsvdocument.md)

Inherited from: [WsvDocument](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:25](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L25)

___

### addWsvLines

▸ **addWsvLines**(...`lines`: [*WsvLine*](wsvline.md)[]): [*WsvDocument*](wsvdocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`...lines` | [*WsvLine*](wsvline.md)[] |

**Returns:** [*WsvDocument*](wsvdocument.md)

Inherited from: [WsvDocument](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:18](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L18)

___

### getEncoding

▸ **getEncoding**(): [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

**Returns:** [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

Defined in: [src/sml/WsvDocumentServer.ts:34](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocumentServer.ts#L34)

___

### getLine

▸ **getLine**(`index`: *number*): [*WsvLine*](wsvline.md)

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |

**Returns:** [*WsvLine*](wsvline.md)

Inherited from: [WsvDocument](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:42](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L42)

___

### getLines

▸ **getLines**(): [*WsvLine*](wsvline.md)[]

**Returns:** [*WsvLine*](wsvline.md)[]

Inherited from: [WsvDocument](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:38](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L38)

___

### save

▸ **save**(`filePath`: *string*): [*WsvDocumentServer*](wsvdocumentserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** [*WsvDocumentServer*](wsvdocumentserver.md)

Defined in: [src/sml/WsvDocumentServer.ts:38](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocumentServer.ts#L38)

___

### setEncoding

▸ **setEncoding**(`encoding`: [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)): [*WsvDocument*](wsvdocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`encoding` | [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md) |

**Returns:** [*WsvDocument*](wsvdocument.md)

Defined in: [src/sml/WsvDocumentServer.ts:29](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocumentServer.ts#L29)

___

### toArray

▸ **toArray**(): *string*[][]

**Returns:** *string*[][]

Inherited from: [WsvDocument](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:46](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L46)

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Inherited from: [WsvDocument](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:54](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L54)

___

### load

▸ `Static`**load**(`filePath`: *string*): [*WsvDocumentServer*](wsvdocumentserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** [*WsvDocumentServer*](wsvdocumentserver.md)

Defined in: [src/sml/WsvDocumentServer.ts:15](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocumentServer.ts#L15)

___

### parse

▸ `Static`**parse**(`content`: *string*): [*WsvDocument*](wsvdocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`content` | *string* |

**Returns:** [*WsvDocument*](wsvdocument.md)

Overrides: [WsvDocument](wsvdocument.md)

Defined in: [src/sml/WsvDocumentServer.ts:10](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocumentServer.ts#L10)
