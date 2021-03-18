[@gelight/sml](../README.md) / [Exports](../modules.md) / SmlNode

# Class: SmlNode

## Hierarchy

* **SmlNode**

  ↳ [*SmlNamedNode*](smlnamednode.md)

  ↳ [*SmlEmptyNode*](smlemptynode.md)

## Table of contents

### Constructors

- [constructor](smlnode.md#constructor)

### Properties

- [comment](smlnode.md#comment)
- [whitespaces](smlnode.md#whitespaces)

### Methods

- [getComment](smlnode.md#getcomment)
- [getWhitespaces](smlnode.md#getwhitespaces)
- [setComment](smlnode.md#setcomment)
- [setWhitespaces](smlnode.md#setwhitespaces)
- [setWhitespacesAndComment](smlnode.md#setwhitespacesandcomment)
- [toWsvLines](smlnode.md#towsvlines)

## Constructors

### constructor

\+ **new SmlNode**(): [*SmlNode*](smlnode.md)

**Returns:** [*SmlNode*](smlnode.md)

Defined in: [src/sml/SmlNode.ts:8](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L8)

## Properties

### comment

• `Private` **comment**: *string*= null

Defined in: [src/sml/SmlNode.ts:8](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L8)

___

### whitespaces

• `Private` **whitespaces**: *string*[]= null

Defined in: [src/sml/SmlNode.ts:7](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L7)

## Methods

### getComment

▸ **getComment**(): *string*

**Returns:** *string*

Defined in: [src/sml/SmlNode.ts:28](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L28)

___

### getWhitespaces

▸ **getWhitespaces**(): *string*[]

**Returns:** *string*[]

Defined in: [src/sml/SmlNode.ts:19](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L19)

___

### setComment

▸ **setComment**(`comment`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`comment` | *string* |

**Returns:** *void*

Defined in: [src/sml/SmlNode.ts:23](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L23)

___

### setWhitespaces

▸ **setWhitespaces**(...`whitespaces`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...whitespaces` | *string*[] |

**Returns:** *void*

Defined in: [src/sml/SmlNode.ts:14](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L14)

___

### setWhitespacesAndComment

▸ **setWhitespacesAndComment**(`whitespaces`: *string*[], `comment`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`whitespaces` | *string*[] |
`comment` | *string* |

**Returns:** *void*

Defined in: [src/sml/SmlNode.ts:32](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L32)

___

### toWsvLines

▸ **toWsvLines**(`document`: [*WsvDocument*](wsvdocument.md), `level`: *number*, `defaultIndentation`: *string*, `endKeyword`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`document` | [*WsvDocument*](wsvdocument.md) |
`level` | *number* |
`defaultIndentation` | *string* |
`endKeyword` | *string* |

**Returns:** *void*

Defined in: [src/sml/SmlNode.ts:37](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L37)
