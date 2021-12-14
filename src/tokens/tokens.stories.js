import Tokens from ".";
import Caption from "@/components/typographics/Caption";
import Subtitle from "@/components/typographics/Subtitle";

const colors = Object.entries(Tokens)
  .map(([name]) => name)
  .filter((name) => /color/i.test(name));

export default {
  title: "Tokens/Colors",
  argTypes: {
    showCSS: { control: { type: "boolean" } },
  },
};

export const Default = ({ showCSS }) => (
  <div>
    <Subtitle>Tokens das cores</Subtitle>
    <br />
    {colors.map((name) => {
      const tokenCss = Tokens[name].replace(/var\((.*)\).*/, "$1");
      return (
        <div key={name} className="flex align-items-center" style={{ marginBottom: 24 }}>
          <div
            style={{
              width: 96,
              height: 48,
              marginRight: 16,
              background: Tokens[name],
              borderRadius: 16,
              border: `1px solid ${Tokens.ColorNeutralGhost}`,
            }}
          />
          <div>
            <Subtitle size="sm">{name}</Subtitle>
            {showCSS && <Caption style={{ color: Tokens.ColorTextSecondary }}>{tokenCss}</Caption>}
          </div>
        </div>
      );
    })}
  </div>
);

Default.args = {
  showCSS: true,
};
