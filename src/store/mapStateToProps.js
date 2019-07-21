export const mapStateToProps = state => {
    return {
        
        palette: state.theme.currentPalette,
        mode: state.lightMode

    }
}


