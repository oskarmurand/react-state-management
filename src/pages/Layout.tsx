import { Outlet, useMatch } from "react-router-dom";
import {
  Sidebar,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarBody,
  SidebarPushContentWrapper,
  SidebarNavigation,
  SidebarNavigationItem,
} from "@twilio-paste/core/sidebar";

const sidebarNavigationSkipLinkID = "someid1";
const topbarSkipLinkID = "someid2";
const mainContentSkipLinkID = "someid3";

const NavigationItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const selected: boolean = !!useMatch(href);
  return (
    <SidebarNavigationItem href={href} selected={selected}>
      {children}
    </SidebarNavigationItem>
  );
};

const Layout = () => (
  <>
    <Sidebar
      sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
      topbarSkipLinkID={topbarSkipLinkID}
      mainContentSkipLinkID={mainContentSkipLinkID}
      variant="default"
    >
      <SidebarHeader>
        <SidebarHeaderLabel>State Management Demo</SidebarHeaderLabel>
      </SidebarHeader>
      <SidebarBody>
        <SidebarNavigation
          aria-label="Main navigation"
          hierarchical
        >
          <NavigationItem href="/">Home</NavigationItem>
          <NavigationItem href="/local-state">Local State</NavigationItem>
          <NavigationItem href="/context">Context API</NavigationItem>
          <NavigationItem href="/reducer">Reducer</NavigationItem>
          <NavigationItem href="/redux">Redux</NavigationItem>
        </SidebarNavigation>
      </SidebarBody>
    </Sidebar>
    <SidebarPushContentWrapper variant="default">
      <Outlet />
    </SidebarPushContentWrapper>
  </>
);

export default Layout;
