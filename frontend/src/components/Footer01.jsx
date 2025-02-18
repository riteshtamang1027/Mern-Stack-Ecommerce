import React from 'react'

export default function Footer01({text}) {
  return (
    <div className=" mt-16">
      <div className="font-semibold  opacity-80 whitespace-nowrap">
        {text.Main_text}
      </div>
      <div className="flex gap-6 whitespace-nowrap mt-4 text-sm font-semibold opacity-60">
        <div className="space-y-2 ">
          <div className="hover:text-green-700 cursor-pointer">
            {text.sub_text1}
          </div>
          <div className="hover:text-green-700 cursor-pointer">
            {text.sub_text2}
          </div>
          <div className="hover:text-green-700 cursor-pointer">
            {text.sub_text3}
          </div>
          <div className="hover:text-green-700 cursor-pointer">
            {text.sub_text4}
          </div>
          <div className="hover:text-green-700 cursor-pointer">
            {text.sub_text5}
          </div>
          <div className="hover:text-green-700 cursor-pointer">
            {text.sub_text6}
          </div>
          <div className="hover:text-green-700 cursor-pointer">
            {text.sub_text7}
          </div>
          <div className="hover:text-green-700 cursor-pointer">
            {text.sub_text8}
          </div>
          <div className="hover:text-green-700 cursor-pointer">
            {text.sub_text9}
          </div>
        </div>
      </div>
    </div>
  )
}
