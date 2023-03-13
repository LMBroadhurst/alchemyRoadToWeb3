import React, { useState } from 'react'

type OwnProps = {
    blockProperties: any,
    setBlockProperties: (blockProperties: object) => void,
    alchemy: any
}

const GetBlockByNumber: React.FC<OwnProps> = ({blockProperties, setBlockProperties, alchemy}) => {

    const [blockNumber, setBlockNumber] = useState<string>('')

    const handleHashChange = (e: any) => {
        e.preventDefault()
        setBlockNumber(e.target.value)
        console.log(e.target.value)
    }

    const returnBlockFromHash = async (e: any, inputBlockNumber: string) => {
        e.preventDefault()
        const block = await alchemy.core.getBlock(parseInt(inputBlockNumber))
        setBlockProperties(block)
    }

  return (
    <div className='flex flex-col justify-center items-center bg-slate-700 text-white py-4 gap-5'>
        <h3 className='text-xl'>Get the properties of a block</h3>

        <form className='flex flex-row gap-2'>
            <input type="text" placeholder='Enter Block Number' className='rounded-md text-black' onChange={handleHashChange}/>
            <button className='bg-black px-2 rounded-md' onClick={e => returnBlockFromHash(e, blockNumber)}>Search</button>
        </form>

        {!blockProperties ? null : (
            <section className='text-black flex flex-col bg-slate-200 p-4 rounded-lg'>
                <h4 className='text-lg border-slate-700 border-b mb-2'>Block Properties (Block {blockProperties?.number} / {blockProperties?.hash.slice(0, 20)}...)</h4>
                
                <span>Difficulty: {blockProperties?.difficulty.toString()}</span>
                <span>Gas Used: {blockProperties?.gasUsed.toString()}</span>
                <span>Timestamp: {blockProperties?.timestamp}</span>
                <span>Nonce: {blockProperties?.nonce}</span>

                <span className='text-xs mt-2'>Link to docs <a className='underline text-blue-700' href='https://docs.alchemy.com/reference/eth-getblockbynumber'>here</a></span>
            </section>
        )}
        
    </div>
  )
}

export default GetBlockByNumber