import clone from "@/lib/clone";

const localStorageKeyName = 'recordList'
const recordListModel = {
    data: [],
    create(record) {
        const record2 = clone(record);
        console.log(111)
        console.log(this.data)
        this.data.push(record2);
        console.log(222)
        this.save();
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName))
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}
export {recordListModel}