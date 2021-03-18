[@gelight/sml](../README.md) / [Exports](../modules.md) / ReliableTxtDocument

# Class: ReliableTxtDocument

## Hierarchy

* **ReliableTxtDocument**

  ↳ [*ReliableTxtDocumentServer*](reliabletxtdocumentserver.md)

## Table of contents

### Constructors

- [constructor](reliabletxtdocument.md#constructor)

### Properties

- [text](reliabletxtdocument.md#text)

### Methods

- [getLines](reliabletxtdocument.md#getlines)
- [getText](reliabletxtdocument.md#gettext)
- [getTextAsCodePoints](reliabletxtdocument.md#gettextascodepoints)
- [setLines](reliabletxtdocument.md#setlines)
- [setText](reliabletxtdocument.md#settext)
- [setTextByCodePoints](reliabletxtdocument.md#settextbycodepoints)
- [toString](reliabletxtdocument.md#tostring)
- [join](reliabletxtdocument.md#join)

## Constructors

### constructor

\+ **new ReliableTxtDocument**(...`args`: *string*[]): [*ReliableTxtDocument*](reliabletxtdocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *string*[] |

**Returns:** [*ReliableTxtDocument*](reliabletxtdocument.md)

Defined in: [src/sml/ReliableTxtDocument.ts:9](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L9)

## Properties

### text

• **text**: *string*= ""

Defined in: [src/sml/ReliableTxtDocument.ts:9](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L9)

## Methods

### getLines

▸ **getLines**(): *string*[]

**Returns:** *string*[]

Defined in: [src/sml/ReliableTxtDocument.ts:40](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L40)

___

### getText

▸ **getText**(): *string*

**Returns:** *string*

Defined in: [src/sml/ReliableTxtDocument.ts:28](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L28)

___

### getTextAsCodePoints

▸ **getTextAsCodePoints**(): *number*[]

**Returns:** *number*[]

Defined in: [src/sml/ReliableTxtDocument.ts:32](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L32)

___

### setLines

▸ **setLines**(...`lines`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...lines` | *string*[] |

**Returns:** *void*

Defined in: [src/sml/ReliableTxtDocument.ts:36](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L36)

___

### setText

▸ **setText**(`text`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`text` | *string* |

**Returns:** *void*

Defined in: [src/sml/ReliableTxtDocument.ts:16](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L16)

___

### setTextByCodePoints

▸ **setTextByCodePoints**(`codePoints`: *number*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`codePoints` | *number*[] |

**Returns:** *void*

Defined in: [src/sml/ReliableTxtDocument.ts:22](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L22)

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Defined in: [src/sml/ReliableTxtDocument.ts:44](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L44)

___

### join

▸ `Static`**join**(`lines`: *string*[]): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`lines` | *string*[] |

**Returns:** *string*

Defined in: [src/sml/ReliableTxtDocument.ts:5](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtDocument.ts#L5)
