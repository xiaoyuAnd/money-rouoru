import Vue from 'vue';
import Vuex from 'vuex';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import clone from '@/lib/clone';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import createId from '@/lib/createId';
import router from '@/router';

let id = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function createId() {
    id++;
    window.localStorage.setItem('_idMax',id.toString())
    return id;
}

Vue.use(Vuex);

type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}
const store = new Vuex.Store({
    state: {
        recordList: [],
        tagList: [],
        currentTag: undefined
    } as RootState,
    mutations: {
        setCurrentTag(state, id: string) {
            state.currentTag = state.tagList.filter(t => t.id === id)[0];
        },
        updateTag(state, payload: { id: string, name: string }) {
            const {id, name} = payload;

            const idList = state.tagList.map(item => item.id);

            if (idList.indexOf(id) >= 0) {
                const names = state.tagList.map(item => item.name);
                console.log(names.indexOf(name))
                console.log(names)
                if (names.indexOf(name) >= 0) {
                    window.alert('标签名重复了');
                } else {
                    const tag = state.tagList.filter(item => item.id === id)[0];
                    tag.name = name;
                    store.commit('saveTags');
                }
            }
        },
        removeTag(state, id: string) {
            let index = -1;
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                state.tagList.splice(index, 1);
                store.commit('saveTags');
                router.back();
            } else {
                window.alert('删除失败');
            }

        },
        fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
        },
        createRecord(state, record) {
            const record2: RecordItem = clone(record);
            record2.createdAt = new Date();
            state.recordList.push(record2);
            store.commit('saveRecords');
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList',
                JSON.stringify(state.recordList));
        },
        fetchTags(state) {
            state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        },
        createTag(state, name: string) {
            const names = state.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                window.alert('标签名重复了');
            }
            const id = createId().toString();
            console.log(1111)

            state.tagList.push({id, name: name});
            store.commit('saveTags');
            window.alert('添加成功');
        },
        saveTags(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },
    }
});

export default store;