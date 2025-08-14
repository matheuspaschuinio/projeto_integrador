// Importando componente sidebar
import { Sidebar } from '@/components/sidebar';

// Importando Metadata
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aluno | Boletim'
}

export default function Boletim() {

  return (

    <div className='flex'>
        
      <Sidebar />

      <main className='p-5'>
            
        <h1 className='text-[1.5em] font-bold uppercase'>aluno / boletim</h1>

      </main>

    </div>

  )

}