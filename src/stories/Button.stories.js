import React from 'react';
import Button from '../components/Button/Button';

export default {
	title: 'Button',
	component: Button,
	args: {
		children: 'Click',
	}
}

const Template = (args) => <Button {...args}></Button>

export const Primary = Template.bind({});

Primary.args = {
	children: 'Click',
	onClick: () => {}
}