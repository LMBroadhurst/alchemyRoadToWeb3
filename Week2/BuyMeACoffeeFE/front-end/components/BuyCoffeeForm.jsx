import React from 'react'

const BuyCoffeeForm = ({onNameChange, onMessageChange, buyCoffee}) => {

  return (
    <form>
        <div>
            <label>Name</label>
            <input
                id="name"
                type="text"
                placeholder="anon"
                onChange={onNameChange}
            />
        </div>

        <div>
            <label>Send Albert a message</label>

            <textarea
                rows={3}
                placeholder="Enjoy your coffee!"
                id="message"
                onChange={onMessageChange}
                required
            />
        </div>
        <div>
            <button
                type="button"
                onClick={buyCoffee}
            >Send 1 Coffee for 0.001ETH
            </button>
        </div>
    </form>
  )
}

export default BuyCoffeeForm