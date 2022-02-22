import React from "react";

function FooterContactListItem({ icon, children }) {
  return (
    <div className="flex pb-2">
      <div className="h-10 w-10">{icon}</div>
      <div>{children}</div>
    </div>
  );
}

export default FooterContactListItem;
