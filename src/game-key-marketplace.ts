import {
  ItemBought as ItemBoughtEvent,
  ItemCancelled as ItemCancelledEvent,
  ItemListed as ItemListedEvent
} from "../generated/GameKeyMarketplace/GameKeyMarketplace"
import {
  ItemBought,
  ItemListed,
  ListingsByGame,
  ItemsBoughtByGame,
  AllFilter as Filters
} from "../generated/schema"
import { BigInt, Address } from "@graphprotocol/graph-ts"

export function handleItemBought(event: ItemBoughtEvent): void {
  let id = getIdFromEventParams(
    event.params.gameId,
    event.params.price,
    event.params.buyer
  )
  let itemBought = ItemBought.load(id)
  let itemListed = ItemListed.load(id)

  if (!itemBought) {
    itemBought = new ItemBought(id)
    itemBought.gameId = event.params.gameId
    itemBought.price = event.params.price
    itemBought.buyer = event.params.buyer
    itemBought.date = event.block.timestamp

    itemBought.numOfItems = BigInt.fromI32(1)
  } else {
    itemBought.numOfItems = itemBought.numOfItems.plus(BigInt.fromI32(1))
  }
  itemBought.save()

  if (itemListed) {
    itemListed.numOfItems = itemListed.numOfItems.minus(BigInt.fromI32(1))
    itemListed.save()
  }
  let listingsByGame = ListingsByGame.load(event.params.gameId.toString())
  if (!listingsByGame) return

  let itemsBoughtByGame = ItemsBoughtByGame.load(event.params.gameId.toString())
  if (!itemsBoughtByGame) {
    itemsBoughtByGame = new ItemsBoughtByGame(event.params.gameId.toString())
    itemsBoughtByGame.gameId = event.params.gameId
    itemsBoughtByGame.gameName = listingsByGame.gameName
    itemsBoughtByGame.gameImage = listingsByGame.gameImage
    itemsBoughtByGame.allItemsBought = [id]
    itemsBoughtByGame.genres = listingsByGame.genres
    itemsBoughtByGame.tags = listingsByGame.tags
  } else {
    itemsBoughtByGame.allItemsBought.push(id)
  }
  itemsBoughtByGame.hasListings = listingsByGame.numOfListings.gt(
    BigInt.fromI32(1)
  )
  itemsBoughtByGame.save()

  let indexOfListed = listingsByGame.allListings.indexOf(id)
  if (indexOfListed == -1) return

  listingsByGame.allListings = listingsByGame.allListings
    .slice(0, indexOfListed)
    .concat(listingsByGame.allListings.slice(indexOfListed + 1))
  listingsByGame.numOfListings = listingsByGame.numOfListings.minus(
    BigInt.fromI32(1)
  )
  listingsByGame.save()
}

export function handleItemCancelled(event: ItemCancelledEvent): void {
  let id = event.params.gameId.toString()
  let itemCancelled = ItemListed.load(id)
  if (itemCancelled) {
    itemCancelled.numOfItems = itemCancelled.numOfItems.minus(BigInt.fromI32(1))
    itemCancelled.save()
  }

  let listingsByGame = ListingsByGame.load(event.params.gameId.toString())
  if (listingsByGame) {
    let index = listingsByGame.allListings.indexOf(id)
    listingsByGame.allListings = listingsByGame.allListings
      .slice(0, index)
      .concat(listingsByGame.allListings.slice(index + 1))
    listingsByGame.numOfListings = listingsByGame.numOfListings.minus(
      BigInt.fromI32(1)
    )
    listingsByGame.save()
  }
}

export function handleItemListed(event: ItemListedEvent): void {
  let id = getIdFromEventParams(
    event.params.gameId,
    event.params.price,
    event.params.seller
  )
  let item = ItemListed.load(id)
  if (!item) {
    item = new ItemListed(id)
    item.gameId = event.params.gameId
    item.price = event.params.price
    item.seller = event.params.seller
    item.numOfItems = BigInt.fromI32(1)
  } else {
    item.numOfItems = item.numOfItems.plus(BigInt.fromI32(1))
  }
  item.save()

  let listingsByGame = ListingsByGame.load(event.params.gameId.toString())
  if (!listingsByGame) {
    listingsByGame = new ListingsByGame(event.params.gameId.toString())
    listingsByGame.gameId = event.params.gameId
    listingsByGame.allListings = [id]
    listingsByGame.numOfListings = BigInt.fromI32(1)
    listingsByGame.gameName = event.params.gameName
    listingsByGame.gameImage = event.params.gameImage
    listingsByGame.tags = event.params.tags
    listingsByGame.genres = event.params.genres
  } else {
    listingsByGame.allListings = listingsByGame.allListings.concat([id])
    listingsByGame.numOfListings = listingsByGame.numOfListings.plus(
      BigInt.fromI32(1)
    )
  }
  listingsByGame.latestDate = event.block.timestamp
  listingsByGame.save()

  let itemsBoughtByGame = ItemsBoughtByGame.load(event.params.gameId.toString())
  if (itemsBoughtByGame) {
    itemsBoughtByGame.hasListings = true
    itemsBoughtByGame.save()
  }

  let filters = Filters.load("filters")
  if (!filters) {
    filters = new Filters("filters")
    filters.genres = event.params.genres || []
    filters.tags = event.params.tags || []
  } else {
    filters.genres = addWithoutDuplicates(filters.genres, event.params.genres)
    filters.tags = addWithoutDuplicates(filters.tags, event.params.tags)
  }
  filters.save()
}

function getIdFromEventParams(
  gameId: BigInt,
  price: BigInt,
  seller: Address
): string {
  return gameId.toString() + "-" + price.toString() + "-" + seller.toHexString()
}

function addWithoutDuplicates(
  existingArray: string[],
  newElements: string[]
): string[] {
  for (let i = 0; i < newElements.length; i++) {
    let isDuplicate = false
    for (let j = 0; j < existingArray.length; j++) {
      if (existingArray[j] === newElements[i]) {
        isDuplicate = true
        break
      }
    }
    if (!isDuplicate) {
      existingArray.push(newElements[i])
    }
  }
  return existingArray
}
