export const openModal = (state, i) => Object.assign(state, {modal: i});

export const closeModal = state => Object.assign(state, {modal: null});

export const loadData = (state, data) => Object.assign(state, {data});
