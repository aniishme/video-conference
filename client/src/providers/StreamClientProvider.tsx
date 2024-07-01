import useAuthStore from '@/store/authStore';
import { tokenProvider } from '@/utils/stream';
import {
    StreamVideo,
    StreamVideoClient,
  } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';
  
  const apiKey = import.meta.env.VITE_STREAM_API_KEY;


  
  export const StreamVideoProvider = ({children}:{
    children:ReactNode
  }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>()
    const user = useAuthStore((state) => state.user)
    const loading = useAuthStore((state)=> state.loading)

    useEffect(()=>{
        if(loading || !user) return;
        
        if(!apiKey) throw new Error('Stream API Key Missing')

        const client = new StreamVideoClient({
            apiKey,
            user:{
                id:user?.id,
                name:user?.name || user?.id,
                image:"https://github.com/shadcn.png",
            },
            tokenProvider:()=>tokenProvider()
        })

        setVideoClient(client)

    },[user,loading])

    console.log("INSIDE HERE")

    if(!videoClient){
      return <div>Loading...</div>
    }
    return (
      <StreamVideo client={videoClient}>
        {children}
      </StreamVideo>
    );
  };