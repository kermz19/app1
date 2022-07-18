import React from 'react';
import { Dropdown } from '../components/dropdown';

export default {
    title: 'Dropdown',
    component: 'Dropdown'
}


const Template = (args) => <Dropdown {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'primary',
    items: []
}

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    label: "secondary",
    items: ['item1', 'item2', 'item3', 'item4', 'item5']
}



