import React from 'react'

function Footer() {
    const getYear = () => {
        let date = new Date();
        return date.getFullYear()
    }
    return (
    <footer className="py-5 text-white text-center mt-5">
      <p>&copy; <img src='https://res.cloudinary.com/moversng/image/upload/v1598887746/easycrmx2_kqmi0r.svg' alt='logo' className='logo'/> {getYear()}. All Rights Reserved.</p>
    </footer>
    )
}

export default Footer
