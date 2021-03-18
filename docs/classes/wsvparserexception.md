[@gelight/sml](../README.md) / [Exports](../modules.md) / WsvParserException

# Class: WsvParserException

## Hierarchy

* *Error*

  ↳ **WsvParserException**

## Table of contents

### Constructors

- [constructor](wsvparserexception.md#constructor)

### Properties

- [index](wsvparserexception.md#index)
- [lineIndex](wsvparserexception.md#lineindex)
- [linePosition](wsvparserexception.md#lineposition)
- [message](wsvparserexception.md#message)
- [name](wsvparserexception.md#name)
- [prepareStackTrace](wsvparserexception.md#preparestacktrace)
- [stack](wsvparserexception.md#stack)
- [stackTraceLimit](wsvparserexception.md#stacktracelimit)
- [text](wsvparserexception.md#text)

### Methods

- [captureStackTrace](wsvparserexception.md#capturestacktrace)

## Constructors

### constructor

\+ **new WsvParserException**(`iterator`: *default*, `message`: *string*): [*WsvParserException*](wsvparserexception.md)

#### Parameters:

Name | Type |
:------ | :------ |
`iterator` | *default* |
`message` | *string* |

**Returns:** [*WsvParserException*](wsvparserexception.md)

Overrides: void

Defined in: [src/sml/WsvParserException.ts:8](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvParserException.ts#L8)

## Properties

### index

• **index**: *number*

Defined in: [src/sml/WsvParserException.ts:6](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvParserException.ts#L6)

___

### lineIndex

• **lineIndex**: *number*

Defined in: [src/sml/WsvParserException.ts:7](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvParserException.ts#L7)

___

### linePosition

• **linePosition**: *number*

Defined in: [src/sml/WsvParserException.ts:8](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvParserException.ts#L8)

___

### message

• **message**: *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | Error |
`stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:11

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stack

• `Optional` **stack**: *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

___

### text

• **text**: *string*

Defined in: [src/sml/WsvParserException.ts:5](https://github.com/GELight/sml/blob/346ca80/src/sml/WsvParserException.ts#L5)

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
