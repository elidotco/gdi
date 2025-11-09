import Link from "next/link";
import { LinkTo } from "./styles";

const GetStartedButton = ({ padding, cta }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/"
    >
      {cta || "Get Started"}
    </LinkTo>
  );
};

export default GetStartedButton;
