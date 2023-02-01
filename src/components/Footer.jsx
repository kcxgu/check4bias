const Footer = () => {
    return (
        <div className="w-full mb-10 border-t border-lightGrey">
            <div className="w-full flex flex-row justify-evenly md:justify-between items-center pt-10">
                <p className="w-1/3 sm:w-full text-black text-center font-medium">
                    © Check4Bias 2023
                </p>
                <p className="w-3/5 sm:w-full">Got a suggestion or query? Contact us
                    <a href="https://forms.gle/TttFjTyVBEMg5cyL8"
                        className="underline decoration-blue decoration-4 underline-offset-4 px-1 hover:opacity-80"
                    >
                        via our contact form
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer