import Caption from "@/components/typographies/Caption";
import Heading from "@/components/typographies/Heading";

import Tokens from ".";

type TokenKeys = keyof typeof Tokens;

const colors = Object.entries(Tokens)
  .map(([name]) => name)
  .filter((name) => /color/i.test(name));

export default {
  title: "Tokens/Colors",
  argTypes: {
    showCSS: { control: { type: "boolean" } },
  },
};

const getTokenValue = (name: TokenKeys) => {
  return Tokens[name];
};

export const Default = ({ showCSS }: { showCSS: boolean }) => (
  <div>
    <Heading>Tokens das cores</Heading>
    <br />
    {colors.map((name) => {
      const tokenValue = getTokenValue(name as TokenKeys);
      const tokenCss = tokenValue.replace(/var\((.*)\).*/, "$1");
      return (
        <div key={name} className="flex align-items-center" style={{ marginBottom: 24 }}>
          <div
            style={{
              width: 96,
              height: 48,
              marginRight: 16,
              background: tokenValue,
              borderRadius: 16,
              border: `1px solid ${Tokens.ColorNeutralGhost}`,
            }}
          />
          <div>
            <Heading size="sm">{name}</Heading>
            {showCSS && (
              <>
                <Caption style={{ color: Tokens.ColorTextSecondary }}>{tokenCss}</Caption>
                <br />
                <Caption style={{ color: Tokens.ColorTextSecondary }}>
                  {getComputedStyle(document.documentElement).getPropertyValue(tokenCss)}
                </Caption>
              </>
            )}
          </div>
        </div>
      );
    })}
  </div>
);

Default.args = {
  showCSS: true,
};
