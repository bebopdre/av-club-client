import './HomePage.scss';

function HomePage() {
    return (
        <main className='home'>

            <section className='home__left'>

                <h1 className='neon-text'>
                    TH
                    <span className='neon-text__flicker-fast'>
                        E 
                    </span>
                    AV 
                    <span className='neon-text__flicker-slow'>
                        CL 
                    </span>
                    UB
                </h1>

                <div className='home__card'>
                    <h2 className='home__card-heading'>
                        Pick a Mode:
                    </h2>

                    <button className='home__card-button'>SINGLE PLAYER</button>
                    <button className='home__card-button'>TWO PLAYER BATTLE</button>
                </div>

            </section>

            <div className='home__mp3-player'></div>
            
        </main>
    )
}

export default HomePage;