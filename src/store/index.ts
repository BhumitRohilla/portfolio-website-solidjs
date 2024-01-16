import {createStore} from 'solid-js/store'

enum ChangeTheme {
    black= 1,
    white= 2,
}

const [store, setStore] = createStore({
    backgroundColor: 'white',
    textColor: 'black'
});

const changeTheme = (value: ChangeTheme) => {
    switch(value) {
        case ChangeTheme.black :{
            setStore(() => ({
                backgroundColor: '#111111',
                textColor: 'white'
            }))
            break;
        }
        case ChangeTheme.white :{
            setStore(() => ({
                backgroundColor: 'white',
                textColor: '#111111'
            }))
            break;
        }
    }
}

export {
    store,
    changeTheme
}