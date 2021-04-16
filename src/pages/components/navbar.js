import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TableChartRoundedIcon from '@material-ui/icons/TableChartRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import { Link } from 'react-router-dom'

// import { Container } from './styles';

function NavBar() {
  return (
    <div className="nav">
      <div className="navItens">
        <Link to='/' ><div className="Menuitem"><HomeRoundedIcon fontSize='large' /></div></Link>
        <Link to='/tables'> <div className="Menuitem"><TableChartRoundedIcon fontSize='large' /></div></Link>
        <Link to='/food'> <div className="Menuitem"><FastfoodRoundedIcon fontSize='large' /></div></Link>

        <div className="Menuitem"><AccountBalanceWalletRoundedIcon fontSize='large' /></div>
        <div className="Menuitem"><SettingsApplicationsRoundedIcon fontSize='large' /></div>
        <ExitToAppRoundedIcon className="logoutbottom" fontSize='large' style={{ color: 'white', position: 'relative', top: 38 }} />
      </div>
    </div>
  )
}

export default NavBar;