import {
  ItemBought as ItemBoughtEvent,
  ItemCancelled as ItemCancelledEvent,
  ItemListed as ItemListedEvent,
} from "../generated/GameKeyMarketplace/GameKeyMarketplace";
import { ItemBought, ItemCancelled, ItemListed } from "../generated/schema";
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts";

export function handleItemBought(event: ItemBoughtEvent): void {
  let id = getIdFromEventParams(
    event.params.gameId,
    event.params.price,
    event.params.buyer
  );
  let itemBought = ItemBought.load(id);
  let itemListed = ItemListed.load(id);

  if (!itemBought) {
    itemBought = new ItemBought(id);
    itemBought.gameId = event.params.gameId;
    itemBought.price = event.params.price;
    itemBought.buyer = event.params.buyer;
    itemBought.numOfItems = BigInt.fromI32(1);
  } else {
    itemBought.numOfItems = itemBought.numOfItems.plus(BigInt.fromI32(1));
  }
  itemBought.save();

  if (itemListed) {
    itemListed.numOfItems = itemListed.numOfItems.minus(BigInt.fromI32(1));
    itemListed.save();
  }
}

export function handleItemCancelled(event: ItemCancelledEvent): void {
  let id = getIdFromEventParams(
    event.params.gameId,
    event.params.price,
    event.params.seller
  );
  let itemCancelled = ItemListed.load(id);
  if (itemCancelled) {
    itemCancelled.numOfItems = itemCancelled.numOfItems.minus(
      BigInt.fromI32(1)
    );
    itemCancelled.save();
  }
}

export function handleItemListed(event: ItemListedEvent): void {
  let id = getIdFromEventParams(
    event.params.gameId,
    event.params.price,
    event.params.seller
  );
  let item = ItemListed.load(id);
  if (!item) {
    item = new ItemListed(id);
    item.gameId = event.params.gameId;
    item.price = event.params.price;
    item.seller = event.params.seller;
    item.numOfItems = BigInt.fromI32(1);
  } else {
    item.numOfItems = item.numOfItems.plus(BigInt.fromI32(1));
  }
  item.save();
}

function getIdFromEventParams(
  gameId: BigInt,
  price: BigInt,
  seller: Address
): string {
  return (
    gameId.toString() + "-" + price.toString() + "-" + seller.toHexString()
  );
}
