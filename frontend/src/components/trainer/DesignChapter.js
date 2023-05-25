import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import app_config from '../../config';
import { useState } from 'react';

const DesignChapter = () => {

    const {chapterId} = useParams();
    const {apiUrl}  = app_config;
    const [chapterData, setChapterData] = useState(null);
    const [loading, setLoading] = useState(false);


    const getChapterById =async () => {
        setLoading(true);
        const response = await fetch(`${apiUrl}/chapter/getbyid/${chapterId}`);
        const data = await response.json();
        console.log(data);
        setChapterData(data);   
        setLoading(false);
    }

    useEffect(() => {
      getChapterById();
    }, [])
    

  return (
    <div>DesignChapter</div>
  )
}

export default DesignChapter