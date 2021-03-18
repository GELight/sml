[@gelight/sml](../README.md) / [Exports](../modules.md) / SmlEmptyNode

# Class: SmlEmptyNode

## Hierarchy

* [*SmlNode*](smlnode.md)

  ↳ **SmlEmptyNode**

## Table of contents

### Constructors

- [constructor](smlemptynode.md#constructor)

### Methods

- [getComment](smlemptynode.md#getcomment)
- [getWhitespaces](smlemptynode.md#getwhitespaces)
- [setComment](smlemptynode.md#setcomment)
- [setWhitespaces](smlemptynode.md#setwhitespaces)
- [setWhitespacesAndComment](smlemptynode.md#setwhitespacesandcomment)
- [toString](smlemptynode.md#tostring)
- [toWsvLines](smlemptynode.md#towsvlines)

## Constructors

### constructor

\+ **new SmlEmptyNode**(): [*SmlEmptyNode*](smlemptynode.md)

**Returns:** [*SmlEmptyNode*](smlemptynode.md)

Overrides: [SmlNode](smlnode.md)

Defined in: [src/sml/SmlEmptyNode.ts:5](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlEmptyNode.ts#L5)

## Methods

### getComment

▸ **getComment**(): *string*

**Returns:** *string*

Inherited from: [SmlNode](smlnode.md)

Defined in: [src/sml/SmlNode.ts:28](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L28)

___

### getWhitespaces

▸ **getWhitespaces**(): *string*[]

**Returns:** *string*[]

Inherited from: [SmlNode](smlnode.md)

Defined in: [src/sml/SmlNode.ts:19](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L19)

___

### setComment

▸ **setComment**(`comment`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`comment` | *string* |

**Returns:** *void*

Inherited from: [SmlNode](smlnode.md)

Defined in: [src/sml/SmlNode.ts:23](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L23)

___

### setWhitespaces

▸ **setWhitespaces**(...`whitespaces`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...whitespaces` | *string*[] |

**Returns:** *void*

Inherited from: [SmlNode](smlnode.md)

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

Inherited from: [SmlNode](smlnode.md)

Defined in: [src/sml/SmlNode.ts:32](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L32)

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Defined in: [src/sml/SmlEmptyNode.ts:11](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlEmptyNode.ts#L11)

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

Overrides: [SmlNode](smlnode.md)

Defined in: [src/sml/SmlEmptyNode.ts:15](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlEmptyNode.ts#L15)
