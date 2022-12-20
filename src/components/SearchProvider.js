import React, { useReducer } from "react"

const Context = React.createContext()

const initialState = {
    theme: 'light',
    lang: 'en',

    carResults: [],
    loadingCarResults: false,

    carMake: "honda",
    carType: "any",
    carYear: "2022",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "setTheme":
            return {
                ...state,
                theme: action.value
            }
        case "setLang":
            return {
                ...state,
                lang: action.value
            }

        case "setCarResults":
            return {
                ...state,
                carResults: action.value
            }
        case "setLoadingCarResults":
            return {
                ...state,
                loadingCarResults: action.value
            }

        case "setCarMake":
            return {
                ...state,
                carMake: action.value
            }
        case "setCarType":
            return {
                ...state,
                carType: action.value
            }
        case "setCarYear":
            return {
                ...state,
                carYear: action.value
            }
        default:
            return { ...state }
    }
}

function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    let value = { state, dispatch }

    return <Context.Provider value={value}>{props.children}</Context.Provider>
}

let Consumer = Context.Consumer
export { Context, Provider, Consumer }
