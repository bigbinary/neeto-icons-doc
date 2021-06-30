import React from 'react'
import * as Icons from "@bigbinary/neeto-icons";

export default function IconItem({ name }) {
  const Icon = Icons[name];
  return (
    <div className="flex flex-col items-center justify-center col-span-1 p-8 transition-all transform rounded cursor-pointer bg-gray-50 hover:bg-gray-100">
      <Icon size={24} color="black"/>
      <div className="mt-2 text-xs text-gray-700">{name}</div>
    </div>
  )
}
