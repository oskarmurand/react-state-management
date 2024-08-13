import { Badge } from "@twilio-paste/core";
import { useRef } from "react";

// This component counts the number of renders of this component.
export const RenderCounter = () => {
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  return (
    <Badge as="span" variant="decorative10">
      render count: {renderCounter.current}
    </Badge>
  );
};
