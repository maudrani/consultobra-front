import { proxy } from "valtio";

export const layoutStates = proxy({
    header: {
        show: true,
        fixed: true
    },
    footer: {
        show: true,
        showSocialMedia: true,
    }
})

export const restoreHeader = () => {
    layoutStates.header.show = true
    layoutStates.header.fixed = true
}

export const restoreFooter = () => {
    layoutStates.footer.show = true
    layoutStates.footer.showSocialMedia = true
}

export const restoreLayout = () => {
    restoreHeader()
    restoreFooter()
}

export const setAppLayout = () => {
    layoutStates.footer.show = false
    layoutStates.header.show = false
}