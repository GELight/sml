[@gelight/sml](../README.md) / [Exports](../modules.md) / SmlNamedNode

# Class: SmlNamedNode

## Hierarchy

* [*SmlNode*](smlnode.md)

  ↳ **SmlNamedNode**

  ↳↳ [*SmlAttribute*](smlattribute.md)

  ↳↳ [*SmlElement*](smlelement.md)

## Table of contents

### Constructors

- [constructor](smlnamednode.md#constructor)

### Properties

- [name](smlnamednode.md#name)

### Methods

- [getComment](smlnamednode.md#getcomment)
- [getWhitespaces](smlnamednode.md#getwhitespaces)
- [hasName](smlnamednode.md#hasname)
- [setComment](smlnamednode.md#setcomment)
- [setWhitespaces](smlnamednode.md#setwhitespaces)
- [setWhitespacesAndComment](smlnamednode.md#setwhitespacesandcomment)
- [toWsvLines](smlnamednode.md#towsvlines)

## Constructors

### constructor

\+ **new SmlNamedNode**(`name`: *string*): [*SmlNamedNode*](smlnamednode.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*SmlNamedNode*](smlnamednode.md)

Overrides: [SmlNode](smlnode.md)

Defined in: [src/sml/SmlNamedNode.ts:6](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNamedNode.ts#L6)

## Properties

### name

• **name**: *string*

Defined in: [src/sml/SmlNamedNode.ts:6](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNamedNode.ts#L6)

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

### hasName

▸ **hasName**(`name`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *boolean*

Defined in: [src/sml/SmlNamedNode.ts:13](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNamedNode.ts#L13)

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

Inherited from: [SmlNode](smlnode.md)

Defined in: [src/sml/SmlNode.ts:37](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L37)
