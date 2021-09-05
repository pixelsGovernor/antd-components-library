import React, { useEffect, useState } from 'react';
import { Button, Input, Select, Switch } from 'antd';
import 'antd/dist/antd.css'
import * as PropTypes from 'prop-types';

Form.propTypes = {

};

function Form({ componentActions = null, data = [], refreshNumber = 0, style = {}, leftBtn = null, rightBtn = null }) {

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(true);
  }, [refreshNumber]);

  useEffect(() => {
    if (refresh) setRefresh(false);
  }, [refresh])

  const getComponent = ({ component, componentProps, multiComponent = false, style = {} }) => {
    if (multiComponent) {
      return (
        <div style={{display: 'flex', alignItems: 'center', ...style }}>
          {component.map((element) => getComponent(element))}
        </div>
      )
    }
    switch(component) {
      case 'label': return <div {...componentProps}>{componentProps && componentProps.text || ''}</div>
      case 'input': return <Input {...componentProps} />;
      case 'select': return <Select {...componentProps} />;
      case 'switch': return <Switch {...componentProps} />;
      default: return <h5>Check list elements form. There is one element with an invalid "component" property</h5>;
    }
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', ...style}}>
      <div style={{ flex: 10 }}>
        {!refresh && (data.map((element) => getComponent(element)))}
      </div>
      <div style={{ textAlign: 'right' }}>
        { leftBtn && (<Button {...leftBtn.componentProps}>{leftBtn.text}</Button>) }
        { rightBtn && (<Button {...rightBtn.componentProps}>{rightBtn.text}</Button>) }
      </div>
    </div>
  );
}

export default Form;

Form.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.oneOf(['label', 'input', 'select', 'switch'])
  })),
  leftBtn: PropTypes.object,
  componentActions: PropTypes.element,
  rightBtn: PropTypes.object,
  refreshNumber: PropTypes.number
}
