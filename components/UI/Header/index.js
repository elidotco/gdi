"use client";

import Image from "next/image";
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from "./styles";
import raft_logo from "@/public/svgs/log1.svg";
import ic_bars from "@/public/svgs/ic_bars.svg";

import AnimatedLink from "@/components/Common/AnimatedLink";
import { useState } from "react";
import { motion } from "framer-motion";
import { links, menu } from "./constants";
import GetStartedButton from "@/components/Common/GetStartedButton";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Link href="/">
            <Image src={raft_logo} alt="raft_logo" priority width={200} />
          </Link>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? "open" : "closed"}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? "active" : ""}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} tag="a" href={link.url} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? "active" : ""}>
          <GetStartedButton padding="0.5rem 0.75rem" cta={"Contact"} />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
