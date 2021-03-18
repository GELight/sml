[@gelight/sml](../README.md) / [Exports](../modules.md) / ReliableTxtDocumentServer

# Class: ReliableTxtDocumentServer

## Hierarchy

* [*ReliableTxtDocument*](reliabletxtdocument.md)

  ↳ **ReliableTxtDocumentServer**

## Table of contents

### Constructors

- [constructor](reliabletxtdocumentserver.md#constructor)

### Properties

- [encoding](reliabletxtdocumentserver.md#encoding)
- [text](reliabletxtdocumentserver.md#text)

### Methods

- [getEncoding](reliabletxtdocumentserver.md#getencoding)
- [getLines](reliabletxtdocumentserver.md#getlines)
- [getText](reliabletxtdocumentserver.md#gettext)
- [getTextAsCodePoints](reliabletxtdocumentserver.md#gettextascodepoints)
- [save](reliabletxtdocumentserver.md#save)
- [setEncoding](reliabletxtdocumentserver.md#setencoding)
- [setLines](reliabletxtdocumentserver.md#setlines)
- [setText](reliabletxtdocumentserver.md#settext)
- [setTextByCodePoints](reliabletxtdocumentserver.md#settextbycodepoints)
- [toString](reliabletxtdocumentserver.md#tostring)
- [join](reliabletxtdocumentserver.md#join)
- [load](reliabletxtdocumentserver.md#load)

## Constructors

### constructor

\+ **new ReliableTxtDocumentServer**(...`args`: *string*[]): [*ReliableTxtDocumentServer*](reliabletxtdocumentserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *string*[] |

**Returns:** [*ReliableTxtDocumentServer*](reliabletxtdocumentserver.md)

Overrides: [ReliableTxtDocument](reliabletxtdocument.md)

Defined in: [src/sml/ReliableTxtDocumentServer.ts:14](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocumentServer.ts#L14)

## Properties

### encoding

• `Private` **encoding**: [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

Defined in: [src/sml/ReliableTxtDocumentServer.ts:14](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocumentServer.ts#L14)

___

### text

• **text**: *string*= ""

Inherited from: [ReliableTxtDocument](reliabletxtdocument.md).[text](reliabletxtdocument.md#text)

Defined in: [src/sml/ReliableTxtDocument.ts:9](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L9)

## Methods

### getEncoding

▸ **getEncoding**(): [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

**Returns:** [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

Defined in: [src/sml/ReliableTxtDocumentServer.ts:26](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocumentServer.ts#L26)

___

### getLines

▸ **getLines**(): *string*[]

**Returns:** *string*[]

Inherited from: [ReliableTxtDocument](reliabletxtdocument.md)

Defined in: [src/sml/ReliableTxtDocument.ts:40](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L40)

___

### getText

▸ **getText**(): *string*

**Returns:** *string*

Inherited from: [ReliableTxtDocument](reliabletxtdocument.md)

Defined in: [src/sml/ReliableTxtDocument.ts:28](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L28)

___

### getTextAsCodePoints

▸ **getTextAsCodePoints**(): *number*[]

**Returns:** *number*[]

Inherited from: [ReliableTxtDocument](reliabletxtdocument.md)

Defined in: [src/sml/ReliableTxtDocument.ts:32](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L32)

___

### save

▸ **save**(`filePath`: *string*): [*ReliableTxtDocumentServer*](reliabletxtdocumentserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** [*ReliableTxtDocumentServer*](reliabletxtdocumentserver.md)

Defined in: [src/sml/ReliableTxtDocumentServer.ts:30](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocumentServer.ts#L30)

___

### setEncoding

▸ **setEncoding**(`encoding`: [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)): [*ReliableTxtDocumentServer*](reliabletxtdocumentserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`encoding` | [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md) |

**Returns:** [*ReliableTxtDocumentServer*](reliabletxtdocumentserver.md)

Defined in: [src/sml/ReliableTxtDocumentServer.ts:21](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocumentServer.ts#L21)

___

### setLines

▸ **setLines**(...`lines`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...lines` | *string*[] |

**Returns:** *void*

Inherited from: [ReliableTxtDocument](reliabletxtdocument.md)

Defined in: [src/sml/ReliableTxtDocument.ts:36](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L36)

___

### setText

▸ **setText**(`text`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`text` | *string* |

**Returns:** *void*

Inherited from: [ReliableTxtDocument](reliabletxtdocument.md)

Defined in: [src/sml/ReliableTxtDocument.ts:16](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L16)

___

### setTextByCodePoints

▸ **setTextByCodePoints**(`codePoints`: *number*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`codePoints` | *number*[] |

**Returns:** *void*

Inherited from: [ReliableTxtDocument](reliabletxtdocument.md)

Defined in: [src/sml/ReliableTxtDocument.ts:22](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L22)

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Inherited from: [ReliableTxtDocument](reliabletxtdocument.md)

Defined in: [src/sml/ReliableTxtDocument.ts:44](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L44)

___

### join

▸ `Static`**join**(`lines`: *string*[]): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`lines` | *string*[] |

**Returns:** *string*

Inherited from: [ReliableTxtDocument](reliabletxtdocument.md)

Defined in: [src/sml/ReliableTxtDocument.ts:5](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L5)

___

### load

▸ `Static`**load**(`filePath`: *string*): [*ReliableTxtDocumentServer*](reliabletxtdocumentserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** [*ReliableTxtDocumentServer*](reliabletxtdocumentserver.md)

Defined in: [src/sml/ReliableTxtDocumentServer.ts:7](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocumentServer.ts#L7)
