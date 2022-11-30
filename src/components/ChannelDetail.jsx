import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard, Loader } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
 const [channelDetail, setChannelDetail] = useState(null)
 const [videos, setVideos] = useState([])
 const { id } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`)

      setChannelDetail(data?.items[0])

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)

      setVideos(videosData?.items)
    }

    fetchResults()
  }, [id])
  
  if (!channelDetail?.snippet) return <Loader />;

  return (
	  <Box minHeight='95vh'>
      <Box>
        <div style={{
            background: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail