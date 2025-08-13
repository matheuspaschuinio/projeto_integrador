import Link from 'next/link';

import Image from 'next/image';

import { AiOutlineHome, AiFillHome, AiOutlineCalendar, AiOutlineMessage, AiOutlineFileText } from "react-icons/ai";

export function Sidebar() {

    return(

        <aside className='w-[70px] h-screen p-[10px] bg-[#1CABE9]'>

            {/* <Image
                src={public/}    
            /> */}
        
            <div className='flex flex-col gap-[20px]'>
                <Link href='home'>
                    <div className='flex flex-col items-center'>
                        <AiOutlineHome size={22} />
                
                        <p className='text-[11px]'>Home</p>
                    </div>
                </Link>
                <Link href='agenda'>
                    <div className='flex flex-col items-center'>
                        <AiOutlineCalendar size={22} />
                
                        <p className='text-[11px]'>Agenda</p>
                    </div>
                </Link>
                <Link href='boletim'>
                    <div className='flex flex-col items-center'>
                        <AiOutlineFileText size={22} />
                
                        <p className='text-[11px]'>Boletim</p>
                    </div>
                </Link>
                <Link href='mensagens'>
                    <div className='flex flex-col items-center'>
                        <AiOutlineMessage size={22} />
                
                        <p className='text-[11px]'>Mensagens</p>
                    </div>
                </Link>
            </div>

        </aside>

    )

}