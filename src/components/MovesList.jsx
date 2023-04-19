import { userService } from "../services/user.service"
import { MovesPreview } from "./MovesPreview"

export function MovesList({ contact, number, from }) {
    let user = userService.getUser()
    let movesToRender = null

    if(from === 'details') {
        movesToRender = user.moves.filter(move => move.to === contact.name)
        if(movesToRender.length === 0) movesToRender = null
    }

    if(from === 'home') {
        {user.moves.length > 3 ? movesToRender = user.moves.slice(0, 3) 
            : user.moves.length > 0 && user.moves.length < 3 ? movesToRender = user.moves.slice(0, user.moves.length) 
            : movesToRender = null}
    }

    return (
        <section>
            {movesToRender ?
                <section className="moves-container flex column auto-center">
                    <h3>{movesToRender.length} Move{movesToRender.length > 1 && 's'}:</h3> 
                    <section className="moves text-center">
                        {movesToRender.map(move =>
                            <MovesPreview key={move} move={move}/>
                        )}
                    </section>
                </section>
            : <h3>No Moves</h3>}
        </section>
    )
}

{/*<section className='moves-list'>
    {user.moves.length ? 
    <>
        <h3>{user.moves.length} Move{number > 1 && 's'}:</h3> 
        <section className="moves simple-cards-grid text-center">
            {user.moves.map(move =>
                <MovesPreview key={move} contact={contact} number={number}/>
            )}
        </section>
    </>
    : <h3>No Moves</h3>}
            </section>*/}


{/*        <section>
            {from === 'home' ?
                <>
                    {user.moves.length > 3 ?
                        <>
                            <h3>Your Last 3 Moves:</h3>
                            {user.moves.map(move =>
                                <MovesPreview key={move} contact={null} number={3}/>
                            )}
                        </>
                    : user.moves.length > 0 && user.moves.length < 3 ?
                        <>
                            <h3>Your Last {user.moves.length} Move{user.moves.length > 1 && 's'}:</h3>
                            {user.moves.map(move =>
                                <MovesPreview key={move} contact={null} number={user.moves.length}/>
                            )}
                        </>
                    : <h3>No Moves</h3>}
                </>
            : 
                <>
                    <h3>Your Moves:</h3>
                    {movesToRender.map(move =>
                        <MovesPreview key={move} move={move} contact={contact} number={null}/>
                    )}
                </>
            }
        </section> */}