import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

export const Basic: Story = (args) => (
  <Button isActive={true} {...args}>
    {}
  </Button>
);
Basic.args = {
  children: 'Entrar'
};
