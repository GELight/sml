[@gelight/sml](../README.md) / [Exports](../modules.md) / ReliableTxtException

# Class: ReliableTxtException

## Hierarchy

* *Error*

  ↳ **ReliableTxtException**

## Table of contents

### Constructors

- [constructor](reliabletxtexception.md#constructor)

### Properties

- [message](reliabletxtexception.md#message)
- [name](reliabletxtexception.md#name)
- [prepareStackTrace](reliabletxtexception.md#preparestacktrace)
- [stack](reliabletxtexception.md#stack)
- [stackTraceLimit](reliabletxtexception.md#stacktracelimit)

### Methods

- [captureStackTrace](reliabletxtexception.md#capturestacktrace)

## Constructors

### constructor

\+ **new ReliableTxtException**(`message`: *string*): [*ReliableTxtException*](reliabletxtexception.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** [*ReliableTxtException*](reliabletxtexception.md)

Overrides: void

Defined in: [src/sml/ReliableTxtException.ts:1](https://github.com/GELight/sml/blob/346ca80/src/sml/ReliableTxtException.ts#L1)

## Properties

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
