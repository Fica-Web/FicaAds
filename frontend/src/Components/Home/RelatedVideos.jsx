import React from 'react'

const RelatedVideos = () => {
    return (
        <div className='w-11/12 mx-auto my-20 lg:my-27'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl uppercase font-Switzer-Medium mb-12 text-center'>
                Related Videos
            </h2>
            <div className='flex justify-center'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WjlRH7Uanm4?si=8OkkHimuw-CTXBkH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WjlRH7Uanm4?si=8OkkHimuw-CTXBkH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WjlRH7Uanm4?si=8OkkHimuw-CTXBkH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WjlRH7Uanm4?si=8OkkHimuw-CTXBkH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default RelatedVideos
