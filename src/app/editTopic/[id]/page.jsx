import React from 'react'
import EditTopicForm from '../../(components)/EditTopicForm.jsx'

const getTopicById = async (id) => {
    try {
      const res = await fetch (`http://localhost:3000/api/topics/${id}`, {
        cache: "no-store"
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      console.log("Error Loading",error);
      
    }
}

export default async function page({params}) {
  const {id} = await params;
  const {topic} = await getTopicById(id);
  const { title, description } = topic || {};

  
  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  )
}
  