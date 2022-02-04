import { proxy } from "valtio";

export const layoutStates = proxy({
    header: {
        show: true,
        fixed: true
    },
    footer: {
        show: true,
        showSocialMedia: true,
    },
    alert: {
        show: false,
        variant: 'danger',
        content: 'Content is empty',
    }
})

export const restoreAlert = () => {
    layoutStates.alert.show = false
}

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
    restoreAlert()
}

export const setAppLayout = () => {
    layoutStates.footer.show = false
    layoutStates.header.show = false
}