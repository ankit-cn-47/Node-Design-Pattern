class CatalogGroup {
    constructor(name, composite = []) {
        this.name = name;
        this.composite = composite;
    }

    get total() {
        return this.composite.reduce((total, nextItem) => total + nextItem.total, 0);
    }

    print() {
        return this.composite.forEach(item => item.print());
    }
}

module.exports = CatalogGroup;