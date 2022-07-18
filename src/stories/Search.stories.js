import React from 'react';
import { Search } from '../components/search';

export default {
    title: 'Search',
    component: 'Search',
}

const Template = (args) => <Search {...args}></Search>

export const Primary = Template.bind({});
Primary.args = {
    text: 'Search ',
}