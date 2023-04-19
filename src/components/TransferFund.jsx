import { userService } from "../services/user.service"
export function TransferFund({ contact }) {
    let user = userService.getUser()
    let value = 0

    function handleTransfer(ev) {
        ev.preventDefault()
        const form = ev.currentTarget.form
        const amount = form.elements.amount
        const value = +amount.value
        if (value > user.coins) return alert("Not enough coins")
        onTransferCoins(value)
        amount.value = 0
    }

    async function onTransferCoins(amount) {
        try {
            const user = await userService.addMove(contact, amount)
        } catch (err) {
            console.log('err:', err)
        }
    }

    return (
        <form className='transfer-fund'>
            <h1>Transfer Fund:</h1>
            <h3>Transfer coins to {contact.name}</h3>
            <div className='transfer-details flex auto-center'>
                <h3 className='amount'>Amount:</h3>
                <input type="integer" name="amount" id="amount" min="1" max={user.coins} />
                <button disabled={value} onClick={handleTransfer}>Transfer</button>
            </div>
            
        </form>
    )
}