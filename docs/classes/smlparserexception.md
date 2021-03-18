[@gelight/sml](../README.md) / [Exports](../modules.md) / SmlParserException

# Class: SmlParserException

## Hierarchy

* *Error*

  ↳ **SmlParserException**

## Table of contents

### Constructors

- [constructor](smlparserexception.md#constructor)

### Properties

- [lineIndex](smlparserexception.md#lineindex)
- [linePosition](smlparserexception.md#lineposition)
- [message](smlparserexception.md#message)
- [name](smlparserexception.md#name)
- [prepareStackTrace](smlparserexception.md#preparestacktrace)
- [stack](smlparserexception.md#stack)
- [stackTraceLimit](smlparserexception.md#stacktracelimit)

### Methods

- [captureStackTrace](smlparserexception.md#capturestacktrace)

## Constructors

### constructor

\+ **new SmlParserException**(`message`: *string*, ...`params`: *string*[]): [*SmlParserException*](smlparserexception.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`...params` | *string*[] |

**Returns:** [*SmlParserException*](smlparserexception.md)

Overrides: void

Defined in: [src/sml/SmlParserException.ts:4](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlParserException.ts#L4)

## Properties

### lineIndex

• **lineIndex**: *number*

Defined in: [src/sml/SmlParserException.ts:3](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlParserException.ts#L3)

___

### linePosition

• **linePosition**: *number*

Defined in: [src/sml/SmlParserException.ts:4](https://github.com/GELight/sml/blob/346ca80/src/sml/SmlParserException.ts#L4)

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
