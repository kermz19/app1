import { List } from "../components/list";

export default {
    title: 'List',
    component: 'List'
}

const Template = (args) => <List {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    label: 'Item List',
    items: ['item1', 'item2', 'item3', 'item4']
}