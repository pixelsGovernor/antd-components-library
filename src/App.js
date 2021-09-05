import './App.css';
import 'antd/dist/antd.css'
const crypto = require("crypto");
import Form from './widgets/Form.jsx';
import React, { useState } from 'react';

function App() {
  const [dataForm, setDataForm] = useState({ valueInput: '123', defaultChecked: true, refreshNumber: 0 });
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 10 }}>
        <Form
          data={
            [
              { component: 'label', componentProps: { text: 'FORM', style: { fontSize: 'x-large'  } } },
              { multiComponent: true, component: [
                { component: 'label', componentProps: { style: { marginBottom: '15px', width: '150px'}, text: 'label with input' } },
                {component: 'input', componentProps: { placeholder: 'placeholder', defaultValue: 'default input value', style: { marginBottom: '15px' } }  }]
              },
              { component: 'select', componentProps: { placeholder: 'placeholder combo', options: [{label: 'element 1', value: 1}], style: { marginBottom: '15px', width: '100%'} } },
              { multiComponent: true,
                component: [{ component: 'label', componentProps: { text: 'Example switch: ', style: { marginRight: '15px' } } }, { component: 'switch', componentProps: { defaultChecked: dataForm.defaultChecked } }] },
            ]
          }
          refreshNumber={dataForm.refreshNumber}
          leftBtn={{ text: 'clear', componentProps: { style: { margin: '15px' }} }}
          rightBtn={{ text: 'filter' }}
          style={{ padding: '15px' }}
        />
      </div>
      <button onClick={() => { setDataForm({ ...dataForm, valueInput: crypto.randomBytes(20).toString('hex')   })}}>ChangeValues without refresh</button>
      <button onClick={() => { setDataForm({ ...dataForm, valueInput: crypto.randomBytes(20).toString('hex'), refreshNumber: dataForm.refreshNumber + 1   })}}>ChangeValuesForm</button>
    </div>
  );
}

export default App;
