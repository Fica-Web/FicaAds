
export const FormHeading = ({ icon: Icon, heading }) => {
    return (
        <div className='flex items-center gap-2 text-neutral-800 text-base mb-5'>
            <Icon />
            <h3>
                { heading }
            </h3>
        </div>
    )
}