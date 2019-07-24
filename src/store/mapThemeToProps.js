export const mapThemeToProps = state => {
    return {
        
        palette: state.theme.currentPalette,
        mode: state.theme.lightMode

    }
}


    