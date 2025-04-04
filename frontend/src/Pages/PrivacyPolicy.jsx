import React from 'react'
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy - Fica Ad Innovations",
        "url": "https://ficaads.com/privacypolicy",
        "description": "Learn about our privacy practices, how we handle your data, and our commitment to safeguarding your privacy at Fica Ad Innovations.",
        "publisher": {
            "@type": "Organization",
            "name": "Fica Ad Innovations",
            "url": "https://ficaads.com",
        }
    };
    return (
        <div className='mt-20 mb-8'>
            <Helmet>
                <title>Privacy Policy - Fica Ad Innovations</title>
                <meta
                    name="description"
                    content="Learn about our privacy practices, how we handle your data, and our commitment to safeguarding your privacy at Fica Ad Innovations."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-center text-6xl text-bold'>Privacy Policy</h1>
                <h1 className='mt-20 text-2xl text-bold '>We are committed to protecting your privacy</h1>
                <p className='mt-4 text-lg'>We collect the minimum amount of information about you that is commensurate with
                    providing you with satisfactory service. This policy indicates that type of processes that may result in
                    data being collected about you. Your use of this website gives us the right to
                    collect that information
                </p>
                <h1 className='mt-10 text-2xl text-bold '>Information Collected</h1>
                <p className='mt-4 text-lg'>We may collect any or all of the information that you give us depending on the type of transaction you enter into, including your name, address, telephone number, and email
                    address, together with data about your use of the website. Other information that may be needed from time to time to process
                    a request may also be collected as indicated on the website
                </p>
                <h1 className='mt-10 text-2xl text-bold '> Information Use</h1>
                <p className='mt-4 text-lg'>We use the information collected primarily to process the task for which you visited the website. Data collected in india is held in accordance with the Data Protection Act. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require
                    you to provide additional forms of identity should you wish to obtain information about your account details.
                </p>
                <h1 className='mt-10 text-2xl text-bold '>Cookies</h1>
                <p className='mt-4 text-lg'>
                    Your internet browser has the in-built facility for storing small files - "cookies" - that hold
                    information which allows a website to recognise your account. Our website takes advantages of this facility to enhance your experience. You Have
                    the ability to prevent your computer from accepting cookies but, if you do, certain functionality on the website may be impaired
                </p>

                <h1 className='mt-10 text-2xl text-bold '>
                    Disclosing Information
                </h1>
                <p className='mt-4 text-lg'>We do not disclose any personal information obtained about you from this website to third
                    parties unless you permit us to do so by ticking the relevant boxes in registration or competition forms. We may also use the information to keep in Contact
                    with you and inform you of developments associated with us. You will be give the opportunity to remove yourself from any mailing list or similar device. If at any time in the future we should wish to disclose information
                    collected on this website to any third party, it would only be with your knowledge and consent.
                    We may from time to time provide information of a general nature to third parties - for example, the number of individuals visiting our website or
                    completing a registration from, but we will not use any information that could identity those individuals.
                    In addition Dummy may work with third parties for the purpose of delivering targeted behavioural advertising to the Dummy website.
                    Through the use of cookies, anonymous information about your use of our websites and other websites will be used to provide more
                    relevant adverts about goods and services of interest to you.
                </p>

                <h1 className='mt-10 text-2xl text-bold '>Changes to this Policy</h1>
                <p className='mt-4 text-lg'>Any changes to our Privacy Policy will be placed here and will supersed this version of our policy. We
                    will take reasonable steps to draw your attention to any changes in our policy.
                    However, to be on the safe side, we suggest that you read this document each time you use the website to ensure that it still meets with your approval
                </p>

                <h1 className='mt-10 text-2xl text-bold '>Contacting Us</h1>
                <p className='mt-4 text-lg'>If you have any questions about our Privacy Policy, or if you want to know what information
                    we have collected about you, please email us at hello@ficaads.com you can also correct any factual errors in that information or require us to remove your details form any list under our control.
                </p>

            </div>
        </div>
    )
}

export default PrivacyPolicy