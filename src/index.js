import React from 'react'
import ReactDOM from 'react-dom'
import {SnackbarProvider} from 'notistack'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import './index.css'
import './App.scss'
import App from './App'

const notistackRef = React.createRef()
const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key)
}

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      ref={notistackRef}
      action={(key) => (
        <IconButton size="small" onClick={onClickDismiss(key)} style={{color: 'white'}}>
          <CloseIcon />
        </IconButton>
      )}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
