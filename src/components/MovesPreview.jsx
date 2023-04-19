export function MovesPreview({ move }) {
    return (
        <section className='moves-preview clean-list auto-center'>
            <li className='auto-center'>
                <div>To: {move.to}</div>
                <div>At: {new Date(move.at).toLocaleString('en-GB')}</div>
                <div>Amount: {move.amount}</div>
            </li>
        </section>
    )
}