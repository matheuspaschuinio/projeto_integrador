// Importando componente sidebar
import { Sidebar } from '@/components/sidebar';

// Importando Metadata
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aluno | Agenda'
}

export default function Agenda() {

  return (

    <div className='flex'>
        
      <Sidebar />

      <main className='p-5'>
            
        <h1 className='text-[1.5em] font-bold uppercase'>aluno / agenda</h1>

      </main>

    </div>

  )

}