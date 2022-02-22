import React from "react";
import * as FontAwesome from "react-icons/fa";

export const MyIcon = (props) => {
  const { iconName } = props;
  const customicon = React.createElement(FontAwesome[iconName]);
  return <div>{customicon}</div>;
};

export default function ServiceCard({ icon, title, desc }) {
  return (
    <div>
      <div className="bg-primary-default/5 p-12 group text-center hover:bg-primary-default hover:text-white">
        <div className="flex justify-center text-7xl text-primary-default group-hover:text-white">
          <MyIcon iconName={icon} />
        </div>
        <br />
        <br />
        <h2 className="font-semibold text-xl">{title}</h2>
        <br />
        <p>{desc}</p>
      </div>
    </div>
  );
}
