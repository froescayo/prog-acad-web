import { makeStyles } from "@material-ui/styles"

const styles = makeStyles((theme) => ({
    root: {
        marginBottom: '80px',
    },
    container: {
        justifyContent: 'center'
    },
    wrapper: {
        display: 'flex',
        maxWidth: '1280px',
        width: '100%',
        alignItems: 'center',
        flex: 1,
    },
    userMenu: {
        paddingRight: '24px',
    },
    appTitle: {
        paddingLeft: '24px',
        fontSize: '40px',
        fontWeight: 'bold',
        flexGrow: 1,
    }
}))

export default styles