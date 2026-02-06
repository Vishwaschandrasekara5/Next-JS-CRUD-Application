"use client";

import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

export default function Removebtn({id}) {

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");
    if (confirmed) {
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

    }
  }

  return (
    <div>
      <button onClick={removeTopic} className="text-red-400"><HiOutlineTrash size={24}/></button>
    </div>
  )
}
