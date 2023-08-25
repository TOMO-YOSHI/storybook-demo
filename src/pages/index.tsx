import type { NextPage } from 'next';
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Button from '../components/Button/Button';

const Home: NextPage = () => {
  return (
    <div className="px-36 py-10">
      <main>
        <h1 className='text-2xl font-bold text-center'>Storybook Demo</h1>
        <div className='grid grid-flow-col justify-center gap-6 mt-6'>
          <Button btnType='primary' />
          <Button btnType='secondary' />
        </div>
      </main>
    </div>
  )
}

export default Home
