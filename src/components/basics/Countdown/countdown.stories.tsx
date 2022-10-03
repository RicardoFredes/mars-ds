import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Tokens from "@/tokens";

import Countdown from "./countdown.component";
import { getTomorrowDateAsString } from "./countdown.helper";
import { CountdownSizes } from "./countdown.types";

export default {
  title: "Components/Countdown",
  component: Countdown,
  argTypes: {
    endDate: {
      defaultValue: getTomorrowDateAsString(),
      description: "Data de final do contador regressivo no formato AAAA-MM-DDTHH:MM",
      control: {
        type: "text",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
    },
    color: {
      defaultValue: Tokens.ColorTextPrimary,
      description: "A cor do texto da caixa",
      control: {
        type: "text",
      },
    },
    background: {
      defaultValue: "transparent",
      description: "A cor de fundo da caixa",
      control: {
        type: "text",
      },
    },
    showSeparator: {
      defaultValue: true,
      description: "Se deve mostrar ou não o separador (:)",
      control: {
        type: "boolean",
      },
    },
    showDays: {
      defaultValue: true,
      description:
        "Se deve mostrar ou não os dias. Obs.: O contador funcionará como se tivesse os dias porém a casa que os exibe é oculta",
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Countdown>;

const Template: ComponentStory<typeof Countdown> = (args) => <Countdown {...args} />;

const DefaultArgs = {
  children: "Não esqueça de atualizar o componente!",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const With_Background = Template.bind({});
With_Background.args = { ...DefaultArgs, background: Tokens.ColorMedicina500 };

export const With_Color = Template.bind({});
With_Color.args = { ...DefaultArgs, color: Tokens.ColorPrimary500 };

export const Without_Separators = Template.bind({});
Without_Separators.args = { ...DefaultArgs, showSeparator: false };

export const Without_Days = Template.bind({});
Without_Days.args = { ...DefaultArgs, showDays: false };

export const Size_Small = Template.bind({});
Size_Small.args = { ...DefaultArgs, size: CountdownSizes.Small };

export const Size_Medium = Template.bind({});
Size_Medium.args = { ...DefaultArgs, size: CountdownSizes.Medium };

export const Size_Large = Template.bind({});
Size_Large.args = { ...DefaultArgs, size: CountdownSizes.Large };
