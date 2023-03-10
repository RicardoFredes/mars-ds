import Caption from "@/components/typographies/Caption";
import Heading from "@/components/typographies/Heading";
import Text, { TextSizes } from "@/components/typographies/Text";
import Tokens from "@/tokens";

export default {
  title: "Utilities/Spacings",
  argTypes: {
    showCSS: { control: { type: "boolean" } },
  },
};

const PaddingSpacing = ({ size }: { size: string }) => (
  <div
    className={`p-${size} mr-xl`}
    style={{
      backgroundColor: Tokens.ColorNeutralGhost,
      maxWidth: "25%",
      display: "inline-block",
    }}
  >
    <Caption>{`.p-${size}`}</Caption>
    <Text>Spacing {size}</Text>
  </div>
);

const MarginSpacing = ({ size }: { size: string }) => {
  const style = {
    backgroundColor: Tokens.ColorNeutralGhost,
    display: "inline-flex",
    width: 40,
    height: 40,
  };

  return (
    <div
      className="p-1x mb-2x flex align-items-center"
      style={{ backgroundColor: Tokens.ColorNeutralGhost }}
    >
      <Caption className={`mr-${size}`}>{`.mr-${size}`}</Caption>
      <div>
        <div className={`mr-${size}`} style={style} />
        <div className={`mr-${size}`} style={style} />
        <div style={style} />
      </div>
    </div>
  );
};

const GapSpacing = ({ size }: { size: string }) => {
  const style = {
    backgroundColor: Tokens.ColorNeutralGhost,
    display: "inline-flex",
    width: 40,
    height: 40,
  };

  return (
    <div
      className="p-1x mb-2x flex align-items-center"
      style={{ backgroundColor: Tokens.ColorNeutralGhost }}
    >
      <Caption className={`mr-xl`}>{`.gap-${size}`}</Caption>
      <div className={`flex gap-${size}`}>
        <div style={style} />
        <div style={style} />
        <div style={style} />
      </div>
    </div>
  );
};

const xSizes = ["1x", "2x", "3x", "4x"];

const aSizes = ["none", "xs", "sm", "md", "lg", "xl"];

const variations = ["", "t", "r", "b", "l", "x", "y"];

const getVariations = (prefix: string, sizes: string[] = xSizes, list: string[] = variations) =>
  list.map((v) => {
    return sizes.map((s) => `.${prefix}${v}-${s}`);
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClassList = ({ list = [] }: { list: any[] }) => (
  <div>
    <Heading size="sm" className="mb-sm">
      Classes:
    </Heading>
    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
    {list.map((group: any[], key) => (
      <Text key={key} size={TextSizes.Small}>
        {group.map((p, key2) => (
          <div key={key2}>{p}</div>
        ))}
      </Text>
    ))}
  </div>
);

const List = ({
  title,
  list = [],
  Spacing = PaddingSpacing,
  sizes = xSizes,
}: {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: any[];
  Spacing?: typeof PaddingSpacing;
  sizes?: string[];
}) => (
  <>
    <Heading className="mb-sm">{title}</Heading>
    <div className="mb-xl">
      {sizes.map((size) => (
        <Spacing key={size} size={size} />
      ))}
    </div>
    <ClassList list={list} />
  </>
);

export const PaddingsNX = () => <List list={getVariations("p")} title="Paddings NX" />;

export const MarginsNX = () => (
  <List list={getVariations("m")} title="Margins NX" Spacing={MarginSpacing} />
);

export const GapsNX = () => (
  <List list={getVariations("gap", aSizes, [""])} title="Gaps NX" Spacing={GapSpacing} />
);

export const Paddings = () => (
  <List list={getVariations("p", aSizes)} title="Paddings" sizes={aSizes} />
);

export const Margins = () => (
  <List list={getVariations("m", aSizes)} title="Margins" sizes={aSizes} Spacing={MarginSpacing} />
);

export const Gaps = () => (
  <List
    list={getVariations("gap", aSizes, [""])}
    title="Gaps NX"
    Spacing={GapSpacing}
    sizes={aSizes}
  />
);
