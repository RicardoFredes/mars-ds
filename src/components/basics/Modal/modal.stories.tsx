import type { ModalChildProps } from "./modal.types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Button, { ButtonVariants } from "@/components/basics/Button";
import Caption from "@/components/typographies/Caption";
import Heading, { HeadingSizes } from "@/components/typographies/Heading";
import Text from "@/components/typographies/Text";

import Modal from "./modal.component";
import { ModalSizes } from "./modal.types";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: {
      options: ModalSizes,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const ExampleModalContent = ({ close }: ModalChildProps) => (
  <p className="flex-column gap-lg">
    <div className="mb-lg">
      <Heading size={HeadingSizes.Small}>4 correções de redação básicas extras</Heading>
      <Caption>+ R$ 29,90</Caption>
    </div>
    <Text>
      Orci sagittis eget suspendisse in vitae nulla aliquet egestas. Id purus sit lectus elit turpis
      augue cras. Ac elit sagittis integer malesuada. Pulvinar tortor quisque eget in. Risus vitae,
      purus bibendum amet, et diam. Arcu ac at viverra etiam amet augue tristique non, pellentesque.
    </Text>
    <Button onClick={close}>Adicionar à compra</Button>
    <Button onClick={close} variant={ButtonVariants.Secondary}>
      Fechar modal
    </Button>
  </p>
);

const DefaultArgs = {
  children: (
    <>
      <div className="mb-lg">
        <Heading size={HeadingSizes.Small}>
          4 correções de redação <br />
          básicas extras
        </Heading>
        <Caption>+ R$ 29,90</Caption>
      </div>
      <Text>
        Orci sagittis eget suspendisse in vitae nulla aliquet egestas. Id purus sit lectus elit
        turpis augue cras. Ac elit sagittis integer malesuada. Pulvinar tortor quisque eget in.
        Risus vitae, purus bibendum amet, et diam. Arcu ac at viverra etiam amet augue tristique
        non, pellentesque.
      </Text>
    </>
  ),
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

const ButtonTemplate: ComponentStory<typeof Modal> = (args) => (
  <Button onClick={() => Modal.open(ExampleModalContent, args)} label="Abrir Modal" />
);

export const ShowModal = ButtonTemplate.bind({});
ShowModal.args = DefaultArgs;
