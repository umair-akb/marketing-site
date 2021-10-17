import React from 'react';
import {
  Sidebar,
  SidebarSection,
  SidebarSectionList,
  SidebarItem,
} from 'components/tailwind/Sidebar';

const LegalNoticeSidebar = () => (
  <Sidebar sticky={true} side="left">
    <SidebarSection>
      <strong>Legal Notices</strong>
    </SidebarSection>

    <SidebarSectionList>
      <SidebarItem
        to="/tailwind/legal-notices/terms-of-service/"
        text="Terms of Service & DPA"
        partiallyActive={true}
      />

      <SidebarItem
        to="/tailwind/legal-notices/evaluation-licence/"
        text="Evaluation Licence"
        partiallyActive={true}
      />

      <SidebarItem
        to="/tailwind/legal-notices/sub-processors/"
        text="List of Sub-Processors"
        partiallyActive={true}
      />

      <SidebarItem
        to="/tailwind/legal-notices/privacy-policy/"
        text="Privacy Policy"
        partiallyActive={true}
      />

      <SidebarItem
        to="/tailwind/legal-notices/cookies-policy/"
        text="Cookies Policy"
        partiallyActive={true}
      />

      <SidebarItem
        to="/tailwind/legal-notices/acceptable-use-policy/"
        text="Acceptable Use Policy"
        partiallyActive={true}
      />
    </SidebarSectionList>
  </Sidebar>
);

export default LegalNoticeSidebar;
