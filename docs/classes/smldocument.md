[@gelight/sml](../README.md) / [Exports](../modules.md) / SmlDocument

# Class: SmlDocument

## Hierarchy

* **SmlDocument**

  ↳ [*SmlDocumentServer*](smldocumentserver.md)

## Table of contents

### Constructors

- [constructor](smldocument.md#constructor)

### Properties

- [defaultIndentation](smldocument.md#defaultindentation)
- [emptyNodesAfter](smldocument.md#emptynodesafter)
- [emptyNodesBefore](smldocument.md#emptynodesbefore)
- [endKeyword](smldocument.md#endkeyword)
- [root](smldocument.md#root)

### Methods

- [getDefaultIndentation](smldocument.md#getdefaultindentation)
- [getEndKeyword](smldocument.md#getendkeyword)
- [getRoot](smldocument.md#getroot)
- [setDefaultIndentation](smldocument.md#setdefaultindentation)
- [setEndKeyword](smldocument.md#setendkeyword)
- [setRoot](smldocument.md#setroot)
- [toString](smldocument.md#tostring)
- [parse](smldocument.md#parse)

## Constructors

### constructor

\+ **new SmlDocument**(`rootElement?`: [*SmlElement*](smlelement.md)): [*SmlDocument*](smldocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`rootElement?` | [*SmlElement*](smlelement.md) |

**Returns:** [*SmlDocument*](smldocument.md)

Defined in: [src/sml/SmlDocument.ts:20](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L20)

## Properties

### defaultIndentation

• `Private` **defaultIndentation**: *string*= null

Defined in: [src/sml/SmlDocument.ts:20](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L20)

___

### emptyNodesAfter

• **emptyNodesAfter**: [*SmlEmptyNode*](smlemptynode.md)[]

Defined in: [src/sml/SmlDocument.ts:16](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L16)

___

### emptyNodesBefore

• **emptyNodesBefore**: [*SmlEmptyNode*](smlemptynode.md)[]

Defined in: [src/sml/SmlDocument.ts:15](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L15)

___

### endKeyword

• `Private` **endKeyword**: *string*= "End"

Defined in: [src/sml/SmlDocument.ts:19](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L19)

___

### root

• `Private` **root**: [*SmlElement*](smlelement.md)

Defined in: [src/sml/SmlDocument.ts:18](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L18)

## Methods

### getDefaultIndentation

▸ **getDefaultIndentation**(): *string*

**Returns:** *string*

Defined in: [src/sml/SmlDocument.ts:43](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L43)

___

### getEndKeyword

▸ **getEndKeyword**(): *string*

**Returns:** *string*

Defined in: [src/sml/SmlDocument.ts:32](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L32)

___

### getRoot

▸ **getRoot**(): [*SmlElement*](smlelement.md)

**Returns:** [*SmlElement*](smlelement.md)

Defined in: [src/sml/SmlDocument.ts:47](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L47)

___

### setDefaultIndentation

▸ **setDefaultIndentation**(`defaultIndentation`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`defaultIndentation` | *string* |

**Returns:** *void*

Defined in: [src/sml/SmlDocument.ts:36](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L36)

___

### setEndKeyword

▸ **setEndKeyword**(`endKeyword`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`endKeyword` | *string* |

**Returns:** *void*

Defined in: [src/sml/SmlDocument.ts:28](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L28)

___

### setRoot

▸ **setRoot**(`root`: [*SmlElement*](smlelement.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`root` | [*SmlElement*](smlelement.md) |

**Returns:** *void*

Defined in: [src/sml/SmlDocument.ts:51](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L51)

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Defined in: [src/sml/SmlDocument.ts:55](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L55)

___

### parse

▸ `Static`**parse**(`content`: *string*): [*SmlDocument*](smldocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`content` | *string* |

**Returns:** [*SmlDocument*](smldocument.md)

Defined in: [src/sml/SmlDocument.ts:10](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L10)
