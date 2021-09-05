import React from 'react';

import Form from './Form';

export default {
  title: 'Form',
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const FormExample = Template.bind({});
FormExample.args = {
  data: [
    { component: 'label', componentProps: { text: 'FORM', style: { fontSize: 'x-large'  } } },
    { multiComponent: true, component: [
        { component: 'label', componentProps: { style: { marginBottom: '15px', width: '150px'}, text: 'label with input' } },
        {component: 'input', componentProps: { placeholder: 'placeholder', defaultValue: 'default input value', style: { marginBottom: '15px' } }  }]
    },
    { component: 'select', componentProps: { placeholder: 'placeholder combo', options: [{label: 'element 1', value: 1}], style: { marginBottom: '15px', width: '100%'} } },
    { multiComponent: true,
      component: [{ component: 'label', componentProps: { text: 'Example switch: ', style: { marginRight: '15px' } } }, { component: 'switch', componentProps: { defaultChecked: true } }] },
  ]
};
