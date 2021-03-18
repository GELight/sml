[@gelight/sml](../README.md) / [Exports](../modules.md) / SmlElement

# Class: SmlElement

## Hierarchy

* [*SmlNamedNode*](smlnamednode.md)

  ↳ **SmlElement**

## Table of contents

### Constructors

- [constructor](smlelement.md#constructor)

### Properties

- [endComment](smlelement.md#endcomment)
- [endWhitespaces](smlelement.md#endwhitespaces)
- [name](smlelement.md#name)
- [nodes](smlelement.md#nodes)

### Methods

- [add](smlelement.md#add)
- [addAttribute](smlelement.md#addattribute)
- [addElement](smlelement.md#addelement)
- [addEmptyNode](smlelement.md#addemptynode)
- [getAttribute](smlelement.md#getattribute)
- [getAttributes](smlelement.md#getattributes)
- [getBoolean](smlelement.md#getboolean)
- [getComment](smlelement.md#getcomment)
- [getElement](smlelement.md#getelement)
- [getElements](smlelement.md#getelements)
- [getEndComment](smlelement.md#getendcomment)
- [getEndWhitespaces](smlelement.md#getendwhitespaces)
- [getNumber](smlelement.md#getnumber)
- [getNumberValues](smlelement.md#getnumbervalues)
- [getString](smlelement.md#getstring)
- [getStringValues](smlelement.md#getstringvalues)
- [getWhitespaces](smlelement.md#getwhitespaces)
- [hasAttribute](smlelement.md#hasattribute)
- [hasElement](smlelement.md#haselement)
- [hasName](smlelement.md#hasname)
- [setComment](smlelement.md#setcomment)
- [setEndComment](smlelement.md#setendcomment)
- [setEndWhitespaces](smlelement.md#setendwhitespaces)
- [setEndWhitespacesAndComment](smlelement.md#setendwhitespacesandcomment)
- [setWhitespaces](smlelement.md#setwhitespaces)
- [setWhitespacesAndComment](smlelement.md#setwhitespacesandcomment)
- [toString](smlelement.md#tostring)
- [toWsvLines](smlelement.md#towsvlines)

## Constructors

### constructor

\+ **new SmlElement**(`name`: *string*): [*SmlElement*](smlelement.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*SmlElement*](smlelement.md)

Overrides: [SmlNamedNode](smlnamednode.md)

Defined in: [src/sml/SmlElement.ts:14](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L14)

## Properties

### endComment

• `Private` **endComment**: *string*

Defined in: [src/sml/SmlElement.ts:14](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L14)

___

### endWhitespaces

• `Private` **endWhitespaces**: *string*[]

Defined in: [src/sml/SmlElement.ts:13](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L13)

___

### name

• **name**: *string*

Inherited from: [SmlNamedNode](smlnamednode.md).[name](smlnamednode.md#name)

Defined in: [src/sml/SmlNamedNode.ts:6](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNamedNode.ts#L6)

___

### nodes

• **nodes**: [*SmlNode*](smlnode.md)[]

Defined in: [src/sml/SmlElement.ts:11](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L11)

## Methods

### add

▸ **add**(`node`: [*SmlNode*](smlnode.md)): [*SmlNode*](smlnode.md)

#### Parameters:

Name | Type |
:------ | :------ |
`node` | [*SmlNode*](smlnode.md) |

**Returns:** [*SmlNode*](smlnode.md)

Defined in: [src/sml/SmlElement.ts:43](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L43)

___

### addAttribute

▸ **addAttribute**(`name`: *string*, `values`: *any*[]): [*SmlAttribute*](smlattribute.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`values` | *any*[] |

**Returns:** [*SmlAttribute*](smlattribute.md)

Defined in: [src/sml/SmlElement.ts:48](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L48)

___

### addElement

▸ **addElement**(`name`: *string*): [*SmlElement*](smlelement.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*SmlElement*](smlelement.md)

Defined in: [src/sml/SmlElement.ts:55](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L55)

___

### addEmptyNode

▸ **addEmptyNode**(): [*SmlEmptyNode*](smlemptynode.md)

**Returns:** [*SmlEmptyNode*](smlemptynode.md)

Defined in: [src/sml/SmlElement.ts:61](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L61)

___

### getAttribute

▸ **getAttribute**(`name`: *string*): [*SmlAttribute*](smlattribute.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*SmlAttribute*](smlattribute.md)

Defined in: [src/sml/SmlElement.ts:75](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L75)

___

### getAttributes

▸ **getAttributes**(`name?`: *string*): [*SmlAttribute*](smlattribute.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`name?` | *string* |

**Returns:** [*SmlAttribute*](smlattribute.md)[]

Defined in: [src/sml/SmlElement.ts:88](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L88)

___

### getBoolean

▸ **getBoolean**(`attributeName`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`attributeName` | *string* |

**Returns:** *boolean*

Defined in: [src/sml/SmlElement.ts:139](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L139)

___

### getComment

▸ **getComment**(): *string*

**Returns:** *string*

Inherited from: [SmlNamedNode](smlnamednode.md)

Defined in: [src/sml/SmlNode.ts:28](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L28)

___

### getElement

▸ **getElement**(`name`: *string*): [*SmlElement*](smlelement.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*SmlElement*](smlelement.md)

Defined in: [src/sml/SmlElement.ts:111](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L111)

___

### getElements

▸ **getElements**(`name?`: *string*): [*SmlElement*](smlelement.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`name?` | *string* |

**Returns:** [*SmlElement*](smlelement.md)[]

Defined in: [src/sml/SmlElement.ts:124](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L124)

___

### getEndComment

▸ **getEndComment**(): *string*

**Returns:** *string*

Defined in: [src/sml/SmlElement.ts:34](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L34)

___

### getEndWhitespaces

▸ **getEndWhitespaces**(): *string*[]

**Returns:** *string*[]

Defined in: [src/sml/SmlElement.ts:25](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L25)

___

### getNumber

▸ **getNumber**(`attributeName`: *string*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`attributeName` | *string* |

**Returns:** *number*

Defined in: [src/sml/SmlElement.ts:143](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L143)

___

### getNumberValues

▸ **getNumberValues**(`attributeName`: *string*): *number*[]

#### Parameters:

Name | Type |
:------ | :------ |
`attributeName` | *string* |

**Returns:** *number*[]

Defined in: [src/sml/SmlElement.ts:155](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L155)

___

### getString

▸ **getString**(`attributeName`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`attributeName` | *string* |

**Returns:** *string*

Defined in: [src/sml/SmlElement.ts:147](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L147)

___

### getStringValues

▸ **getStringValues**(`attributeName`: *string*): *string*[]

#### Parameters:

Name | Type |
:------ | :------ |
`attributeName` | *string* |

**Returns:** *string*[]

Defined in: [src/sml/SmlElement.ts:151](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L151)

___

### getWhitespaces

▸ **getWhitespaces**(): *string*[]

**Returns:** *string*[]

Inherited from: [SmlNamedNode](smlnamednode.md)

Defined in: [src/sml/SmlNode.ts:19](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlNode.ts#L19)

___

### hasAttribute

▸ **hasAttribute**(`name`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *boolean*

Defined in: [src/sml/SmlElement.ts:67](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L67)

___

### hasElement

▸ **hasElement**(`name`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *boolean*

Defined in: [src/sml/SmlElement.ts:103](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L103)

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

### setEndComment

▸ **setEndComment**(`comment`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`comment` | *string* |

**Returns:** *void*

Defined in: [src/sml/SmlElement.ts:29](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L29)

___

### setEndWhitespaces

▸ **setEndWhitespaces**(...`whitespaces`: *any*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...whitespaces` | *any*[] |

**Returns:** *void*

Defined in: [src/sml/SmlElement.ts:20](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L20)

___

### setEndWhitespacesAndComment

▸ **setEndWhitespacesAndComment**(`whitespaces`: *string*[], `comment`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`whitespaces` | *string*[] |
`comment` | *string* |

**Returns:** *void*

Defined in: [src/sml/SmlElement.ts:38](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L38)

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

Defined in: [src/sml/SmlElement.ts:159](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L159)

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

Defined in: [src/sml/SmlElement.ts:163](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlElement.ts#L163)
