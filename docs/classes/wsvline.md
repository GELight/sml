[@gelight/sml](../README.md) / [Exports](../modules.md) / WsvLine

# Class: WsvLine

## Table of contents

### Constructors

- [constructor](wsvline.md#constructor)

### Properties

- [comment](wsvline.md#comment)
- [values](wsvline.md#values)
- [whitespaces](wsvline.md#whitespaces)

### Methods

- [addValue](wsvline.md#addvalue)
- [getComment](wsvline.md#getcomment)
- [getValues](wsvline.md#getvalues)
- [getWhitespaces](wsvline.md#getwhitespaces)
- [hasValues](wsvline.md#hasvalues)
- [set](wsvline.md#set)
- [setComment](wsvline.md#setcomment)
- [setValues](wsvline.md#setvalues)
- [setWhitespaces](wsvline.md#setwhitespaces)
- [toString](wsvline.md#tostring)
- [parse](wsvline.md#parse)
- [validateComment](wsvline.md#validatecomment)
- [validateWhitespaces](wsvline.md#validatewhitespaces)

## Constructors

### constructor

\+ **new WsvLine**(...`args`: *string*[]): [*WsvLine*](wsvline.md)

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *string*[] |

**Returns:** [*WsvLine*](wsvline.md)

Defined in: [src/sml/WsvLine.ts:30](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L30)

## Properties

### comment

• `Private` **comment**: *string*= null

Defined in: [src/sml/WsvLine.ts:30](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L30)

___

### values

• `Private` **values**: *string*[]

Defined in: [src/sml/WsvLine.ts:28](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L28)

___

### whitespaces

• `Private` **whitespaces**: *string*[]

Defined in: [src/sml/WsvLine.ts:29](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L29)

## Methods

### addValue

▸ **addValue**(`value`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* |

**Returns:** *void*

Defined in: [src/sml/WsvLine.ts:43](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L43)

___

### getComment

▸ **getComment**(): *string*

**Returns:** *string*

Defined in: [src/sml/WsvLine.ts:79](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L79)

___

### getValues

▸ **getValues**(): *string*[]

**Returns:** *string*[]

Defined in: [src/sml/WsvLine.ts:50](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L50)

___

### getWhitespaces

▸ **getWhitespaces**(): *string*[]

**Returns:** *string*[]

Defined in: [src/sml/WsvLine.ts:67](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L67)

___

### hasValues

▸ **hasValues**(): *boolean*

**Returns:** *boolean*

Defined in: [src/sml/WsvLine.ts:58](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L58)

___

### set

▸ **set**(`values`: *string*[], `whitespaces`: *string*[], `comment`: *string*): [*WsvLine*](wsvline.md)

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *string*[] |
`whitespaces` | *string*[] |
`comment` | *string* |

**Returns:** [*WsvLine*](wsvline.md)

Defined in: [src/sml/WsvLine.ts:83](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L83)

___

### setComment

▸ **setComment**(`comment`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`comment` | *string* |

**Returns:** *void*

Defined in: [src/sml/WsvLine.ts:74](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L74)

___

### setValues

▸ **setValues**(...`args`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *string*[] |

**Returns:** *void*

Defined in: [src/sml/WsvLine.ts:54](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L54)

___

### setWhitespaces

▸ **setWhitespaces**(`whitespaces`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`whitespaces` | *string*[] |

**Returns:** *void*

Defined in: [src/sml/WsvLine.ts:62](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L62)

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Defined in: [src/sml/WsvLine.ts:90](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L90)

___

### parse

▸ `Static`**parse**(`content`: *string*): [*WsvLine*](wsvline.md)

#### Parameters:

Name | Type |
:------ | :------ |
`content` | *string* |

**Returns:** [*WsvLine*](wsvline.md)

Defined in: [src/sml/WsvLine.ts:8](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L8)

___

### validateComment

▸ `Static`**validateComment**(`comment`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`comment` | *string* |

**Returns:** *void*

Defined in: [src/sml/WsvLine.ts:22](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L22)

___

### validateWhitespaces

▸ `Static`**validateWhitespaces**(`whitespaces`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`whitespaces` | *string*[] |

**Returns:** *void*

Defined in: [src/sml/WsvLine.ts:12](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvLine.ts#L12)
