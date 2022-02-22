import React from "react";

export default function AboutSlider({ title, progress }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        <p>{title}</p>
        <p>{progress}%</p>
      </div>

      <div className="mt-2 w-full bg-gray-900">
        <div
          className={`h-1 bg-primary-default `}
          style={{ width: progress + "%" }}
        ></div>
      </div>
    </div>
  );
}
