// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ItemBought extends ethereum.Event {
  get params(): ItemBought__Params {
    return new ItemBought__Params(this);
  }
}

export class ItemBought__Params {
  _event: ItemBought;

  constructor(event: ItemBought) {
    this._event = event;
  }

  get gameId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ItemCancelled extends ethereum.Event {
  get params(): ItemCancelled__Params {
    return new ItemCancelled__Params(this);
  }
}

export class ItemCancelled__Params {
  _event: ItemCancelled;

  constructor(event: ItemCancelled) {
    this._event = event;
  }

  get gameId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ItemListed extends ethereum.Event {
  get params(): ItemListed__Params {
    return new ItemListed__Params(this);
  }
}

export class ItemListed__Params {
  _event: ItemListed;

  constructor(event: ItemListed) {
    this._event = event;
  }

  get gameId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get gameName(): string {
    return this._event.parameters[2].value.toString();
  }

  get gameImage(): string {
    return this._event.parameters[3].value.toString();
  }

  get tags(): Array<string> {
    return this._event.parameters[4].value.toStringArray();
  }

  get genres(): Array<string> {
    return this._event.parameters[5].value.toStringArray();
  }

  get rating(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[7].value.toAddress();
  }
}

export class SellersPercentageChanged extends ethereum.Event {
  get params(): SellersPercentageChanged__Params {
    return new SellersPercentageChanged__Params(this);
  }
}

export class SellersPercentageChanged__Params {
  _event: SellersPercentageChanged;

  constructor(event: SellersPercentageChanged) {
    this._event = event;
  }

  get newPercentage(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class GameKeyMarketplace__getGamesBoughtResultValue0Struct extends ethereum.Tuple {
  get gameId(): BigInt {
    return this[0].toBigInt();
  }

  get key(): string {
    return this[1].toString();
  }
}

export class GameKeyMarketplace extends ethereum.SmartContract {
  static bind(address: Address): GameKeyMarketplace {
    return new GameKeyMarketplace("GameKeyMarketplace", address);
  }

  getBalance(): BigInt {
    let result = super.call("getBalance", "getBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getBalance", "getBalance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGamesBought(): Array<
    GameKeyMarketplace__getGamesBoughtResultValue0Struct
  > {
    let result = super.call(
      "getGamesBought",
      "getGamesBought():((uint256,string)[])",
      []
    );

    return result[0].toTupleArray<
      GameKeyMarketplace__getGamesBoughtResultValue0Struct
    >();
  }

  try_getGamesBought(): ethereum.CallResult<
    Array<GameKeyMarketplace__getGamesBoughtResultValue0Struct>
  > {
    let result = super.tryCall(
      "getGamesBought",
      "getGamesBought():((uint256,string)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        GameKeyMarketplace__getGamesBoughtResultValue0Struct
      >()
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyGameKeyCall extends ethereum.Call {
  get inputs(): BuyGameKeyCall__Inputs {
    return new BuyGameKeyCall__Inputs(this);
  }

  get outputs(): BuyGameKeyCall__Outputs {
    return new BuyGameKeyCall__Outputs(this);
  }
}

export class BuyGameKeyCall__Inputs {
  _call: BuyGameKeyCall;

  constructor(call: BuyGameKeyCall) {
    this._call = call;
  }

  get listingId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get gameId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get seller(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class BuyGameKeyCall__Outputs {
  _call: BuyGameKeyCall;

  constructor(call: BuyGameKeyCall) {
    this._call = call;
  }
}

export class CancelListingCall extends ethereum.Call {
  get inputs(): CancelListingCall__Inputs {
    return new CancelListingCall__Inputs(this);
  }

  get outputs(): CancelListingCall__Outputs {
    return new CancelListingCall__Outputs(this);
  }
}

export class CancelListingCall__Inputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }

  get listingId(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class CancelListingCall__Outputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }
}

export class ChangeSellersPercentageCall extends ethereum.Call {
  get inputs(): ChangeSellersPercentageCall__Inputs {
    return new ChangeSellersPercentageCall__Inputs(this);
  }

  get outputs(): ChangeSellersPercentageCall__Outputs {
    return new ChangeSellersPercentageCall__Outputs(this);
  }
}

export class ChangeSellersPercentageCall__Inputs {
  _call: ChangeSellersPercentageCall;

  constructor(call: ChangeSellersPercentageCall) {
    this._call = call;
  }

  get newPercentage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeSellersPercentageCall__Outputs {
  _call: ChangeSellersPercentageCall;

  constructor(call: ChangeSellersPercentageCall) {
    this._call = call;
  }
}

export class ListGameKeyCall extends ethereum.Call {
  get inputs(): ListGameKeyCall__Inputs {
    return new ListGameKeyCall__Inputs(this);
  }

  get outputs(): ListGameKeyCall__Outputs {
    return new ListGameKeyCall__Outputs(this);
  }
}

export class ListGameKeyCall__Inputs {
  _call: ListGameKeyCall;

  constructor(call: ListGameKeyCall) {
    this._call = call;
  }

  get game(): ListGameKeyCallGameStruct {
    return changetype<ListGameKeyCallGameStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get listingId(): string {
    return this._call.inputValues[1].value.toString();
  }

  get key(): string {
    return this._call.inputValues[2].value.toString();
  }

  get price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ListGameKeyCall__Outputs {
  _call: ListGameKeyCall;

  constructor(call: ListGameKeyCall) {
    this._call = call;
  }
}

export class ListGameKeyCallGameStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get name(): string {
    return this[1].toString();
  }

  get image(): string {
    return this[2].toString();
  }

  get rating(): BigInt {
    return this[3].toBigInt();
  }

  get tags(): Array<string> {
    return this[4].toStringArray();
  }

  get genres(): Array<string> {
    return this[5].toStringArray();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
