// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ItemBought extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ItemBought entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ItemBought must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ItemBought", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ItemBought | null {
    return changetype<ItemBought | null>(store.get_in_block("ItemBought", id));
  }

  static load(id: string): ItemBought | null {
    return changetype<ItemBought | null>(store.get("ItemBought", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get gameId(): BigInt {
    let value = this.get("gameId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set gameId(value: BigInt) {
    this.set("gameId", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get numOfItems(): BigInt {
    let value = this.get("numOfItems");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set numOfItems(value: BigInt) {
    this.set("numOfItems", Value.fromBigInt(value));
  }
}

export class ItemCancelled extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ItemCancelled entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ItemCancelled must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ItemCancelled", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ItemCancelled | null {
    return changetype<ItemCancelled | null>(
      store.get_in_block("ItemCancelled", id)
    );
  }

  static load(id: string): ItemCancelled | null {
    return changetype<ItemCancelled | null>(store.get("ItemCancelled", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get gameId(): BigInt {
    let value = this.get("gameId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set gameId(value: BigInt) {
    this.set("gameId", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }
}

export class ItemListed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ItemListed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ItemListed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ItemListed", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ItemListed | null {
    return changetype<ItemListed | null>(store.get_in_block("ItemListed", id));
  }

  static load(id: string): ItemListed | null {
    return changetype<ItemListed | null>(store.get("ItemListed", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get gameId(): BigInt {
    let value = this.get("gameId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set gameId(value: BigInt) {
    this.set("gameId", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get numOfItems(): BigInt {
    let value = this.get("numOfItems");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set numOfItems(value: BigInt) {
    this.set("numOfItems", Value.fromBigInt(value));
  }
}

export class ListingsByGame extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ListingsByGame entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ListingsByGame must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ListingsByGame", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ListingsByGame | null {
    return changetype<ListingsByGame | null>(
      store.get_in_block("ListingsByGame", id)
    );
  }

  static load(id: string): ListingsByGame | null {
    return changetype<ListingsByGame | null>(store.get("ListingsByGame", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get gameId(): BigInt {
    let value = this.get("gameId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set gameId(value: BigInt) {
    this.set("gameId", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get allListings(): Array<string> {
    let value = this.get("allListings");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set allListings(value: Array<string>) {
    this.set("allListings", Value.fromStringArray(value));
  }
}
