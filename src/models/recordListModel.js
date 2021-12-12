import clone from "@/lib/clone";

const localStorageKeyName = 'recordList'
const recordListModel = {
    data: [],

    create(record){
        const record2 = clone(record)
        this.data.push(record2);
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName))
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}
export {recordListModel}