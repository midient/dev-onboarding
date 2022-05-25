import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {idGeneratorService} from './application/idGeneratorService';
import {PersistenceService} from './application/persistenceService';
import reportWebVitals from './reportWebVitals';
import idGeneratorAdapter from './services/idGeneratorAdapter';
import {LocalStoragePersistenceAdapter} from './services/localStoragePersistenceAdapter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App
      persistence={new LocalStoragePersistenceAdapter() as PersistenceService}
      idGen={idGeneratorAdapter as idGeneratorService}
    />
  </React.StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
