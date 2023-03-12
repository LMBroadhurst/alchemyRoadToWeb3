import React, { useState } from 'react'

type OwnProps = {
    blockProperties: any,
    setBlockProperties: (blockProperties: object) => void,
    alchemy: any
}

const GetBlockByHash: React.FC<OwnProps> = ({blockProperties, setBlockProperties, alchemy}) => {

    const [hash, setHash] = useState<string>('')

    const handleHashChange = (e: any) => {
        e.preventDefault()
        setHash(e.target.value)
        console.log(e.target.value)
    }

    const returnBlockFromHash = async (e: any, inputHash: string) => {
        e.preventDefault()
        const block = await alchemy.core.getBlock(1814169)
        setBlockProperties(block)
    }

  return (
    <div className='flex flex-col justify-center items-center bg-slate-700 text-white py-4 gap-5'>
        <h3 className='text-xl'>Get the properties of a block</h3>

        <form className='flex flex-row gap-2'>
            <input type="text" placeholder='Enter Block Hash' className='rounded-md text-black' onChange={handleHashChange}/>
            <button className='bg-black px-2 rounded-md' onClick={e => returnBlockFromHash(e, hash)}>Search</button>
        </form>

        {!blockProperties ? null : (
            <section className='text-white flex flex-col'>
                <h4 className='text-lg border-b mb-2'>Block Properties (Block {blockProperties?.number} / {blockProperties?.hash})</h4>
                <span>Difficulty: {blockProperties?.difficulty.toString()}</span>
                <span>Gas Used: {blockProperties?.gasUsed.toString()}</span>
                <span>Timestamp: {blockProperties?.timestamp}</span>
                <span>Nonce: {blockProperties?.nonce}</span>
            </section>
        )}
        
    </div>
  )
}

export default GetBlockByHash