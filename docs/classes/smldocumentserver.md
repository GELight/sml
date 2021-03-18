[@gelight/sml](../README.md) / [Exports](../modules.md) / SmlDocumentServer

# Class: SmlDocumentServer

## Hierarchy

* [*SmlDocument*](smldocument.md)

  ↳ **SmlDocumentServer**

## Table of contents

### Constructors

- [constructor](smldocumentserver.md#constructor)

### Properties

- [emptyNodesAfter](smldocumentserver.md#emptynodesafter)
- [emptyNodesBefore](smldocumentserver.md#emptynodesbefore)
- [encoding](smldocumentserver.md#encoding)

### Methods

- [getDefaultIndentation](smldocumentserver.md#getdefaultindentation)
- [getEncoding](smldocumentserver.md#getencoding)
- [getEndKeyword](smldocumentserver.md#getendkeyword)
- [getRoot](smldocumentserver.md#getroot)
- [save](smldocumentserver.md#save)
- [setDefaultIndentation](smldocumentserver.md#setdefaultindentation)
- [setEncoding](smldocumentserver.md#setencoding)
- [setEndKeyword](smldocumentserver.md#setendkeyword)
- [setRoot](smldocumentserver.md#setroot)
- [toString](smldocumentserver.md#tostring)
- [load](smldocumentserver.md#load)
- [parse](smldocumentserver.md#parse)

## Constructors

### constructor

\+ **new SmlDocumentServer**(`rootElement?`: [*SmlElement*](smlelement.md)): [*SmlDocumentServer*](smldocumentserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`rootElement?` | [*SmlElement*](smlelement.md) |

**Returns:** [*SmlDocumentServer*](smldocumentserver.md)

Overrides: [SmlDocument](smldocument.md)

Defined in: [src/sml/SmlDocumentServer.ts:21](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocumentServer.ts#L21)

## Properties

### emptyNodesAfter

• **emptyNodesAfter**: [*SmlEmptyNode*](smlemptynode.md)[]

Inherited from: [SmlDocument](smldocument.md).[emptyNodesAfter](smldocument.md#emptynodesafter)

Defined in: [src/sml/SmlDocument.ts:16](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L16)

___

### emptyNodesBefore

• **emptyNodesBefore**: [*SmlEmptyNode*](smlemptynode.md)[]

Inherited from: [SmlDocument](smldocument.md).[emptyNodesBefore](smldocument.md#emptynodesbefore)

Defined in: [src/sml/SmlDocument.ts:15](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L15)

___

### encoding

• `Private` **encoding**: [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

Defined in: [src/sml/SmlDocumentServer.ts:21](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocumentServer.ts#L21)

## Methods

### getDefaultIndentation

▸ **getDefaultIndentation**(): *string*

**Returns:** *string*

Inherited from: [SmlDocument](smldocument.md)

Defined in: [src/sml/SmlDocument.ts:43](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L43)

___

### getEncoding

▸ **getEncoding**(): [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

**Returns:** [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

Defined in: [src/sml/SmlDocumentServer.ts:33](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocumentServer.ts#L33)

___

### getEndKeyword

▸ **getEndKeyword**(): *string*

**Returns:** *string*

Inherited from: [SmlDocument](smldocument.md)

Defined in: [src/sml/SmlDocument.ts:32](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L32)

___

### getRoot

▸ **getRoot**(): [*SmlElement*](smlelement.md)

**Returns:** [*SmlElement*](smlelement.md)

Inherited from: [SmlDocument](smldocument.md)

Defined in: [src/sml/SmlDocument.ts:47](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L47)

___

### save

▸ **save**(`filePath`: *string*): [*SmlDocumentServer*](smldocumentserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** [*SmlDocumentServer*](smldocumentserver.md)

Defined in: [src/sml/SmlDocumentServer.ts:37](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocumentServer.ts#L37)

___

### setDefaultIndentation

▸ **setDefaultIndentation**(`defaultIndentation`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`defaultIndentation` | *string* |

**Returns:** *void*

Inherited from: [SmlDocument](smldocument.md)

Defined in: [src/sml/SmlDocument.ts:36](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L36)

___

### setEncoding

▸ **setEncoding**(`encoding`: [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)): [*SmlDocumentServer*](smldocumentserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`encoding` | [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md) |

**Returns:** [*SmlDocumentServer*](smldocumentserver.md)

Defined in: [src/sml/SmlDocumentServer.ts:28](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocumentServer.ts#L28)

___

### setEndKeyword

▸ **setEndKeyword**(`endKeyword`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`endKeyword` | *string* |

**Returns:** *void*

Inherited from: [SmlDocument](smldocument.md)

Defined in: [src/sml/SmlDocument.ts:28](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L28)

___

### setRoot

▸ **setRoot**(`root`: [*SmlElement*](smlelement.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`root` | [*SmlElement*](smlelement.md) |

**Returns:** *void*

Inherited from: [SmlDocument](smldocument.md)

Defined in: [src/sml/SmlDocument.ts:51](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L51)

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Inherited from: [SmlDocument](smldocument.md)

Defined in: [src/sml/SmlDocument.ts:55](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocument.ts#L55)

___

### load

▸ `Static`**load**(`filePath`: *string*): [*SmlDocumentServer*](smldocumentserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** [*SmlDocumentServer*](smldocumentserver.md)

Defined in: [src/sml/SmlDocumentServer.ts:14](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocumentServer.ts#L14)

___

### parse

▸ `Static`**parse**(`content`: *string*): [*SmlDocument*](smldocument.md)

#### Parameters:

Name | Type |
:------ | :------ |
`content` | *string* |

**Returns:** [*SmlDocument*](smldocument.md)

Overrides: [SmlDocument](smldocument.md)

Defined in: [src/sml/SmlDocumentServer.ts:9](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlDocumentServer.ts#L9)
