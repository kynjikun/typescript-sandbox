interface ItemConstructor {
    new(id: string) : IItem
}

interface IItem {
    id: string
}

class Item implements IItem {
    constructor(public id: string) {}
}

interface ItemIdToItemMap {
    [id: string]: IItem
}
class ItemsCache {
    private itemsCache: { [key: string]: IItem }

    constructor(
        private itemConstructor: ItemConstructor,
    ) {
        this.itemsCache = {}
    }

    public createItem(id: string): IItem {
        if (!!this.itemsCache[id]) {
            return this.itemsCache[id]
        } 

        const item: IItem = new this.itemConstructor(id)
        this.itemsCache[id] = item
        return item
    }

    public get cachedItems(): Object {
        return this.itemsCache
    }
}

const cache = new ItemsCache(Item);
const item1 = cache.createItem("sham")
const item2 = cache.createItem("poo")
const item3 = cache.createItem("sham")

console.log(item1)
console.log(item2)
console.log(item3)
console.log(cache.cachedItems)

console.log("item1 and item2:", item1 === item2)
console.log("item1 and item3:", item1 === item3)




// no information of the class but still complies its static type
const item4: Item = {
    id: `new id`
}

const item5 = <Item> {
    id: `hello id`
}

console.log('item 4:', item4)
console.log('item 5:', item5)

// 
// 

console.log('=======')
console.log('=======')
console.log('=======')

class Control {
    private state: any
}

interface SelectableControl extends Control {
    select(): void
}

class Checkbox extends Control {
    select(): void {}
}

