import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './App';
import { store,  persistor  } from './redux/store';
import GlobalStyle from 'stylesConfig/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'stylesConfig/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <BrowserRouter basename="/goit-react-hw-08-phonebook/">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  //  </React.StrictMode>
);
