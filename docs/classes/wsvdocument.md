[@gelight/sml](../README.md) / [Exports](../modules.md) / WsvDocument

# Class: WsvDocument

## Hierarchy

* **WsvDocument**

  ↳ [*WsvDocumentServer*](wsvdocumentserver.md)

## Table of contents

### Constructors

- [constructor](wsvdocument.md#constructor)

### Properties

- [lines](wsvdocument.md#lines)

### Methods

- [addWsvLineBySet](wsvdocument.md#addwsvlinebyset)
- [addWsvLineByValues](wsvdocument.md#addwsvlinebyvalues)
- [addWsvLines](wsvdocument.md#addwsvlines)
- [getLine](wsvdocument.md#getline)
- [getLines](wsvdocument.md#getlines)
- [toArray](wsvdocument.md#toarray)
- [toString](wsvdocument.md#tostring)
- [parse](wsvdocument.md#parse)

## Constructors

### constructor

\+ **new WsvDocument**(): [*WsvDocument*](wsvdocument.md)

**Returns:** [*WsvDocument*](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:12](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L12)

## Properties

### lines

• **lines**: [*WsvLine*](wsvline.md)[]

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

Defined in: [src/sml/WsvDocument.ts:33](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L33)

___

### addWsvLineByValues

▸ **addWsvLineByValues**(...`values`: *string*[]): [*WsvDocument*](wsvdocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`...values` | *string*[] |

**Returns:** [*WsvDocument*](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:25](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L25)

___

### addWsvLines

▸ **addWsvLines**(...`lines`: [*WsvLine*](wsvline.md)[]): [*WsvDocument*](wsvdocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`...lines` | [*WsvLine*](wsvline.md)[] |

**Returns:** [*WsvDocument*](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:18](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L18)

___

### getLine

▸ **getLine**(`index`: *number*): [*WsvLine*](wsvline.md)

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |

**Returns:** [*WsvLine*](wsvline.md)

Defined in: [src/sml/WsvDocument.ts:42](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L42)

___

### getLines

▸ **getLines**(): [*WsvLine*](wsvline.md)[]

**Returns:** [*WsvLine*](wsvline.md)[]

Defined in: [src/sml/WsvDocument.ts:38](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L38)

___

### toArray

▸ **toArray**(): *string*[][]

**Returns:** *string*[][]

Defined in: [src/sml/WsvDocument.ts:46](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L46)

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Defined in: [src/sml/WsvDocument.ts:54](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L54)

___

### parse

▸ `Static`**parse**(`content`: *string*): [*WsvDocument*](wsvdocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`content` | *string* |

**Returns:** [*WsvDocument*](wsvdocument.md)

Defined in: [src/sml/WsvDocument.ts:7](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvDocument.ts#L7)
