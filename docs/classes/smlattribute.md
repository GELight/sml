[@gelight/sml](../README.md) / [Exports](../modules.md) / SmlAttribute

# Class: SmlAttribute

## Hierarchy

* [*SmlNamedNode*](smlnamednode.md)

  ↳ **SmlAttribute**

## Table of contents

### Constructors

- [constructor](smlattribute.md#constructor)

### Properties

- [name](smlattribute.md#name)
- [values](smlattribute.md#values)

### Methods

- [getComment](smlattribute.md#getcomment)
- [getNumberValues](smlattribute.md#getnumbervalues)
- [getString](smlattribute.md#getstring)
- [getValues](smlattribute.md#getvalues)
- [getWhitespaces](smlattribute.md#getwhitespaces)
- [hasName](smlattribute.md#hasname)
- [setComment](smlattribute.md#setcomment)
- [setString](smlattribute.md#setstring)
- [setValues](smlattribute.md#setvalues)
- [setWhitespaces](smlattribute.md#setwhitespaces)
- [setWhitespacesAndComment](smlattribute.md#setwhitespacesandcomment)
- [toString](smlattribute.md#tostring)
- [toWsvLines](smlattribute.md#towsvlines)

## Constructors

### constructor

\+ **new SmlAttribute**(`name`: *string*, `values`: *any*[]): [*SmlAttribute*](smlattribute.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`values` | *any*[] |

**Returns:** [*SmlAttribute*](smlattribute.md)

Overrides: [SmlNamedNode](smlnamednode.md)

Defined in: [src/sml/SmlAttribute.ts:8](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlAttribute.ts#L8)

## Properties

### name

• **name**: *string*

Inherited from: [SmlNamedNode](smlnamednode.md).[name](smlnamednode.md#name)

Defined in: [src/sml/SmlNamedNode.ts:6](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNamedNode.ts#L6)

___

### values

• `Private` **values**: *string*[]

Defined in: [src/sml/SmlAttribute.ts:8](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlAttribute.ts#L8)

## Methods

### getComment

▸ **getComment**(): *string*

**Returns:** *string*

Inherited from: [SmlNamedNode](smlnamednode.md)

Defined in: [src/sml/SmlNode.ts:28](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L28)

___

### getNumberValues

▸ **getNumberValues**(`offset?`: *number*): *number*[]

#### Parameters:

Name | Type |
:------ | :------ |
`offset?` | *number* |

**Returns:** *number*[]

Defined in: [src/sml/SmlAttribute.ts:30](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlAttribute.ts#L30)

___

### getString

▸ **getString**(`index?`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`index?` | *number* |

**Returns:** *string*

Defined in: [src/sml/SmlAttribute.ts:38](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlAttribute.ts#L38)

___

### getValues

▸ **getValues**(`offset?`: *number*): *string*[]

#### Parameters:

Name | Type |
:------ | :------ |
`offset?` | *number* |

**Returns:** *string*[]

Defined in: [src/sml/SmlAttribute.ts:22](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlAttribute.ts#L22)

___

### getWhitespaces

▸ **getWhitespaces**(): *string*[]

**Returns:** *string*[]

Inherited from: [SmlNamedNode](smlnamednode.md)

Defined in: [src/sml/SmlNode.ts:19](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L19)

___

### hasName

▸ **hasName**(`name`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *boolean*

Inherited from: [SmlNamedNode](smlnamednode.md)

Defined in: [src/sml/SmlNamedNode.ts:13](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNamedNode.ts#L13)

___

### setComment

▸ **setComment**(`comment`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`comment` | *string* |

**Returns:** *void*

Inherited from: [SmlNamedNode](smlnamednode.md)

Defined in: [src/sml/SmlNode.ts:23](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L23)

___

### setString

▸ **setString**(`value`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* |

**Returns:** *void*

Defined in: [src/sml/SmlAttribute.ts:45](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlAttribute.ts#L45)

___

### setValues

▸ **setValues**(...`values`: *any*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...values` | *any*[] |

**Returns:** *void*

Defined in: [src/sml/SmlAttribute.ts:15](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlAttribute.ts#L15)

___

### setWhitespaces

▸ **setWhitespaces**(...`whitespaces`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...whitespaces` | *string*[] |

**Returns:** *void*

Inherited from: [SmlNamedNode](smlnamednode.md)

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

Inherited from: [SmlNamedNode](smlnamednode.md)

Defined in: [src/sml/SmlNode.ts:32](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L32)

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Defined in: [src/sml/SmlAttribute.ts:49](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlAttribute.ts#L49)

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

Overrides: [SmlNamedNode](smlnamednode.md)

Defined in: [src/sml/SmlAttribute.ts:53](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlAttribute.ts#L53)
