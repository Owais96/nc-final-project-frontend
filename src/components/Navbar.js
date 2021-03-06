import React from 'react'
import { Link } from '@reach/router'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'

const NewTabs = withStyles({
    indicator: {
        backgroundColor: '#00A99D',
    },
})(Tabs)

const Navbar = (props) => {
    const [value, setValue] = React.useState(0)

    // console.log(storageNavValue, 'storage nav value')

    // console.log(
    //     JSON.parse(localStorage.getItem('isNewUser')),
    //     'isNewUser from local storage'
    // )

    // let initNavValue = props.isNewUser ? 1 : 0
    // console.log(initNavValue, 'init value')

    let initNavValue = JSON.parse(localStorage.getItem('isNewUser')) ? 1 : 0

    const handleChange = (event, newValue) => {
        setValue(newValue)
        localStorage.setItem('navValue', JSON.stringify(newValue))
    }

    return (
        <Paper square>
            <NewTabs
                value={initNavValue || value}
                indicatorColor='primary'
                textColor='primary'
                onChange={handleChange}
                aria-label='disabled tabs example'
                className='nav'
            >
                <Tab label='Main' to='/main' component={Link} value={0} />
                <Tab
                    label='User Profile'
                    to='/user-profile'
                    component={Link}
                    value={1}
                />
                <Tab
                    label='Travel Advice'
                    to='/travel-advice'
                    component={Link}
                    value={2}
                />
            </NewTabs>
        </Paper>
    )
}

export default Navbar
