import MeetingSetup from "@/components/meeting/meeting-setup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamVideoProvider } from "@/providers/StreamClientProvider";
import useAuthStore from "@/store/authStore";
import { PaginatedGridLayout, SpeakerLayout, StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";
import { useParams } from "react-router-dom"

const Meeting = () => {
    const {eventId} = useParams()
    const user = useAuthStore((state) => state.user);
    const { call, isCallLoading } = useGetCallById(eventId!);

    const  [isSetupComplete, setIsSetupComplete] = useState(false)


    if ( isCallLoading) return "Loading";


  return (
    <main className="h-screen w-full">
        <StreamVideoProvider>
        <StreamCall call={call}>
            <StreamTheme>
    {
        !isSetupComplete ?(
            <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
        ):(
            <MeetingRoom/>
        )
    }
            </StreamTheme>
        </StreamCall>
        </StreamVideoProvider>
    </main>
  )
}

export default Meeting


type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right'

const MeetingRoom = ()=>{
    const [layout, setLayout] = useState<CallLayoutType>('speaker-left')

    const CallLayout = () =>{
        switch(layout) {
            case"grid":
                return <PaginatedGridLayout/>
            case 'speaker-right':
                return <SpeakerLayout participantsBarPosition="left"/>
            default:
                return <SpeakerLayout participantsBarPosition="right"/>
        }
    }
    return (
        <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
            <div className="relative flex size-full items-center justify-center">
            <div className="flex size-full max-w-[1000px] items-center">
                <CallLayout />
            </div>
            </div>
        </section>
    )
}