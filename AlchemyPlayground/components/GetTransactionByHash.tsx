import React from 'react'

const GetTransactionByHash = (alchemy: any) => {

    const [hash, setHash] = React.useState<string>('')
    const [transaction, setTransaction] = React.useState()

    const handleGetTransactionByHash = async (e: any, hash: string) => {
        e.preventDefault()
        const transaction = await alchemy.core.getTransaction(hash)
        console.log(transaction)
        setTransaction(transaction)
    }

  return (
    <section>
        <h3 className='text-xl'>Get the properties of a transaction</h3>

        <form className='flex flex-row gap-2'>
            <input type="text" placeholder='Enter Transaction Hash' className='rounded-md text-black' onChange={(e: any) => setHash(e.target.value)}/>
            <button className='bg-black px-2 rounded-md' onClick={e => handleGetTransactionByHash(e, hash)}>Search</button>
        </form>



    </section>
  )
}

export default GetTransactionByHash