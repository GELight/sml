[@gelight/sml](../README.md) / [Exports](../modules.md) / StringUtil

# Class: StringUtil

## Table of contents

### Constructors

- [constructor](stringutil.md#constructor)

### Properties

- [doubleQuote](stringutil.md#doublequote)
- [hash](stringutil.md#hash)
- [lineBreak](stringutil.md#linebreak)
- [minus](stringutil.md#minus)
- [slash](stringutil.md#slash)

### Methods

- [codePointsToString](stringutil.md#codepointstostring)
- [equalsIgnoreCase](stringutil.md#equalsignorecase)
- [getSubstr](stringutil.md#getsubstr)
- [isWhitespaceOrEmpty](stringutil.md#iswhitespaceorempty)
- [stringToCodePoints](stringutil.md#stringtocodepoints)

## Constructors

### constructor

\+ **new StringUtil**(): [*StringUtil*](stringutil.md)

**Returns:** [*StringUtil*](stringutil.md)

## Properties

### doubleQuote

▪ `Static` **doubleQuote**: *number*

Defined in: [src/sml/StringUtil.ts:5](https://github.com/GELight/sml/blob/346ca80/src/sml/StringUtil.ts#L5)

___

### hash

▪ `Static` **hash**: *number*

Defined in: [src/sml/StringUtil.ts:8](https://github.com/GELight/sml/blob/346ca80/src/sml/StringUtil.ts#L8)

___

### lineBreak

▪ `Static` **lineBreak**: *number*

Defined in: [src/sml/StringUtil.ts:6](https://github.com/GELight/sml/blob/346ca80/src/sml/StringUtil.ts#L6)

___

### minus

▪ `Static` **minus**: *number*

Defined in: [src/sml/StringUtil.ts:9](https://github.com/GELight/sml/blob/346ca80/src/sml/StringUtil.ts#L9)

___

### slash

▪ `Static` **slash**: *number*

Defined in: [src/sml/StringUtil.ts:7](https://github.com/GELight/sml/blob/346ca80/src/sml/StringUtil.ts#L7)

## Methods

### codePointsToString

▸ `Static`**codePointsToString**(`codePoints`: *number*[]): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`codePoints` | *number*[] |

**Returns:** *string*

Defined in: [src/sml/StringUtil.ts:26](https://github.com/GELight/sml/blob/346ca80/src/sml/StringUtil.ts#L26)

___

### equalsIgnoreCase

▸ `Static`**equalsIgnoreCase**(`str1`: *string*, `str2`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`str1` | *string* |
`str2` | *string* |

**Returns:** *boolean*

Defined in: [src/sml/StringUtil.ts:43](https://github.com/GELight/sml/blob/346ca80/src/sml/StringUtil.ts#L43)

___

### getSubstr

▸ `Static`**getSubstr**(`chars`: *number*[], `startIndex`: *number*, `len`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`chars` | *number*[] |
`startIndex` | *number* |
`len` | *number* |

**Returns:** *string*

Defined in: [src/sml/StringUtil.ts:11](https://github.com/GELight/sml/blob/346ca80/src/sml/StringUtil.ts#L11)

___

### isWhitespaceOrEmpty

▸ `Static`**isWhitespaceOrEmpty**(`str`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *boolean*

Defined in: [src/sml/StringUtil.ts:33](https://github.com/GELight/sml/blob/346ca80/src/sml/StringUtil.ts#L33)

___

### stringToCodePoints

▸ `Static`**stringToCodePoints**(`text`: *string*): *number*[]

#### Parameters:

Name | Type |
:------ | :------ |
`text` | *string* |

**Returns:** *number*[]

Defined in: [src/sml/StringUtil.ts:18](https://github.com/GELight/sml/blob/346ca80/src/sml/StringUtil.ts#L18)
