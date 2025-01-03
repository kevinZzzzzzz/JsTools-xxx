[js-tools-xxx - v1.0.2](../README.md) / Bus

# Class: Bus

## Implements

- `BusClass`

## Table of contents

### Constructors

- [constructor](Bus.md#constructor)

### Properties

- [list](Bus.md#list)

### Methods

- [emit](Bus.md#emit)
- [on](Bus.md#on)

## Constructors

### constructor

• **new Bus**()

## Properties

### list

• **list**: `List`

## Methods

### emit

▸ **emit**(`name`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Implementation of

BusClass.emit

___

### on

▸ **on**(`name`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | () => `void` |

#### Returns

`void`

#### Implementation of

BusClass.on
