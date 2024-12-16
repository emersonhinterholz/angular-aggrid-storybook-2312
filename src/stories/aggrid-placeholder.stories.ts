import type { Meta, StoryObj } from '@storybook/angular';
import { AggridPlaceholderComponent } from '../app/aggrid-placeholder/aggrid-placeholder.component';

const meta: Meta<AggridPlaceholderComponent> = {
  component: AggridPlaceholderComponent,
};

export default meta;

type Story = StoryObj<AggridPlaceholderComponent>;

export const Default: Story = {};