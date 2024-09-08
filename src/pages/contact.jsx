import React from 'react'
import ShoppingHeader from '@/components/shopping-view/header'

const Contact = () => {
    return (
        <>
            <ShoppingHeader />
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
                <h1 className="text-5xl font-bold text-white mb-4 animate-bounce">Coming Soon</h1>
                <p className="text-lg text-white opacity-75">Stay tuned for exciting updates!</p>
            </div>
        </>
    )
}

export default Contact
