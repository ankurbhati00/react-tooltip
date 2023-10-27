import { Tooltip } from "react-tooltip";

export function ToolTip({ data }) {
  const { id, place } = data;
// add props data to tooltip
  return <Tooltip id={id} place={place} />;
}
