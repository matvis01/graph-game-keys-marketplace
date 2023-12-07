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

  get date(): BigInt {
    let value = this.get("date");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set date(value: BigInt) {
    this.set("date", Value.fromBigInt(value));
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

  get gameName(): string {
    let value = this.get("gameName");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set gameName(value: string) {
    this.set("gameName", Value.fromString(value));
  }

  get gameImage(): string {
    let value = this.get("gameImage");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set gameImage(value: string) {
    this.set("gameImage", Value.fromString(value));
  }

  get numOfListings(): BigInt {
    let value = this.get("numOfListings");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set numOfListings(value: BigInt) {
    this.set("numOfListings", Value.fromBigInt(value));
  }

  get numOfSoldItems(): BigInt {
    let value = this.get("numOfSoldItems");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set numOfSoldItems(value: BigInt) {
    this.set("numOfSoldItems", Value.fromBigInt(value));
  }

  get tags(): Array<string> | null {
    let value = this.get("tags");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tags(value: Array<string> | null) {
    if (!value) {
      this.unset("tags");
    } else {
      this.set("tags", Value.fromStringArray(<Array<string>>value));
    }
  }

  get genres(): Array<string> | null {
    let value = this.get("genres");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set genres(value: Array<string> | null) {
    if (!value) {
      this.unset("genres");
    } else {
      this.set("genres", Value.fromStringArray(<Array<string>>value));
    }
  }

  get latestDate(): BigInt {
    let value = this.get("latestDate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set latestDate(value: BigInt) {
    this.set("latestDate", Value.fromBigInt(value));
  }

  get rating(): BigInt {
    let value = this.get("rating");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set rating(value: BigInt) {
    this.set("rating", Value.fromBigInt(value));
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

export class ItemsBoughtByGame extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ItemsBoughtByGame entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ItemsBoughtByGame must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ItemsBoughtByGame", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ItemsBoughtByGame | null {
    return changetype<ItemsBoughtByGame | null>(
      store.get_in_block("ItemsBoughtByGame", id)
    );
  }

  static load(id: string): ItemsBoughtByGame | null {
    return changetype<ItemsBoughtByGame | null>(
      store.get("ItemsBoughtByGame", id)
    );
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

  get gameName(): string {
    let value = this.get("gameName");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set gameName(value: string) {
    this.set("gameName", Value.fromString(value));
  }

  get gameImage(): string {
    let value = this.get("gameImage");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set gameImage(value: string) {
    this.set("gameImage", Value.fromString(value));
  }

  get hasListings(): boolean {
    let value = this.get("hasListings");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set hasListings(value: boolean) {
    this.set("hasListings", Value.fromBoolean(value));
  }

  get tags(): Array<string> | null {
    let value = this.get("tags");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tags(value: Array<string> | null) {
    if (!value) {
      this.unset("tags");
    } else {
      this.set("tags", Value.fromStringArray(<Array<string>>value));
    }
  }

  get genres(): Array<string> | null {
    let value = this.get("genres");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set genres(value: Array<string> | null) {
    if (!value) {
      this.unset("genres");
    } else {
      this.set("genres", Value.fromStringArray(<Array<string>>value));
    }
  }

  get allItemsBought(): Array<string> {
    let value = this.get("allItemsBought");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set allItemsBought(value: Array<string>) {
    this.set("allItemsBought", Value.fromStringArray(value));
  }
}

export class Tag extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Tag entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Tag must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Tag", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Tag | null {
    return changetype<Tag | null>(store.get_in_block("Tag", id));
  }

  static load(id: string): Tag | null {
    return changetype<Tag | null>(store.get("Tag", id));
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

  get numberOfGames(): BigInt {
    let value = this.get("numberOfGames");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set numberOfGames(value: BigInt) {
    this.set("numberOfGames", Value.fromBigInt(value));
  }
}

export class Genre extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Genre entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Genre must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Genre", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Genre | null {
    return changetype<Genre | null>(store.get_in_block("Genre", id));
  }

  static load(id: string): Genre | null {
    return changetype<Genre | null>(store.get("Genre", id));
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

  get numberOfGames(): BigInt {
    let value = this.get("numberOfGames");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set numberOfGames(value: BigInt) {
    this.set("numberOfGames", Value.fromBigInt(value));
  }
}
