import React from "react";

import { WarningRounded, ErrorOutline, CheckCircleOutlineRounded, InfoOutlined } from "@material-ui/icons";
import { MessageContainer, StyledSnackbar } from "./styled";
import SnackbarContent from "components/Snackbar/SnackbarContent";

const Alert = (props) => {
    const { children, variant, show } = props

    const Variants = {
        'danger': { icon: ErrorOutline, color: 'danger' },
        'warning': { icon: WarningRounded, colr: 'warning' },
        'success': { icon: CheckCircleOutlineRounded, color: 'success' },
        'info': { icon: InfoOutlined, color: 'info' },
    }

    const Content = () => {
        return <MessageContainer>
            {children}
        </MessageContainer>
    }

    return <StyledSnackbar open={show} autoHideDuration={6000}>
        <SnackbarContent
            message={<Content />}
            close
            color={Variants[variant].color}
            icon={Variants[variant].icon}
        />
    </StyledSnackbar>
}

export default Alert;