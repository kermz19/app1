import { set } from 'lodash';
import React, {useState} from 'react';
import {Button} from "../components/button"

export default {
    title: 'Button',
    component: 'Button',
}

const Template = (args) => <Button {...args}></Button>

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'primary'

}

export const Secondary = Template.bind({})
Secondary.args = {
    primary: false,
    label: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    primary: false,
    label: 'tertiary'
}