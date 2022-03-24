function Welcome(props){
    return (
        <div id="welcome" className="w-full h-screen px-24 py-14 bg-gradient-to-bl">
            {/* Header */}
            <header className="flex flex-row justify-between">
                <p className="text-xl font-bold">
                    {props.title}
                </p>
                <i className='bx bx-sun text-2xl'/>
            </header>
            {/* Section */}
            <section className="w-full h-4/5 mt-7 flex">
                {/* Greeting */}
                <div className="w-2/6 h-full flex flex-col place-content-end">
                    {props.greeting}
                    <h1 className="font-display font-semibold text-5xl my-4">
                        {props.job}
                    </h1>
                    {props.links}
                </div>
                {/* Image */}
                <div className="w-4/6 h-full border rounded-lg">
                    <img/>
                </div>
            </section>
        </div>
    )
}

export default Welcome;