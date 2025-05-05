import React from 'react'
import { Navbar } from '../../../components/pages/VideoSearch/navbar'
import { VideoSearch } from '@/components/pages/VideoSearch/VideoSearch'

const VideoSearchPage = () => {
  return (
    <div className=' h-screen w-screen flex flex-col items-center '>
      <Navbar />
      <VideoSearch />
    </div>
  )
}

export default VideoSearchPage