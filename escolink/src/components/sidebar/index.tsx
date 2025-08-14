// Importando módulos para usar componentes de <Link> e <Imagem> em Nextjs
import Link from 'next/link';
import Image from 'next/image';

// import logo from './public/logo-64.png';

// Importando icones do React Icons
import { AiOutlineHome, AiFillHome, AiOutlineCalendar, AiOutlineMessage, AiOutlineFileText } from "react-icons/ai";

// Componente Sidebar
export function Sidebar() {

    return (

        <aside className='w-[70px] h-screen p-[10px] bg-[#1CABE9]'>

            <Image
                className='mb-10'
                src='/logo/logo-64.png'
                width={64}
                height={64}
                alt='Logo da Escolink'
            />
        
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