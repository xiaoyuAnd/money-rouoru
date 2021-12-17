// import {recordListModel} from '@/models/recordListModel';
// import {tagListModel} from '@/models/tagListModel';
//
// const store = {
//     // record store
//     recordList: recordListModel.fetch(),
//     createRecord: (record) => recordListModel.create(record),
//     // 2 严重依赖 window
//     saveRecord: recordListModel.save(),
//
//     // tag store
//     tagList: tagListModel.fetch(),
//     findTag(id) {
//         return this.tagList.filter(t => t.id === id)[0];
//     },
//     createTag: (name) => {
//         const message = tagListModel.create(name);
//         if (message === 'duplicated') {
//             window.alert('标签名重复了');
//         } else if (message === 'success') {
//             window.alert('添加成功');
//         }
//     },
//     removeTag: (id) => {
//         return tagListModel.remove(id);
//     },
//     updateTag: (id, name) => {
//         return tagListModel.update(id, name);
//     }
//
// };
//
// export default store;