[@gelight/sml](../README.md) / [Exports](../modules.md) / ReliableTxtFile

# Class: ReliableTxtFile

## Table of contents

### Constructors

- [constructor](reliabletxtfile.md#constructor)

### Properties

- [encoding](reliabletxtfile.md#encoding)
- [fileContent](reliabletxtfile.md#filecontent)

### Methods

- [getContent](reliabletxtfile.md#getcontent)
- [getEncoding](reliabletxtfile.md#getencoding)
- [load](reliabletxtfile.md#load)
- [save](reliabletxtfile.md#save)
- [setEncoding](reliabletxtfile.md#setencoding)
- [getEncodingFromBuffer](reliabletxtfile.md#getencodingfrombuffer)

## Constructors

### constructor

\+ **new ReliableTxtFile**(`encoding?`: [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)): [*ReliableTxtFile*](reliabletxtfile.md)

#### Parameters:

Name | Type |
:------ | :------ |
`encoding?` | [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md) |

**Returns:** [*ReliableTxtFile*](reliabletxtfile.md)

Defined in: [src/sml/ReliableTxtFile.ts:27](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtFile.ts#L27)

## Properties

### encoding

• `Private` **encoding**: [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

Defined in: [src/sml/ReliableTxtFile.ts:27](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtFile.ts#L27)

___

### fileContent

• `Private` **fileContent**: *string*= ""

Defined in: [src/sml/ReliableTxtFile.ts:25](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtFile.ts#L25)

## Methods

### getContent

▸ **getContent**(): *string*

**Returns:** *string*

Defined in: [src/sml/ReliableTxtFile.ts:67](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtFile.ts#L67)

___

### getEncoding

▸ **getEncoding**(): [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

**Returns:** [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

Defined in: [src/sml/ReliableTxtFile.ts:63](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtFile.ts#L63)

___

### load

▸ **load**(`filePath`: *string*): [*ReliableTxtFile*](reliabletxtfile.md)

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** [*ReliableTxtFile*](reliabletxtfile.md)

Defined in: [src/sml/ReliableTxtFile.ts:44](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtFile.ts#L44)

___

### save

▸ **save**(`filePath`: *string*, `content`: *string*, `encoding?`: [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)): [*ReliableTxtFile*](reliabletxtfile.md)

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |
`content` | *string* |
`encoding?` | [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md) |

**Returns:** [*ReliableTxtFile*](reliabletxtfile.md)

Defined in: [src/sml/ReliableTxtFile.ts:34](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtFile.ts#L34)

___

### setEncoding

▸ `Private`**setEncoding**(`encoding`: [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)): [*ReliableTxtFile*](reliabletxtfile.md)

#### Parameters:

Name | Type |
:------ | :------ |
`encoding` | [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md) |

**Returns:** [*ReliableTxtFile*](reliabletxtfile.md)

Defined in: [src/sml/ReliableTxtFile.ts:71](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtFile.ts#L71)

___

### getEncodingFromBuffer

▸ `Private` `Static`**getEncodingFromBuffer**(`buffer`: *Buffer*): [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

#### Parameters:

Name | Type |
:------ | :------ |
`buffer` | *Buffer* |

**Returns:** [*ReliableTxtEncoding*](../enums/reliabletxtencoding.md)

Defined in: [src/sml/ReliableTxtFile.ts:7](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtFile.ts#L7)
